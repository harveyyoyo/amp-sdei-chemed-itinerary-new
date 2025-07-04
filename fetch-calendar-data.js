import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

// Google Calendar configuration from your app
const API_KEY = 'AIzaSyCYaN-4ZaDF_HnJxhklQaSEtgC6o4qqiqs';
const CALENDAR_ID = '6138a69dd5ffb10cb29d68d4be82a6c18487156ec0e10e2d51d752d6eb3fb2ad@group.calendar.google.com';

// Date range for the camp
const startDate = '2025-07-07';
const endDate = '2025-08-18';

function formatDate(date) {
  if (!date) return '';
  const d = new Date(date);
  return d.toISOString().split('T')[0];
}

function generateTypeScriptFile(events) {
  const eventsArray = events.map(event => {
    const isMultiDay = event.isMultiDay ? 'true' : 'false';
    const endDateStr = event.endDate ? `,\n    endDate: new Date(${event.endDate.getFullYear()}, ${event.endDate.getMonth()}, ${event.endDate.getDate()})` : '';
    return `  {\n    id: '${event.id}',\n    title: ${JSON.stringify(event.title)},\n    date: '${formatDate(event.fullDate)}',\n    fullDate: new Date(${event.fullDate.getFullYear()}, ${event.fullDate.getMonth()}, ${event.fullDate.getDate()}),\n    type: '${event.type}',\n    isMultiDay: ${isMultiDay}${endDateStr}\n  }`;
  }).join(',\n');

  return `export interface ItineraryItem {
  id: string;
  title: string;
  date: string;
  fullDate: Date;
  type: 'spiritual' | 'adventure' | 'educational' | 'leisure' | 'travel' | 'cultural';
  isMultiDay?: boolean;
  endDate?: Date;
}

export const itineraryData: ItineraryItem[] = [
${eventsArray}
];
`;
}

async function fetchCalendarEvents() {
  try {
    console.log('🔄 Syncing calendar data from Google Calendar...');
    
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${startDate}T00:00:00Z&timeMax=${endDate}T23:59:59Z&singleEvents=true&orderBy=startTime`;
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Error fetching calendar:', response.status, errorText);
      return false;
    }

    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      console.log('⚠️ No events found in the specified date range.');
      return false;
    }

    // Map Google Calendar colorId to type
    const colorToTypeMap = {
      '1': 'spiritual',
      '2': 'adventure',
      '3': 'educational',
      '4': 'leisure',
      '5': 'travel',
      '6': 'cultural',
      '7': 'spiritual',
      '8': 'adventure',
      '9': 'educational',
      '10': 'leisure',
      '11': 'travel',
    };
    const DEFAULT_TYPE = 'leisure';
    
    const events = data.items.map(event => {
      // Parse start and end dates
      let startDateObj, endDateObj;
      if (event.start.dateTime) {
        startDateObj = new Date(event.start.dateTime);
      } else {
        const [y, m, d] = event.start.date.split('-').map(Number);
        startDateObj = new Date(y, m - 1, d);
      }
      if (event.end.dateTime) {
        endDateObj = new Date(event.end.dateTime);
      } else {
        const [y, m, d] = event.end.date.split('-').map(Number);
        endDateObj = new Date(y, m - 1, d);
      }
      
      // Multi-day event check (Google Calendar end date is exclusive)
      const isMultiDay = (endDateObj - startDateObj) / (1000 * 60 * 60 * 24) > 1;
      let adjustedEndDate = undefined;
      if (isMultiDay) {
        adjustedEndDate = new Date(endDateObj);
        adjustedEndDate.setDate(adjustedEndDate.getDate() - 1);
      }
      
      return {
        id: event.id || event.summary + '-' + formatDate(startDateObj),
        title: event.summary || '',
        date: formatDate(startDateObj),
        fullDate: startDateObj,
        type: colorToTypeMap[event.colorId] || DEFAULT_TYPE,
        isMultiDay,
        endDate: adjustedEndDate
      };
    });

    // Generate the TypeScript file content
    const fileContent = generateTypeScriptFile(events);
    
    // Write to the itineraryData.ts file
    const filePath = path.join(process.cwd(), 'src', 'data', 'itineraryData.ts');
    fs.writeFileSync(filePath, fileContent, 'utf8');
    
    console.log(`✅ Successfully synced ${events.length} events to local backup!`);
    console.log(`📁 Updated: ${filePath}`);
    console.log('🔄 Please refresh your browser to see the updated calendar.');
    
    return true;
  } catch (error) {
    console.error('❌ Error syncing calendar:', error.message);
    return false;
  }
}

// Run the sync
fetchCalendarEvents(); 
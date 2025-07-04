import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ItineraryItem } from '@/data/itineraryData';
import { 
  Heart, 
  Mountain, 
  GraduationCap, 
  Coffee, 
  Plane, 
  Palette,
  Edit3,
  Download,
  MapPin,
  Clock,
  Users,
  Calendar as CalendarIcon
} from 'lucide-react';
import { getEventEmoji } from '@/utils/emojiUtils';
import { getActivityDescription } from '@/utils/activityDescriptions';
import {
  TooltipProvider,
  // Tooltip,
  // TooltipTrigger,
  // TooltipContent,
} from "@/components/ui/tooltip";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

interface CalendarViewProps {
  items: ItineraryItem[];
  onUpdateItem: (id: string, updates: Partial<ItineraryItem>) => void;
}

export const CalendarView = ({ items, onUpdateItem }: CalendarViewProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [clickedActivity, setClickedActivity] = useState<ItineraryItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const activityTypes = [
    { value: 'spiritual', label: 'Spiritual', icon: Heart },
    { value: 'adventure', label: 'Adventure', icon: Mountain },
    { value: 'educational', label: 'Educational', icon: GraduationCap },
    { value: 'leisure', label: 'Leisure', icon: Coffee },
    { value: 'travel', label: 'Travel', icon: Plane },
    { value: 'cultural', label: 'Cultural', icon: Palette }
  ];

  // Helper function to normalize dates for comparison
  const normalizeDate = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  // Filter out "9 days" events
  const filteredItems = items.filter(item => {
    // Debug: Log items to see their structure
    console.log('Processing item:', {
      id: item.id,
      title: item.title,
      hasTitle: !!item.title,
      titleType: typeof item.title,
      type: item.type,
      date: item.date
    });

    // Check if title is missing or not a string
    if (!item.title) {
      console.error('Item missing title:', item);
      return false; // Skip items without titles
    }

    if (typeof item.title !== 'string') {
      console.error('Item title is not a string:', item);
      return false; // Skip items with invalid title types
    }

    return !item.title.toLowerCase().includes('9 days');
  });

  const getTypeColor = (type: string) => {
    const colors = {
      spiritual: 'bg-cyan-100 text-cyan-900 border-cyan-300',
      adventure: 'bg-lime-100 text-lime-900 border-lime-300',
      educational: 'bg-sky-100 text-sky-900 border-sky-300',
      leisure: 'bg-pink-100 text-pink-900 border-pink-300',
      travel: 'bg-yellow-100 text-yellow-900 border-yellow-300',
      cultural: 'bg-purple-100 text-purple-900 border-purple-300'
    };
    return colors[type as keyof typeof colors] || colors.cultural;
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      spiritual: Heart,
      adventure: Mountain,
      educational: GraduationCap,
      leisure: Coffee,
      travel: Plane,
      cultural: Palette
    };
    const IconComponent = icons[type as keyof typeof icons] || Palette;
    return <IconComponent className="w-2 h-2" />;
  };

  const getMultiDayBackgroundColor = (eventTitle: string) => {
    const titleLower = (eventTitle || '').toLowerCase();
    
    // Multi-day event backgrounds: vibrant green, blue, maroon
    if (titleLower.includes('tzfat') || titleLower.includes('tzfas')) {
      return 'bg-gradient-to-br from-emerald-200 to-green-300 border-emerald-400';
    }
    if (titleLower.includes('shabbos')) {
      return 'bg-gradient-to-br from-rose-200 to-red-300 border-rose-400';
    }
    if (titleLower.includes('north overnight') || titleLower.includes('yurts')) {
      return 'bg-gradient-to-br from-lime-200 to-green-300 border-lime-400';
    }
    if (titleLower.includes('old city')) {
      return 'bg-gradient-to-br from-indigo-200 to-blue-300 border-indigo-400';
    }
    if (titleLower.includes('eilat')) {
      return 'bg-gradient-to-br from-teal-200 to-cyan-300 border-teal-400';
    }
    if (titleLower.includes('off shabbos')) {
      return 'bg-gradient-to-br from-pink-200 to-rose-300 border-pink-400';
    }
    
    // Rotate between vibrant colors for other multi-day events
    const colors = [
      'bg-gradient-to-br from-emerald-200 to-green-300 border-emerald-400',
      'bg-gradient-to-br from-sky-200 to-blue-300 border-sky-400',
      'bg-gradient-to-br from-rose-200 to-red-300 border-rose-400',
    ];
    
    const hash = eventTitle.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  const getMultiDayInvertedColors = (eventTitle: string) => {
    const titleLower = (eventTitle || '').toLowerCase();
    
    // Inverted colors for multi-day events based on their background
    if (titleLower.includes('tzfat') || titleLower.includes('tzfas')) {
      return 'bg-emerald-800 text-white border-emerald-600';
    }
    if (titleLower.includes('shabbos')) {
      return 'bg-rose-800 text-white border-rose-600';
    }
    if (titleLower.includes('north overnight') || titleLower.includes('yurts')) {
      return 'bg-lime-800 text-white border-lime-600';
    }
    if (titleLower.includes('old city')) {
      return 'bg-indigo-800 text-white border-indigo-600';
    }
    if (titleLower.includes('eilat')) {
      return 'bg-teal-800 text-white border-teal-600';
    }
    if (titleLower.includes('off shabbos')) {
      return 'bg-pink-800 text-white border-pink-600';
    }
    
    // Default inverted colors for other multi-day events
    return 'bg-gray-800 text-white border-gray-600';
  };

  const getMultiDayBadgeColors = (eventTitle: string) => {
    const titleLower = (eventTitle || '').toLowerCase();
    
    // Inverted badge colors for multi-day events
    if (titleLower.includes('tzfat') || titleLower.includes('tzfas')) {
      return 'bg-emerald-700 text-white border-emerald-500';
    }
    if (titleLower.includes('shabbos')) {
      return 'bg-rose-700 text-white border-rose-500';
    }
    if (titleLower.includes('north overnight') || titleLower.includes('yurts')) {
      return 'bg-lime-700 text-white border-lime-500';
    }
    if (titleLower.includes('old city')) {
      return 'bg-indigo-700 text-white border-indigo-500';
    }
    if (titleLower.includes('eilat')) {
      return 'bg-teal-700 text-white border-teal-600';
    }
    if (titleLower.includes('off shabbos')) {
      return 'bg-pink-700 text-white border-pink-500';
    }
    
    // Default inverted badge colors
    return 'bg-gray-700 text-white border-gray-500';
  };

  const getActivitiesForDay = (targetDate: Date) => {
    const normalizedTargetDate = normalizeDate(targetDate);
    
    return filteredItems.filter(item => {
      const itemStartDate = normalizeDate(item.fullDate);
      
      // For single-day events, check exact date match
      if (!item.isMultiDay || !item.endDate) {
        return itemStartDate.getTime() === normalizedTargetDate.getTime();
      }
      
      // For multi-day events, check if target date falls within the inclusive range
      const itemEndDate = normalizeDate(item.endDate);
      
      // Check if target date is between start and end dates (inclusive)
      return normalizedTargetDate >= itemStartDate && normalizedTargetDate <= itemEndDate;
    });
  };

  // Helper function to check if a day is the start of a multi-day event
  const isMultiDayEventStart = (targetDate: Date, event: ItineraryItem) => {
    if (!event.isMultiDay || !event.endDate) return false;
    const normalizedTargetDate = normalizeDate(targetDate);
    const itemStartDate = normalizeDate(event.fullDate);
    return normalizedTargetDate.getTime() === itemStartDate.getTime();
  };

  // Helper function to check if a day is the end of a multi-day event
  const isMultiDayEventEnd = (targetDate: Date, event: ItineraryItem) => {
    if (!event.isMultiDay || !event.endDate) return false;
    const normalizedTargetDate = normalizeDate(targetDate);
    const itemEndDate = normalizeDate(event.endDate);
    return normalizedTargetDate.getTime() === itemEndDate.getTime();
  };

  const generateCalendarDays = () => {
    // Use local dates to avoid timezone issues - this ensures July 7 starts on July 7 in all timezones
    const startDate = new Date(2025, 6, 7); // July 7, 2025 (month is 0-indexed)
    const endDate = new Date(2025, 7, 18); // August 18, 2025 (month is 0-indexed)
    const days = [];
    
    // Add empty cells to align the first day with correct day of week
    const firstDayOfWeek = startDate.getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days from start to end
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return days;
  };

  const getPrimaryEmojiForDay = (targetDate: Date) => {
    const activities = getActivitiesForDay(targetDate);
    if (activities.length === 0) return null;
    
    // Prioritize multi-day events first
    const multiDayEvent = activities.find(activity => activity.isMultiDay);
    if (multiDayEvent) {
      return getEventEmoji(multiDayEvent.title, multiDayEvent.type);
    }
    
    // Otherwise use the first regular activity
    const regularActivity = activities.find(activity => !activity.isMultiDay);
    if (regularActivity) {
      return getEventEmoji(regularActivity.title, regularActivity.type);
    }
    
    return null;
  };

  const generatePDF = () => {
    // Create a new window for printing with better styling
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to print the calendar');
      return;
    }

    // Get the current calendar data
    const calendarHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Camp Sdei Chemed - Summer Itinerary Calendar</title>
          <style>
            @page {
              size: A4 landscape;
              margin: 0.25in;
            }
            
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background: white;
              font-size: 8px;
              line-height: 1.1;
            }
            
            .header {
              text-align: center;
              margin-bottom: 10px;
              border-bottom: 2px solid #1e40af;
              padding-bottom: 5px;
            }
            
            .logo {
              height: 40px;
              margin-bottom: 5px;
            }
            
            .title {
              font-size: 18px;
              font-weight: bold;
              color: #1e40af;
              margin: 2px 0;
            }
            
            .subtitle {
              font-size: 12px;
              color: #2563eb;
              font-weight: bold;
              margin: 2px 0;
            }
            
            .date-range {
              font-size: 10px;
              color: #6b7280;
            }
            
            .calendar-container {
              display: grid;
              grid-template-columns: repeat(7, 1fr);
              border: 1px solid #333;
              background: white;
            }
            
            .calendar-header {
              display: contents;
            }
            
            .calendar-header > div {
              padding: 4px 2px;
              background: linear-gradient(to right, #2563eb, #7c3aed);
              color: white;
              font-weight: bold;
              text-align: center;
              font-size: 9px;
              border-right: 1px solid #1e40af;
              border-bottom: 1px solid #333;
            }
            
            .calendar-header > div:last-child {
              border-right: none;
            }
            
            .calendar-grid {
              display: contents;
            }
            
            .calendar-day {
              min-height: 60px;
              border-right: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
              padding: 2px;
              position: relative;
              background: white;
            }
            
            .calendar-day:nth-child(7n) {
              border-right: none;
            }
            
            .calendar-day.empty {
              background: #f3f4f6;
            }
            
            .calendar-day.weekend {
              background: #fef3c7;
            }
            
            .date-number {
              font-size: 11px;
              font-weight: bold;
              text-align: center;
              margin-bottom: 2px;
              color: #1f2937;
            }
            
            .date-number.weekend {
              color: #1e40af;
            }
            
            .month-label {
              font-size: 6px;
              background: #dbeafe;
              color: #1e40af;
              padding: 1px 2px;
              border-radius: 2px;
              margin-left: 1px;
            }
            
            .activity {
              font-size: 6px;
              padding: 1px 2px;
              margin: 0.5px 0;
              border-radius: 2px;
              border: 1px solid #ccc;
              display: flex;
              align-items: center;
              gap: 1px;
              line-height: 1.0;
              position: relative;
              cursor: help;
            }
            
            .activity:hover::after {
              content: attr(data-title);
              position: absolute;
              bottom: 100%;
              left: 50%;
              transform: translateX(-50%);
              background: rgba(0, 0, 0, 0.9);
              color: white;
              padding: 4px 8px;
              border-radius: 4px;
              font-size: 10px;
              white-space: nowrap;
              z-index: 9999;
              pointer-events: none;
              margin-bottom: 4px;
            }
            
            .activity:hover::before {
              content: '';
              position: absolute;
              bottom: 100%;
              left: 50%;
              transform: translateX(-50%);
              border: 4px solid transparent;
              border-top-color: rgba(0, 0, 0, 0.9);
              z-index: 9999;
              pointer-events: none;
              margin-bottom: 0;
            }
            
            .activity-emoji {
              font-size: 8px;
              flex-shrink: 0;
            }
            
            .activity-title {
              font-weight: bold;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            
            .activity.spiritual { background: #e9d5ff; color: #6b21a8; border-color: #c084fc; }
            .activity.adventure { background: #bbf7d0; color: #166534; border-color: #86efac; }
            .activity.educational { background: #bfdbfe; color: #1e40af; border-color: #93c5fd; }
            .activity.leisure { background: #fed7aa; color: #9a3412; border-color: #fdba74; }
            .activity.travel { background: #c7d2fe; color: #3730a3; border-color: #a5b4fc; }
            .activity.cultural { background: #fbcfe8; color: #9d174d; border-color: #f9a8d4; }
            
            .multiday {
              background: linear-gradient(135deg, #10b981, #059669) !important;
              color: white !important;
              border-color: #047857 !important;
            }
            
            .multiday-tzfat { background: linear-gradient(135deg, #10b981, #059669) !important; color: white !important; }
            .multiday-shabbos { background: linear-gradient(135deg, #f43f5e, #e11d48) !important; color: white !important; }
            .multiday-north { background: linear-gradient(135deg, #84cc16, #65a30d) !important; color: white !important; }
            .multiday-oldcity { background: linear-gradient(135deg, #6366f1, #4f46e5) !important; color: white !important; }
            .multiday-eilat { background: linear-gradient(135deg, #14b8a6, #0d9488) !important; color: white !important; }
            .multiday-offshabbos { background: linear-gradient(135deg, #ec4899, #db2777) !important; color: white !important; }
            
            @media print {
              body { margin: 0; }
              .calendar-grid { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <img src="https://campsdeichemed.com/wp-content/uploads/2022/09/sdei-chemed-logo-3.png" alt="Camp Sdei Chemed Logo" class="logo">
            <div class="title">Camp Sdei Chemed - Boys 2025</div>
            <div class="subtitle">Summer Itinerary Calendar</div>
            <div class="date-range">July 7 - August 18, 2025</div>
          </div>
          
          <div class="calendar-container">
            <div class="calendar-header">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            
            ${calendarDays.map((day, index) => {
              if (!day) {
                return '<div class="calendar-day empty"></div>';
              }
              
              const activities = getActivitiesForDay(day);
              const mobileDayOfWeek = day.getDay();
              const isWeekend = mobileDayOfWeek === 0 || mobileDayOfWeek === 6;
              const isMultiDay = activities.some(activity => activity.isMultiDay);
              const multiDayEvent = activities.find(activity => activity.isMultiDay);
              
              // Check if this is a "9 days" event
              const isNineDays = multiDayEvent && (multiDayEvent.title || '').toLowerCase().includes('9 days');
              const shouldApplyMultiDayBackground = isMultiDay && multiDayEvent && !isNineDays;
              
              let multiDayClass = '';
              if (shouldApplyMultiDayBackground) {
                const titleLower = (multiDayEvent?.title || '').toLowerCase();
                if (titleLower.includes('tzfat') || titleLower.includes('tzfas')) multiDayClass = 'multiday-tzfat';
                else if (titleLower.includes('shabbos')) multiDayClass = 'multiday-shabbos';
                else if (titleLower.includes('north overnight') || titleLower.includes('yurts')) multiDayClass = 'multiday-north';
                else if (titleLower.includes('old city')) multiDayClass = 'multiday-oldcity';
                else if (titleLower.includes('eilat')) multiDayClass = 'multiday-eilat';
                else if (titleLower.includes('off shabbos')) multiDayClass = 'multiday-offshabbos';
                else multiDayClass = 'multiday';
              }
              
              return `
                <div class="calendar-day ${isWeekend ? 'weekend' : ''} ${multiDayClass}">
                  <div class="date-number ${isWeekend ? 'weekend' : ''}">
                    ${day.getDate()}
                    ${day.getDate() === 7 && day.getMonth() === 6 ? '<span class="month-label">Jul</span>' : ''}
                    ${day.getDate() === 1 && day.getMonth() === 7 ? '<span class="month-label">Aug</span>' : ''}
                  </div>
                  ${activities
                    .sort((a, b) => {
                      if (a.isMultiDay && !b.isMultiDay) return -1;
                      if (!a.isMultiDay && b.isMultiDay) return 1;
                      return 0;
                    })
                    .map(activity => {
                      const emoji = getEventEmoji(activity.title, activity.type);
                      const activityClass = activity.isMultiDay ? 'multiday' : `activity ${activity.type}`;
                      return `
                        <div class="${activityClass}" data-title="${activity.title}">
                          <span class="activity-emoji">${emoji}</span>
                          <span class="activity-title">${activity.title}</span>
                        </div>
                      `;
                    }).join('')}
                </div>
              `;
            }).join('')}
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(calendarHTML);
    printWindow.document.close();
    
    // Wait for content to load, then print
    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };
  };

  const calendarDays = generateCalendarDays();
  const today = new Date();
  const normalizedToday = normalizeDate(today);

  // Mobile List View Component
  const MobileListView = () => {
    const groupedByMonth = () => {
      const groups: Record<string, { date: Date; activities: ItineraryItem[] }[]> = {};
      
      calendarDays.forEach(day => {
        if (!day) return;
        
        const monthYear = day.toLocaleDateString('en-US', { 
          month: 'long', 
          year: 'numeric' 
        });
        
        if (!groups[monthYear]) {
          groups[monthYear] = [];
        }
        
        const activities = getActivitiesForDay(day);
        if (activities.length > 0) {
          groups[monthYear].push({ date: day, activities });
        }
      });
      
      return groups;
    };

    return (
      <div className="space-y-6">
        {Object.entries(groupedByMonth()).map(([monthYear, days]) => (
          <div key={monthYear}>
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center border-b-2 border-blue-200 pb-2">
              {monthYear}
            </h2>
            <div className="space-y-3">
              {days.map(({ date, activities }) => {
                const isToday = normalizeDate(date).getTime() === normalizedToday.getTime();
                const mobileDayOfWeek = date.getDay();
                const isWeekend = mobileDayOfWeek === 0 || mobileDayOfWeek === 6;
                
                return (
                  <Card 
                    key={date.toISOString()} 
                    className={`${isToday ? 'ring-2 ring-blue-400 shadow-lg' : ''} ${
                      isWeekend ? 'bg-pink-50' : 'bg-white'
                    }`}
                  >
                    <CardContent className="p-4">
                      {/* Date Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`text-2xl font-bold ${
                            isToday ? 'text-blue-700' : isWeekend ? 'text-blue-700' : 'text-gray-800'
                          }`}>
                            {date.getDate()}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-600">
                              {date.toLocaleDateString('en-US', { weekday: 'short' })}
                            </div>
                            <div className="text-xs text-gray-500">
                              {date.toLocaleDateString('en-US', { month: 'short' })}
                            </div>
                          </div>
                        </div>
                        {isToday && (
                          <Badge className="bg-blue-100 text-blue-800">Today</Badge>
                        )}
                      </div>
                      
                      {/* Activities */}
                      <div className="space-y-1">
                        {activities
                          .sort((a, b) => {
                            if (a.isMultiDay && !b.isMultiDay) return -1;
                            if (!a.isMultiDay && b.isMultiDay) return 1;
                            return 0;
                          })
                          .map(activity => (
                          <HoverCard key={activity.id}>
                            <HoverCardTrigger asChild>
                          <div
                                className={`p-2 rounded border flex items-center gap-2 cursor-help hover:scale-105 transition-transform duration-200 hover:shadow-lg ${
                              activity.isMultiDay 
                                ? getMultiDayInvertedColors(activity.title)
                                : `${getTypeColor(activity.type)} bg-white/90 backdrop-blur-sm shadow-sm`
                            }`}
                          >
                            <span className="text-lg flex-shrink-0">
                              {getEventEmoji(activity.title, activity.type)}
                            </span>
                            <div className="flex-1">
                              <div className="font-semibold text-sm">
                                {activity.title}
                              </div>
                              <div className="flex items-center gap-1 mt-0.5">
                                {activity.isMultiDay && (
                                  <Badge variant="outline" className="text-xs">
                                    Multi-day
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                            </HoverCardTrigger>
                            <HoverCardContent
                              className="px-4 py-3 rounded-xl border-2 border-white/80 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl backdrop-blur-md transition-all duration-200 animate-in fade-in zoom-in-95"
                              style={{ 
                                width: '500px', 
                                maxWidth: '500px',
                                zIndex: 9999,
                                pointerEvents: 'auto'
                              }}
                            >
                              {/* Arrow */}
                              <div
                                style={{
                                  position: 'absolute',
                                  left: '50%',
                                  bottom: '-10px',
                                  transform: 'translateX(-50%)',
                                  width: 0,
                                  height: 0,
                                  borderLeft: '10px solid transparent',
                                  borderRight: '10px solid transparent',
                                  borderTop: '10px solid rgba(255,255,255,0.8)',
                                  zIndex: 10000,
                                }}
                              />
                              <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">
                                    {getEventEmoji(activity.title, activity.type)}
                                  </span>
                                  <div className="font-extrabold text-white text-base leading-tight">
                                    {activity.title}
                                  </div>
                                </div>
                                
                                {/* Description */}
                                <div className="text-xs text-gray-200 leading-relaxed">
                                  {getActivityDescription(activity)}
                                </div>
                                
                                <div className="flex items-center gap-2 flex-wrap">
                                  {activity.isMultiDay && (
                                    <Badge variant="secondary" className="text-xs bg-purple-600 hover:bg-purple-700 text-white border-purple-500 px-2 py-0.5 rounded-full">
                                      Multi-day
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Mobile Calendar View Component (Emoji-only with tooltips)
  const MobileCalendarView = () => (
    <Card className="overflow-hidden shadow-lg border-2 border-gray-300 print:shadow-none print:border print:border-gray-400">
      <CardContent className="p-0">
        {/* Enhanced Header Row */}
        <div className="grid grid-cols-7 bg-gradient-to-r from-blue-600 to-purple-600 border-b-2 border-blue-700 print:bg-blue-600">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={day} className={`p-1 sm:p-3 text-center text-xs sm:text-sm font-bold text-white border-r border-blue-500 last:border-r-0 print:p-2 print:text-xs ${
              index === 5 ? 'bg-blue-700' : index === 6 ? 'bg-purple-700' : ''
            }`}>
              {day}
            </div>
          ))}
        </div>

        {/* Mobile Calendar Grid - Emoji Only */}
        <div className="grid grid-cols-7 relative">
          {calendarDays.map((day, index) => {
            const activities = day ? getActivitiesForDay(day) : [];
            const isToday = day && normalizeDate(day).getTime() === normalizedToday.getTime();
            const isMultiDay = activities.some(activity => activity.isMultiDay);
            const multiDayEvent = activities.find(activity => activity.isMultiDay);
            const primaryEmoji = day ? getPrimaryEmojiForDay(day) : null;
            
            const regularActivities = activities.filter(activity => !activity.isMultiDay);
            const mobileDayOfWeek = day ? day.getDay() : 0;
            const isWeekend = mobileDayOfWeek === 0 || mobileDayOfWeek === 6;
            
            // Check if this is a "9 days" event - if so, don't apply multi-day background
            const isNineDays = multiDayEvent && (multiDayEvent.title || '').toLowerCase().includes('9 days');
            const shouldApplyMultiDayBackground = isMultiDay && multiDayEvent && !isNineDays;
            
            return (
              <div
                key={index}
                className={`min-h-[60px] sm:min-h-[140px] p-1 sm:p-3 border-r border-b border-gray-400 last:border-r-0 flex flex-col relative overflow-hidden print:min-h-[120px] print:p-2 ${
                  day ? (isWeekend ? 'bg-pink-50' : 'bg-white') : 'bg-gray-100'
                } ${isToday ? 'ring-2 ring-blue-400 ring-offset-1 sm:ring-offset-2 print:ring-1 print:ring-blue-600' : ''} ${
                  shouldApplyMultiDayBackground ? getMultiDayBackgroundColor(multiDayEvent.title) : ''
                }`}
              >
                {day && (
                  <>
                    {/* Enhanced Date Display */}
                    <div className={`text-sm sm:text-lg font-bold mb-1 sm:mb-3 relative z-10 text-center print:text-base print:mb-2 ${
                      isToday ? 'text-blue-700' : isWeekend ? 'text-blue-700' : 'text-gray-800'
                    }`}>
                      <div className="flex items-center justify-center gap-1">
                        <span>{day.getDate()}</span>
                        {day.getDate() === 7 && day.getMonth() === 6 && (
                          <span className="text-xs text-blue-600 font-bold bg-blue-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded-full print:text-xs print:px-1 print:py-0.5">Jul</span>
                        )}
                        {day.getDate() === 1 && day.getMonth() === 7 && (
                          <span className="text-xs text-blue-600 font-bold bg-blue-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded-full print:text-xs print:px-1 print:py-0.5">Aug</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Mobile: Emoji-only Activities with Click Handler */}
                    <div className="flex flex-wrap gap-1 justify-center items-center flex-1 relative z-10">
                      {activities
                        .sort((a, b) => {
                          // Multi-day events first, then by type
                          if (a.isMultiDay && !b.isMultiDay) return -1;
                          if (!a.isMultiDay && b.isMultiDay) return 1;
                          return 0;
                        })
                        .map(activity => (
                          <div
                            key={activity.id}
                            onClick={() => handleActivityClick(activity)}
                            className={`text-lg sm:text-xl p-1 rounded cursor-pointer transition-all hover:scale-110 active:scale-95 ${
                              activity.isMultiDay 
                                ? 'bg-black/20 text-white'
                                : 'bg-white/80 shadow-sm'
                            }`}
                          >
                            {getEventEmoji(activity.title, activity.type)}
                          </div>
                        ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );

  // Desktop Grid View Component
  const DesktopGridView = () => (
    <Card className="overflow-hidden shadow-lg border-2 border-gray-300 print:shadow-none print:border print:border-gray-400">
      <CardContent className="p-0">
        {/* Enhanced Header Row */}
        <div className="grid grid-cols-7 bg-gradient-to-r from-blue-600 to-purple-600 border-b-2 border-blue-700 print:bg-blue-600">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={day} className={`p-3 text-center text-sm font-bold text-white border-r border-blue-500 last:border-r-0 print:p-2 print:text-xs ${
              index === 5 ? 'bg-blue-700' : index === 6 ? 'bg-purple-700' : ''
            }`}>
              {day}
            </div>
          ))}
        </div>

        {/* Enhanced Calendar Grid */}
        <div className="grid grid-cols-7 relative">
          {calendarDays.map((day, index) => {
            const activities = day ? getActivitiesForDay(day) : [];
            const isToday = day && normalizeDate(day).getTime() === normalizedToday.getTime();
            const isMultiDay = activities.some(activity => activity.isMultiDay);
            const multiDayEvent = activities.find(activity => activity.isMultiDay);
            const primaryEmoji = day ? getPrimaryEmojiForDay(day) : null;
            
            const regularActivities = activities.filter(activity => !activity.isMultiDay);
            const mobileDayOfWeek = day ? day.getDay() : 0;
            const isWeekend = mobileDayOfWeek === 0 || mobileDayOfWeek === 6;
            
            // Check if this is a "9 days" event - if so, don't apply multi-day background
            const isNineDays = multiDayEvent && (multiDayEvent.title || '').toLowerCase().includes('9 days');
            const shouldApplyMultiDayBackground = isMultiDay && multiDayEvent && !isNineDays;
            
            return (
              <div
                key={index}
                className={`min-h-[140px] p-3 border-r border-b border-gray-400 last:border-r-0 flex flex-col relative overflow-hidden print:min-h-[120px] print:p-2 ${
                  day ? (isWeekend ? 'bg-pink-50' : 'bg-white') : 'bg-gray-100'
                } ${isToday ? 'ring-2 ring-blue-400 ring-offset-2 print:ring-1 print:ring-blue-600' : ''} ${
                  shouldApplyMultiDayBackground ? getMultiDayBackgroundColor(multiDayEvent.title) : ''
                }`}
              >
                {day && (
                  <>
                    {/* Enhanced Date Display */}
                    <div className={`text-lg font-bold mb-3 relative z-10 text-center print:text-base print:mb-2 ${
                      isToday ? 'text-blue-700' : isWeekend ? 'text-blue-700' : 'text-gray-800'
                    }`}>
                      <div className="flex items-center justify-center gap-1">
                        <span>{day.getDate()}</span>
                        {day.getDate() === 7 && day.getMonth() === 6 && (
                          <span className="text-xs text-blue-600 font-bold bg-blue-100 px-2 py-1 rounded-full print:text-xs print:px-1 print:py-0.5">Jul</span>
                        )}
                        {day.getDate() === 1 && day.getMonth() === 7 && (
                          <span className="text-xs text-blue-600 font-bold bg-blue-100 px-2 py-1 rounded-full print:text-xs print:px-1 print:py-0.5">Aug</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Enhanced Activities */}
                    <div className="space-y-0.5 sm:space-y-1 flex-1 relative z-10 print:space-y-1">
                      {activities
                        .sort((a, b) => {
                          // Multi-day events first, then by type
                          if (a.isMultiDay && !b.isMultiDay) return -1;
                          if (!a.isMultiDay && b.isMultiDay) return 1;
                          return 0;
                        })
                        .map(activity => (
                          <HoverCard key={activity.id}>
                            <HoverCardTrigger asChild>
                          <div
                                className={`text-xs p-0.5 sm:p-1 rounded border flex items-center gap-1 sm:gap-2 leading-tight font-medium print:p-1 print:text-xs cursor-help hover:scale-105 transition-transform duration-200 hover:shadow-lg ${
                        activity.isMultiDay 
                          ? getMultiDayInvertedColors(activity.title)
                          : `${getTypeColor(activity.type)} bg-white/90 backdrop-blur-sm shadow-sm`
                      }`}
                  >
                    <span className="text-sm sm:text-lg flex-shrink-0 print:text-lg">
                      {getEventEmoji(activity.title, activity.type)}
                    </span>
                    <span className="font-semibold text-xs leading-tight truncate print:text-xs">
                      {activity.title}
                    </span>
                  </div>
                            </HoverCardTrigger>
                            <HoverCardContent
                              className="px-4 py-3 rounded-xl border-2 border-white/80 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl backdrop-blur-md transition-all duration-200 animate-in fade-in zoom-in-95"
                              style={{ 
                                width: '500px', 
                                maxWidth: '500px',
                                zIndex: 9999,
                                pointerEvents: 'auto'
                              }}
                            >
                              {/* Arrow */}
                              <div
                                style={{
                                  position: 'absolute',
                                  left: '50%',
                                  bottom: '-10px',
                                  transform: 'translateX(-50%)',
                                  width: 0,
                                  height: 0,
                                  borderLeft: '10px solid transparent',
                                  borderRight: '10px solid transparent',
                                  borderTop: '10px solid rgba(255,255,255,0.8)',
                                  zIndex: 10000,
                                }}
                              />
                              <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">
                                    {getEventEmoji(activity.title, activity.type)}
                                  </span>
                                  <div className="font-extrabold text-white text-base leading-tight">
                                    {activity.title}
                                  </div>
                                </div>
                                
                                {/* Description */}
                                <div className="text-xs text-gray-200 leading-relaxed">
                                  {getActivityDescription(activity)}
                                </div>
                                
                                <div className="flex items-center gap-2 flex-wrap">
                                  {activity.isMultiDay && (
                                    <Badge variant="secondary" className="text-xs bg-purple-600 hover:bg-purple-700 text-white border-purple-500 px-2 py-0.5 rounded-full">
                                      Multi-day
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
          })}
        </div>
      </CardContent>
    </Card>
  );

  const handleActivityClick = (activity: ItineraryItem) => {
    setClickedActivity(activity);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setClickedActivity(null);
  };

  // Activity Details Dialog for Mobile
  const ActivityDialog = () => (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="max-w-sm mx-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <span className="text-3xl">
              {clickedActivity && getEventEmoji(clickedActivity.title, clickedActivity.type)}
            </span>
            <span className="text-lg font-bold">
              {clickedActivity?.title}
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {clickedActivity?.isMultiDay && (
            <Badge variant="secondary" className="text-sm bg-purple-600 hover:bg-purple-700 text-white border-purple-500 px-3 py-1 rounded-full">
              Multi-day Event
            </Badge>
          )}
          
          {/* Description */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg border-l-4 border-blue-400">
            <p className="text-sm text-gray-700 leading-relaxed">
              {clickedActivity && getActivityDescription(clickedActivity)}
            </p>
          </div>
          
          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>Type:</strong> <span className="capitalize">{clickedActivity?.type}</span></p>
            <p><strong>Date:</strong> {clickedActivity?.fullDate.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4 print:hidden px-2 sm:px-6">
        <div className="text-sm text-gray-600">
          💡 <span className="hidden sm:inline">Click "Print Calendar" for a better formatted version</span>
          <span className="sm:hidden">💡 Better print version available</span>
        </div>
        <Button 
          onClick={generatePDF} 
          className="flex items-center gap-2 text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Print Calendar</span>
          <span className="sm:hidden">Print</span>
        </Button>
      </div>

      <div className="w-full min-h-screen bg-white p-2 sm:p-4 print:p-0 print:min-h-0">
        {/* Enhanced Header with Logo */}
        <div className="text-center mb-4 sm:mb-6 border-b-4 border-blue-600 pb-2 sm:pb-4 print:mb-4 print:pb-2">
          {/* Logo */}
          <div className="flex justify-center items-center mb-2 sm:mb-4 print:mb-2">
            <img 
              src="https://campsdeichemed.com/wp-content/uploads/2022/09/sdei-chemed-logo-3.png" 
              alt="Camp Sdei Chemed Logo" 
              className="h-12 w-auto sm:h-20 shadow-lg rounded-lg print:h-16"
            />
          </div>
          <h1 className="text-xl sm:text-3xl font-bold text-blue-800 mb-1 sm:mb-2 print:text-2xl print:mb-1">
            Camp Sdei Chemed - Boys 2025
          </h1>
          <p className="text-sm sm:text-lg text-blue-600 font-semibold mb-1 sm:mb-2 print:text-base print:mb-1">Summer Itinerary Calendar</p>
          <p className="text-xs sm:text-md text-gray-600 print:text-sm">July 7 - August 18, 2025</p>
        </div>

        {/* Responsive View */}
        <div className="block lg:hidden">
          <MobileCalendarView />
        </div>
        <div className="hidden lg:block">
          <DesktopGridView />
        </div>
      </div>

      <ActivityDialog />
    </div>
  );
};

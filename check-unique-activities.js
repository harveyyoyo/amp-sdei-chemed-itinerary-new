import fs from 'fs';
import path from 'path';

// Read the itinerary data
const filePath = path.join(process.cwd(), 'src', 'data', 'itineraryData.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Extract the array content
const arrayMatch = content.match(/export const itineraryData: ItineraryItem\[\] = \[([\s\S]*?)\];/);
if (!arrayMatch) {
  console.log('Could not parse itinerary data');
  process.exit(1);
}

// Parse the array (simplified parsing)
const arrayContent = arrayMatch[1];
const items = [];
const itemMatches = arrayContent.matchAll(/title: (\"[^\"]+\"|'[^']+')/g);

for (const match of itemMatches) {
  const title = match[1].replace(/['\"]/g, '');
  items.push(title);
}

console.log('=== UNIQUE ACTIVITY CHECK ===');
console.log(`Total activities: ${items.length}`);

// Find duplicates
const titleCounts = {};
items.forEach(title => {
  titleCounts[title] = (titleCounts[title] || 0) + 1;
});

const duplicates = Object.entries(titleCounts).filter(([title, count]) => count > 1);
const uniqueTitles = Object.keys(titleCounts);

console.log(`Unique activities: ${uniqueTitles.length}`);
console.log(`Duplicate activities: ${duplicates.length}`);

if (duplicates.length > 0) {
  console.log('\n=== DUPLICATE ACTIVITIES ===');
  duplicates.forEach(([title, count]) => {
    console.log(`"${title}" appears ${count} times`);
  });
} else {
  console.log('\n✅ All activities are unique!');
}

console.log('\n=== ALL UNIQUE ACTIVITIES ===');
uniqueTitles.sort().forEach((title, index) => {
  console.log(`${index + 1}. ${title}`);
}); 
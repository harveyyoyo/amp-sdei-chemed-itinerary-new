const fs = require('fs');
const path = require('path');

// Load itinerary data
const itineraryPath = path.join(__dirname, 'src', 'data', 'itineraryData.ts');
const itineraryContent = fs.readFileSync(itineraryPath, 'utf8');
const itemMatches = [...itineraryContent.matchAll(/title: ("[^"]+"|'[^']+')/g)];
const titles = itemMatches.map(m => m[1].replace(/['"]/g, '').trim()).filter(Boolean);

// Load activityDescriptions.ts
const descPath = path.join(__dirname, 'src', 'utils', 'activityDescriptions.ts');
const descContent = fs.readFileSync(descPath, 'utf8');

// Extract all keywords from the description rules
const keywordMatches = [...descContent.matchAll(/titleLower\.includes\('([^']+)'\)/g)];
const keywords = keywordMatches.map(m => m[1].toLowerCase());

// Also handle '||' (OR) conditions
const orMatches = [...descContent.matchAll(/titleLower\.includes\('([^']+)'\) \|\| titleLower\.includes\('([^']+)'\)/g)];
orMatches.forEach(m => {
  keywords.push(m[1].toLowerCase(), m[2].toLowerCase());
});

console.log('Total activities:', titles.length);
console.log('Total keywords:', keywords.length);
console.log('Sample keywords:', keywords.slice(0, 10));
console.log('Sample titles:', titles.slice(0, 10));

// Check which titles do not match any keyword
const missing = titles.filter(title => {
  const lower = title.toLowerCase();
  return !keywords.some(kw => lower.includes(kw));
});

console.log('\n=== ACTIVITIES WITHOUT SPECIFIC DESCRIPTION RULE ===');
missing.forEach(title => console.log(title));
console.log(`\nTotal missing: ${missing.length}`); 
import fs from 'fs';
import path from 'path';

// Read the itinerary data
const filePath = path.join(process.cwd(), 'src', 'data', 'itineraryData.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Find the Acco Extreme Park entry
const searchTerm = 'Acco Extreme Park';
const lines = content.split('\n');
let foundEntry = null;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes(searchTerm)) {
    // Collect the full entry (multiple lines)
    let entry = '';
    let j = i;
    let braceCount = 0;
    let started = false;
    
    while (j < lines.length) {
      const line = lines[j];
      if (line.includes('{')) {
        started = true;
        braceCount += (line.match(/{/g) || []).length;
      }
      if (started) {
        entry += line + '\n';
        if (line.includes('}')) {
          braceCount -= (line.match(/}/g) || []).length;
          if (braceCount === 0) break;
        }
      }
      j++;
    }
    foundEntry = entry;
    break;
  }
}

if (foundEntry) {
  console.log('=== ACCO EXTREME PARK DETAILS ===');
  console.log(foundEntry);
  
  // Extract specific fields
  const idMatch = foundEntry.match(/id: '([^']+)'/);
  const dateMatch = foundEntry.match(/date: '([^']+)'/);
  const typeMatch = foundEntry.match(/type: '([^']+)'/);
  const multiDayMatch = foundEntry.match(/isMultiDay: (true|false)/);
  
  console.log('\n=== EXTRACTED FIELDS ===');
  console.log(`ID: ${idMatch ? idMatch[1] : 'Not found'}`);
  console.log(`Date: ${dateMatch ? dateMatch[1] : 'Not found'}`);
  console.log(`Type: ${typeMatch ? typeMatch[1] : 'Not found'}`);
  console.log(`Multi-day: ${multiDayMatch ? multiDayMatch[1] : 'Not found'}`);
} else {
  console.log('Acco Extreme Park entry not found');
} 
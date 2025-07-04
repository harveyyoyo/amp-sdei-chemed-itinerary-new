import { getActivityDescription } from '../src/utils/activityDescriptions.ts';
import { itineraryData } from '../src/data/itineraryData.ts';

const GENERIC = "Get ready for something new and exciting. This activity is all about trying new things, growing as a person, and making memories that last. Bring your energy, your curiosity, and your best self.";

const genericTitles = itineraryData
  .filter(item => getActivityDescription(item) === GENERIC)
  .map(item => item.title);

if (genericTitles.length === 0) {
  console.log('All activities have specific descriptions!');
} else {
  console.log('Activities with generic descriptions:');
  genericTitles.forEach(title => console.log('- ' + title));
} 
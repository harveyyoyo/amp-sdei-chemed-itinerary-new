const fs = require('fs');
const path = require('path');

// Load itinerary data
const itineraryPath = path.join(__dirname, 'src', 'data', 'itineraryData.ts');
const itineraryContent = fs.readFileSync(itineraryPath, 'utf8');
const itemMatches = [...itineraryContent.matchAll(/title: ("[^"]+"|'[^']+')/g)];
const titles = itemMatches.map(m => m[1].replace(/['"]/g, '').trim()).filter(Boolean);

// Load activityDescriptions.ts
const descPath = path.join(__dirname, 'src', 'utils', 'activityDescriptions.ts');
let descContent = fs.readFileSync(descPath, 'utf8');

// Extract all keywords from the description rules
const keywordMatches = [...descContent.matchAll(/titleLower\.includes\('([^']+)'\)/g)];
const keywords = keywordMatches.map(m => m[1].toLowerCase());

// Also handle '||' (OR) conditions
const orMatches = [...descContent.matchAll(/titleLower\.includes\('([^']+)'\) \|\| titleLower\.includes\('([^']+)'\)/g)];
orMatches.forEach(m => {
  keywords.push(m[1].toLowerCase(), m[2].toLowerCase());
});

// Find missing activities
const missing = titles.filter(title => {
  const lower = title.toLowerCase();
  return !keywords.some(kw => lower.includes(kw));
});

if (missing.length === 0) {
  console.log('All activities have a specific description rule!');
  process.exit(0);
}

console.log('Generating descriptions for the following activities:');
missing.forEach(title => console.log(' -', title));

// Function to generate descriptions based on activity keywords
function generateDescription(title) {
  const lower = title.toLowerCase();
  
  // Religious/Spiritual activities
  if (lower.includes('kever') || lower.includes('grave')) {
    return `Visit the holy resting place and connect with the spiritual legacy of our great ancestors. Experience the deep connection to Jewish history and tradition at this sacred site.`;
  }
  if (lower.includes('synagogue') || lower.includes('shul')) {
    return `Experience the beautiful traditions and spiritual atmosphere of this historic synagogue. Learn about the rich Jewish heritage and connect with the community through prayer and study.`;
  }
  if (lower.includes('yeshiva') || lower.includes('kollel')) {
    return `Immerse yourself in the world of Torah study at this prestigious yeshiva. Experience the intense learning environment and connect with students and teachers who are passionate about Jewish education.`;
  }
  
  // Adventure/Outdoor activities
  if (lower.includes('hike') || lower.includes('trek')) {
    return `Embark on an exciting hiking adventure through beautiful natural landscapes! Challenge yourself physically while enjoying stunning views and creating unforgettable memories with your friends.`;
  }
  if (lower.includes('climb') || lower.includes('rapelling')) {
    return `Push your limits with this thrilling climbing and rappelling experience! Learn new skills, overcome fears, and build confidence while having an amazing adventure in the great outdoors.`;
  }
  if (lower.includes('diving') || lower.includes('scuba')) {
    return `Explore the underwater world through this exciting diving experience! Discover marine life, learn new skills, and create incredible memories in this unique adventure.`;
  }
  if (lower.includes('boat') || lower.includes('speed')) {
    return `Feel the thrill of speed and adventure on the water! Experience the excitement of boat rides while enjoying beautiful coastal views and creating unforgettable memories.`;
  }
  
  // Cultural/Educational activities
  if (lower.includes('museum') || lower.includes('exhibit')) {
    return `Immerse yourself in fascinating exhibits and learn about important historical and cultural topics. Expand your knowledge and appreciation for the rich heritage and stories on display.`;
  }
  if (lower.includes('factory') || lower.includes('demo')) {
    return `Get an inside look at how things are made! Learn about the fascinating process of production and see skilled craftspeople at work. This hands-on experience will give you a new appreciation for the products we use every day.`;
  }
  if (lower.includes('dig') || lower.includes('archeological')) {
    return `Become an archaeologist for a day! Get your hands dirty uncovering ancient artifacts and learning about the fascinating history buried beneath the surface. This hands-on experience connects you directly to the past.`;
  }
  
  // Shopping/Entertainment
  if (lower.includes('mall') || lower.includes('shopping')) {
    return `Enjoy some retail therapy and explore the latest trends! Whether you're looking for souvenirs, gifts, or just want to browse, this shopping experience offers something for everyone.`;
  }
  if (lower.includes('forest') || lower.includes('park')) {
    return `Connect with nature in this beautiful outdoor setting! Whether it's walking trails, wildlife watching, or just enjoying the peaceful atmosphere, this is your chance to escape and recharge in the great outdoors.`;
  }
  if (lower.includes('fortress') || lower.includes('castle')) {
    return `Step back in time and explore this historic fortress! Learn about the fascinating military history and architectural marvels while imagining the battles and stories that took place within these ancient walls.`;
  }
  
  // Sports/Recreation
  if (lower.includes('archery')) {
    return `Test your aim and concentration with this exciting archery experience! Learn proper technique, challenge yourself to hit the target, and discover a new skill that combines focus and precision.`;
  }
  if (lower.includes('paintball')) {
    return `Get ready for an action-packed paintball battle! Work as a team, develop strategy, and enjoy the thrill of friendly competition in this exciting outdoor adventure.`;
  }
  if (lower.includes('riding') || lower.includes('donkey')) {
    return `Experience the traditional way of travel with this unique donkey riding adventure! Connect with these gentle animals and enjoy a peaceful journey through beautiful landscapes.`;
  }
  
  // Special events
  if (lower.includes('talent') || lower.includes('show')) {
    return `Showcase your unique talents and cheer on your friends in this exciting performance! Whether you sing, dance, perform magic, or have any other special skill, this is your chance to shine.`;
  }
  if (lower.includes('goodbye') || lower.includes('farewell')) {
    return `Say goodbye to your amazing camp experience and celebrate all the incredible memories you've made! Reflect on your journey, thank your friends and counselors, and look forward to staying connected.`;
  }
  if (lower.includes('overnight')) {
    return `Spend an unforgettable night in a special location! Experience the unique atmosphere, enjoy local hospitality, and create lasting memories with your friends in this extended adventure.`;
  }
  
  // Default for activities with specific names
  if (lower.includes('yad vashem')) {
    return `Visit this powerful memorial to the Holocaust and honor the memory of those who perished. Learn about the importance of remembrance and the strength of the Jewish people through this deeply moving experience.`;
  }
  if (lower.includes('mitzpeh yericho')) {
    return `Take in breathtaking views from this scenic overlook! See the beautiful landscape of the Jordan Valley and learn about the historical significance of this strategic location.`;
  }
  if (lower.includes('rechov ben yehuda')) {
    return `Experience the vibrant energy of this famous Jerusalem street! Enjoy shopping, street performances, and the unique atmosphere of one of Israel's most popular pedestrian areas.`;
  }
  
  // Generic but engaging description for anything else
  return `Experience something truly special with this unique activity! Whether it's learning new skills, exploring new places, or creating unforgettable memories, this adventure will be one to remember.`;
}

// Find where to insert (before multi-day events or default)
const insertPoint = descContent.indexOf('// Multi-day events');
if (insertPoint === -1) {
  console.error('Could not find insert point in activityDescriptions.ts');
  process.exit(1);
}

let toInsert = '\n  // === AUTO-GENERATED DESCRIPTIONS ===\n';
missing.forEach(title => {
  const safeTitle = title.replace(/'/g, "\\'");
  const description = generateDescription(title);
  toInsert += `  if (titleLower.includes('${safeTitle.toLowerCase()}')) {\n    return "${description}";\n  }\n`;
});

descContent = descContent.slice(0, insertPoint) + toInsert + '\n' + descContent.slice(insertPoint);

fs.writeFileSync(descPath, descContent, 'utf8');
console.log('Done! Auto-generated descriptions have been added to src/utils/activityDescriptions.ts.'); 
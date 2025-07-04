// Test script for Kotel Tunnel description
const testActivity = {
  title: "Kotel Tunnel Tours",
  type: "leisure"
};

// Simulate the function logic
function getActivityDescription(activity) {
  const titleLower = activity.title.toLowerCase();
  
  if (titleLower.includes('kotel tunnel tours') || titleLower.includes('kotel tunnel')) {
    return "Venture deep beneath the surface to explore the hidden Kotel Tunnels—an underground maze of ancient passageways that reveal the full extent of the Western Wall. Walk through 2,000-year-old stone corridors, see massive Herodian stones that weigh hundreds of tons, and discover secret chambers that tell the story of Jerusalem's ancient past. This isn't just a tour—it's a journey through time that connects you to the engineering marvels and spiritual significance of the Temple Mount.";
  }
  
  return "Generic description";
}

console.log("Testing Kotel Tunnel Tours:");
console.log("Title:", testActivity.title);
console.log("Description:", getActivityDescription(testActivity)); 
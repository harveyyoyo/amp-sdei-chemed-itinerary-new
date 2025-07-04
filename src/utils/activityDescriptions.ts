import { ItineraryItem } from '@/data/itineraryData';

// Generate engaging descriptions for activities based on actual research
export const getActivityDescription = (activity: ItineraryItem) => {
  const titleLower = activity.title.toLowerCase();
  const type = activity.type;

  // HIKES & NATURE - Specific to each location
  if (titleLower.includes('nachal zevitan')) {
    return "Take on the wild canyons of Nachal Zevitan together—jumping from cliffs, swimming in natural pools, and scrambling over rocks. This is real adventure with your S'dei Chemed crew, and you'll come out with stories you'll never forget.";
  }
  if (titleLower.includes('nachal prat')) {
    return "Explore the stunning Nachal Prat (Wadi Qelt), one of the most beautiful desert canyons in the Judean Desert. Hike through dramatic landscapes, see ancient monasteries, and experience the raw beauty of the wilderness.";
  }
  if (titleLower.includes('nachal kziv')) {
    return "Trek through Nachal Kziv, a lush stream in the Galilee with waterfalls, pools, and ancient ruins. This is a hike that combines natural beauty with history—perfect for cooling off and exploring.";
  }
  if (titleLower.includes('ein bokek')) {
    return "Our group will explore the unique desert landscape around Ein Bokek, right by the Dead Sea. Expect a mix of salty water, mountain views, and a place that's been a healing destination for thousands of years.";
  }
  if (titleLower.includes('ein mabua')) {
    return "Discover Ein Mabua, a hidden natural spring in the Judean Desert. This oasis in the wilderness is perfect for swimming, relaxing, and appreciating the miracle of water in the desert.";
  }
  if (titleLower.includes('har arbel')) {
    return "We're climbing Har Arbel for some of the best views in the Galilee. It's a hike with a payoff—panoramic sights, a bit of a challenge, and a real sense of accomplishment at the top.";
  }
  if (titleLower.includes('nachal sataf')) {
    return "Walk through the ancient terraces and springs of Nachal Sataf, seeing how people farmed this land thousands of years ago. It's hands-on history and a chance to slow down in nature.";
  }
  if (titleLower.includes('red canyon')) {
    return "Get ready to wind through the Red Canyon's wild sandstone walls. We'll hike, scramble, and explore a landscape that feels like another planet—bring your sense of adventure and your camera.";
  }
  if (titleLower.includes('black canyon')) {
    return "We're tackling the Black Canyon—one of Israel's most dramatic hikes. Expect scrambling, climbing, rappelling down sheer cliffs, and a real test of teamwork and grit. This extreme adventure combines hiking with rappelling for an unforgettable challenge that pushes your limits.";
  }
  if (titleLower.includes('masada for sunrise')) {
    return "Wake up before dawn and climb Masada to watch the sunrise over the Dead Sea. This ancient fortress tells the story of Jewish resistance and sacrifice. Standing at the top as the sun rises over the desert landscape is a powerful reminder of our history and the beauty of this land.";
  }
  if (titleLower.includes('hidden waterfall')) {
    return "Hunt for a hidden waterfall, hiking off the beaten path to find a cool, secret swimming spot. Sometimes the best rewards are the ones you have to work for.";
  }
  if (titleLower.includes('forest walk')) {
    return "Take a break from the noise and wander through Israel's forests. This is about fresh air, quiet moments, and noticing the details you usually miss—sometimes the best growth happens when you slow down.";
  }
  if (titleLower.includes('natural spring')) {
    return "Find a natural spring, cool off, and just enjoy being outside. It's a simple pleasure—swimming, relaxing, and hanging out with friends in a spot most tourists never see.";
  }

  // HISTORICAL & CULTURAL SITES
  if (titleLower.includes('neot kedumim')) {
    return "Step into a living biblical landscape at Neot Kedumim. You'll see, touch, and smell the plants and places from ancient times—history you can actually experience with all your senses.";
  }
  if (titleLower.includes('kfar kedem')) {
    return "We're going back in time at Kfar Kedem, a recreated biblical village. Try your hand at ancient crafts, ride donkeys, and see what daily life was like thousands of years ago.";
  }
  if (titleLower.includes('kfar kedem donkey riding')) {
    return "Experience traditional transportation at Kfar Kedem by riding donkeys through the biblical landscape. It's a fun, authentic way to connect with how people traveled in ancient times.";
  }
  if (titleLower.includes('susya')) {
    return "Explore the ancient Jewish village of Susya, walking through ruins that tell the story of Jewish life during the Talmudic period. It's a real connection to our roots.";
  }
  if (titleLower.includes('montfort fortress')) {
    return "Climb the ruins of Montfort Fortress, a Crusader castle in the Galilee. Imagine the battles fought here and take in epic views from the ancient walls.";
  }
  if (titleLower.includes('chevron')) {
    return "We're visiting Chevron, one of Judaism's four holiest cities. We'll see the Cave of the Patriarchs and connect with the deep history of this ancient place.";
  }
  if (titleLower.includes('ihr david') || titleLower.includes('chizkiyahu')) {
    return "Explore the City of David, Jerusalem's original settlement. Get ready to walk through King Hezekiah's ancient water tunnel—a 2,700-year-old engineering marvel.";
  }
  if (titleLower.includes('dig for a day') || titleLower.includes('archeological dig')) {
    return "Become archaeologists for a day, digging through layers of history and uncovering artifacts that haven't been touched for thousands of years.";
  }
  if (titleLower.includes('dig for a day- archeological dig')) {
    return "Become archaeologists for a day, digging through layers of history and uncovering artifacts that haven't been touched for thousands of years.";
  }
  if (titleLower.includes('akko\'s tunisian synagogue')) {
    return "Visit Akko's beautiful Tunisian Synagogue, a stunning example of Jewish architecture and art. See the intricate mosaics and learn about the Jewish community that built this sacred space.";
  }

  // RELIGIOUS SITES
  if (titleLower.includes('kever rambam')) {
    return "Visit the resting place of Rambam, one of Judaism's greatest scholars. Take a moment to reflect on how one person's wisdom can span centuries.";
  }
  if (titleLower.includes('kever rav meir')) {
    return "Pay respects at the tomb of Rabbi Meir Baal HaNes, known for his miracles and dedication to helping others. It's a place of hope and inspiration.";
  }
  if (titleLower.includes('kever rabbi akiva')) {
    return "Visit the tomb of Rabbi Akiva, a sage who started learning Torah at 40 and became a legend. His story is all about transformation and standing up for what you believe.";
  }
  if (titleLower.includes('kever rachel')) {
    return "Visit Kever Rachel, the tomb of our matriarch Rachel. For thousands of years, Jews have come here to pray and find comfort—now it's our turn.";
  }
  if (titleLower.includes('meiron')) {
    return "Head to Meiron to visit the resting place of Rabbi Shimon bar Yochai, author of the Zohar. Whether you come to daven or just to think, it's a powerful experience.";
  }
  if (titleLower.includes('kotel tunnel tours') || titleLower.includes('kotel tunnel')) {
    return "Venture deep beneath the surface to explore the hidden Kotel Tunnels—an underground maze of ancient passageways that reveal the full extent of the Western Wall. Walk through 2,000-year-old stone corridors, see massive Herodian stones that weigh hundreds of tons, and discover secret chambers that tell the story of Jerusalem's ancient past. This isn't just a tour—it's a journey through time that connects you to the engineering marvels and spiritual significance of the Temple Mount.";
  }
  if (titleLower.includes('kotel')) {
    return "Stand at the Western Wall, the holiest site in Judaism. Millions have poured out their hearts here—now it's your chance to feel the weight of history and connection.";
  }
  if (titleLower.includes('tefillin at army base')) {
    return "Put on tefillin with Israeli soldiers at an army base. This is about connecting with those who protect Israel, understanding their commitment, and sharing in the mitzvah together.";
  }

  // MUSEUMS & EDUCATIONAL
  if (titleLower.includes('yad vashem')) {
    return "Visit Yad Vashem, Israel's Holocaust memorial. This isn't just a museum—it's a powerful experience that challenges us to remember, reflect, and think about our responsibility to the future.";
  }
  if (titleLower.includes('yad v\'shem')) {
    return "Visit Yad Vashem, Israel's Holocaust memorial. This isn't just a museum—it's a powerful experience that challenges us to remember, reflect, and think about our responsibility to the future.";
  }
  if (titleLower.includes('blind museum')) {
    return "Experience the world without sight at the Blind Museum. It's a powerful way to build empathy, challenge your senses, and see things from a new perspective.";
  }
  if (titleLower.includes('golani museum')) {
    return "Explore the Golani Museum and learn about one of Israel's most storied military units. See how the Golani Brigade has defended Israel since 1948, and understand the sacrifices made to protect this land. It's military history with a human face.";
  }
  if (titleLower.includes('israel air force museum')) {
    return "Walk among the aircraft at the Israel Air Force Museum. See the planes that defended Israel in its most critical moments, and learn about the pilots who risked everything. It's aviation history that tells the story of survival and innovation.";
  }
  if (titleLower.includes('nova memorial')) {
    return "Visit the Nova Memorial Site and honor the victims of the October 7th attack. This is a place to remember, reflect, and understand the cost of hatred. It's also a reminder of the importance of standing together as a community.";
  }
  if (titleLower.includes('de karina chocolate factory')) {
    return "Tour the De Karina Chocolate Factory and see how chocolate is made from bean to bar. Sample delicious treats, learn about the chocolate-making process, and maybe even make your own chocolate creation.";
  }
  if (titleLower.includes('glassblowing demo')) {
    return "Watch master glassblowers create beautiful works of art from molten glass. See the skill, precision, and creativity that goes into this ancient craft, and maybe even try your hand at it.";
  }

  // ADVENTURE & ACTIVITIES
  if (titleLower.includes('acco extreme park')) {
    return "Challenge yourself at Acco Extreme Park with zip lines, climbing walls, and obstacle courses. Push your physical limits, cheer on your friends, and discover what you're capable of. Every challenge you overcome builds confidence and resilience.";
  }
  if (titleLower.includes('rafting on the yarden')) {
    return "Navigate the rapids of the Yarden together. Work as a team to steer through the currents, laugh at the splashes, and experience the thrill of whitewater rafting in Israel's most famous river.";
  }
  if (titleLower.includes('raft building')) {
    return "Work together to build rafts from scratch using teamwork and creativity. Test your engineering skills, problem-solve as a group, and then see if your creation floats! It's hands-on learning with a splash.";
  }
  if (titleLower.includes('paintball')) {
    return "Gear up for an epic paintball battle at S'dei Chemed—strategize, communicate, and work as a team to outmaneuver the opposition. It's about strategy, adrenaline, and having a blast with friends.";
  }
  if (titleLower.includes('banana boating')) {
    return "Hold on tight for a wild banana boat ride on the water. Feel the wind in your face, laugh as you try to stay on, and enjoy the thrill of being pulled across the waves.";
  }
  if (titleLower.includes('atving')) {
    return "Rev up ATVs and explore off-road trails together. Feel the power of the engines, navigate challenging terrain, and experience the freedom of riding through Israel's beautiful landscapes.";
  }
  if (titleLower.includes('archery')) {
    return "Channel your inner Robin Hood and master the ancient art of archery. Focus, aim, and release—it's about precision, patience, and the satisfying thunk when you hit your target. Whether you're a natural or learning something new, archery is a skill that builds concentration and confidence.";
  }
  if (titleLower.includes('scuba diving')) {
    return "Dive beneath the surface and explore the underwater world of the Red Sea. See colorful coral reefs, tropical fish, and experience the peaceful beauty of the ocean depths.";
  }
  if (titleLower.includes('water sports')) {
    return "Try your hand at various water sports—kayaking, paddleboarding, and more. It's about getting active, learning new skills, and having fun on the water. Whether you're a natural or learning something new, it's all about the experience.";
  }
  if (titleLower.includes('swimming at the maayan')) {
    return "Cool off in a maayan and enjoy swimming in crystal-clear water. It's a refreshing break from the heat and a chance to relax in nature's own swimming pool.";
  }

  // NATURE & WILDLIFE
  if (titleLower.includes('monkey forest')) {
    return "Visit Monkey Forest and observe these intelligent, playful animals up close. Learn about their behavior, see their social interactions, and gain a new appreciation for wildlife. It's educational, entertaining, and a reminder to enjoy life's lighter moments.";
  }
  if (titleLower.includes('dolphin reef')) {
    return "See dolphins in their natural environment at Dolphin Reef. Watch these intelligent creatures swim, play, and interact with each other. It's a chance to learn about marine conservation and see wildlife up close without disturbing their natural behavior.";
  }
  if (titleLower.includes('goat herding')) {
    return "Try your hand at goat herding and experience traditional Israeli life. Learn how to guide the goats, understand their behavior, and get a taste of the agricultural heritage that has sustained this land for generations. It's hands-on learning with real animals.";
  }

  // ENTERTAINMENT & RECREATION
  if (titleLower.includes('ice mall')) {
    return "Chill out at the Ice Mall—literally! Skate on ice, shop, and hang with friends in a place where it's always cool, even in the middle of summer. It's a fun change of pace and a chance to try something different.";
  }
  if (titleLower.includes('aqua kef')) {
    return "Splash around at Aqua Kef water park with slides, pools, and water attractions. It's pure fun—laugh, play, and cool off with friends. Sometimes the best memories come from simple pleasures like sliding down a water slide.";
  }
  if (titleLower.includes('party boat')) {
    return "Hop on a party boat for music, dancing, and a new perspective on the water. Celebrate together, enjoy the sea breeze, and make the most of every moment. It's about community, joy, and creating memories with friends.";
  }
  if (titleLower.includes('hot ones')) {
    return "Take the Hot Ones challenge—taste increasingly spicy foods and see who can handle the heat! It's a spicy, silly, and unforgettable bonding experience that will have everyone laughing and reaching for water.";
  }
  if (titleLower.includes('stomp')) {
    return "Make music with your body and whatever you can find. Stomp is about rhythm, creativity, and the energy that comes from working together to create something amazing. It's performance art that anyone can participate in.";
  }
  if (titleLower.includes('fear factor')) {
    return "Face your fears in a series of physical and mental challenges. Push your limits, support your friends, and discover what you're really capable of. It's about courage, teamwork, and a lot of laughs along the way.";
  }
  if (titleLower.includes('fear factor ')) {
    return "Face your fears in a series of physical and mental challenges. Push your limits, support your friends, and discover what you're really capable of. It's about courage, teamwork, and a lot of laughs along the way.";
  }
  if (titleLower.includes('capture the flag')) {
    return "Play the classic game of Capture the Flag—run, strategize, and work together to win. It's about energy, teamwork, and a little friendly competition. The best part is watching everyone's creativity in trying to outsmart the other team.";
  }
  if (titleLower.includes('capture the counselor in machane yehuda shuk')) {
    return "Play a unique version of capture the flag in the bustling Machane Yehuda market. Navigate through the crowds, use the market as your playground, and work together to capture the counselor while avoiding detection.";
  }
  if (titleLower.includes('gaga')) {
    return "Jump in the pit and show your skills at Gaga, Israel's version of dodgeball. It's fast, fun, and a great way to let loose and compete with friends. The rules are simple, but the game is addictive!";
  }
  if (titleLower.includes('haunted house')) {
    return "Test your courage in a haunted house adventure. Face your fears, laugh at the surprises, and make memories you'll talk about long after camp ends. It's all about having fun while getting a good scare.";
  }
  if (titleLower.includes('jersualem haunted house')) {
    return "Brave Jerusalem's haunted house for some spooky fun. Navigate through dark corridors, face unexpected surprises, and bond over shared screams and laughter. It's a thrilling way to experience the city's darker side.";
  }
  if (titleLower.includes('improv')) {
    return "Jump into improv games and exercises that will have everyone laughing. Think on your feet, support your scene partners, and discover the joy of spontaneous creativity. It's about letting go and having fun together.";
  }
  if (titleLower.includes('s\'dei chemed\'s got talent')) {
    return "Showcase your talents at S'dei Chemed's Got Talent! Whether you're performing or cheering from the audience, this is about celebrating everyone's unique abilities and having a blast together.";
  }

  // SHOPPING & MARKETS
  if (titleLower.includes('machane yehuda shuk')) {
    return "Dive into the chaos and color of Machane Yehuda, Jerusalem's most famous market. Try new foods, haggle for souvenirs, and experience the real vibe of Israeli street life. Every corner has something new to discover.";
  }
  if (titleLower.includes('rechov ben yehuda')) {
    return "Walk down Rechov Ben Yehuda, Jerusalem's famous pedestrian street. Shop, eat, watch street performers, and soak in the energy of the city. It's the perfect place to people-watch and feel the pulse of modern Jerusalem.";
  }
  if (titleLower.includes('rechov yerushalayim')) {
    return "Explore Rechov Yerushalayim, one of the city's main streets. Shop, dine, and experience the mix of old and new that makes Jerusalem so special. It's a chance to see how tradition and modernity coexist.";
  }
  if (titleLower.includes('modiin mall azrieli')) {
    return "Take a break at Modiin Mall Azrieli—shop, eat, and just hang out. It's a modern shopping experience with international and Israeli brands. Sometimes you need a change of pace and a chance to relax with friends.";
  }

  // BEACHES & WATER
  if (titleLower.includes('tel aviv beach')) {
    return "Hit Tel Aviv Beach, one of the most famous beaches in the Mediterranean. Swim, surf, play volleyball, or just relax in the sun. It's about freedom, fun, and enjoying the beautiful Israeli coastline.";
  }
  if (titleLower.includes('dead sea')) {
    return "Float in the Dead Sea—no effort required! Cover yourself in therapeutic mud, snap some legendary photos, and experience the lowest place on earth. It's weird, fun, and totally unforgettable. The mud is supposed to be good for your skin too!";
  }
  if (titleLower.includes('beach') || titleLower.includes('eilat')) {
    return "Enjoy the beach—swim, play, relax, and soak up the sun. Whether you're swimming, building sandcastles, or just hanging out with friends, beach days are about freedom and fun. The water is always refreshing and the company is even better.";
  }
  if (titleLower.includes('pool') || titleLower.includes('swim')) {
    return "Cool off in the pool—splash around, play games, and enjoy some downtime. Pool days are for relaxing, laughing, and making summer memories. Sometimes the simplest activities create the best moments.";
  }

  // DESERT & OASIS
  if (titleLower.includes('timna park')) {
    return "Explore Timna Park's ancient copper mines and dramatic rock formations. See where King Solomon's mines once operated, marvel at the natural rock formations, and understand how this desert landscape shaped history. It's geology, history, and adventure all in one.";
  }
  if (titleLower.includes('gemalia desert oasis')) {
    return "Spend time at Gemalia Desert Oasis, a natural spring in the Negev. This hidden spot has sustained life in the desert for thousands of years. Swim, relax, and appreciate the miracle of water in the wilderness.";
  }
  if (titleLower.includes('sleep at gemalia')) {
    return "Camp overnight at Gemalia Desert Oasis—sleep under the stars, share stories around a campfire, and experience the quiet beauty of the desert. It's a chance to unplug, connect with nature, and see the stars like you've never seen them before.";
  }
  if (titleLower.includes('sleep at gemalia desert oasis')) {
    return "Camp overnight at Gemalia Desert Oasis—sleep under the stars, share stories around a campfire, and experience the quiet beauty of the desert. It's a chance to unplug, connect with nature, and see the stars like you've never seen them before.";
  }

  // CITIES & AREAS
  if (titleLower.includes('tzfat') || titleLower.includes('tzfas')) {
    return "Explore Tzfat, the mystical city of Kabbalah. Wander the blue-painted alleys, visit art galleries, and feel the spiritual energy that has drawn seekers here for centuries. It's a place to ask big questions and maybe find some new answers.";
  }
  if (titleLower.includes('tzfas tour')) {
    return "Take a guided tour of Tzfat's most important sites, learning about the city's rich history, spiritual significance, and artistic heritage. Discover the stories behind the blue-painted buildings and ancient synagogues.";
  }
  if (titleLower.includes('tiveria tayelet')) {
    return "Walk along the Tiberias promenade overlooking the Sea of Galilee. Enjoy the views, grab some food, and feel the relaxed vibe of this lakeside city. It's a perfect spot to reflect and appreciate the beauty of the Galilee.";
  }
  if (titleLower.includes('rosh hanikra')) {
    return "Visit Rosh Hanikra's spectacular sea caves and grottoes. Take a cable car down to the Mediterranean coast and explore the natural tunnels carved by the sea. The views of the sea crashing against the white cliffs are absolutely breathtaking.";
  }
  if (titleLower.includes('old city shabbos')) {
    return "Daven Friday night at the Kotel—the holiest site in Judaism. Experience the spiritual energy of welcoming Shabbat at the Western Wall, surrounded by thousands of years of Jewish history and prayer. There's nothing like davening at the Kotel as the sun sets and Shabbat begins.";
  }
  if (titleLower.includes('old city')) {
    return "Step into Jerusalem's Old City—a maze of history, culture, and energy. Every stone has a story, every corner reveals something new. Explore the different quarters, feel the weight of history, and understand why this city means so much to so many people.";
  }
  if (titleLower.includes('eilat')) {
    return "Experience Eilat, Israel's Red Sea resort city. Enjoy the beaches, try water sports, and see the unique desert-meets-sea landscape. It's a chance to relax, have fun, and see a different side of Israel.";
  }
  if (titleLower.includes('golan heights view')) {
    return "Take in panoramic views from the Golan Heights, seeing the strategic landscape that has shaped Israel's history. Understand the geography, appreciate the beauty, and see why this region is so important.";
  }
  if (titleLower.includes('sderot')) {
    return "Visit Sderot and learn about this resilient city's story. Meet locals, understand the challenges they face, and see how communities come together in difficult times. It's about understanding the human side of Israel's security challenges.";
  }
  if (titleLower.includes('akko speed boat')) {
    return "Zoom across the Mediterranean on a speed boat from Akko. Feel the wind in your hair, see the coastline from a new perspective, and experience the thrill of high-speed boating on the sea.";
  }

  // SPECIAL EVENTS
  if (titleLower.includes('nova festival')) {
    return "Participate in the Nova Festival—a celebration of music, art, and creative expression. It's about community, creativity, and coming together to celebrate life and culture. The energy and vibe are unlike anything else.";
  }
  if (titleLower.includes('grape harvest')) {
    return "Join a grape harvest and get your hands dirty. Learn where your food comes from, work as a team, and enjoy the simple satisfaction of a job well done. It's a connection to the land and the agricultural heritage of Israel.";
  }
  if (titleLower.includes('shuva- grill for the soldiers')) {
    return "Fire up the grill and give back by cooking for Israeli soldiers. This is about community service, showing appreciation for those who protect Israel, and understanding the importance of supporting each other. It's hands-on giving that makes a real difference.";
  }

  // SPIRITUAL & CULTURAL
  if (titleLower.includes('kumzits')) {
    return "Gather for a Kumzits—traditional Jewish music and singing. Share songs, stories, and spiritual connection. It's about community, tradition, and finding meaning through music and togetherness.";
  }
  if (titleLower.includes('tzfat kumzits')) {
    return "Join a Kumzits in the mystical city of Tzfat, where the spiritual energy makes the music even more powerful. Sing, connect, and feel the special atmosphere that makes Tzfat unique.";
  }
  if (titleLower.includes('motzei shabbos kumzits in sound cave')) {
    return "Gather in the Sound Cave for a Motzei Shabbos Kumzits, using the cave's natural acoustics to create an unforgettable musical experience. The combination of natural sound amplification and spiritual energy is magical.";
  }
  if (titleLower.includes('motzei shabbos kumzitz in sound cave')) {
    return "Gather in the Sound Cave for a Motzei Shabbos Kumzits, using the cave's natural acoustics to create an unforgettable musical experience. The combination of natural sound amplification and spiritual energy is magical.";
  }
  if (titleLower.includes('sound cave')) {
    return "Experience the Sound Cave's unique acoustics. This natural cave amplifies sound in amazing ways, making it perfect for music and singing. It's a natural concert hall that showcases the wonders of nature.";
  }
  if (titleLower.includes('biking the kineret')) {
    return "Cycle around the Kineret and take in the beautiful scenery. This is about exercise, exploration, and appreciating the natural beauty of the Galilee. The views of the lake and surrounding mountains are spectacular.";
  }
  if (titleLower.includes('mitzpeh yericho')) {
    return "Take in the views at Mitzpeh Yericho, a lookout point over the ancient city of Yericho and the Jordan Valley. See the landscape that has shaped history and understand the strategic importance of this region.";
  }
  if (titleLower.includes('mitzpeh yericho ')) {
    return "Take in the views at Mitzpeh Yericho, a lookout point over the ancient city of Yericho and the Jordan Valley. See the landscape that has shaped history and understand the strategic importance of this region.";
  }

  // CAMP ACTIVITIES
  if (titleLower.includes('orientation')) {
    return "Kick off the summer with S'dei Chemed orientation—meet everyone, learn the schedule, and start building your crew. It's the first step in a summer of growth, new experiences, and friendships that will last a lifetime.";
  }
  if (titleLower.includes('icebreakers')) {
    return "Break the ice with fun games and activities designed to help everyone get to know each other. Laugh, play, and start building the friendships that will make this summer unforgettable.";
  }
  if (titleLower.includes('camp day')) {
    return "Enjoy a full day of classic S'dei Chemed activities—games, challenges, and a chance to try something new. It's about making memories, building friendships, and having fun in a supportive environment.";
  }
  if (titleLower.includes('sports')) {
    return "Get active with various sports and athletic activities. Whether you're competitive or just want to play, sports here are about energy, teamwork, and having fun while staying active.";
  }
  if (titleLower.includes(' sports')) {
    return "Get active with various sports and athletic activities. Whether you're competitive or just want to play, sports here are about energy, teamwork, and having fun while staying active.";
  }
  if (titleLower.includes('talent show') || titleLower.includes('improv')) {
    return "Show off your talents or just enjoy the performances. Whether you're on stage or in the audience, talent shows are about celebrating everyone's unique abilities and having fun together.";
  }
  if (titleLower.includes('bonfire')) {
    return "Gather around the fire for music, stories, and real conversations. At S'dei Chemed, bonfires are about connection, reflection, and the simple pleasure of being together under the stars.";
  }
  if (titleLower.includes('chill day')) {
    return "Take a relaxed day with optional activities and free time. Sometimes you need a break to recharge, reflect, and just enjoy being in the moment. It's about balance and taking care of yourself.";
  }

  // MEALS & DINING
  if (titleLower.includes('meal') || titleLower.includes('dinner') || titleLower.includes('bbq')) {
    return "Enjoy good food and good company. Meals here are about more than eating—they're about sharing, connecting, and recharging for the adventures ahead. The food is great, but the conversations are even better.";
  }

  // SHABBOS & HOLIDAYS
  if (titleLower.includes('shabbos on campus')) {
    return "Experience Shabbat at camp—traditional meals, meaningful conversations, and a chance to unplug and reflect. Whether you're looking for spiritual connection or just a break from the usual routine, this is your space to grow.";
  }
  if (titleLower.includes('shabbos in tzfat')) {
    return "Spend Shabbat in the mystical city of Tzfat. Experience the spiritual energy, enjoy traditional meals, and feel the special atmosphere that makes Tzfat unique. It's a Shabbat you'll never forget.";
  }
  if (titleLower.includes('shabbos chabad')) {
    return "Experience Shabbat with the Chabad community, joining in their warm, welcoming atmosphere. Enjoy traditional meals, meaningful conversations, and feel the special energy of Chabad hospitality.";
  }
  if (titleLower.includes('off shabbos')) {
    return "Spend Shabbat visiting family or friends. Take time to reconnect with loved ones, share meals, and enjoy the warmth of home. It's a chance to step away from the camp routine and experience Shabbat in a more personal setting.";
  }
  if (titleLower.includes('shiva assur b\'tammuz')) {
    return "Learn about and observe Shiva Assur B'Tammuz, the fast day commemorating the breaching of Jerusalem's walls. It's a day for reflection, understanding our history, and thinking about what it means to be part of the Jewish people.";
  }
  if (titleLower.includes('tisha bav')) {
    return "Observe Tisha B'Av, the day of mourning for the destruction of the First and Second Temples. It's a time to reflect on loss, resilience, and the importance of community. The lessons from this day are relevant to every generation.";
  }
  if (titleLower.includes('tisha b\'av kumzits at the kotel')) {
    return "Join a Kumzits at the Western Wall after Tisha B'Av. Share songs, prayers, and hope for the future. It's about finding light in darkness and strength in community.";
  }
  if (titleLower.includes('tisha b\'av kumzitz at the kotel')) {
    return "Join a Kumzits at the Western Wall after Tisha B'Av. Share songs, prayers, and hope for the future. It's about finding light in darkness and strength in community.";
  }

  // TRAVEL & LOGISTICS
  if (titleLower.includes('departure')) {
    return "Begin your journey to Israel—the start of an adventure that will change your life. Pack your bags, say goodbye to home, and get ready for new experiences, new friends, and new perspectives.";
  }
  if (titleLower.includes('welcome home')) {
    return "Touch down in Israel and feel the excitement. This is the start of something big—new friends, new places, and a summer you'll never forget. Welcome to your home away from home.";
  }
  if (titleLower.includes('golan overnight')) {
    return "Camp out in the Golan Heights—sleep under the stars, share stories around a campfire, and experience the beauty of northern Israel. It's about stepping out of your comfort zone and making memories that last.";
  }
  if (titleLower.includes('north overnight') || titleLower.includes('yurts')) {
    return "Spend the night in the north of Israel, possibly in traditional yurts. Experience a different way of living, connect with nature, and build friendships in a unique setting.";
  }
  if (titleLower.includes('north overnight- sleep on the beach')) {
    return "Camp out on the beach in northern Israel—fall asleep to the sound of waves, wake up to a beautiful sunrise, and experience the magic of sleeping under the stars by the sea.";
  }
  if (titleLower.includes('eilat overnight')) {
    return "Stay overnight in Eilat and experience this unique Red Sea resort city. Enjoy the beaches, try water activities, and see the desert-meets-sea landscape that makes Eilat special.";
  }
  if (titleLower.includes('migdal haemek overnight')) {
    return "Stay overnight in Migdal HaEmek and experience a different side of Israel. Meet locals, learn about this community, and understand the diversity that makes Israel so interesting.";
  }
  if (titleLower.includes('sleep in yurts')) {
    return "Spend the night in traditional yurts, experiencing a different way of living. Connect with nature, build friendships in this unique setting, and create memories that will last a lifetime.";
  }
  if (titleLower.includes('goodbye')) {
    return "Say goodbye to S'dei Chemed, but take the memories, growth, and friendships with you. This isn't the end—it's the beginning of your next adventure. The lessons learned and connections made will stay with you forever.";
  }
  if (titleLower.includes('goodbye :(')) {
    return "Say goodbye to camp, but take the memories, growth, and friendships with you. This isn't the end—it's the beginning of your next adventure. The lessons learned and connections made will stay with you forever.";
  }

  // FALLBACK - Only for truly generic activities
  return "Get ready for something new and exciting. This activity is all about trying new things, growing as a person, and making memories that last. Bring your energy, your curiosity, and your best self.";
}; 
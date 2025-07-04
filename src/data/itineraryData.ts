export interface ItineraryItem {
  id: string;
  title: string;
  date: string;
  fullDate: Date;
  type: 'spiritual' | 'adventure' | 'educational' | 'leisure' | 'travel' | 'cultural';
  isMultiDay?: boolean;
  endDate?: Date;
}

export const itineraryData: ItineraryItem[] = [
  {
    id: '4ss6hclivhpvg9ga8i3min4ms8',
    title: "Departure",
    date: '2025-07-07',
    fullDate: new Date(2025, 6, 7),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '2dkri4s69bt7dqva5rql5cav1f',
    title: "Welcome Home!!!",
    date: '2025-07-08',
    fullDate: new Date(2025, 6, 8),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '0l8v8n0cdpbhbbq1528aq4dinp',
    title: "Kotel",
    date: '2025-07-08',
    fullDate: new Date(2025, 6, 8),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '1dm5ojrcqd1n5m6kg6h0n49bnt',
    title: "Orientation",
    date: '2025-07-08',
    fullDate: new Date(2025, 6, 8),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '32b62680fqk2c97itk8s4uohq9',
    title: "Icebreakers!",
    date: '2025-07-08',
    fullDate: new Date(2025, 6, 8),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '2h5omgqq9ecovfmsa1a8o5aeh0',
    title: "Nachal Zevitan Hike",
    date: '2025-07-09',
    fullDate: new Date(2025, 6, 9),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '2tutekmi03eo2epmhn1f00drmp',
    title: "Sleep in Yurts",
    date: '2025-07-09',
    fullDate: new Date(2025, 6, 9),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '5ih9a0c250dk3mn1crk0v90hfq',
    title: "Kever Rambam",
    date: '2025-07-09',
    fullDate: new Date(2025, 6, 9),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '6bur862kva5v60g0gh528777c2',
    title: "Golan Overnight ",
    date: '2025-07-09',
    fullDate: new Date(2025, 6, 9),
    type: 'leisure',
    isMultiDay: true,
    endDate: new Date(2025, 6, 10)
  },
  {
    id: '25f1m1au1lvpkhdv21pko15m8t',
    title: "De Karina Chocolate Factory",
    date: '2025-07-10',
    fullDate: new Date(2025, 6, 10),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '3nujd737vs4f834um5n3somkrm',
    title: "Golan Heights View",
    date: '2025-07-10',
    fullDate: new Date(2025, 6, 10),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '3savug3mt8822m0m0tigch3o20',
    title: "Rafting on the Yarden",
    date: '2025-07-10',
    fullDate: new Date(2025, 6, 10),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '59rgvs348r9fjvrdmrjfqkv03n',
    title: "Rechov Ben Yehuda",
    date: '2025-07-11',
    fullDate: new Date(2025, 6, 11),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '7ka5erppglqjtv2bbqind3svqs',
    title: "Sports",
    date: '2025-07-11',
    fullDate: new Date(2025, 6, 11),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '4j7ri1ihvof2qo0hhirq26js4n',
    title: "Machane Yehuda Shuk",
    date: '2025-07-11',
    fullDate: new Date(2025, 6, 11),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '1rkmhb1f63bmovifbe8madc0qh',
    title: "Shabbos on Campus",
    date: '2025-07-12',
    fullDate: new Date(2025, 6, 12),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '14qj71m8abv59m4rp5nqb3takr',
    title: "Kotel Tunnel Tours",
    date: '2025-07-13',
    fullDate: new Date(2025, 6, 13),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '1ii0thc9hji6do134sq32fh0ep',
    title: "Shiva Assur B'Tammuz",
    date: '2025-07-13',
    fullDate: new Date(2025, 6, 13),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '05kc8jtnsr5ao927a2t1on96md',
    title: "Dead Sea",
    date: '2025-07-14',
    fullDate: new Date(2025, 6, 14),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '0k873t30dtpeqqho9uuhtirt8e',
    title: "Ein Bokek Hike",
    date: '2025-07-14',
    fullDate: new Date(2025, 6, 14),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '2tfufd6532hnfcbne0scc4jkqf',
    title: "Masada for Sunrise",
    date: '2025-07-14',
    fullDate: new Date(2025, 6, 14),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '0jtd0kcej8sv8h5tks86q542j2',
    title: "Hot Ones!!",
    date: '2025-07-14',
    fullDate: new Date(2025, 6, 14),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '3k2ifp3s251k2jclcjvd2o3cji',
    title: "Sports",
    date: '2025-07-15',
    fullDate: new Date(2025, 6, 15),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '7sk0co45p67jriu2lke04d3dhg',
    title: "Camp Day",
    date: '2025-07-15',
    fullDate: new Date(2025, 6, 15),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '47juq3bmcgbgr6b35funpmecf1',
    title: "Ihr David- Chizkiyahu's Water Tunnel ",
    date: '2025-07-15',
    fullDate: new Date(2025, 6, 15),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '2sru6ug67123m70jmmj3074ip0',
    title: "Capture the Flag",
    date: '2025-07-15',
    fullDate: new Date(2025, 6, 15),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '18iqcv8ufsjc2tutk5dq28lvm8',
    title: "Archery",
    date: '2025-07-16',
    fullDate: new Date(2025, 6, 16),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '36ucfq9hrjokp9imkhjs85aif4',
    title: "Neot Kedumim",
    date: '2025-07-16',
    fullDate: new Date(2025, 6, 16),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '4e0mnv9lun6ihghe2jbk7i9jrj',
    title: "Raft Building",
    date: '2025-07-16',
    fullDate: new Date(2025, 6, 16),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '6cnv41q0rd00sdjl0skvhqq14r',
    title: "Paintball ",
    date: '2025-07-16',
    fullDate: new Date(2025, 6, 16),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '7or6mnjd0rongp13mg5p0l64em',
    title: "Modiin Mall Azrieli",
    date: '2025-07-16',
    fullDate: new Date(2025, 6, 16),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '7ul1436v2ts6agqjn5po84ifeh',
    title: "Goat Herding",
    date: '2025-07-16',
    fullDate: new Date(2025, 6, 16),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '0s0tvavo36li1ma3554ha2sr9v',
    title: "Gaga",
    date: '2025-07-16',
    fullDate: new Date(2025, 6, 16),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '2dhd9bbb4sf2l4lk3udb0cvras',
    title: "Migdal HaEmek Overnight",
    date: '2025-07-17',
    fullDate: new Date(2025, 6, 17),
    type: 'leisure',
    isMultiDay: true,
    endDate: new Date(2025, 6, 21)
  },
  {
    id: '4rruq28tc76fi1ejbvu74cq9ie',
    title: "Kfar Kedem Donkey Riding",
    date: '2025-07-17',
    fullDate: new Date(2025, 6, 17),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '63kcur58h9qvk3ckdp19lu3bh6',
    title: "Acco Extreme Park",
    date: '2025-07-17',
    fullDate: new Date(2025, 6, 17),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '14n5f1vm7snp99qenhtio0ic71',
    title: "",
    date: '2025-07-17',
    fullDate: new Date(2025, 6, 17),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '3ogfl2r9fl4gjpg3cn1udgukhn',
    title: "Tefillin at Army Base",
    date: '2025-07-18',
    fullDate: new Date(2025, 6, 18),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '5di3h01gdc9d7u1fb4f4isr9gi',
    title: "Swimming at the Maayan",
    date: '2025-07-18',
    fullDate: new Date(2025, 6, 18),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '2go92l0fnpakmqsr2b3s2tqj2c',
    title: "Shabbos Chabad",
    date: '2025-07-19',
    fullDate: new Date(2025, 6, 19),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '29m456r6o2nbeb7fefiq6e8it9',
    title: "Nachal Kziv Hike",
    date: '2025-07-20',
    fullDate: new Date(2025, 6, 20),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '43fd6m5nqjlgb1k88p9qo3dvqf',
    title: "Montfort Fortress",
    date: '2025-07-20',
    fullDate: new Date(2025, 6, 20),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '4124kusajpcmd84mhkdp32tpsa',
    title: "Akko’s Tunisian Synagogue",
    date: '2025-07-21',
    fullDate: new Date(2025, 6, 21),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '55k59pem57qfpp4et7pkm2poit',
    title: "Monkey Forest",
    date: '2025-07-21',
    fullDate: new Date(2025, 6, 21),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '5qfsaarms5044vrrs63sonjugj',
    title: "Rosh Hanikra",
    date: '2025-07-21',
    fullDate: new Date(2025, 6, 21),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '67s56ag4fhonh9eqn7a4t8b957',
    title: "Akko Speed Boat ",
    date: '2025-07-21',
    fullDate: new Date(2025, 6, 21),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '1udi4nvnrltdqv8jj6ipprp87n',
    title: "Sports",
    date: '2025-07-22',
    fullDate: new Date(2025, 6, 22),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '20qflpc3rlkc73jnuehv8po64d',
    title: "Capture the Counselor in Machane Yehuda Shuk",
    date: '2025-07-22',
    fullDate: new Date(2025, 6, 22),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '2oi5ps5rjsr993pmnff48rv1ud',
    title: "Camp Day",
    date: '2025-07-22',
    fullDate: new Date(2025, 6, 22),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '1rd3j77fcja6gq5rme3hd1vum4',
    title: "Banana Boating",
    date: '2025-07-23',
    fullDate: new Date(2025, 6, 23),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '3mjt5sds1njp31sg1qs56qkc2j',
    title: "Tel Aviv Beach",
    date: '2025-07-23',
    fullDate: new Date(2025, 6, 23),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '6clko6s13o2kgeft7d3cr6gam6',
    title: "Fear Factor ",
    date: '2025-07-23',
    fullDate: new Date(2025, 6, 23),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '0a40jocarlb0j86hl1glh15kci',
    title: "Tzfat Kumzitz",
    date: '2025-07-24',
    fullDate: new Date(2025, 6, 24),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '0ahrjm8ld1thbhipib2ahokclm',
    title: "Tiveria Tayelet",
    date: '2025-07-24',
    fullDate: new Date(2025, 6, 24),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '1j979tta8cu5cvl1cdd7e45c8v',
    title: "Kever Rav Meir",
    date: '2025-07-24',
    fullDate: new Date(2025, 6, 24),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '1vsala76ato47o73pbpdbg2ah6',
    title: "Golani Museum",
    date: '2025-07-24',
    fullDate: new Date(2025, 6, 24),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '3o73svp0ghuis6er55ako2t76e',
    title: "Aqua Kef",
    date: '2025-07-24',
    fullDate: new Date(2025, 6, 24),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '5bqetll1cj09iqasaoha6rt3ah',
    title: "Tzfat",
    date: '2025-07-24',
    fullDate: new Date(2025, 6, 24),
    type: 'leisure',
    isMultiDay: true,
    endDate: new Date(2025, 6, 27)
  },
  {
    id: '1iu7qbm4idrcn1dgopoie6job7',
    title: "Tzfas Tour",
    date: '2025-07-25',
    fullDate: new Date(2025, 6, 25),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '5n4o8dhullr6cfdols45ksvabv',
    title: "Glassblowing Demo",
    date: '2025-07-25',
    fullDate: new Date(2025, 6, 25),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '7t5v4uqhrsm3tc6q58gm3hmi4f',
    title: "Rechov Yerushalayim",
    date: '2025-07-25',
    fullDate: new Date(2025, 6, 25),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '1msjlir57r5smrva0rlsk05q0c',
    title: "Shabbos in Tzfat",
    date: '2025-07-26',
    fullDate: new Date(2025, 6, 26),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '4ikil20hdn2tndjr4lbsrtuftp',
    title: " Motzei Shabbos Kumzitz in Sound Cave",
    date: '2025-07-26',
    fullDate: new Date(2025, 6, 26),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '1ss8ph2pmb6nvd3s47h3oa3d7v',
    title: "Biking The Kineret",
    date: '2025-07-27',
    fullDate: new Date(2025, 6, 27),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '3ieksifpaorujip53mm40btb2p',
    title: "Kever Rabbi Akiva",
    date: '2025-07-27',
    fullDate: new Date(2025, 6, 27),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '3rlv8st6rv20pjf8m2262tjc8u',
    title: "Meiron",
    date: '2025-07-27',
    fullDate: new Date(2025, 6, 27),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '3t445rkmu0cr93d8rualo79aob',
    title: "Har Arbel Hike",
    date: '2025-07-27',
    fullDate: new Date(2025, 6, 27),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '2jsd7ucqf1fb6qpbfq8ruohct5',
    title: "Jersualem Haunted House",
    date: '2025-07-28',
    fullDate: new Date(2025, 6, 28),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '5gj94tcica2eh2730lvmosrkeg',
    title: "Chill Day",
    date: '2025-07-28',
    fullDate: new Date(2025, 6, 28),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '15f5g615dl63eeifdihfdabc5u',
    title: "Chevron",
    date: '2025-07-29',
    fullDate: new Date(2025, 6, 29),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '4ksvsog1c3ot9jrcbj5qkrbv6i',
    title: "Improv!",
    date: '2025-07-29',
    fullDate: new Date(2025, 6, 29),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '6gqg7hvqnbi17co2vtfc1u6fi5',
    title: "Kever Rachel",
    date: '2025-07-29',
    fullDate: new Date(2025, 6, 29),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '1kptb2pa0n8psfc44qvimufcbp',
    title: "Blind Museum",
    date: '2025-07-30',
    fullDate: new Date(2025, 6, 30),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '7njeaem3912kch8kj2ckshugd8',
    title: "Dig for a Day- Archeological Dig",
    date: '2025-07-30',
    fullDate: new Date(2025, 6, 30),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '5aq2fi1u5g6q679hgvu748953h',
    title: "Sderot",
    date: '2025-07-31',
    fullDate: new Date(2025, 6, 31),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '6j2n24cgqrbe91cpulq7tfsjhs',
    title: "Nova Memorial Site",
    date: '2025-07-31',
    fullDate: new Date(2025, 6, 31),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '6j6m4e1btq0vi5r1jh4stmj7sl',
    title: "Shuva- Grill for the Soldiers",
    date: '2025-07-31',
    fullDate: new Date(2025, 6, 31),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '1qaeau2drg32rupcr503j5vv3a',
    title: "Old City Shabbos",
    date: '2025-08-01',
    fullDate: new Date(2025, 7, 1),
    type: 'leisure',
    isMultiDay: true,
    endDate: new Date(2025, 7, 2)
  },
  {
    id: '2dh0tu2sfcrkskc2eva4jimrrd',
    title: " Sports",
    date: '2025-08-01',
    fullDate: new Date(2025, 7, 1),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '50clj6fqks3q4cv6lqigb5uv8q',
    title: "Machane Yehuda Shuk",
    date: '2025-08-01',
    fullDate: new Date(2025, 7, 1),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '1nmfog7rsf78idn706920m9ofl',
    title: "Rechov Ben Yehuda",
    date: '2025-08-01',
    fullDate: new Date(2025, 7, 1),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '2ur8cpo2c9iotjg70es6sjofrb',
    title: "Tisha Bav",
    date: '2025-08-03',
    fullDate: new Date(2025, 7, 3),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '53qneoo1t2j3vghen7jo0knjlp',
    title: "Yad V'shem ",
    date: '2025-08-03',
    fullDate: new Date(2025, 7, 3),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '07k7mtpvel12bv9jopit21elao',
    title: "Hidden Waterfall",
    date: '2025-08-04',
    fullDate: new Date(2025, 7, 4),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '43obtv2an36chvg02ha0ae6ad5',
    title: "ATVing",
    date: '2025-08-04',
    fullDate: new Date(2025, 7, 4),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '4fnr1nikhjfsemtv8nj7ej6mcm',
    title: "Party Boat",
    date: '2025-08-04',
    fullDate: new Date(2025, 7, 4),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '74po4ph87gb7prhaq4jtodn6ga',
    title: "North Overnight- Sleep on the Beach",
    date: '2025-08-04',
    fullDate: new Date(2025, 7, 4),
    type: 'leisure',
    isMultiDay: true,
    endDate: new Date(2025, 7, 5)
  },
  {
    id: '19l8cl4mqpcoefjnmanffg0oc6',
    title: "Black Canyon- Extreme Hike and Rapelling",
    date: '2025-08-05',
    fullDate: new Date(2025, 7, 5),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '0802shnas3f70ap979fo3n4kp6',
    title: "Sports",
    date: '2025-08-06',
    fullDate: new Date(2025, 7, 6),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '4msqeugnupsa4p3pdksgcuphp8',
    title: "Camp Day",
    date: '2025-08-06',
    fullDate: new Date(2025, 7, 6),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '3lha0jiqpa1nfr9d2556mpig04',
    title: "Mitzpeh Yericho ",
    date: '2025-08-07',
    fullDate: new Date(2025, 7, 7),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '6qovt47ffns73bb2a1j41ufu6c',
    title: "Nachal Prat Hike",
    date: '2025-08-07',
    fullDate: new Date(2025, 7, 7),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '5587lssnovj29iqavrvojqgs8j',
    title: "Off Shabbos",
    date: '2025-08-08',
    fullDate: new Date(2025, 7, 8),
    type: 'leisure',
    isMultiDay: true,
    endDate: new Date(2025, 7, 9)
  },
  {
    id: '2mhsakanps7vraungt6gm5opep',
    title: "Tisha B'av Kumzitz at the Kotel",
    date: '2025-08-09',
    fullDate: new Date(2025, 7, 9),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '1pf40ipg88a15t2vok3bhvtf2o',
    title: "Sports",
    date: '2025-08-10',
    fullDate: new Date(2025, 7, 10),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '3fk19s3roslk87ao8ridk3p2qs',
    title: "Camp Day",
    date: '2025-08-10',
    fullDate: new Date(2025, 7, 10),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '6oo53kpnv2pbp4p9kcc1gj585v',
    title: "Stomp",
    date: '2025-08-10',
    fullDate: new Date(2025, 7, 10),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '06s9g0gub8lamd7bn05eh05lg1',
    title: "Ein Mabua",
    date: '2025-08-11',
    fullDate: new Date(2025, 7, 11),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '3i153lrsuo4fgqdpt68jplqnt9',
    title: "Israel Air Force Museum",
    date: '2025-08-11',
    fullDate: new Date(2025, 7, 11),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '4isgost962gmq3tpt12qm04q14',
    title: "Eilat Overnight",
    date: '2025-08-11',
    fullDate: new Date(2025, 7, 11),
    type: 'leisure',
    isMultiDay: true,
    endDate: new Date(2025, 7, 13)
  },
  {
    id: '542sq994ujuojgor8c5fjuemgp',
    title: "Susya",
    date: '2025-08-11',
    fullDate: new Date(2025, 7, 11),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '6co98s6p2p877j9il9dghfejl6',
    title: "Sleep at Gemalia desert oasis",
    date: '2025-08-11',
    fullDate: new Date(2025, 7, 11),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '7fdr2a14b9n1v5b0bi2llmrapv',
    title: "Grape Harvest",
    date: '2025-08-11',
    fullDate: new Date(2025, 7, 11),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '6r6ahui5ai4jbigjqkgsum8jjb',
    title: "Timna Park",
    date: '2025-08-12',
    fullDate: new Date(2025, 7, 12),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '7kotfu65cm7gm9oi6luubalctn',
    title: "Party Boat",
    date: '2025-08-12',
    fullDate: new Date(2025, 7, 12),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '3hpkcssp4hflaluc074ika117f',
    title: "Ice Mall",
    date: '2025-08-13',
    fullDate: new Date(2025, 7, 13),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '48rkdbdieol0g1i4k1g78rp9k0',
    title: "Scuba Diving",
    date: '2025-08-13',
    fullDate: new Date(2025, 7, 13),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '4elalsd7p38j7rek2in0a29470',
    title: "Water Sports",
    date: '2025-08-13',
    fullDate: new Date(2025, 7, 13),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '1trvoksu562l5061585012adu3',
    title: "S'dei Chemed's Got Talent",
    date: '2025-08-14',
    fullDate: new Date(2025, 7, 14),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '6iqjve69shu9i9j9bovmvtf572',
    title: "Chill Day",
    date: '2025-08-14',
    fullDate: new Date(2025, 7, 14),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '5ad0qd65fos3tsh06jv052f2pd',
    title: "Rechov Ben Yehuda",
    date: '2025-08-15',
    fullDate: new Date(2025, 7, 15),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '5tgokufj3fakm82ojf6rfidtl9',
    title: "Machane Yehuda Shuk",
    date: '2025-08-15',
    fullDate: new Date(2025, 7, 15),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '2vh6862pavhk17pnlvicj6lt0h',
    title: "Shabbos on Campus",
    date: '2025-08-16',
    fullDate: new Date(2025, 7, 16),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '6kh6t71skutu2sbn8smpebegc9',
    title: "Nachal Sataf Hike",
    date: '2025-08-17',
    fullDate: new Date(2025, 7, 17),
    type: 'leisure',
    isMultiDay: false
  },
  {
    id: '2lgu24uprlgs5bn6s2fraej8qp',
    title: "Goodbye :(",
    date: '2025-08-18',
    fullDate: new Date(2025, 7, 18),
    type: 'leisure',
    isMultiDay: false
  }
];

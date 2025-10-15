interface Destination {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  bestTime: string;
  season: 'summer' | 'winter' | 'monsoon' | 'spring';
  attractions: string[];
  seasonalTip: string;
}

export const destinationsByState: Record<string, Destination[]> = {
  
  'Kerala': [
    {
      id: 'ker-1',
      name: 'Munnar',
      description: 'Hill station with sprawling tea plantations, misty mountains, and cool climate.',
      imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      rating: 4.6,
      bestTime: 'September-May',
      season: 'winter',
      attractions: ['Tea Gardens', 'Eravikulam National Park', 'Mattupetty Dam', 'Top Station'],
      seasonalTip: 'Visit tea factories to see processing. Winters offer clear views of mountains.'
    },
    {
      id: 'ker-2',
      name: 'Alleppey Backwaters',
      description: 'Network of lagoons and canals, famous for houseboat cruises and serene waterways.',
      imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80',
      rating: 4.7,
      bestTime: 'November-February',
      season: 'winter',
      attractions: ['Houseboat Stay', 'Vembanad Lake', 'Alappuzha Beach', 'Kumarakom'],
      seasonalTip: 'Book houseboats in advance. Enjoy fresh seafood prepared onboard.'
    },
    {
      id: 'ker-3',
      name: 'Wayanad',
      description: 'Green paradise with waterfalls, wildlife sanctuaries, and spice plantations.',
      imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      rating: 4.5,
      bestTime: 'October-May',
      season: 'winter',
      attractions: ['Chembra Peak', 'Soochipara Falls', 'Edakkal Caves', 'Banasura Dam'],
      seasonalTip: 'Monsoon makes waterfalls spectacular but trekking challenging. Choose season wisely.'
    },
    {
      id: 'ker-4',
      name: 'Kochi',
      description: 'Port city blending colonial history, modern art, Chinese fishing nets, and spice markets.',
      imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80',
      rating: 4.4,
      bestTime: 'October-March',
      season: 'winter',
      attractions: ['Fort Kochi', 'Mattancherry Palace', 'Chinese Fishing Nets', 'Marine Drive'],
      seasonalTip: 'Watch Kathakali performances. Explore spice markets and heritage walk in Fort Kochi.'
    },
    {
      id: 'ker-5',
      name: 'Kovalam',
      description: 'Beach town with crescent-shaped beaches, Ayurvedic resorts, and lighthouse views.',
      imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      rating: 4.3,
      bestTime: 'September-March',
      season: 'winter',
      attractions: ['Lighthouse Beach', 'Hawa Beach', 'Samudra Beach', 'Ayurvedic Spas'],
      seasonalTip: 'Best for beach relaxation and Ayurvedic treatments. Watch sunrise from lighthouse.'
    }
  ],
  'Andhra Pradesh': [
  {
    id: 'ap-1',
    name: 'Tirupati',
    description: 'Sacred hill town home to the world-famous Venkateswara Temple, one of the richest and most visited pilgrimage sites.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    rating: 4.8,
    bestTime: 'September-February',
    season: 'winter',
    attractions: ['Tirumala Temple', 'Sri Venkateswara Temple', 'Chandragiri Fort', 'Talakona Waterfall'],
    seasonalTip: 'Book darshan tickets online in advance. Winter offers comfortable weather for temple visits.'
  },
  {
    id: 'ap-2',
    name: 'Visakhapatnam',
    description: 'Coastal city with beautiful beaches, scenic hills, naval heritage, and vibrant port culture.',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    rating: 4.5,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['RK Beach', 'Kailasagiri Hill', 'Submarine Museum', 'Araku Valley'],
    seasonalTip: 'Visit Araku Valley by train for scenic journey. Winter perfect for beach activities.'
  },
  {
    id: 'ap-3',
    name: 'Araku Valley',
    description: 'Hill station with coffee plantations, tribal culture, caves, and breathtaking mountain scenery.',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47b9327f3a36?w=800&q=80',
    rating: 4.6,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Borra Caves', 'Coffee Plantations', 'Tribal Museum', 'Katiki Waterfalls'],
    seasonalTip: 'Take the toy train from Vizag. Sample locally grown Araku coffee.'
  },
  {
    id: 'ap-4',
    name: 'Vijayawada',
    description: 'Historic city on Krishna River banks with ancient temples, caves, and cultural significance.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    rating: 4.3,
    bestTime: 'November-February',
    season: 'winter',
    attractions: ['Kanaka Durga Temple', 'Undavalli Caves', 'Prakasam Barrage', 'Bhavani Island'],
    seasonalTip: 'Visit during Dasara for grand temple celebrations. River cruises are pleasant in winter.'
  },
  {
    id: 'ap-5',
    name: 'Lepakshi',
    description: 'Archaeological wonder with hanging pillar temple, intricate sculptures, and Vijayanagara architecture.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
    rating: 4.4,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Veerabhadra Temple', 'Hanging Pillar', 'Nandi Bull', 'Fresco Paintings'],
    seasonalTip: 'Perfect for history buffs. Early morning visits offer best lighting for photography.'
  }
  ],
  'Arunachal Pradesh': [
  {
    id: 'arp-1',
    name: 'Tawang',
    description: 'High-altitude town with the largest Buddhist monastery in India, stunning landscapes, and war memorials.',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    rating: 4.8,
    bestTime: 'March-October',
    season: 'summer',
    attractions: ['Tawang Monastery', 'Sela Pass', 'Madhuri Lake', 'War Memorial'],
    seasonalTip: 'Carry permits and warm clothes. Summer offers accessible roads and clear mountain views.'
  },
  {
    id: 'arp-2',
    name: 'Ziro Valley',
    description: 'UNESCO World Heritage Site with lush rice fields, Apatani tribal culture, and music festivals.',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47b9327f3a36?w=800&q=80',
    rating: 4.6,
    bestTime: 'March-October',
    season: 'summer',
    attractions: ['Pine Grove', 'Talley Valley', 'Apatani Villages', 'Ziro Music Festival'],
    seasonalTip: 'Visit during Ziro Music Festival in September. Experience unique Apatani tribal culture.'
  },
  {
    id: 'arp-3',
    name: 'Bomdila',
    description: 'Picturesque town with Buddhist monasteries, apple orchards, and panoramic Himalayan views.',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    rating: 4.4,
    bestTime: 'April-October',
    season: 'summer',
    attractions: ['Bomdila Monastery', 'Upper Gompa', 'Eaglenest Wildlife Sanctuary', 'Apple Orchards'],
    seasonalTip: 'Gateway to Tawang. Spring brings blooming rhododendrons and pleasant weather.'
  },
  {
    id: 'arp-4',
    name: 'Namdapha National Park',
    description: 'Biodiversity hotspot with rare wildlife, dense forests, and adventure trekking trails.',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
    rating: 4.5,
    bestTime: 'October-April',
    season: 'winter',
    attractions: ['Wildlife Safari', 'Snow Leopards', 'Red Pandas', 'Noa-Dihing River'],
    seasonalTip: 'Ideal for wildlife enthusiasts. Carry binoculars and hire local guides for best experience.'
  },
  {
    id: 'arp-5',
    name: 'Dirang',
    description: 'Charming valley town with hot springs, sheep breeding farms, and Monpa tribal heritage.',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47b9327f3a36?w=800&q=80',
    rating: 4.3,
    bestTime: 'March-June, September-November',
    season: 'summer',
    attractions: ['Dirang Dzong', 'Hot Water Springs', 'Kalachakra Gompa', 'Sangti Valley'],
    seasonalTip: 'Stopover between Tezpur and Tawang. Enjoy hot springs and local yak cheese.'
  }
  ],
  'Assam': [
  {
    id: 'as-1',
    name: 'Kaziranga National Park',
    description: 'UNESCO World Heritage Site and home to the world\'s largest population of one-horned rhinoceros.',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
    rating: 4.8,
    bestTime: 'November-April',
    season: 'winter',
    attractions: ['Rhino Safari', 'Elephant Rides', 'Bird Watching', 'Jeep Safari'],
    seasonalTip: 'Book safari permits in advance. Early morning safaris offer best wildlife sightings.'
  },
  {
    id: 'as-2',
    name: 'Majuli',
    description: 'World\'s largest river island on Brahmaputra with unique culture, satras, and Vaishnavite monasteries.',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80',
    rating: 4.6,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Satras (Monasteries)', 'Mask Making', 'Pottery Villages', 'Kamalabari Satra'],
    seasonalTip: 'Reach by ferry from Jorhat. Experience traditional mask-making and Mishing tribal culture.'
  },
  {
    id: 'as-3',
    name: 'Guwahati',
    description: 'Gateway to Northeast with ancient Kamakhya Temple, Brahmaputra cruises, and vibrant markets.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    rating: 4.4,
    bestTime: 'October-April',
    season: 'winter',
    attractions: ['Kamakhya Temple', 'Umananda Island', 'Brahmaputra River Cruise', 'Assam State Museum'],
    seasonalTip: 'Don\'t miss sunset cruise on Brahmaputra. Try authentic Assamese thali and tea.'
  },
  {
    id: 'as-4',
    name: 'Manas National Park',
    description: 'UNESCO World Heritage tiger reserve with diverse wildlife, scenic beauty, and river rafting.',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
    rating: 4.7,
    bestTime: 'November-March',
    season: 'winter',
    attractions: ['Tiger Reserve', 'Elephant Safari', 'River Rafting', 'Golden Langur'],
    seasonalTip: 'Combine wildlife safari with river rafting. Winter offers comfortable weather for exploration.'
  },
  {
    id: 'as-5',
    name: 'Sivasagar',
    description: 'Historic town with Ahom dynasty monuments, ancient temples, and rich cultural heritage.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
    rating: 4.3,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Rang Ghar', 'Talatal Ghar', 'Sivasagar Tank', 'Shiva Dol'],
    seasonalTip: 'Perfect for history enthusiasts. Explore Ahom architecture and visit during Bihu festival.'
  }
  ],
  'Bihar': [
  {
    id: 'bh-1',
    name: 'Bodh Gaya',
    description: 'Sacred Buddhist pilgrimage site where Buddha attained enlightenment under the Bodhi Tree.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    rating: 4.8,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Mahabodhi Temple', 'Bodhi Tree', 'Great Buddha Statue', 'Thai Monastery'],
    seasonalTip: 'Visit during Buddha Purnima for special celebrations. Winter offers pleasant weather for temple visits.'
  },
  {
    id: 'bh-2',
    name: 'Nalanda',
    description: 'Ancient university ruins and UNESCO World Heritage Site showcasing India\'s educational legacy.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
    rating: 4.6,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Nalanda University Ruins', 'Archaeological Museum', 'Hiuen Tsang Memorial', 'Great Stupa'],
    seasonalTip: 'Hire a guide for historical context. Combine with Rajgir visit for complete experience.'
  },
  {
    id: 'bh-3',
    name: 'Rajgir',
    description: 'Ancient city surrounded by hills with hot springs, Buddhist sites, and ropeway rides.',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    rating: 4.5,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Vishwa Shanti Stupa', 'Griddhakuta Peak', 'Hot Springs', 'Venuvan'],
    seasonalTip: 'Take ropeway to Shanti Stupa for panoramic views. Hot springs are therapeutic year-round.'
  },
  {
    id: 'bh-4',
    name: 'Patna',
    description: 'Historic capital city with Golghar, museums, and Mahatma Gandhi Setu bridge.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    rating: 4.2,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Golghar', 'Patna Museum', 'Takht Sri Patna Sahib', 'Gandhi Ghat'],
    seasonalTip: 'Explore Patna Museum for ancient artifacts. Try famous litti chokha from local eateries.'
  },
  {
    id: 'bh-5',
    name: 'Vaishali',
    description: 'Ancient republic city with Buddhist stupas, Ashoka Pillar, and historical significance.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
    rating: 4.3,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Ashoka Pillar', 'Buddha Stupa', 'Kutagarasala Vihara', 'Coronation Tank'],
    seasonalTip: 'Important Buddhist pilgrimage site. Best explored with Bodh Gaya and Nalanda circuit.'
  }
  ],
' Chhattisgarh': [
  {
    id: 'ch-1',
    name: 'Chitrakote Falls',
    description: 'Horseshoe-shaped waterfall known as the "Niagara of India" on the Indravati River.',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    rating: 4.6,
    bestTime: 'July-October',
    season: 'monsoon',
    attractions: ['Main Waterfall', 'Boating', 'Tribal Villages', 'Bastar Palace'],
    seasonalTip: 'Monsoon brings the falls to full glory. Be cautious near edges during heavy flow.'
  },
  {
    id: 'ch-2',
    name: 'Bastar',
    description: 'Tribal heartland with unique indigenous culture, handicrafts, and dense forests.',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
    rating: 4.5,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Tribal Markets', 'Kanger Valley National Park', 'Tirathgarh Falls', 'Iron Craft Villages'],
    seasonalTip: 'Experience unique tribal culture and Dussehra celebrations. Shop for authentic Bastar crafts.'
  },
  {
    id: 'ch-3',
    name: 'Sirpur',
    description: 'Archaeological site with ancient Buddhist, Hindu and Jain temples and monasteries.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
    rating: 4.4,
    bestTime: 'October-February',
    season: 'winter',
    attractions: ['Lakshmana Temple', 'Buddhist Viharas', 'Surang Tila', 'Gandheswar Temple'],
    seasonalTip: 'Hidden gem for archaeology lovers. Early morning visits offer peaceful exploration.'
  },
  {
    id: 'ch-4',
    name: 'Barnawapara Wildlife Sanctuary',
    description: 'Diverse wildlife sanctuary with leopards, wild buffalos, and rich birdlife.',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
    rating: 4.3,
    bestTime: 'November-June',
    season: 'winter',
    attractions: ['Wildlife Safari', 'Bird Watching', 'Nature Trails', 'Leopard Sighting'],
    seasonalTip: 'Summer offers best wildlife sightings near water sources. Carry binoculars for birdwatching.'
  },
  {
    id: 'ch-5',
    name: 'Mainpat',
    description: 'Hill station known as "Shimla of Chhattisgarh" with Tibetan settlements and scenic beauty.',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47b9327f3a36?w=800&q=80',
    rating: 4.4,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Tiger Point', 'Fish Point', 'Tibetan Monastery', 'Jaljali Waterfalls'],
    seasonalTip: 'Cool climate year-round. Experience Tibetan culture and try momos at local eateries.'
  }
  ],
  'Goa': [
    {
      id: 'goa-1',
      name: 'North Goa Beaches',
      description: 'Famous for vibrant nightlife, water sports, beach shacks, and party culture along pristine beaches.',
      imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
      rating: 4.6,
      bestTime: 'November-February',
      season: 'winter',
      attractions: ['Baga Beach', 'Anjuna Beach', 'Calangute', 'Fort Aguada'],
      seasonalTip: 'Winter is perfect for beach activities. Book hotels early for Christmas and New Year.'
    },
    {
      id: 'goa-2',
      name: 'South Goa Beaches',
      description: 'Quieter, more serene beaches perfect for relaxation, away from the crowds.',
      imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      rating: 4.5,
      bestTime: 'November-March',
      season: 'winter',
      attractions: ['Palolem Beach', 'Agonda Beach', 'Butterfly Beach', 'Cabo de Rama'],
      seasonalTip: 'Ideal for couples and families seeking peaceful beach time and sunsets.'
    },
    {
      id: 'goa-3',
      name: 'Old Goa',
      description: 'Historical area showcasing Portuguese colonial architecture and UNESCO World Heritage churches.',
      imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
      rating: 4.4,
      bestTime: 'October-March',
      season: 'winter',
      attractions: ['Basilica of Bom Jesus', 'Se Cathedral', 'Church of St. Francis'],
      seasonalTip: 'Visit early morning to avoid crowds and heat. Great for history enthusiasts.'
    },
    {
      id: 'goa-4',
      name: 'Dudhsagar Falls',
      description: 'One of India\'s tallest waterfalls, surrounded by lush greenery and rich biodiversity.',
      imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      rating: 4.7,
      bestTime: 'June-September',
      season: 'monsoon',
      attractions: ['Waterfall Trek', 'Wildlife Sanctuary', 'Jeep Safari', 'Railway View'],
      seasonalTip: 'Monsoon brings the falls to life. Wear proper trekking shoes and be cautious.'
    },
    {
      id: 'goa-5',
      name: 'Panaji',
      description: 'The capital city with colorful Portuguese-style houses, riverfront views, and vibrant markets.',
      imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
      rating: 4.3,
      bestTime: 'November-February',
      season: 'winter',
      attractions: ['Fontainhas', 'Miramar Beach', 'Reis Magos Fort', 'Mandovi River Cruise'],
      seasonalTip: 'Explore on foot or bicycle. Try local Goan cuisine at riverside restaurants.'
    }
  ],
  'Gujarat': [
  {
    id: 'guj-1',
    name: 'Rann of Kutch',
    description: 'White salt desert with vibrant Rann Utsav festival, cultural performances, and full moon landscapes.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
    rating: 4.8,
    bestTime: 'November-February',
    season: 'winter',
    attractions: ['White Rann', 'Rann Utsav', 'Kala Dungar', 'Handicraft Villages'],
    seasonalTip: 'Visit during Rann Utsav for cultural extravaganza. Full moon nights are magical on white desert.'
  },
  {
    id: 'guj-2',
    name: 'Gir National Park',
    description: 'Only natural habitat of Asiatic lions with diverse wildlife and safari experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
    rating: 4.7,
    bestTime: 'December-March',
    season: 'winter',
    attractions: ['Asiatic Lion Safari', 'Kamleshwar Dam', 'Crocodile Point', 'Bird Watching'],
    seasonalTip: 'Book safari permits well in advance. Winter offers best lion sighting opportunities.'
  },
  {
    id: 'guj-3',
    name: 'Dwarka',
    description: 'Sacred Hindu pilgrimage city with ancient Krishna temples and coastal beauty.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    rating: 4.6,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Dwarkadhish Temple', 'Bet Dwarka', 'Rukmini Temple', 'Gomti Ghat'],
    seasonalTip: 'Combine temple visits with beach time at Bet Dwarka. Attend evening aarti at main temple.'
  },
  {
    id: 'guj-4',
    name: 'Somnath',
    description: 'Ancient Shiva temple on Arabian Sea coast, one of the twelve Jyotirlingas.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    rating: 4.7,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Somnath Temple', 'Triveni Sangam', 'Bhalka Tirth', 'Beach'],
    seasonalTip: 'Witness sound and light show in evening. Temple rebuilt multiple times, rich in history.'
  },
  {
    id: 'guj-5',
    name: 'Champaner-Pavagadh',
    description: 'UNESCO World Heritage Site with ancient forts, temples, and archaeological treasures.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
    rating: 4.5,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Pavagadh Fort', 'Kalika Mata Temple', 'Champaner Monuments', 'Ropeway'],
    seasonalTip: 'Take ropeway to hilltop temple. Explore Indo-Islamic architecture in Champaner.'
  }
  ],
  'Haryana': [
  {
    id: 'har-1',
    name: 'Kurukshetra',
    description: 'Sacred land of Mahabharata with holy tanks, temples, and spiritual significance.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    rating: 4.5,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Brahma Sarovar', 'Jyotisar', 'Kurukshetra Panorama', 'Sannihit Sarovar'],
    seasonalTip: 'Visit during solar eclipse for holy bath. Witness Gita Jayanti celebrations in December.'
  },
  {
    id: 'har-2',
    name: 'Sultanpur National Park',
    description: 'Bird sanctuary with over 250 species of resident and migratory birds.',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
    rating: 4.4,
    bestTime: 'November-February',
    season: 'winter',
    attractions: ['Bird Watching', 'Nature Trails', 'Watchtowers', 'Migratory Birds'],
    seasonalTip: 'Paradise for birdwatchers in winter. Carry binoculars and arrive early morning.'
  },
  {
    id: 'har-3',
    name: 'Pinjore Gardens',
    description: 'Mughal-style garden with terraced lawns, fountains, and historic architecture.',
    imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80',
    rating: 4.3,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Yadavindra Gardens', 'Mini Zoo', 'Japanese Garden', 'Heritage Buildings'],
    seasonalTip: 'Perfect picnic spot near Chandigarh. Visit during flower bloom season for vibrant colors.'
  },
  {
    id: 'har-4',
    name: 'Morni Hills',
    description: 'Only hill station in Haryana with twin lakes, trekking trails, and adventure sports.',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47b9327f3a36?w=800&q=80',
    rating: 4.2,
    bestTime: 'March-June, September-November',
    season: 'summer',
    attractions: ['Morni Lake', 'Tikkar Taal', 'Adventure Park', 'Trekking Trails'],
    seasonalTip: 'Weekend getaway from Delhi-NCR. Try boating in twin lakes and enjoy hill station climate.'
  },
  {
    id: 'har-5',
    name: 'Panipat',
    description: 'Historic city famous for three major battles and heritage monuments.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
    rating: 4.1,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Panipat Museum', 'Ibrahim Lodhi Tomb', 'Kabuli Bagh Mosque', 'Devi Temple'],
    seasonalTip: 'Important for history enthusiasts. Explore battle sites and Mughal-era architecture.'
  }
  ],
  'Himachal Pradesh': [
    {
      id: 'hp-1',
      name: 'Manali',
      description: 'A high-altitude Himalayan resort town famous for its cool climate, snow-capped mountains, and adventure sports.',
      imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      rating: 4.7,
      bestTime: 'May-October',
      season: 'summer',
      attractions: ['Rohtang Pass', 'Solang Valley', 'Hadimba Temple', 'Old Manali'],
      seasonalTip: 'Summer is perfect for escaping the heat. Book accommodations early as it\'s peak season.'
    },
    {
      id: 'hp-2',
      name: 'Shimla',
      description: 'The capital of Himachal Pradesh, known for colonial architecture, toy train rides, and panoramic mountain views.',
      imageUrl: 'https://images.unsplash.com/photo-1605649487212-47b9327f3a36?w=800&q=80',
      rating: 4.5,
      bestTime: 'March-June',
      season: 'summer',
      attractions: ['Mall Road', 'Ridge', 'Jakhu Temple', 'Christ Church'],
      seasonalTip: 'Pleasant weather makes it ideal for sightseeing. Try the toy train from Kalka to Shimla.'
    },
    {
      id: 'hp-3',
      name: 'Dharamshala',
      description: 'Home to the Dalai Lama, offering serene monasteries, Tibetan culture, and stunning mountain landscapes.',
      imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      rating: 4.6,
      bestTime: 'March-June',
      season: 'summer',
      attractions: ['McLeod Ganj', 'Namgyal Monastery', 'Bhagsu Falls', 'Triund Trek'],
      seasonalTip: 'Attend Tibetan cultural events and explore monasteries in the cool summer breeze.'
    },
    {
      id: 'hp-4',
      name: 'Kasol',
      description: 'A quaint village in Parvati Valley, known for its Israeli culture, trekking trails, and hippie vibe.',
      imageUrl: 'https://images.unsplash.com/photo-1605649487212-47b9327f3a36?w=800&q=80',
      rating: 4.4,
      bestTime: 'May-November',
      season: 'summer',
      attractions: ['Kheerganga Trek', 'Tosh Village', 'Parvati River', 'Malana'],
      seasonalTip: 'Great for camping and trekking. Try local Israeli cafes for unique cuisine.'
    },
    {
      id: 'hp-5',
      name: 'Spiti Valley',
      description: 'A cold desert mountain valley offering ancient monasteries, barren landscapes, and adventure.',
      imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      rating: 4.8,
      bestTime: 'June-September',
      season: 'summer',
      attractions: ['Key Monastery', 'Chandratal Lake', 'Kaza', 'Pin Valley'],
      seasonalTip: 'Only accessible in summer. Pack warm clothes and prepare for high altitude.'
    }
  ],
  'Jharkhand': [
    {
      id: 'jhk-1',
      name: 'Ranchi - The City of Waterfalls',
      description: 'The capital city, known for its numerous spectacular waterfalls, scenic hills, and blend of nature and urban culture.',
      imageUrl: 'https://images.unsplash.com/photo-1548174780-ccb009e53a25?w=800&q=80', // Placeholder for Ranchi Waterfall
      rating: 4.5,
      bestTime: 'October-March',
      season: 'winter',
      attractions: ['Hundru Falls', 'Dassam Falls', 'Jonha Falls', 'Tagore Hill', 'Rock Garden'],
      seasonalTip: 'Winter is excellent for comfortable sightseeing and waterfall visits. However, for maximum water flow, visit just after the monsoon (October).'
    },
    {
      id: 'jhk-2',
      name: 'Betla National Park',
      description: 'The only national park in Jharkhand, famous for being a core part of the Palamu Tiger Reserve, dense forests, and historical Palamau Forts.',
      imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80', // Placeholder for Wildlife/Forest
      rating: 4.6,
      bestTime: 'November-April',
      season: 'winter',
      attractions: ['Jeep Safari', 'Palamau Forts (inside park)', 'Koel River', 'Elephant Sighting'],
      seasonalTip: 'Wildlife sightings are highest in the winter and early summer (March-April) when animals gather near water sources. Park is closed during monsoon.'
    },
    {
      id: 'jhk-3',
      name: 'Parasnath Hill (Sammed Shikharji)',
      description: 'The highest mountain peak in Jharkhand and the most significant pilgrimage site for Jains, where 20 Tirthankaras attained salvation.',
      imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80', // Placeholder for high altitude/pilgrimage
      rating: 4.7,
      bestTime: 'October-March',
      season: 'winter',
      attractions: ['Shikharji Temple', 'Jain Temples (Tuks)', 'Mountain Trekking', 'Parasnath Wildlife Sanctuary'],
      seasonalTip: 'The long trek/climb to the summit is best undertaken in the cool winter months. Start early morning to avoid daytime heat.'
    },
    {
      id: 'jhk-4',
      name: 'Deoghar (Baidyanath Dham)',
      description: 'A major Hindu pilgrimage center, home to the sacred Baidyanath Jyotirlinga Temple, one of the twelve Jyotirlingas of Lord Shiva.',
      imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80', // Placeholder for temple/pilgrimage
      rating: 4.8,
      bestTime: 'October-March',
      season: 'winter',
      attractions: ['Baidyanath Temple (Jyotirlinga)', 'Naulakha Mandir', 'Trikuta Hills', 'Tapovan Caves'],
      seasonalTip: 'The temple town is extremely crowded during the monsoon (Shravan month) pilgrimage. Visit in winter for a calmer experience.'
    },
    {
      id: 'jhk-5',
      name: 'Netarhat',
      description: 'A charming hill station known as the "Queen of Chotanagpur," famous for its stunning sunrise, sunset points, and lush pine forests.',
      imageUrl: 'https://images.unsplash.com/photo-1605649487212-47b9327f3a36?w=800&q=80', // Placeholder for Hill Station/Forest
      rating: 4.4,
      bestTime: 'October-April',
      season: 'winter',
      attractions: ['Magnolia Point (Sunrise/Sunset)', 'Koel View Point', 'Netarhat Dam', 'Lodh Falls (nearby)'],
      seasonalTip: 'The views are clearest and the weather is most pleasant during the winter. Pack heavy woolens as nights get very cold.'
    }
  ],
  'Karnataka': [
  {
    id: 'kar-1',
    name: 'Hampi',
    description: 'A UNESCO World Heritage Site and the magnificent capital of the Vijayanagara Empire, featuring stunning ruins, temples, and monolithic structures.',
    imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80', // Placeholder for Hampi Ruins
    rating: 4.8,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Virupaksha Temple', 'Stone Chariot (Vijaya Vittala Temple)', 'Lotus Mahal', 'Tungabhadra River'],
    seasonalTip: 'Visit during the cool winter months to comfortably explore the vast, open-air ruins. Hire a cycle or moped for easy movement.'
  },
  {
    id: 'kar-2',
    name: 'Coorg (Kodagu)',
    description: 'The "Scotland of India," a lush hill station famous for its coffee plantations, misty mountains, and the origin of the River Kaveri.',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', // Placeholder for Coorg Coffee Plantation
    rating: 4.7,
    bestTime: 'October-May',
    season: 'winter',
    attractions: ['Abbey Falls', 'Raja’s Seat', 'Talakaveri (Kaveri origin)', 'Dubare Elephant Camp', 'Nagarahole National Park'],
    seasonalTip: 'Winter is pleasant for outdoor activities. Monsoons bring out the full greenery but limit trekking. Sample the local "Pandi Curry."'
  },
  {
    id: 'kar-3',
    name: 'Mysore',
    description: 'The Cultural Capital of Karnataka, known for its royal heritage, grand palaces, vibrant Dasara festival, and beautiful gardens.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80', // Placeholder for Mysore Palace
    rating: 4.6,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Mysore Palace', 'Brindavan Gardens', 'Chamundi Hills', 'Mysore Zoo'],
    seasonalTip: 'Visit during Dasara (Oct/Nov) for the grandest celebrations. See the Mysore Palace illuminated on Sundays and public holidays.'
  },
  {
    id: 'kar-4',
    name: 'Gokarna',
    description: 'A quieter, religious beach town with crescent-shaped beaches, a sacred Shiva temple, and a relaxed, bohemian vibe.',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80', // Placeholder for Gokarna Beach
    rating: 4.5,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Om Beach', 'Kudle Beach', 'Mahabaleshwar Temple', 'Half Moon Beach'],
    seasonalTip: 'Winter offers perfect weather for water sports and beach camping. Trek between the various crescent-shaped beaches.'
  }
  ],
  'Madhya Pradesh': [
  {
    id: 'mp-1',
    name: 'Khajuraho Group of Monuments',
    description: 'A UNESCO World Heritage Site famous for its stunning Hindu and Jain temples, renowned for intricate and erotic stone carvings.',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80', // Placeholder for Khajuraho Temple
    rating: 4.7,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Kandariya Mahadeva Temple', 'Lakshmana Temple', 'Chaturbhuj Temple', 'Khajuraho Dance Festival (Feb)'],
    seasonalTip: 'The dry, cool weather of winter is best for touring the open-air temple complexes. Attend the annual Dance Festival if visiting in February.'
  },
  {
    id: 'mp-2',
    name: 'Kanha National Park',
    description: 'One of the largest national parks, known as the "Land of the Barasingha" and the primary inspiration for Rudyard Kipling’s "The Jungle Book."',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80', // Placeholder for Kanha Tiger/Wildlife
    rating: 4.8,
    bestTime: 'October-June',
    season: 'winter',
    attractions: ['Tiger Safari (Mukki/Kanha Zone)', 'Barasingha Sighting', 'Kanha Museum', 'Sunset Point'],
    seasonalTip: 'Park access is closed during monsoon. Winter is best for comfortable safaris; early summer (April/May) offers higher chances of tiger sightings near water holes.'
  },
  {
    id: 'mp-3',
    name: 'Bhedaghat (Jabalpur)',
    description: 'Known for the stunning Marble Rocks, where the Narmada River cuts through a gorge of white, soft marble cliffs, and the powerful Dhuandhar Falls.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80', // Placeholder for Bhedaghat/Marble Rocks
    rating: 4.5,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Dhuandhar Falls', 'Marble Rocks Boating (full moon)', 'Chausath Yogini Temple', 'Rani Durgavati Museum'],
    seasonalTip: 'Take the boat ride through the marble gorge on a full moon night for an unforgettable experience. Falls are spectacular post-monsoon.'
  },
  {
    id: 'mp-4',
    name: 'Sanchi Stupa',
    description: 'A UNESCO World Heritage Site and one of the oldest stone structures in India, commissioned by Emperor Ashoka, symbolizing Buddhist art and architecture.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80', // Placeholder for Sanchi Stupa
    rating: 4.4,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Great Stupa (Stupa 1)', 'Ashoka Pillar', 'Monasteries and Temples', 'Archaeological Museum'],
    seasonalTip: 'Ideal for history and peace lovers. Winter allows for leisurely walks around the monument complex without intense heat.'
  },
  {
    id: 'mp-5',
    name: 'Ujjain & Omkareshwar',
    description: 'Twin sacred pilgrimage destinations: Ujjain is home to Mahakaleshwar Jyotirlinga, and Omkareshwar is a holy island with another Jyotirlinga, on the Narmada River.',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80', // Placeholder for temple/pilgrimage
    rating: 4.6,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Mahakaleshwar Jyotirlinga (Ujjain)', 'Omkareshwar Jyotirlinga', 'Ram Ghat', 'Kal Bhairav Temple'],
    seasonalTip: 'Visit during winter for comfortable darshan timings and a bath in the holy rivers/ghats.'
  }
  ],
  'Maharashtra': [
  {
    id: 'mah-1',
    name: 'Ajanta and Ellora Caves',
    description: 'UNESCO World Heritage Sites, a series of rock-cut caves featuring elaborate Buddhist, Hindu, and Jain monuments and ancient artwork/frescoes.',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47b9327f3a36?w=800&q=80', // Placeholder for Ajanta/Ellora Caves
    rating: 4.9,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Kailasa Temple (Ellora)', 'Cave Paintings (Ajanta)', 'Cave Sculptures', 'Grishneshwar Jyotirlinga (nearby)'],
    seasonalTip: 'The weather is most conducive for spending hours exploring the intricate carvings inside the caves and walking up to the sites.'
  },
  {
    id: 'mah-2',
    name: 'Mumbai',
    description: 'The financial, entertainment, and fashion capital of India, known for Bollywood, colonial architecture, and bustling street life.',
    imageUrl: 'https://images.unsplash.com/photo-1548174780-ccb009e53a25?w=800&q=80', // Placeholder for Mumbai skyline/Marine Drive
    rating: 4.5,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Gateway of India', 'Marine Drive', 'Chhatrapati Shivaji Maharaj Terminus (CSMT)', 'Elephanta Caves', 'Sanjay Gandhi National Park'],
    seasonalTip: 'The "winter" season offers relatively cooler and less humid weather, perfect for exploring the city streets and monuments on foot.'
  },
  {
    id: 'mah-3',
    name: 'Lonavala & Khandala',
    description: 'Twin hill stations in the Western Ghats, popular weekend getaways known for their lush valleys, misty roads, scenic dams, and ancient forts.',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', // Placeholder for Lonavala/Khandala Valley
    rating: 4.4,
    bestTime: 'October-May (Monsoon for greenery)',
    season: 'monsoon',
    attractions: ['Tiger Point (Tiger’s Leap)', 'Bushy Dam', 'Kune Falls', 'Lohagad Fort', 'Karla Caves'],
    seasonalTip: 'Monsoon brings dramatic waterfalls and thick mist, making the drive highly scenic, but roads can be slippery. Winter is great for trekking.'
  },
  {
    id: 'mah-4',
    name: 'Mahabaleshwar',
    description: 'A popular hill station and the "Strawberry Capital of India," famous for its panoramic viewpoints, lakes, ancient temples, and lush forests.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80', // Placeholder for Mahabaleshwar Valley
    rating: 4.6,
    bestTime: 'October-June',
    season: 'winter',
    attractions: ['Wilson Point', 'Arthur’s Seat', 'Venna Lake', 'Pratapgad Fort', 'Mapro Garden'],
    seasonalTip: 'Peak season for strawberry harvest is January to March. Enjoy the crisp, cool air of the winter for the best viewpoint experiences.'
  },
  {
    id: 'mah-5',
    name: 'Tadoba-Andhari Tiger Reserve',
    description: 'Maharashtra’s oldest and largest national park, a pristine forest reserve with one of the highest tiger densities in India.',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80', // Placeholder for Tiger/Tadoba
    rating: 4.7,
    bestTime: 'October-April',
    season: 'winter',
    attractions: ['Jungle Safari (Tiger Sighting)', 'Tadoba Lake', 'Dense Teak and Bamboo Forests', 'Wildlife Photography'],
    seasonalTip: 'Book safaris early, as permits are limited. The best time for tiger sighting is during the intense heat of April and May, but winter is more comfortable.'
  }
  ],
  'Manipur': [
  {
    id: 'man-1',
    name: 'Loktak Lake & Keibul Lamjao National Park',
    description: 'The largest freshwater lake in Northeast India, famous for its unique circular floating islands (phumdis) and the only floating national park in the world, home to the endangered Sangai deer.',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80', // Placeholder for Loktak Lake
    rating: 4.8,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Floating Phumdis', 'Keibul Lamjao National Park', 'Sangai Deer', 'Sendra Island'],
    seasonalTip: 'Visit during winter for pleasant boat rides and the best chance to spot the migratory birds and Sangai deer.'
  },
  {
    id: 'man-2',
    name: 'Imphal',
    description: 'The capital city, a historical and cultural hub with ancient forts, war memorials, and the unique all-women market, Ima Keithel.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80', // Placeholder for Imphal City/Kangla Fort
    rating: 4.4,
    bestTime: 'September-April',
    season: 'winter',
    attractions: ['Kangla Fort', 'Ima Keithel (Mother’s Market)', 'Manipur State Museum', 'Shree Govindajee Temple'],
    seasonalTip: 'Explore the Ima Keithel market for a unique cultural experience. Carry light jackets as evenings can be cool.'
  },
  {
    id: 'man-3',
    name: 'Dzukou Valley',
    description: 'A breathtaking valley bordering Nagaland, known for its rolling meadows, seasonal flowers (including the rare Dzukou Lily), and challenging trekking trails.',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80', // Placeholder for Dzukou Valley
    rating: 4.7,
    bestTime: 'June-September (Flowers), October-March (Trek)',
    season: 'summer',
    attractions: ['Dzukou Lily Bloom', 'Trekking to the Valley Floor', 'Vibrant Natural Landscape'],
    seasonalTip: 'For a colourful bloom, visit during monsoon/summer (June-September). For hiking, the cool, dry winter is preferred.'
  }
  ],
  'Meghalaya': [
  {
    id: 'meg-1',
    name: 'Cherrapunji (Sohra) & Mawsynram',
    description: 'The region famous as the wettest place on Earth, featuring deep canyons, spectacular waterfalls (like Nohkalikai), and the ingenious living root bridges.',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80', // Placeholder for Nohkalikai Falls
    rating: 4.8,
    bestTime: 'June-September (Waterfalls), October-March (Trek)',
    season: 'monsoon',
    attractions: ['Nohkalikai Falls', 'Seven Sisters Falls', 'Mawsmai Caves', 'Double Decker Living Root Bridge'],
    seasonalTip: 'Monsoon season brings the waterfalls to full force, but treks are muddy. Wear sturdy, waterproof shoes and carry rain gear.'
  },
  {
    id: 'meg-2',
    name: 'Shillong',
    description: 'The capital, famously known as the "Scotland of the East," set amidst rolling hills with a pleasant climate, colonial-era charm, and a bustling cultural scene.',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47b9327f3a36?w=800&q=80', // Placeholder for Shillong City/Umiam Lake
    rating: 4.5,
    bestTime: 'September-May',
    season: 'spring',
    attractions: ['Umiam Lake', 'Elephant Falls', 'Shillong Peak', 'Don Bosco Museum', 'Police Bazaar'],
    seasonalTip: 'Spring (March-May) offers the most pleasant weather for exploring the city, including boating and picnics around Umiam Lake.'
  },
  {
    id: 'meg-3',
    name: 'Mawlynnong & Dawki',
    description: 'Mawlynnong is famous as "Asia’s Cleanest Village" for its eco-tourism and living root bridges. Dawki is a border town with the crystal-clear Umngot River.',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', // Placeholder for Umngot River, Dawki
    rating: 4.7,
    bestTime: 'October-April',
    season: 'winter',
    attractions: ['Mawlynnong Village', 'Single Living Root Bridge', 'Umngot River Boating (Dawki)', 'India-Bangladesh Border Gate'],
    seasonalTip: 'For the stunning transparent river view at Dawki, visit in the dry winter months (Nov-Feb). Water clarity is reduced during the monsoon.'
  },
  {
    id: 'meg-4',
    name: 'Laitlum Canyons',
    description: 'A spectacular natural amphitheater offering panoramic, breathtaking views of the vast canyons, deep gorges, and surrounding rolling hills of Meghalaya.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80', // Placeholder for Laitlum Canyon
    rating: 4.6,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Panoramic Valley Viewpoints', 'Trekking to the bottom village', 'Sunrise/Sunset Views'],
    seasonalTip: 'Visit early morning to witness the canyons shrouded in mist. The post-monsoon clarity offers the best views of the landscape.'
  }
  ],
  'Mizoram': [
  {
    id: 'miz-1',
    name: 'Aizawl',
    description: 'The capital city, set on steep ridges, known for its picturesque landscape, vibrant Mizo culture, and Christian heritage.',
    imageUrl: 'https://images.unsplash.com/photo-1548174780-ccb009e53a25?w=800&q=80', // Placeholder for Aizawl City
    rating: 4.5,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Durtlang Hills', 'Solomon\'s Temple', 'Mizoram State Museum', 'Reiek Tlang (nearby)'],
    seasonalTip: 'Winter is the best time for clear views and comfortable exploration of the city and nearby peaks like Reiek.'
  },
  {
    id: 'miz-2',
    name: 'Vantawng Falls',
    description: 'The highest and most spectacular waterfall in Mizoram, surrounded by dense bamboo groves, falling from a height of 750 feet (228m).',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47b9327f3a36?w=800&q=80', // Placeholder for Vantawng Falls
    rating: 4.7,
    bestTime: 'September-January',
    season: 'monsoon',
    attractions: ['Main Waterfall Viewpoint', 'Thenzawl (nearby)', 'Lush Bamboo Forests'],
    seasonalTip: 'The flow is strongest just after the monsoon (September-November). Viewing platform offers the best perspective of the high cascade.'
  },
  {
    id: 'miz-3',
    name: 'Phawngpui (Blue Mountain)',
    description: 'The highest peak in Mizoram, considered the abode of the gods, famous for its magnificent flowering trees (rhododendrons) and orchids.',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80', // Placeholder for Blue Mountain
    rating: 4.6,
    bestTime: 'November-April',
    season: 'spring',
    attractions: ['Phawngpui National Park', 'Blue Mountain Peak', 'Orchid & Rhododendron trails'],
    seasonalTip: 'Spring (March-April) is ideal for witnessing the rhododendrons in full bloom, painting the mountain slopes with colour.'
  },
  {
    id: 'miz-4',
    name: 'Palak Lake (Pala Tipo)',
    description: 'The largest natural lake in Mizoram, believed to have been formed by an earthquake or a flood. It is a major biodiversity spot with rich birdlife.',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80', // Placeholder for Palak Lake
    rating: 4.4,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Lake Boating', 'Bird Watching', 'Surrounding Forests', 'Wildlife Sanctuary (nearby)'],
    seasonalTip: 'Winter draws migratory birds, making it excellent for ornithologists and nature photography.'
  }
  ],
  'Nagaland': [
  {
    id: 'nag-1',
    name: 'Kohima & Naga Heritage Village',
    description: 'The capital city, famous for the poignant World War II Cemetery and the Kisama Heritage Village, the primary venue for the Hornbill Festival.',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80', // Placeholder for Naga Heritage Village/War Cemetery
    rating: 4.6,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Hornbill Festival (Dec)', 'Kohima War Cemetery', 'Naga Heritage Village', 'Nagaland State Museum'],
    seasonalTip: 'December is the best time to visit to experience the vibrant Hornbill Festival. Book accommodations well in advance for this period.'
  },
  {
    id: 'nag-2',
    name: 'Dzüko Valley',
    description: 'A valley located on the border of Nagaland and Manipur, known as a trekking paradise famous for its rolling hills, lush meadows, and seasonal Dzüko Lily flowers.',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47b9327f3a36?w=800&q=80', // Placeholder for Dzukou Valley
    rating: 4.8,
    bestTime: 'June-September (Flowers), October-March (Trek)',
    season: 'summer',
    attractions: ['Trekking Trails', 'Rare Flowers/Lillies', 'Japfu Peak (nearby)'],
    seasonalTip: 'Monsoon brings out the flowers, but winter offers clearer skies and dry trails, which are preferable for most trekkers.'
  },
  {
    id: 'nag-3',
    name: 'Mon',
    description: 'The land of the Konyak Naga tribe, famous for their unique tradition of tattooing and the picturesque Longwa Village, which straddles the Indo-Myanmar border.',
    imageUrl: 'https://images.unsplash.com/photo-1548174780-ccb009e53a25?w=800&q=80', // Placeholder for Mon/Longwa Village
    rating: 4.5,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Longwa Village', 'Konyak Tribal Culture', 'Chief’s House (Angh\'s Residence)'],
    seasonalTip: 'Mon is remote; ensure you have all necessary inner line permits (ILP). Visit during the winter for comfortable travel conditions.'
  },
  {
    id: 'nag-4',
    name: 'Khonoma Village',
    description: 'Known as the first "Green Village" of India, famous for its sustainable eco-tourism, Angami tribal heritage, and history of resisting the British.',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', // Placeholder for Khonoma Village
    rating: 4.7,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Eco-Tourism Initiatives', 'Terraced Fields', 'Historical Gates', 'Angami Handicrafts'],
    seasonalTip: 'Stay in a local homestay to experience the Angami culture and local cuisine firsthand.'
  }
  ],
  'Odisha': [
  {
    id: 'odi-1',
    name: 'Puri',
    description: 'A coastal city and one of the four *Char Dham* Hindu pilgrimage sites, famous for the sacred Jagannath Temple and the vibrant Puri Beach.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80', // Placeholder for Jagannath Temple
    rating: 4.8,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Shree Jagannath Temple', 'Puri Beach', 'Gundicha Temple', 'Rath Yatra Festival (June/July)'],
    seasonalTip: 'Winter is ideal for temple visits and beach activities. Be aware of large crowds during the famous annual Rath Yatra festival.'
  },
  {
    id: 'odi-2',
    name: 'Konark Sun Temple',
    description: 'A UNESCO World Heritage Site and an architectural marvel, built as a colossal chariot for the Sun God Surya, famous for its intricate carvings and stone wheels.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80', // Placeholder for Konark Sun Temple
    rating: 4.7,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Sun Temple Chariot Wheels', 'Konark Dance Festival (Dec)', 'ASI Museum', 'Chandrabhaga Beach'],
    seasonalTip: 'Visit the temple early morning or late afternoon for the best photography and to avoid the mid-day sun. Attend the Konark Dance Festival for a cultural treat.'
  },
  {
    id: 'odi-3',
    name: 'Bhubaneswar',
    description: 'The "Temple City of India," an ancient city blending historic temples (Kalinga architecture) with modern urban development and wildlife sanctuaries.',
    imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80', // Placeholder for Lingaraj Temple
    rating: 4.5,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Lingaraj Temple', 'Rajarani Temple', 'Udayagiri & Khandagiri Caves', 'Nandankanan Zoo'],
    seasonalTip: 'Plan a visit to the Nandankanan Zoo during the mild winter for comfortable wildlife viewing.'
  },
  {
    id: 'odi-4',
    name: 'Chilika Lake',
    description: 'Asia’s largest brackish water lagoon and a UNESCO World Heritage Tentative Site, famous as a bird sanctuary and for the rare Irrawaddy dolphins.',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80', // Placeholder for Chilika Lake
    rating: 4.6,
    bestTime: 'November-February',
    season: 'winter',
    attractions: ['Irrawaddy Dolphin Sighting', 'Migratory Bird Watching', 'Nalbana Bird Sanctuary', 'Kalijai Temple'],
    seasonalTip: 'The winter months are the best time for birdwatching as thousands of migratory birds flock to the lake.'
  }
  ],
  'Punjab': [
  {
    id: 'pun-1',
    name: 'Amritsar',
    description: 'The spiritual and cultural center of Sikhism, home to the Golden Temple, and a city of immense historical and patriotic significance.',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80', // Placeholder for Golden Temple
    rating: 4.9,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Golden Temple (Harmandir Sahib)', 'Wagah Border Ceremony', 'Jallianwala Bagh', 'Partition Museum'],
    seasonalTip: 'Winter offers a comfortable climate for the long queues at the Golden Temple and standing for the Wagah Border ceremony.'
  },
  {
    id: 'pun-2',
    name: 'Wagah Border',
    description: 'The famous Indo-Pakistan border crossing, known for the daily "Beating Retreat" ceremony, a highly dramatic and patriotic military spectacle.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80', // Placeholder for Wagah Border
    rating: 4.7,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Beating Retreat Ceremony', 'Patriotic Atmosphere'],
    seasonalTip: 'Arrive at least an hour before sunset to secure a good viewing spot. The cool winter weather makes waiting more comfortable.'
  },
  {
    id: 'pun-3',
    name: 'Chandigarh',
    description: 'The capital of both Punjab and Haryana, famously known as the first planned city of India, renowned for its modern architecture and urban design.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80', // Placeholder for Rock Garden/Sukhna Lake
    rating: 4.5,
    bestTime: 'August-March',
    season: 'winter',
    attractions: ['Rock Garden', 'Sukhna Lake', 'Capitol Complex (UNESCO)', 'Zakir Hussain Rose Garden'],
    seasonalTip: 'Winter is perfect for visiting the large open-air gardens and parks. Carry light jackets, especially for early morning and evening boat rides on Sukhna Lake.'
  },
  {
    id: 'pun-4',
    name: 'Patiala',
    description: 'The "Royal City" famous for its rich history, palaces, and distinct architectural style which is a blend of Mughal, Rajput, and Punjabi elements.',
    imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80', // Placeholder for Patiala Palace/Fort
    rating: 4.3,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Qila Mubarak', 'Sheesh Mahal', 'Moti Bagh Palace', 'Kali Mata Mandir'],
    seasonalTip: 'Explore the historical monuments in the winter when the sun is mild, and shop for authentic Patiala Salwar and Juttis.'
  }
  ],
  'Rajasthan': [
    {
      id: 'raj-1',
      name: 'Jaipur',
      description: 'The Pink City, known for magnificent palaces, forts, vibrant bazaars, and rich royal heritage.',
      imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
      rating: 4.6,
      bestTime: 'November-February',
      season: 'winter',
      attractions: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar'],
      seasonalTip: 'Winter is ideal for sightseeing. Start early to cover major attractions before afternoon heat.'
    },
    {
      id: 'raj-2',
      name: 'Udaipur',
      description: 'The City of Lakes, featuring stunning palaces, romantic boat rides, and regal architecture.',
      imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
      rating: 4.7,
      bestTime: 'October-March',
      season: 'winter',
      attractions: ['Lake Pichola', 'City Palace', 'Jagdish Temple', 'Saheliyon Ki Bari'],
      seasonalTip: 'Sunset boat rides on Lake Pichola are magical. Book heritage hotels for royal experience.'
    },
    {
      id: 'raj-3',
      name: 'Jaisalmer',
      description: 'The Golden City in the Thar Desert, famous for sandstone architecture and camel safaris.',
      imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
      rating: 4.5,
      bestTime: 'November-February',
      season: 'winter',
      attractions: ['Jaisalmer Fort', 'Sam Sand Dunes', 'Patwon Ki Haveli', 'Gadisar Lake'],
      seasonalTip: 'Experience desert camping under stars. Winter nights can be cold, pack accordingly.'
    },
    {
      id: 'raj-4',
      name: 'Jodhpur',
      description: 'The Blue City, with a massive hilltop fort, blue-painted houses, and bustling markets.',
      imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
      rating: 4.6,
      bestTime: 'October-March',
      season: 'winter',
      attractions: ['Mehrangarh Fort', 'Jaswant Thada', 'Umaid Bhawan', 'Clock Tower'],
      seasonalTip: 'Climb Mehrangarh Fort early morning for best light. Try local mirchi vada and makhania lassi.'
    },
    {
      id: 'raj-5',
      name: 'Pushkar',
      description: 'Sacred town with a holy lake, colorful markets, and the famous Pushkar Camel Fair.',
      imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
      rating: 4.4,
      bestTime: 'October-March',
      season: 'winter',
      attractions: ['Pushkar Lake', 'Brahma Temple', 'Camel Fair', 'Savitri Temple'],
      seasonalTip: 'Time your visit with the Pushkar Fair in November for unique cultural experience.'
    }
  ],
  'Sikkim': [
  {
    id: 'sik-1',
    name: 'Gangtok & Tsomgo Lake',
    description: 'The state capital, blending modern infrastructure with Buddhist culture, serving as the gateway to high-altitude destinations like the sacred Tsomgo (Changu) Lake and Nathula Pass.',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80', // Placeholder for Tsomgo Lake/Gangtok
    rating: 4.6,
    bestTime: 'March-May & October-November',
    season: 'spring',
    attractions: ['MG Marg', 'Tsomgo Lake', 'Nathula Pass', 'Rumtek Monastery', 'Enchey Monastery'],
    seasonalTip: 'Spring offers clear skies for mountain views, while autumn is great for pleasant weather. Carry permits for Tsomgo Lake/Nathula Pass and wear layers.'
  },
  {
    id: 'sik-2',
    name: 'North Sikkim (Lachen & Lachung)',
    description: 'A remote region featuring vast alpine valleys, snow-capped mountains, and the high-altitude, sacred Gurudongmar Lake and Yumthang Valley (Valley of Flowers).',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80', // Placeholder for North Sikkim Landscape
    rating: 4.8,
    bestTime: 'April-May & October-November',
    season: 'spring',
    attractions: ['Gurudongmar Lake', 'Yumthang Valley (Valley of Flowers)', 'Lachung Monastery', 'Zero Point'],
    seasonalTip: 'Roads are best in Spring/Autumn. April-May is ideal to see the Rhododendrons blooming in Yumthang Valley. Requires special permits.'
  },
  {
    id: 'sik-3',
    name: 'Pelling',
    description: 'The second most-visited town after Gangtok, offering stunning, close-up panoramic views of the Kanchenjunga peak and housing historical monasteries.',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47b9327f3a36?w=800&q=80', // Placeholder for Kanchenjunga View
    rating: 4.5,
    bestTime: 'March-May & September-December',
    season: 'winter',
    attractions: ['Kanchenjunga Falls', 'Pemayangtse Monastery', 'Khecheopalri Lake', 'Rabdentse Ruins'],
    seasonalTip: 'The clearest mountain views are guaranteed during the post-monsoon and winter months. Visit the viewpoints at sunrise.'
  },
  {
    id: 'sik-4',
    name: 'Namchi',
    description: 'A prominent pilgrimage and cultural centre in South Sikkim, known for its massive statues of Guru Padmasambhava and the replicated Char Dham complex.',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80', // Placeholder for Namchi Statue
    rating: 4.4,
    bestTime: 'October-May',
    season: 'spring',
    attractions: ['Samdruptse Statue', 'Chaar Dham Complex', 'Temi Tea Garden', 'Tarey Bhir'],
    seasonalTip: 'The weather is pleasant for walking around the religious complexes. Visit the Temi Tea Garden in March-May for a rich view.'
  }
  ],
  'Tamil Nadu': [
  {
    id: 'tn-1',
    name: 'Madurai & Meenakshi Amman Temple',
    description: 'The cultural capital of Tamil Nadu, centered around the historic and magnificent Meenakshi Amman Temple, famed for its towering, colorful gopurams (gateways).',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80', // Placeholder for Meenakshi Temple
    rating: 4.8,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Meenakshi Amman Temple', 'Thirumalai Nayakkar Mahal', 'Gandhi Memorial Museum', 'Koodal Azhagar Temple'],
    seasonalTip: 'Ideal weather for temple visits. Attend the *Aarti* (evening prayer) for a vibrant spiritual experience.'
  },
  {
    id: 'tn-2',
    name: 'Kanyakumari',
    description: 'The southernmost tip of the Indian mainland, famous for being the confluence of the Arabian Sea, Bay of Bengal, and Indian Ocean, and for its spectacular sunrises/sunsets.',
    imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80', // Placeholder for Kanyakumari View
    rating: 4.6,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Vivekananda Rock Memorial', 'Thiruvalluvar Statue', 'Kanyakumari Beach', 'Sunrise/Sunset Point'],
    seasonalTip: 'Winter provides the clearest skies for viewing the simultaneous sunrise and moonset over the ocean confluence.'
  },
  {
    id: 'tn-3',
    name: 'Ooty (Udhagamandalam)',
    description: 'The "Queen of Hill Stations" in the Nilgiri Hills, famous for its picturesque landscapes, tea plantations, botanical gardens, and the Nilgiri Mountain Railway toy train.',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', // Placeholder for Ooty Tea Gardens
    rating: 4.5,
    bestTime: 'October-June',
    season: 'spring',
    attractions: ['Nilgiri Mountain Railway', 'Ooty Lake', 'Botanical Gardens', 'Doddabetta Peak', 'Tea Museum'],
    seasonalTip: 'Pleasant weather in spring is great for walks and gardens. Book the toy train tickets well in advance, especially in peak season.'
  },
  {
    id: 'tn-4',
    name: 'Mahabalipuram (Mamallapuram)',
    description: 'A UNESCO World Heritage Site on the Coromandel Coast, famous for its 7th & 8th-century rock-cut temples and monolithic carvings of the Pallava dynasty.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80', // Placeholder for Mahabalipuram Shore Temple
    rating: 4.7,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Shore Temple', 'Pancha Rathas', 'Descent of the Ganges (Arjuna\'s Penance)', 'Krishna\'s Butter Ball'],
    seasonalTip: 'Visit in the cool winter to comfortably explore the outdoor monuments and historical carvings.'
  },
  {
    id: 'tn-5',
    name: 'Rameshwaram',
    description: 'A major Hindu pilgrimage island and one of the four *Char Dhams*, renowned for the Ramanathaswamy Temple and its connection to the Ramayana epic.',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80', // Placeholder for Rameswaram Temple Corridor
    rating: 4.4,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Ramanathaswamy Temple', 'Pamban Bridge', 'Dhanushkodi (Ghost Town)', 'Agni Theertham'],
    seasonalTip: 'The Pamban Bridge views are best in clear winter weather. Temple darshans are more comfortable in the non-humid season.'
  }
  ],
  'Telangana': [
  {
    id: 'tel-1',
    name: 'Hyderabad',
    description: 'The capital city, famously known as the "City of Pearls," blending grand Islamic architecture (Nizams) with a booming IT hub and world-famous cuisine.',
    imageUrl: 'https://images.unsplash.com/photo-1548174780-ccb009e53a25?w=800&q=80', // Placeholder for Charminar/Hyderabad
    rating: 4.7,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Charminar', 'Golconda Fort', 'Salar Jung Museum', 'Hussain Sagar Lake', 'Ramoji Film City'],
    seasonalTip: 'Winter is the ideal time to explore the city, visit the forts, and enjoy street food like Hyderabadi Biryani.'
  },
  {
    id: 'tel-2',
    name: 'Warangal',
    description: 'The former capital of the Kakatiya Dynasty, a UNESCO World Heritage Tentative Site with magnificent ruins, including the iconic Warangal Fort and Thousand Pillar Temple.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80', // Placeholder for Warangal Fort Arch
    rating: 4.5,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Warangal Fort (Kakatiya Kala Thoranam)', 'Thousand Pillar Temple', 'Ramappa Temple (UNESCO)', 'Bhadrakali Temple'],
    seasonalTip: 'Best visited in the cool months to walk around the extensive fort and temple complex grounds.'
  },
  {
    id: 'tel-3',
    name: 'Nagarjuna Sagar & Srisailam',
    description: 'Nagarjuna Sagar features one of the world\'s largest masonry dams and is a significant Buddhist site. Srisailam is a major Shiva pilgrimage (Jyotirlinga).',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47b9327f3a36?w=800&q=80', // Placeholder for Nagarjuna Sagar Dam
    rating: 4.4,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Nagarjuna Sagar Dam', 'Nagarjunakonda Museum', 'Srisailam Temple (nearby)', 'Ethipothala Falls'],
    seasonalTip: 'Perfect for a weekend getaway from Hyderabad. Boating at Nagarjuna Sagar and the dam\'s gates opening are best viewed post-monsoon.'
  },
  {
    id: 'tel-4',
    name: 'Kuntala Waterfalls (Adilabad)',
    description: 'The highest waterfall in Telangana, surrounded by dense forest, providing a beautiful natural retreat and a popular spot for trekking enthusiasts.',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', // Placeholder for Kuntala Falls
    rating: 4.3,
    bestTime: 'September-December',
    season: 'monsoon',
    attractions: ['Main Waterfall Cascade', 'Trekking Trail', 'Kawal Wildlife Sanctuary (nearby)'],
    seasonalTip: 'The waterfall is at its magnificent peak flow immediately after the monsoon (Sept-Nov). Wear non-slip shoes for the descent to the base.'
  }
  ],
  'Tripura': [
  {
    id: 'tri-1',
    name: 'Ujjayanta Palace (Agartala)',
    description: 'A magnificent former royal palace situated in the capital city, now serving as the Tripura State Museum, showcasing Indo-Saracenic architecture and beautiful Mughal gardens.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80', // Placeholder for Palace
    rating: 4.4,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Tripura State Museum', 'Mughal Gardens', 'Kunjaban Palace (Governor\'s Residence)'],
    seasonalTip: 'Winter is the most pleasant time to visit the museum and stroll through the extensive palace gardens.'
  },
  {
    id: 'tri-2',
    name: 'Neermahal (Water Palace)',
    description: 'The spectacular Water Palace, built in the middle of Rudrasagar Lake. It is the largest water palace in India, combining Hindu and Mughal architectural styles.',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80', // Placeholder for Water Palace
    rating: 4.6,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Rudrasagar Lake Boating', 'Light and Sound Show', 'Annual Water Festival'],
    seasonalTip: 'Visit during winter for comfortable boating and a spectacular view of the palace at sunset.'
  },
  {
    id: 'tri-3',
    name: 'Unakoti',
    description: 'An ancient, mystical Shaivite pilgrimage site famous for its colossal rock-cut sculptures and stone carvings, depicting Hindu deities, set amidst a lush forest backdrop.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80', // Placeholder for Rock Cut Carvings
    rating: 4.5,
    bestTime: 'October-April',
    season: 'spring',
    attractions: ['Colossal Rock Carvings (Shiva)', 'Unakoti Archeological Site', 'Ashokastami Mela'],
    seasonalTip: 'The dry seasons are best for trekking the forest paths to view the carvings; carry water and be prepared for walking.'
  },
  {
    id: 'tri-4',
    name: 'Jampui Hill',
    description: 'The highest hill range in Tripura, famous for its scenic views, charming tribal villages, and the famous Orange Festival held annually.',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80', // Placeholder for Hill View
    rating: 4.3,
    bestTime: 'September-November',
    season: 'winter',
    attractions: ['Orange Orchards', 'Sunrise/Sunset Viewpoints', 'Bustling Tribal Culture'],
    seasonalTip: 'The best time is during October-November to witness the Orange Festival and the harvesting period.'
  }
  ],
  'Uttarakhand': [
  {
    id: 'ukd-1',
    name: 'Rishikesh & Haridwar',
    description: 'Twin holy cities: Rishikesh is the "Yoga Capital of the World" and adventure hub; Haridwar is a revered pilgrimage site where the Ganges River enters the plains.',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80', // Placeholder for Ganga Aarti/River Rafting
    rating: 4.6,
    bestTime: 'September-June',
    season: 'spring',
    attractions: ['Ganga Aarti (Har Ki Pauri)', 'River Rafting', 'Laxman Jhula', 'Beatles Ashram', 'Yoga & Meditation Centers'],
    seasonalTip: 'Avoid peak monsoon (July-Aug) for rafting. Spring (Mar-May) is ideal for weather and water levels for adventure activities.'
  },
  {
    id: 'ukd-2',
    name: 'Nainital',
    description: 'The "Lake District of India," a charming hill station nestled around the scenic Naini Lake, surrounded by forested hills and panoramic viewpoints.',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47b9327f3a36?w=800&q=80', // Placeholder for Naini Lake
    rating: 4.5,
    bestTime: 'March-June & October-November',
    season: 'spring',
    attractions: ['Naini Lake (Boating)', 'Naina Devi Temple', 'Snow View Point', 'The Mall Road', 'Bhimtal (nearby)'],
    seasonalTip: 'Spring and Autumn offer clear weather for boating and views. Summers are pleasant for tourism but crowds are heavy.'
  },
  {
    id: 'ukd-3',
    name: 'Mussoorie',
    description: 'The "Queen of the Hills," a popular colonial-era hill station known for its scenic views of the Himalayas, cascading waterfalls, and lively Mall Road.',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', // Placeholder for Mussoorie View
    rating: 4.4,
    bestTime: 'March-June & October-February',
    season: 'winter',
    attractions: ['Kempty Falls', 'Gun Hill', 'Lal Tibba', 'Camel’s Back Road', 'Dhanaulti (nearby)'],
    seasonalTip: 'Expect heavy crowds during summer vacation. Winter offers a chance of snowfall (Dec-Feb) and clearer mountain views.'
  },
  {
    id: 'ukd-4',
    name: 'Jim Corbett National Park',
    description: 'India’s oldest national park and a major tiger reserve, offering thrilling wildlife safaris in the foothills of the Himalayas.',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80', // Placeholder for Tiger Reserve
    rating: 4.7,
    bestTime: 'October-June',
    season: 'winter',
    attractions: ['Wildlife Safari (Dhikala/Bijrani Zone)', 'Bengal Tiger Sighting', 'Corbett Museum'],
    seasonalTip: 'The core zones are closed during monsoon. Winter is best for comfortable weather; March-May offers the highest chance of tiger sightings near water holes.'
  },
  {
    id: 'ukd-5',
    name: 'Auli',
    description: 'A premier skiing destination and hill station surrounded by coniferous and oak forests, offering spectacular views of peaks like Nanda Devi.',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47b9327f3a36?w=800&q=80', // Placeholder for Skiing/Snow
    rating: 4.3,
    bestTime: 'November-March (Snow), May-October (Trek)',
    season: 'winter',
    attractions: ['Skiing Slopes', 'Auli Artificial Lake', 'Cable Car Ride (Gondola)', 'Nanda Devi View'],
    seasonalTip: 'For skiing, January-March is ideal for snow. For clear trekking weather and wildflowers, visit in spring or autumn.'
  }
  ],
  'Uttar Pradesh': [
  {
    id: 'up-1',
    name: 'Agra & Taj Mahal',
    description: 'The city of the Taj Mahal, one of the Seven Wonders of the World, and a major Mughal heritage center on the banks of the Yamuna River.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80', // Placeholder for Taj Mahal
    rating: 4.9,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri (nearby)', 'Tomb of Itimad-ud-Daulah'],
    seasonalTip: 'Winter is the best time for sightseeing, as summers are scorching. Visit the Taj Mahal at sunrise to avoid crowds and haze.'
  },
  {
    id: 'up-2',
    name: 'Varanasi',
    description: 'The spiritual capital of India and one of the oldest continuously inhabited cities in the world, famous for its holy ghats on the Ganges River and ancient temples.',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80', // Placeholder for Varanasi Ghats
    rating: 4.8,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Ganga Aarti at Dashashwamedh Ghat', 'Kashi Vishwanath Temple', 'Assi Ghat', 'Sarnath (nearby)'],
    seasonalTip: 'Take a boat ride at sunrise to witness the morning rituals along the ghats. Winter is comfortably cool for spending time outdoors.'
  },
  {
    id: 'up-3',
    name: 'Lucknow',
    description: 'The capital city, known as the "City of Nawabs," renowned for its refined etiquette (tehzeeb), stunning Mughal-era and colonial architecture, and world-famous Awadhi cuisine.',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80', // Placeholder for Bara Imambara
    rating: 4.5,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Bara Imambara', 'Chota Imambara', 'Rumi Darwaza', 'Hazratganj Market', 'Kebabs and Biryani'],
    seasonalTip: 'Winter is the best season to comfortably explore the architectural complexes and enjoy the famous street food.'
  },
  {
    id: 'up-4',
    name: 'Mathura & Vrindavan',
    description: 'Twin holy towns, the birthplace of Lord Krishna (Mathura) and the place where he spent his childhood (Vrindavan), filled with thousands of vibrant temples.',
    imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80', // Placeholder for Prem Mandir
    rating: 4.6,
    bestTime: 'October-March (Holi in March)',
    season: 'winter',
    attractions: ['Shri Krishna Janmabhoomi (Mathura)', 'Prem Mandir (Vrindavan)', 'Banke Bihari Temple', 'Holi Festival'],
    seasonalTip: 'Visit during March to experience the world-famous, vibrant Lathmar Holi festival, or in winter for comfortable temple visits.'
  }
  ],
  'West Bengal': [
  {
    id: 'wb-1',
    name: 'Kolkata',
    description: 'The "City of Joy," a major cultural, intellectual, and artistic hub, famous for its grand colonial architecture, iconic Howrah Bridge, and vibrant street life/festivals.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80', // Placeholder for Howrah Bridge/Victoria Memorial
    rating: 4.5,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Victoria Memorial', 'Howrah Bridge', 'Dakshineswar Kali Temple', 'Indian Museum', 'Park Street'],
    seasonalTip: 'Visit during Durga Puja (Sept/Oct) for the grandest cultural experience. Winter is comfortable for sightseeing and exploring street food.'
  },
  {
    id: 'wb-2',
    name: 'Darjeeling',
    description: 'The "Queen of the Hills," famous for its world-renowned tea estates, the Darjeeling Himalayan Railway (Toy Train), and stunning views of Mount Kanchenjunga.',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80', // Placeholder for Darjeeling Tea Estates
    rating: 4.7,
    bestTime: 'March-May & October-December',
    season: 'spring',
    attractions: ['Tiger Hill (Sunrise)', 'Toy Train Ride', 'Batasia Loop', 'Padmaja Naidu Himalayan Zoological Park', 'Tea Gardens'],
    seasonalTip: 'Clear views of Kanchenjunga are best in October-November. Take the toy train ride in the cool spring or autumn weather.'
  },
  {
    id: 'wb-3',
    name: 'Sundarbans National Park',
    description: 'A UNESCO World Heritage Site and the world’s largest mangrove forest and delta, famous for being the primary habitat of the Royal Bengal Tiger.',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80', // Placeholder for Sunderbans Mangroves
    rating: 4.6,
    bestTime: 'September-March',
    season: 'winter',
    attractions: ['Boat Safari', 'Royal Bengal Tiger Sighting', 'Sajnekhali Watchtower', 'Mangrove Ecosystem'],
    seasonalTip: 'Visit during winter for pleasant boat rides and higher chances of animal sightings as animals bask in the sun.'
  },
  {
    id: 'wb-4',
    name: 'Santiniketan',
    description: 'A small town in Birbhum district, renowned globally as the home and creation of Rabindranath Tagore, who founded the Visva-Bharati University here.',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47b9327f3a36?w=800&q=80', // Placeholder for Santiniketan
    rating: 4.3,
    bestTime: 'October-March',
    season: 'winter',
    attractions: ['Visva-Bharati University Campus', 'Rabindra Bhaban Museum', 'Kala Bhavana', 'Poush Mela (Dec)'],
    seasonalTip: 'The traditional Poush Mela fair in December offers a vibrant cultural experience. Winter weather is comfortable for exploring the campus.'
  }
  ]
};

// Function to get current season in India
export function getCurrentSeason(): 'summer' | 'winter' | 'monsoon' | 'spring' {
  const month = new Date().getMonth() + 1; // 1-12
  
  if (month >= 3 && month <= 5) return 'summer';
  if (month >= 6 && month <= 9) return 'monsoon';
  if (month >= 10 || month <= 2) return 'winter';
  return 'spring';
}

// Get seasonal message
export function getSeasonalMessage(season: string): string {
  const messages = {
    summer: '☀️ Summer vibes! Explore cool hill stations and beaches.',
    winter: '❄️ Winter magic! Perfect time for heritage sites and deserts.',
    monsoon: '🌧️ Monsoon mood! Waterfalls and lush greenery await.',
    spring: '🌸 Spring bloom! Enjoy pleasant weather everywhere.'
  };
  return messages[season as keyof typeof messages] || messages.winter;
}

export const mockEvents = [
  {
    id: 1,
    title: "Tulsa Food Festival",
    description: "Join us for the annual Tulsa Food Festival featuring local restaurants, food trucks, and culinary demonstrations. Sample a variety of cuisines from around the world, enjoy live music, and participate in cooking workshops. This family-friendly event has something for everyone, from gourmet dishes to street food favorites. Don't miss the chef competitions and tasting sessions throughout the day!",
    date: "Aug 15, 2023",
    dateObj: "2023-08-15",
    time: "11:00 AM - 8:00 PM",
    location: "Downtown Tulsa, OK",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "food",
    isFavorite: true,
    tags: ["Food", "Festival", "Family-Friendly", "Live Music"],
    hostName: "Tulsa Culinary Association",
    hostImage: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    vendors: [
      {
        name: "Joe's BBQ",
        type: "Food Vendor",
        image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Sweet Treats",
        type: "Dessert Vendor",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Global Flavors",
        type: "International Cuisine",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      }
    ]
  },
  {
    id: 2,
    title: "Downtown Music Festival",
    description: "Experience the best of local and national music acts at the Downtown Music Festival. With three stages featuring different genres, you'll find everything from rock and indie to jazz and electronic music. Enjoy food vendors, art installations, and a vibrant atmosphere in the heart of downtown. This year's lineup includes award-winning artists and exciting new talents you won't want to miss!",
    date: "Sep 5, 2023",
    dateObj: "2023-09-05",
    time: "4:00 PM - 11:00 PM",
    location: "Guthrie Green, Tulsa",
    imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "music",
    isFavorite: false,
    tags: ["Music", "Festival", "Live Performance", "Outdoor"],
    hostName: "Tulsa Music Alliance",
    hostImage: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    vendors: [
      {
        name: "Vinyl Records",
        type: "Music Vendor",
        image: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Sound Gear",
        type: "Equipment Vendor",
        image: "https://images.unsplash.com/photo-1520170350707-b2da59970118?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Festival Merch",
        type: "Merchandise",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      }
    ]
  },
  {
    id: 3,
    title: "Art Exhibition 2023",
    description: "Discover the works of over 50 local and regional artists at this year's Art Exhibition. The showcase features a diverse range of mediums including painting, sculpture, photography, and digital art. Special exhibits highlight emerging artists and innovative techniques. Attend artist talks, participate in workshops, and even purchase original artwork directly from the creators. A must-visit for art enthusiasts and collectors!",
    date: "Oct 12, 2023",
    dateObj: "2023-10-12",
    time: "10:00 AM - 6:00 PM",
    location: "Philbrook Museum, Tulsa",
    imageUrl: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "art",
    isFavorite: true,
    tags: ["Art", "Exhibition", "Culture", "Workshop"],
    hostName: "Tulsa Arts Council",
    hostImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    vendors: [
      {
        name: "Art Supplies Co.",
        type: "Art Supplies",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Frame Perfect",
        type: "Framing Services",
        image: "https://images.unsplash.com/photo-1516981879613-9f5da904015f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Creative Workshops",
        type: "Education",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      }
    ]
  },
  {
    id: 4,
    title: "Tech Conference 2023",
    description: "Stay ahead of the curve at the annual Tech Conference featuring keynote speakers from leading technology companies, hands-on workshops, and networking opportunities. Learn about the latest developments in AI, blockchain, cybersecurity, and more. Perfect for professionals, entrepreneurs, and tech enthusiasts looking to expand their knowledge and connections in the industry. Early registration includes access to exclusive sessions and events.",
    date: "Nov 8, 2023",
    dateObj: "2023-11-08",
    time: "9:00 AM - 5:00 PM",
    location: "Cox Business Center, Tulsa",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "technology",
    isFavorite: false,
    tags: ["Technology", "Conference", "Networking", "Innovation"],
    hostName: "Tulsa Tech Hub",
    hostImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    vendors: [
      {
        name: "NextGen Solutions",
        type: "Software Company",
        image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Tech Gadgets",
        type: "Hardware Vendor",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Cloud Services Inc.",
        type: "IT Services",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      }
    ]
  },
  {
    id: 5,
    title: "Farmers Market Weekend",
    description: "Support local farmers and artisans at our weekend market featuring fresh produce, handcrafted goods, and homemade treats. Stroll through rows of stalls offering seasonal fruits and vegetables, artisanal cheeses, baked goods, and unique crafts. Enjoy live acoustic music while you shop, and participate in cooking demonstrations using market-fresh ingredients. A wonderful way to connect with your community and discover local treasures!",
    date: "Aug 20, 2023",
    dateObj: "2023-08-20",
    time: "8:00 AM - 1:00 PM",
    location: "Cherry Street, Tulsa",
    imageUrl: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "food",
    isFavorite: false,
    tags: ["Farmers Market", "Local", "Food", "Shopping"],
    hostName: "Tulsa Urban Farmers",
    hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    vendors: [
      {
        name: "Fresh Harvest Farm",
        type: "Produce Vendor",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Artisan Breads",
        type: "Bakery",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Handmade Crafts",
        type: "Artisan Goods",
        image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      }
    ]
  },
  {
    id: 6,
    title: "Cultural Heritage Festival",
    description: "Celebrate the diverse cultural heritage of our community with performances, exhibitions, and activities representing traditions from around the world. Experience authentic cuisine, traditional dance and music, cultural displays, and interactive workshops. This family-friendly event promotes cultural understanding and appreciation through engaging experiences. Join us for a day of global exploration without leaving your city!",
    date: "Sep 18, 2023",
    dateObj: "2023-09-18",
    time: "12:00 PM - 7:00 PM",
    location: "River Parks, Tulsa",
    imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "culture",
    isFavorite: true,
    tags: ["Culture", "Festival", "International", "Family"],
    hostName: "Cultural Diversity Council",
    hostImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    vendors: [
      {
        name: "Global Cuisine",
        type: "Food Vendor",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Traditional Crafts",
        type: "Artisan",
        image: "https://images.unsplash.com/photo-1528895977292-2c9c3d5f9b4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Cultural Exchange",
        type: "Educational",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      }
    ]
  },
  {
    id: 7,
    title: "Science & Education Expo",
    description: "Ignite curiosity at the Science & Education Expo featuring interactive exhibits, demonstrations, and activities for all ages. Explore STEM concepts through hands-on experiments, meet scientists and educators, and discover educational opportunities in your community. Special zones focus on robotics, environmental science, space exploration, and more. Perfect for students, families, and anyone with a passion for learning and discovery!",
    date: "Oct 25, 2023",
    dateObj: "2023-10-25",
    time: "10:00 AM - 4:00 PM",
    location: "Tulsa Community College",
    imageUrl: "https://images.unsplash.com/photo-1567306226408-28f0c78890a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "school",
    isFavorite: false,
    tags: ["Education", "Science", "STEM", "Interactive"],
    hostName: "Tulsa Education Foundation",
    hostImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    vendors: [
      {
        name: "Science Kits & More",
        type: "Educational Products",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Robotics Workshop",
        type: "Technology Education",
        image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Future Careers",
        type: "Career Guidance",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      }
    ]
  }
];

// Mock chat data
export const mockChats = [
  {
    id: '1',
    name: 'Tulsa Food Festival',
    lastMessage: 'Can you provide details about your booth setup?',
    time: '10:30 AM',
    unread: 2,
    isEvent: true,
    avatar: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  },
  {
    id: '2',
    name: 'Jane Smith',
    lastMessage: 'Looking forward to seeing you at the event!',
    time: 'Yesterday',
    unread: 0,
    isEvent: false,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  },
  {
    id: '3',
    name: 'Downtown Music Festival',
    lastMessage: 'Your application has been approved!',
    time: 'Yesterday',
    unread: 1,
    isEvent: true,
    avatar: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  },
  {
    id: '4',
    name: 'Mike Johnson',
    lastMessage: 'Hey, do you have any recommendations for parking?',
    time: 'Monday',
    unread: 0,
    isEvent: false,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  },
  {
    id: '5',
    name: 'Art Exhibition 2023',
    lastMessage: 'Please confirm your attendance by tomorrow.',
    time: 'Monday',
    unread: 0,
    isEvent: true,
    avatar: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  },
];

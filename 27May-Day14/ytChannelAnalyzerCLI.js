// YouTube Channel Analyzer CLI.

const videos = [
  {
    id: 1,
    title: "Why America Is Declining",
    category: "Geopolitics",
    views: 120000,
    likes: 6200,
    comments: 850,
    duration: 18,
    rpm: 4.5,
    isMonetized: true,
    uploadDay: "Monday",
  },
  {
    id: 2,
    title: "How to Bake the Perfect Sourdough",
    category: "Cooking",
    views: 45000,
    likes: 3200,
    comments: 210,
    duration: 12,
    rpm: 3.2,
    isMonetized: true,
    uploadDay: "Wednesday",
  },
  {
    id: 3,
    title: "10 Minute Full Body Workout",
    category: "Fitness",
    views: 89000,
    likes: 4100,
    comments: 195,
    duration: 10,
    rpm: 2.8,
    isMonetized: false,
    uploadDay: "Friday",
  },
  {
    id: 4,
    title: "JavaScript Array Methods Explained",
    category: "Programming",
    views: 67000,
    likes: 2800,
    comments: 430,
    duration: 22,
    rpm: 5.1,
    isMonetized: true,
    uploadDay: "Tuesday",
  },
  {
    id: 5,
    title: "Top 10 Hidden Gems in Italy",
    category: "Travel",
    views: 34000,
    likes: 1900,
    comments: 120,
    duration: 15,
    rpm: 3.9,
    isMonetized: false,
    uploadDay: "Sunday",
  },
  {
    id: 6,
    title: "React vs Vue 2024",
    category: "Technology",
    views: 156000,
    likes: 8700,
    comments: 1250,
    duration: 25,
    rpm: 6.2,
    isMonetized: true,
    uploadDay: "Thursday",
  },
  {
    id: 7,
    title: "Meditation for Beginners",
    category: "Wellness",
    views: 28000,
    likes: 1500,
    comments: 85,
    duration: 8,
    rpm: 2.1,
    isMonetized: false,
    uploadDay: "Saturday",
  },
  {
    id: 8,
    title: "The Rise of AI in Healthcare",
    category: "Science",
    views: 93000,
    likes: 5100,
    comments: 620,
    duration: 20,
    rpm: 4.8,
    isMonetized: true,
    uploadDay: "Monday",
  },
  {
    id: 9,
    title: "Building a PC on a Budget",
    category: "Tech Tutorial",
    views: 112000,
    likes: 6900,
    comments: 780,
    duration: 30,
    rpm: 5.5,
    isMonetized: true,
    uploadDay: "Friday",
  },
  {
    id: 10,
    title: "Daily Vlog: Tokyo Edition",
    category: "Vlog",
    views: 51000,
    likes: 2400,
    comments: 310,
    duration: 14,
    rpm: 3.5,
    isMonetized: false,
    uploadDay: "Wednesday",
  },
];

// Requirement 1: Show All Videos

videos.forEach((item) => {
  let monitizeCheck = item.isMonetized == true ? "Monitized" : "Not Monitized";
  console.log(
    `${item.id} - ${item.title} - ${item.category} - ${item.views} - ${monitizeCheck}`,
  );
});

//Requirement 2: Calculate Revenue of One Video.

function calculateRevenue(item) {
  let views = item.views;
  let rpm = item.rpm;
  let revenue = (views / 1000) * rpm;
  return revenue;
}
console.log(calculateRevenue(videos[0]));

videos.forEach((item) => {
  let calculate = calculateRevenue(item);
  console.log(`${item.id} - ${item.title} - $${calculate.toFixed(2)}`);
});

let totalRevenue = videos.reduce((acc, val) => {
  let calculate = calculateRevenue(val);
  return acc + calculateRevenue(val);
}, 0);
console.log(`$${totalRevenue}`);

const mostViewedVideo = videos.reduce((max, current) => {
  return current.views > max.views ? current : max;
});
console.log(
  `${mostViewedVideo.id} - ${mostViewedVideo.title} - $${mostViewedVideo.views}`,
);

const mostEarningVideo = videos.reduce((max, current) => {
  return calculateRevenue(current) > calculateRevenue(max) ? current : max;
});
console.log(`---Most Earning Video---`);
console.log(
  `${mostEarningVideo.id} - ${mostEarningVideo.title} - ${mostEarningVideo.views} - $${mostEarningVideo.rpm} - $${calculateRevenue(mostEarningVideo)}`,
);




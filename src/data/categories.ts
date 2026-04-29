export interface RaceCategory {
  slug: string;
  title: string;
  distance: string;
  fee: string;
  feeAmount: number;
  startTime: string;
  img: string;
  color: string;
  route: string;
  amenities: string[];
  criteria: string[];
}

export const raceCategories: RaceCategory[] = [
  {
    slug: "half-marathon",
    title: "Half Marathon",
    distance: "21.1 KM",
    fee: "₹500",
    feeAmount: 500,
    startTime: "12:00 AM",
    img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&q=80",
    color: "from-blue-600 to-cyan-500",
    route: "Starting at Hosur Town Centre, the route takes runners through the lit-up Hosur Main Road, past SIPCOT, along Bagalur Cross, and finishing at Hosur Athletic Stadium.",
    amenities: ["Official race-day T-shirt", "Goodies bag", "RFID-tagged race BIB", "Water & energy drinks along course", "Medical support", "Post-race refreshments", "Finisher's medal", "Timing certificate"],
    criteria: ["Must be 16 years or older", "Photo ID mandatory"],
  },
  {
    slug: "10k-run",
    title: "10KM Run",
    distance: "10 KM",
    fee: "₹500",
    feeAmount: 500,
    startTime: "12:30 AM",
    img: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=1920&q=80",
    color: "from-emerald-600 to-teal-500",
    route: "A fast and flat course starting from Hosur Town Centre, passing through the illuminated streets, looping around key landmarks, and finishing at Hosur Athletic Stadium.",
    amenities: ["Official race-day T-shirt", "Goodies bag", "RFID-tagged race BIB", "Water stations along course", "Medical support", "Post-race refreshments", "Finisher's medal", "Timing certificate"],
    criteria: ["Must be 14 years or older", "Photo ID mandatory"],
  },
  {
    slug: "5k-run",
    title: "5KM Run",
    distance: "5 KM",
    fee: "₹500",
    feeAmount: 500,
    startTime: "1:00 AM",
    img: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=1920&q=80",
    color: "from-purple-600 to-pink-500",
    route: "A fun, family-friendly route around the Hosur Town Centre area, perfect for first-time runners and families. The route is flat, well-lit, and supported with water stations.",
    amenities: ["Official race-day T-shirt", "Goodies bag", "Race BIB", "Water stations", "Medical support", "Post-race refreshments", "Finisher's medal"],
    criteria: ["Open to all ages (under 14 must be accompanied by guardian)", "Photo ID mandatory for adults"],
  },
];

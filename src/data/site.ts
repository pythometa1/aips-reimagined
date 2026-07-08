export const site = {
  name: "Advanced Indian Pest Solution",
  short: "AIPS",
  tagline: "Protecting Your India · since 2010",
  phone: "+91 94774 01805",
  phoneHref: "tel:+919477401805",
  email: "info@advancedindianpestsolution.in",
  hours: "Mon–Sat, 9 AM – 7 PM",
  whatsapp:
    "https://wa.me/919477401805?text=Hi%20AIPS%2C%20I%27d%20like%20to%20request%20a%20pest%20control%20inspection%20for%20my%20home%2Foffice.%0A%0APreferred%20service%20time%3A%20%5BMorning%20%2F%20Afternoon%20%2F%20Evening%20%2F%20Weekend%5D%0A%0APlease%20call%20me%20back%20to%20confirm.",
  address: "10, Central Park East, Jadavpur, Kolkata – 700032",
  gst: "19ABCCA7450J1ZG",
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/clients", label: "Clients" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
] as const;

export const cities = [
  "Kolkata", "Howrah", "Hooghly", "Durgapur", "Asansol", "Burdwan",
  "Arambagh", "Siliguri", "Bhubaneswar", "Cuttack", "Ranchi", "Jamshedpur",
  "Patna", "Guwahati", "Pune", "Mumbai", "Delhi NCR", "Lucknow", "Varanasi",
];

export const statesServed = [
  "West Bengal", "Jharkhand", "Bihar", "Odisha", "Maharashtra",
  "Uttar Pradesh", "Delhi", "Assam", "Telangana", "Andhra Pradesh",
];

export const stats = [
  { value: "40,000+", label: "Homes & offices" },
  { value: "15+", label: "Years of practice" },
  { value: "18", label: "Cities · 10 states" },
  { value: "10 yr", label: "Max warranty" },
];

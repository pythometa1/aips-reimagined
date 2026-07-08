export const site = {
  name: "Advanced Indian Pest Solution",
  short: "AIPS",
  tagline: "Protecting Your India · since 2010",
  phone: "+91 94774 01805",
  phoneHref: "tel:+919477401805",
  email: "info@advancedindianpestsolution.in",
  hours: "Mon–Sat, 9 AM – 7 PM",
  whatsapp:
    "https://wa.me/919477401805?text=Hi%20AIPS%20%E2%80%94%20I%27d%20like%20a%20free%20pest%20control%20inspection.",
  address: "Headquartered in Kolkata · Serving 18 cities across India",
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/clients", label: "Clients" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blogs", label: "Blogs" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export const cities = [
  "Kolkata", "Howrah", "Hooghly", "Durgapur", "Asansol", "Burdwan",
  "Pune", "Mumbai", "Delhi NCR", "Ranchi", "Jamshedpur",
  "Guwahati", "Bhubaneswar", "Cuttack", "Patna", "Siliguri",
  "Bengaluru", "Hyderabad",
];

export const stats = [
  { value: "40,000+", label: "Homes & offices" },
  { value: "15+", label: "Years of practice" },
  { value: "18", label: "Cities · 10 states" },
  { value: "10 yr", label: "Max warranty" },
];

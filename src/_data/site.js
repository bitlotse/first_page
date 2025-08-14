module.exports = {
  name: "DACOSTA Gebäude- und Industrieservice GmbH",
  url: "https://www.dacosta-bremen.de",
  default_title: "DACOSTA – Ihr Gebäude- & Industrieservice in Bremen",
  default_description: "Professionelle Gebäudereinigung, Hausmeisterdienste und Industrieservice in Bremen-Vegesack. Zuverlässig, kompetent und lokal verwurzelt.",
  default_og_image_path: "/img/default-og-image.jpg",
  logo_path: "/img/icons/logo.svg",
  twitter_handle: "@DacostaBremen",
  social: [
    { name: "Facebook", url: "https://facebook.com/dacosta-bremen", icon: "/img/icons/facebook.svg" },
    { name: "Instagram", url: "https://instagram.com/dacosta_bremen", icon: "/img/icons/instagram.svg" }
  ],

  googleBusinessProfileURL: "https://maps.google.com/?cid=YOUR_CID_NUMBER",
  
  contact: {
    address: {
      street: "Vegesacker Straße 123",
      city: "Bremen",
      zip: "28757",
      country: "DE",
      full: "Vegesacker Straße 123, 28757 Bremen",
      geo: {
        latitude: 53.1657,
        longitude: 8.6315
      }
    },
    phone: "0421/12345678",
    phoneLink: "+4942112345678",
    email: "info@dacosta-bremen.de",
    whatsapp: "0421/12345678",
    whatsappLink: "4942112345678",
    openingHours: [
      { days: "Montag", hours: "07:00 - 17:00" },
      { days: "Dienstag", hours: "07:00 - 17:00" },
      { days: "Mittwoch", hours: "07:00 - 17:00" },
      { days: "Donnerstag", hours: "07:00 - 17:00" },
      { days: "Freitag", hours: "07:00 - 17:00" },
      { days: "Samstag", hours: "08:00 - 12:00" },
      { days: "Sonntag", hours: "Notdienst verfügbar" }
    ],
    openingHoursSchema: [
      { "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "07:00", "closes": "17:00" },
      { "dayOfWeek": ["Saturday"], "opens": "08:00", "closes": "12:00" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2388.1234567890123!2d8.6315!3d53.1657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b12c1234567890%3A0x1234567890abcdef!2sVegesacker%20Stra%C3%9Fe%20123%2C%2028757%20Bremen!5e0!3m2!1sde!2sde!4v1747496128638!5m2!1sde!2sde"
  },
  year: new Date().getFullYear(),
  legalLinks: {
    impressum: "/impressum/",
    datenschutzerklaerung: "/datenschutz/",
    agb: "/agb/"
  }
};

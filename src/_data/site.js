module.exports = {
  name: "Haarmanufaktur Suszan",
  url: "https://www.haarmanufaktur-suszan.de",
  default_title: "Haarmanufaktur Suszan - Professioneller Friseur in Traunstein",
  default_description: "Professioneller Friseursalon in Traunstein. Haarschnitt, Färben, Styling und mehr. Jetzt Termin vereinbaren!",
  default_og_image_path: "/img/default-og-image.jpg",
  logo_path: "/img/icons/logo.svg",
  twitter_handle: "@HaarmanufakturSuszan",
  social: [
    { name: "Facebook", url: "https://facebook.com/haarmanufaktursuszan", icon: "/img/icons/facebook.svg" },
    { name: "Instagram", url: "https://instagram.com/haarmanufaktur_suszan", icon: "/img/icons/instagram.svg" }
  ],

  googleBusinessProfileURL: "https://maps.google.com/?cid=YOUR_CID_NUMBER",
  
  contact: {
    address: {
      street: "Maximilianstraße 35",
      city: "Traunstein",
      zip: "83278",
      country: "DE",
      full: "Maximilianstraße 35, 83278 Traunstein",
      geo: {
        latitude: 47.8685,
        longitude: 12.6436
      }
    },
    phone: "0861/90951242",
    phoneLink: "+4986190951242",
    email: "info@haarmanufaktur-suszan.de",
    whatsapp: "0861/90951242",
    whatsappLink: "4986190951242",
    openingHours: [
      { days: "Montag", hours: "Geschlossen" },
      { days: "Dienstag", hours: "09:00 - 18:00" },
      { days: "Mittwoch", hours: "09:00 - 18:00" },
      { days: "Donnerstag", hours: "09:00 - 18:00" },
      { days: "Freitag", hours: "09:00 - 18:00" },
      { days: "Samstag", hours: "08:00 - 13:00" },
      { days: "Sonntag", hours: "Geschlossen" }
    ],
    openingHoursSchema: [
      { "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "09:00", "closes": "18:00" },
      { "dayOfWeek": ["Saturday"], "opens": "08:00", "closes": "13:00" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5352.751484302269!2d12.642817675733928!3d47.87105206967952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47767ada3fb5a84d%3A0x15e11b75ae99648a!2sMaximilianstra%C3%9Fe%2035%2C%2083278%20Traunstein!5e0!3m2!1sde!2sde!4v1747496128638!5m2!1sde!2sde"
  },
  year: new Date().getFullYear(),
  legalLinks: {
    impressum: "/impressum/",
    datenschutzerklaerung: "/datenschutz/",
    agb: "/agb/"
  }
};

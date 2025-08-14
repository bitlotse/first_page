const slugify = require("slugify");

module.exports = {
  mainCity: "Bremen",
  mainCitySlug: "bremen",
  services: [
    // --- Standort: Bremen (Alle Dienste) ---
    {
      service: "Gebäudereinigung",
      serviceSlug: "gebaeudereinigung",
      location: "Bremen",
      locationSlug: "bremen",
      description: "Professionelle Gebäudereinigung in Bremen. Büroreinigung, Treppenhausreinigung und Grundreinigung für Privat- und Gewerbekunden.",
      cardImage: "card1.jpg",
      cardImageAlt: "Professionelle Gebäudereinigung in Bremen",
      contentPath: "pages/underpages/service1/location1.md",
      surrounding: ["Bremen-Vegesack", "Bremen-Blumenthal", "Bremen-Burglesum", "Bremen-Grohn", "Bremen-Schönebeck"],
      price: "15.00", // Example: "starting at" price per m²
      priceCurrency: "EUR"
    },
    {
      service: "Hausmeisterdienste",
      serviceSlug: "hausmeisterdienste",
      location: "Bremen",
      locationSlug: "bremen",
      description: "Zuverlässige Hausmeisterdienste in Bremen. Wartung, Reparaturen, Winterdienst und technische Betreuung für Immobilien.",
      cardImage: "card2.jpg",
      cardImageAlt: "Zuverlässige Hausmeisterdienste in Bremen",
      contentPath: "pages/underpages/service2/location1.md",
      surrounding: ["Bremen-Vegesack", "Bremen-Blumenthal", "Bremen-Burglesum", "Bremen-Grohn", "Bremen-Schönebeck"],
      price: "25.00", // Example: "starting at" price per hour
      priceCurrency: "EUR"
    },
    {
      service: "Winterdienst",
      serviceSlug: "winterdienst",
      location: "Bremen",
      locationSlug: "bremen",
      description: "Professioneller Winterdienst in Bremen. Schneeräumung, Streudienste und Eisbekämpfung für sichere Wege und Zufahrten.",
      cardImage: "card3.jpg",
      cardImageAlt: "Professioneller Winterdienst in Bremen",
      contentPath: "pages/underpages/service3/location1.md",
      surrounding: ["Bremen-Vegesack", "Bremen-Blumenthal", "Bremen-Burglesum", "Bremen-Grohn", "Bremen-Schönebeck"],
      price: "35.00", // Example: "starting at" price per service
      priceCurrency: "EUR"
    },
    {
      service: "Industrieservice",
      serviceSlug: "industrieservice",
      location: "Bremen",
      locationSlug: "bremen",
      description: "Spezialisierter Industrieservice in Bremen. Maschinenreinigung, Produktionshallenreinigung und technische Reinigung für Industriebetriebe.",
      cardImage: "card4.jpg",
      cardImageAlt: "Spezialisierter Industrieservice in Bremen",
      contentPath: "pages/underpages/service4/location1.md",
      surrounding: ["Bremen-Vegesack", "Bremen-Blumenthal", "Bremen-Burglesum", "Bremen-Grohn", "Bremen-Schönebeck"],
      price: "45.00", // Example: "starting at" price per hour
      priceCurrency: "EUR"
    },
    {
      service: "Grünanlagenpflege",
      serviceSlug: "gruenanlagenpflege",
      location: "Bremen",
      locationSlug: "bremen",
      description: "Professionelle Grünanlagenpflege in Bremen. Rasenmähen, Hecken schneiden, Gartenpflege und Landschaftsbau für gepflegte Außenanlagen.",
      cardImage: "card5.jpg",
      cardImageAlt: "Professionelle Grünanlagenpflege in Bremen",
      contentPath: "pages/underpages/service5/location1.md",
      surrounding: ["Bremen-Vegesack", "Bremen-Blumenthal", "Bremen-Burglesum", "Bremen-Grohn", "Bremen-Schönebeck"],
      price: "30.00", // Example: "starting at" price per hour
      priceCurrency: "EUR"
    },
    {
      service: "Glasreinigung",
      serviceSlug: "glasreinigung",
      location: "Bremen",
      locationSlug: "bremen",
      description: "Professionelle Glasreinigung in Bremen. Fensterreinigung, Fassadenreinigung und Glasdachreinigung für kristallklare Sicht.",
      cardImage: "card6.jpg",
      cardImageAlt: "Professionelle Glasreinigung in Bremen",
      contentPath: "pages/underpages/service6/location1.md",
      surrounding: ["Bremen-Vegesack", "Bremen-Blumenthal", "Bremen-Burglesum", "Bremen-Grohn", "Bremen-Schönebeck"],
      price: "20.00", // Example: "starting at" price per m²
      priceCurrency: "EUR"
    },
    {
      service: "Teppichreinigung",
      serviceSlug: "teppichreinigung",
      location: "Bremen",
      locationSlug: "bremen",
      description: "Professionelle Teppichreinigung in Bremen. Tiefenreinigung, Fleckentfernung und Teppichpflege für saubere und hygienische Böden.",
      cardImage: "card7.jpg",
      cardImageAlt: "Professionelle Teppichreinigung in Bremen",
      contentPath: "pages/underpages/service7/location1.md",
      surrounding: ["Bremen-Vegesack", "Bremen-Blumenthal", "Bremen-Burglesum", "Bremen-Grohn", "Bremen-Schönebeck"],
      price: "8.00", // Example: "starting at" price per m²
      priceCurrency: "EUR"
    },
    {
      service: "Desinfektion & Hygiene",
      serviceSlug: "desinfektion-hygiene",
      location: "Bremen",
      locationSlug: "bremen",
      description: "Professionelle Desinfektion und Hygienemaßnahmen in Bremen. Virenschutz, Bakterienbekämpfung und hygienische Reinigung für höchste Standards.",
      cardImage: "card8.jpg",
      cardImageAlt: "Professionelle Desinfektion & Hygiene in Bremen",
      contentPath: "pages/underpages/service8/location1.md",
      surrounding: ["Bremen-Vegesack", "Bremen-Blumenthal", "Bremen-Burglesum", "Bremen-Grohn", "Bremen-Schönebeck"],
      price: "50.00", // Example: "starting at" price per service
      priceCurrency: "EUR"
    }
  ]
};

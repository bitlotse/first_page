const slugify = require("slugify"); // Note: 'slugify' is not currently used in this file's export, but keeping it if you plan to use it for data generation within this file.

module.exports = {
  mainCity: "Traunstein",
  mainCitySlug: "traunstein",
  services: [
    // --- Standort: Traunstein (Alle Dienste) ---
    {
      service: "Haarschnitt Damen",
      serviceSlug: "haarschnitt-damen",
      location: "Traunstein",
      locationSlug: "traunstein",
      description: "Professioneller Damenhaarschnitt in Traunstein. Individuelle Beratung, moderne Schnitttechniken und perfekte Formgebung für Ihren persönlichen Stil.",
      cardImage: "card1.jpg",
      cardImageAlt: "Professioneller Damenhaarschnitt in Traunstein",
      contentPath: "pages/underpages/service1/location1.md",
      surrounding: ["Siegsdorf", "Waging", "Grabenstätt", "Chieming", "Teisendorf"],
      price: "35.00", // Example: "starting at" price
      priceCurrency: "EUR"
    },
    {
      service: "Haarschnitt Herren",
      serviceSlug: "haarschnitt-herren",
      location: "Traunstein",
      locationSlug: "traunstein",
      description: "Klassische und moderne Herrenhaarschnitte in Traunstein. Präzise Schnitttechniken, Bartpflege und Styling für den perfekten Look.",
      cardImage: "card2.jpg",
      cardImageAlt: "Professioneller Herrenhaarschnitt in Traunstein",
      contentPath: "pages/underpages/service2/location1.md",
      surrounding: ["Siegsdorf", "Waging", "Grabenstätt", "Chieming", "Teisendorf"],
      price: "25.00", // Example: "starting at" price
      priceCurrency: "EUR"
    },
    {
      service: "Haare färben",
      serviceSlug: "haare-faerben",
      location: "Traunstein",
      locationSlug: "traunstein",
      description: "Professionelle Haarfärbung in Traunstein. Natürliche Farben, Highlights, Balayage und Strähnen mit hochwertigen Produkten für brillante Ergebnisse.",
      cardImage: "card3.jpg",
      cardImageAlt: "Professionelle Haarfärbung in Traunstein",
      contentPath: "pages/underpages/service3/location1.md",
      surrounding: ["Siegsdorf", "Waging", "Grabenstätt", "Chieming", "Teisendorf"],
      price: "60.00", // Example: "starting at" price
      priceCurrency: "EUR"
    },
    {
      service: "Bartpflege",
      serviceSlug: "bartpflege",
      location: "Traunstein",
      locationSlug: "traunstein",
      description: "Professionelle Bartpflege und Bartformung in Traunstein. Klassische Rasur, Barttrimmen und Styling für den perfekten Look.",
      cardImage: "card4.jpg",
      cardImageAlt: "Professionelle Bartpflege in Traunstein",
      contentPath: "pages/underpages/service4/location1.md",
      surrounding: ["Siegsdorf", "Waging", "Grabenstätt", "Chieming", "Teisendorf"],
      price: "15.00", // Example fixed price
      priceCurrency: "EUR"
    },
    {
      service: "Haarwäsche & Styling",
      serviceSlug: "haarwaesche-styling",
      location: "Traunstein",
      locationSlug: "traunstein",
      description: "Entspannende Haarwäsche und professionelles Styling in Traunstein. Pflegende Behandlungen und perfekte Frisuren für jeden Anlass.",
      cardImage: "card5.jpg",
      cardImageAlt: "Professionelle Haarwäsche & Styling in Traunstein",
      contentPath: "pages/underpages/service5/location1.md",
      surrounding: ["Siegsdorf", "Waging", "Grabenstätt", "Chieming", "Teisendorf"],
      price: "20.00", // Example fixed price
      priceCurrency: "EUR"
    },
    {
      service: "Haarverlängerung",
      serviceSlug: "haarverlaengerung",
      location: "Traunstein",
      locationSlug: "traunstein",
      description: "Professionelle Haarverlängerungen in Traunstein. Natürliche Extensions, Clip-in Haarverlängerungen und Volumenverstärkung für mehr Fülle.",
      cardImage: "card6.jpg",
      cardImageAlt: "Professionelle Haarverlängerung in Traunstein",
      contentPath: "pages/underpages/service6/location1.md",
      surrounding: ["Siegsdorf", "Waging", "Grabenstätt", "Chieming", "Teisendorf"]
      // NO PRICE FOR THIS SERVICE TO DEMONSTRATE FLEXIBILITY
    },
    {
      service: "Hochsteckfrisuren",
      serviceSlug: "hochsteckfrisuren",
      location: "Traunstein",
      locationSlug: "traunstein",
      description: "Elegante Hochsteckfrisuren für Hochzeiten, Bälle und besondere Anlässe in Traunstein. Individuelle Kreationen für Ihren perfekten Auftritt.",
      cardImage: "card7.jpg",
      cardImageAlt: "Elegante Hochsteckfrisuren in Traunstein",
      contentPath: "pages/underpages/service7/location1.md",
      surrounding: ["Siegsdorf", "Waging", "Grabenstätt", "Chieming", "Teisendorf"],
      price: "45.00", // Example: "starting at" price
      priceCurrency: "EUR"
    },
    {
      service: "Haarkur & Behandlung",
      serviceSlug: "haarkur-behandlung",
      location: "Traunstein",
      locationSlug: "traunstein",
      description: "Intensive Haarkuren und Behandlungen in Traunstein. Reparatur, Glanz, Volumen und Pflege für gesundes, schönes Haar.",
      cardImage: "card8.jpg",
      cardImageAlt: "Intensive Haarkuren und Behandlungen in Traunstein",
      contentPath: "pages/underpages/service8/location1.md",
      surrounding: ["Siegsdorf", "Waging", "Grabenstätt", "Chieming", "Teisendorf"],
      price: "20.00", // Example: "starting at" price
      priceCurrency: "EUR"
    },


    /*
    // --- Standort: Siegsdorf (Alle Dienste) ---
    {
      service: "Haarschnitt Damen",
      serviceSlug: "haarschnitt-damen",
      location: "Siegsdorf",
      locationSlug: "siegsdorf",
      description: "Professioneller Damenhaarschnitt für Kunden aus Siegsdorf in Traunstein. Gute Erreichbarkeit, individuelle Beratung und moderne Schnitttechniken.",
      cardImage: "card1.jpg",
      cardImageAlt: "Professioneller Damenhaarschnitt für Kunden aus Siegsdorf",
      contentPath: "pages/underpages/service1/location2.md",
      surrounding: ["Traunstein", "Waging", "Grabenstätt", "Chieming", "Teisendorf"],
      price: "35.00",
      priceCurrency: "EUR"
    },
    {
      service: "Haarschnitt Herren",
      serviceSlug: "haarschnitt-herren",
      location: "Siegsdorf",
      locationSlug: "siegsdorf",
      description: "Klassische und moderne Herrenhaarschnitte für Kunden aus Siegsdorf in Traunstein. Gute Erreichbarkeit, präzise Schnitttechniken und Bartpflege.",
      cardImage: "card2.jpg",
      cardImageAlt: "Professioneller Herrenhaarschnitt für Kunden aus Siegsdorf",
      contentPath: "pages/underpages/service2/location2.md",
      surrounding: ["Traunstein", "Waging", "Grabenstätt", "Chieming", "Teisendorf"],
      price: "25.00",
      priceCurrency: "EUR"
    },
    {
      service: "Haare färben",
      serviceSlug: "haare-faerben",
      location: "Siegsdorf",
      locationSlug: "siegsdorf",
      description: "Professionelle Haarfärbung für Kunden aus Siegsdorf in Traunstein. Gute Erreichbarkeit, natürliche Farben und moderne Techniken.",
      cardImage: "card3.jpg",
      cardImageAlt: "Professionelle Haarfärbung für Kunden aus Siegsdorf",
      contentPath: "pages/underpages/service3/location2.md",
      surrounding: ["Traunstein", "Waging", "Grabenstätt", "Chieming", "Teisendorf"],
      price: "60.00",
      priceCurrency: "EUR"
    },
    {
      service: "Bartpflege",
      serviceSlug: "bartpflege",
      location: "Siegsdorf",
      locationSlug: "siegsdorf",
      description: "Professionelle Bartpflege für Kunden aus Siegsdorf in Traunstein. Gute Erreichbarkeit, klassische Rasur und moderne Bartpflege.",
      cardImage: "card4.jpg",
      cardImageAlt: "Professionelle Bartpflege für Kunden aus Siegsdorf",
      contentPath: "pages/underpages/service4/location2.md",
      surrounding: ["Traunstein", "Waging", "Grabenstätt", "Chieming", "Teisendorf"],
      price: "15.00",
      priceCurrency: "EUR"
    },
    {
      service: "Haarwäsche & Styling",
      serviceSlug: "haarwaesche-styling",
      location: "Siegsdorf",
      locationSlug: "siegsdorf",
      description: "Entspannende Haarwäsche und professionelles Styling für Kunden aus Siegsdorf in Traunstein. Gute Erreichbarkeit und pflegende Behandlungen.",
      cardImage: "card5.jpg",
      cardImageAlt: "Professionelle Haarwäsche & Styling für Kunden aus Siegsdorf",
      contentPath: "pages/underpages/service5/location2.md",
      surrounding: ["Traunstein", "Waging", "Grabenstätt", "Chieming", "Teisendorf"],
      price: "20.00",
      priceCurrency: "EUR"
    },
    {
      service: "Haarverlängerung",
      serviceSlug: "haarverlaengerung",
      location: "Siegsdorf",
      locationSlug: "siegsdorf",
      description: "Professionelle Haarverlängerungen für Kunden aus Siegsdorf in Traunstein. Gute Erreichbarkeit, natürliche Extensions und Clip-in Haarverlängerungen.",
      cardImage: "card6.jpg",
      cardImageAlt: "Professionelle Haarverlängerung für Kunden aus Siegsdorf",
      contentPath: "pages/underpages/service6/location2.md",
      surrounding: ["Traunstein", "Waging", "Grabenstätt", "Chieming", "Teisendorf"]
      // NO PRICE FOR THIS SERVICE TO DEMONSTRATE FLEXIBILITY
    },
    {
      service: "Hochsteckfrisuren",
      serviceSlug: "hochsteckfrisuren",
      location: "Siegsdorf",
      locationSlug: "siegsdorf",
      description: "Elegante Hochsteckfrisuren für Kunden aus Siegsdorf in Traunstein. Gute Erreichbarkeit, individuelle Kreationen für Hochzeiten und besondere Anlässe.",
      cardImage: "card7.jpg",
      cardImageAlt: "Elegante Hochsteckfrisuren für Kunden aus Siegsdorf",
      contentPath: "pages/underpages/service7/location2.md",
      surrounding: ["Traunstein", "Waging", "Grabenstätt", "Chieming", "Teisendorf"],
      price: "45.00",
      priceCurrency: "EUR"
    },
    {
      service: "Haarkur & Behandlung",
      serviceSlug: "haarkur-behandlung",
      location: "Siegsdorf",
      locationSlug: "siegsdorf",
      description: "Intensive Haarkuren und Behandlungen für Kunden aus Siegsdorf in Traunstein. Gute Erreichbarkeit, Reparatur und Pflege für gesundes Haar.",
      cardImage: "card8.jpg",
      cardImageAlt: "Intensive Haarkuren und Behandlungen für Kunden aus Siegsdorf",
      contentPath: "pages/underpages/service8/location2.md",
      surrounding: ["Traunstein", "Waging", "Grabenstätt", "Chieming", "Teisendorf"],
      price: "20.00",
      priceCurrency: "EUR"
    },

    // --- Standort: Teisendorf (Alle Dienste) ---
    {
      service: "Haarschnitt Damen",
      serviceSlug: "haarschnitt-damen",
      location: "Teisendorf",
      locationSlug: "teisendorf",
      description: "Professioneller Damenhaarschnitt für Kunden aus Teisendorf in Traunstein. Schnelle Erreichbarkeit, individuelle Beratung und moderne Schnitttechniken.",
      cardImage: "card1.jpg",
      cardImageAlt: "Professioneller Damenhaarschnitt für Kunden aus Teisendorf",
      contentPath: "pages/underpages/service1/location3.md",
      surrounding: ["Traunstein", "Siegsdorf", "Waging", "Grabenstätt", "Chieming"],
      price: "35.00",
      priceCurrency: "EUR"
    },
    {
      service: "Haarschnitt Herren",
      serviceSlug: "haarschnitt-herren",
      location: "Teisendorf",
      locationSlug: "teisendorf",
      description: "Klassische und moderne Herrenhaarschnitte für Kunden aus Teisendorf in Traunstein. Schnelle Erreichbarkeit, präzise Schnitttechniken und Bartpflege.",
      cardImage: "card2.jpg",
      cardImageAlt: "Professioneller Herrenhaarschnitt für Kunden aus Teisendorf",
      contentPath: "pages/underpages/service2/location3.md",
      surrounding: ["Traunstein", "Siegsdorf", "Waging", "Grabenstätt", "Chieming"],
      price: "25.00",
      priceCurrency: "EUR"
    },
    {
      service: "Haare färben",
      serviceSlug: "haare-faerben",
      location: "Teisendorf",
      locationSlug: "teisendorf",
      description: "Professionelle Haarfärbung für Kunden aus Teisendorf in Traunstein. Schnelle Erreichbarkeit, natürliche Farben und moderne Techniken.",
      cardImage: "card3.jpg",
      cardImageAlt: "Professionelle Haarfärbung für Kunden aus Teisendorf",
      contentPath: "pages/underpages/service3/location3.md",
      surrounding: ["Traunstein", "Siegsdorf", "Waging", "Grabenstätt", "Chieming"],
      price: "60.00",
      priceCurrency: "EUR"
    },
    {
      service: "Bartpflege",
      serviceSlug: "bartpflege",
      location: "Teisendorf",
      locationSlug: "teisendorf",
      description: "Professionelle Bartpflege für Kunden aus Teisendorf in Traunstein. Schnelle Erreichbarkeit, klassische Rasur und moderne Bartpflege.",
      cardImage: "card4.jpg",
      cardImageAlt: "Professionelle Bartpflege für Kunden aus Teisendorf",
      contentPath: "pages/underpages/service4/location3.md",
      surrounding: ["Traunstein", "Siegsdorf", "Waging", "Grabenstätt", "Chieming"],
      price: "15.00",
      priceCurrency: "EUR"
    },
    {
      service: "Haarwäsche & Styling",
      serviceSlug: "haarwaesche-styling",
      location: "Teisendorf",
      locationSlug: "teisendorf",
      description: "Entspannende Haarwäsche und professionelles Styling für Kunden aus Teisendorf in Traunstein. Schnelle Erreichbarkeit und pflegende Behandlungen.",
      cardImage: "card5.jpg",
      cardImageAlt: "Professionelle Haarwäsche & Styling für Kunden aus Teisendorf",
      contentPath: "pages/underpages/service5/location3.md",
      surrounding: ["Traunstein", "Siegsdorf", "Waging", "Grabenstätt", "Chieming"],
      price: "20.00",
      priceCurrency: "EUR"
    },
    {
      service: "Haarverlängerung",
      serviceSlug: "haarverlaengerung",
      location: "Teisendorf",
      locationSlug: "teisendorf",
      description: "Professionelle Haarverlängerungen für Kunden aus Teisendorf in Traunstein. Schnelle Erreichbarkeit, natürliche Extensions und Clip-in Haarverlängerungen.",
      cardImage: "card6.jpg",
      cardImageAlt: "Professionelle Haarverlängerung für Kunden aus Teisendorf",
      contentPath: "pages/underpages/service6/location3.md",
      surrounding: ["Traunstein", "Siegsdorf", "Waging", "Grabenstätt", "Chieming"]
      // NO PRICE FOR THIS SERVICE TO DEMONSTRATE FLEXIBILITY
    },
    {
      service: "Hochsteckfrisuren",
      serviceSlug: "hochsteckfrisuren",
      location: "Teisendorf",
      locationSlug: "teisendorf",
      description: "Elegante Hochsteckfrisuren für Kunden aus Teisendorf in Traunstein. Schnelle Erreichbarkeit, individuelle Kreationen für Hochzeiten und besondere Anlässe.",
      cardImage: "card7.jpg",
      cardImageAlt: "Elegante Hochsteckfrisuren für Kunden aus Teisendorf",
      contentPath: "pages/underpages/service7/location3.md",
      surrounding: ["Traunstein", "Siegsdorf", "Waging", "Grabenstätt", "Chieming"],
      price: "45.00",
      priceCurrency: "EUR"
    },
    {
      service: "Haarkur & Behandlung",
      serviceSlug: "haarkur-behandlung",
      location: "Teisendorf",
      locationSlug: "teisendorf",
      description: "Intensive Haarkuren und Behandlungen für Kunden aus Teisendorf in Traunstein. Schnelle Erreichbarkeit, Reparatur und Pflege für gesundes Haar.",
      cardImage: "card8.jpg",
      cardImageAlt: "Intensive Haarkuren und Behandlungen für Kunden aus Teisendorf",
      contentPath: "pages/underpages/service8/location3.md",
      surrounding: ["Traunstein", "Siegsdorf", "Waging", "Grabenstätt", "Chieming"],
      price: "20.00",
      priceCurrency: "EUR"
    },

    // --- Standort: Chieming (Alle Dienste) ---
    {
      service: "Haarschnitt Damen",
      serviceSlug: "haarschnitt-damen",
      location: "Chieming",
      locationSlug: "chieming",
      description: "Professioneller Damenhaarschnitt für Kunden aus Chieming in Traunstein. Bequeme Anreise, individuelle Beratung und moderne Schnitttechniken.",
      cardImage: "card1.jpg",
      cardImageAlt: "Professioneller Damenhaarschnitt für Kunden aus Chieming",
      contentPath: "pages/underpages/service1/location4.md",
      surrounding: ["Traunstein", "Siegsdorf", "Waging", "Grabenstätt", "Teisendorf"],
      price: "35.00",
      priceCurrency: "EUR"
    },
    {
      service: "Haarschnitt Herren",
      serviceSlug: "haarschnitt-herren",
      location: "Chieming",
      locationSlug: "chieming",
      description: "Klassische und moderne Herrenhaarschnitte für Kunden aus Chieming in Traunstein. Bequeme Anreise, präzise Schnitttechniken und Bartpflege.",
      cardImage: "card2.jpg",
      cardImageAlt: "Professioneller Herrenhaarschnitt für Kunden aus Chieming",
      contentPath: "pages/underpages/service2/location4.md",
      surrounding: ["Traunstein", "Siegsdorf", "Waging", "Grabenstätt", "Teisendorf"],
      price: "25.00",
      priceCurrency: "EUR"
    },
    {
      service: "Haare färben",
      serviceSlug: "haare-faerben",
      location: "Chieming",
      locationSlug: "chieming",
      description: "Professionelle Haarfärbung für Kunden aus Chieming in Traunstein. Bequeme Anreise, natürliche Farben und moderne Techniken.",
      cardImage: "card3.jpg",
      cardImageAlt: "Professionelle Haarfärbung für Kunden aus Chieming",
      contentPath: "pages/underpages/service3/location4.md",
      surrounding: ["Traunstein", "Siegsdorf", "Waging", "Grabenstätt", "Teisendorf"],
      price: "60.00",
      priceCurrency: "EUR"
    },
    {
      service: "Bartpflege",
      serviceSlug: "bartpflege",
      location: "Chieming",
      locationSlug: "chieming",
      description: "Professionelle Bartpflege für Kunden aus Chieming in Traunstein. Bequeme Anreise, klassische Rasur und moderne Bartpflege.",
      cardImage: "card4.jpg",
      cardImageAlt: "Professionelle Bartpflege für Kunden aus Chieming",
      contentPath: "pages/underpages/service4/location4.md",
      surrounding: ["Traunstein", "Siegsdorf", "Waging", "Grabenstätt", "Teisendorf"],
      price: "15.00",
      priceCurrency: "EUR"
    },
    {
      service: "Haarwäsche & Styling",
      serviceSlug: "haarwaesche-styling",
      location: "Chieming",
      locationSlug: "chieming",
      description: "Entspannende Haarwäsche und professionelles Styling für Kunden aus Chieming in Traunstein. Bequeme Anreise und pflegende Behandlungen.",
      cardImage: "card5.jpg",
      cardImageAlt: "Professionelle Haarwäsche & Styling für Kunden aus Chieming",
      contentPath: "pages/underpages/service5/location4.md",
      surrounding: ["Traunstein", "Siegsdorf", "Waging", "Grabenstätt", "Teisendorf"],
      price: "20.00",
      priceCurrency: "EUR"
    },
    {
      service: "Haarverlängerung",
      serviceSlug: "haarverlaengerung",
      location: "Chieming",
      locationSlug: "chieming",
      description: "Professionelle Haarverlängerungen für Kunden aus Chieming in Traunstein. Bequeme Anreise, natürliche Extensions und Clip-in Haarverlängerungen.",
      cardImage: "card6.jpg",
      cardImageAlt: "Professionelle Haarverlängerung für Kunden aus Chieming",
      contentPath: "pages/underpages/service6/location4.md",
      surrounding: ["Traunstein", "Siegsdorf", "Waging", "Grabenstätt", "Teisendorf"]
      // NO PRICE FOR THIS SERVICE TO DEMONSTRATE FLEXIBILITY
    },
    {
      service: "Hochsteckfrisuren",
      serviceSlug: "hochsteckfrisuren",
      location: "Chieming",
      locationSlug: "chieming",
      description: "Elegante Hochsteckfrisuren für Kunden aus Chieming in Traunstein. Bequeme Anreise, individuelle Kreationen für Hochzeiten und besondere Anlässe.",
      cardImage: "card7.jpg",
      cardImageAlt: "Elegante Hochsteckfrisuren für Kunden aus Chieming",
      contentPath: "pages/underpages/service7/location4.md",
      surrounding: ["Traunstein", "Siegsdorf", "Waging", "Grabenstätt", "Teisendorf"],
      price: "45.00",
      priceCurrency: "EUR"
    },
    {
      service: "Haarkur & Behandlung",
      serviceSlug: "haarkur-behandlung",
      location: "Chieming",
      locationSlug: "chieming",
      description: "Intensive Haarkuren und Behandlungen für Kunden aus Chieming in Traunstein. Bequeme Anreise, Reparatur und Pflege für gesundes Haar.",
      cardImage: "card8.jpg",
      cardImageAlt: "Intensive Haarkuren und Behandlungen für Kunden aus Chieming",
      contentPath: "pages/underpages/service8/location4.md",
      surrounding: ["Traunstein", "Siegsdorf", "Waging", "Grabenstätt", "Teisendorf"],
      price: "20.00",
      priceCurrency: "EUR"
    }

    */
  ]
};

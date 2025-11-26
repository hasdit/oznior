import type { Product, Blog } from './types';

export const products: Product[] = [
  {
    id: "1",
    title: "NOIR VOYAGE 50ml",
    slug: "noir-voyage-50ml",
    shortDescription: "A deep, intoxicating scent of midnight air and aged leather. The signature of a true explorer.",
    price: 125.00,
    comparePrice: 150.00,
    volumeMl: 50,
    images: ["noir-voyage-bottle", "noir-voyage-shot"],
    categories: ["Men's", "Signature", "Intense"],
    tags: ["Leather", "Woody", "Oriental"],
    fragranceNotes: {
      top: ["Pink Pepper", "Bergamot", "Cardamom"],
      middle: ["Aged Leather", "Sandalwood", "Incense"],
      base: ["Patchouli", "Ambergris", "Vetiver"],
    },
    featured: true,
    inventoryNumber: 15,
    description: "The essence of a journey taken under a starless sky. **NOIR VOYAGE** is built around the raw, untamed spirit of aged leather and the mysterious depth of incense. It opens with a spark of pink pepper, before sinking into a heart of rich, smoked woods. The base lingers, an addictive trail of ambergris and patchouli, promising longevity and an unmistakable presence. It's not just a scent; it's a destination. Ideal for evening wear, signature scent potential. \n\n**Longevity: 8+ hours. Sillage: Strong.**\n\nCrafted with a high concentration of premium natural oils.",
    sku: "OZ-NV50",
    createdAt: "2023-10-01T12:00:00Z"
  },
  {
    id: "2",
    title: "SILK ENIGMA 100ml",
    slug: "silk-enigma-100ml",
    shortDescription: "Soft, enveloping, and utterly captivating. A white floral that holds its secret close.",
    price: 160.00,
    comparePrice: 0,
    volumeMl: 100,
    images: ["silk-enigma-bottle", "silk-enigma-shot"],
    categories: ["Women's", "Floral", "Modern"],
    tags: ["Tuberose", "Musk", "Soft"],
    fragranceNotes: {
      top: ["Mandarin Orange", "Pear"],
      middle: ["Tuberose Absolute", "Jasmine Sambac", "Orange Blossom"],
      base: ["White Musk", "Vanilla Bean", "Cashmeran"],
    },
    featured: true,
    inventoryNumber: 6,
    description: "Like a whisper on warm skin, **SILK ENIGMA** is a modern interpretation of the classic white floral. The initial burst of citrus quickly softens into a narcotic heart of Tuberose and Jasmine—a mesmerizing duality of purity and indulgence. The composition is grounded by the subtle, clean embrace of white musk and the creamy sweetness of vanilla, ensuring a sophisticated, skin-like finish. Perfect for all seasons, day or evening. This scent is an intimate declaration, not a loud proclamation.\n\n**Longevity: 6-8 hours. Sillage: Moderate.**\n\nCruelty-free and ethically sourced ingredients.",
    sku: "OZ-SE100",
    createdAt: "2023-10-02T12:00:00Z"
  },
  {
    id: "3",
    title: "AURUM RUSH 75ml",
    slug: "aurum-rush-75ml",
    shortDescription: "A confident rush of golden saffron and warm spices. Bold, opulent, and purely addictive.",
    price: 95.00,
    comparePrice: 0,
    volumeMl: 75,
    images: ["aurum-rush-bottle", "aurum-rush-shot"],
    categories: ["Unisex", "Spicy", "Winter"],
    tags: ["Saffron", "Oud", "Gourmand"],
    fragranceNotes: {
      top: ["Saffron", "Cinnamon", "Pink Pepper"],
      middle: ["Rose", "Clove", "Smoked Wood"],
      base: ["Oud Accord", "Praline", "Tonka Bean"],
    },
    featured: false,
    inventoryNumber: 22,
    description: "**AURUM RUSH** is a lavish, uncompromising scent that captures the exhilarating feeling of pure luxury. It opens with a brilliant gleam of saffron, quickly followed by the comforting heat of cinnamon and clove. The heart introduces a dark, brooding rose, leading the way to an opulent, grounding base of Oud and sweet praline. It’s warm, commanding, and unforgettable—the perfect armor for a winter evening or a statement piece for any occasion.\n\n**Longevity: 10+ hours. Sillage: Heavy.**",
    sku: "OZ-AR75",
    createdAt: "2023-10-03T12:00:00Z"
  },
  {
    id: "4",
    title: "VERIDIAN LIGHT 50ml",
    slug: "veridian-light-50ml",
    shortDescription: "The fresh, crisp scent of a hidden rainforest after the rain. Clean, vibrant, and elemental.",
    price: 110.00,
    comparePrice: 0,
    volumeMl: 50,
    images: ["veridian-light-bottle", "veridian-light-shot"],
    categories: ["Unisex", "Fresh", "Green"],
    tags: ["Fig", "Moss", "Citrus"],
    fragranceNotes: {
      top: ["Green Fig Leaf", "Grapefruit", "Mint"],
      middle: ["White Tea", "Cyclamen", "Wet Moss"],
      base: ["Cedarwood", "Ambroxan"],
    },
    featured: false,
    inventoryNumber: 9,
    description: "**VERIDIAN LIGHT** is a breath of fresh air—a vibrant, contemporary Green scent that evokes the tranquility of a lush, secret garden. The scent profile is dominated by the sharp, milky freshness of the fig leaf, brightened by a hint of citrus and mint. It settles into a tranquil, earthy base of damp moss and clean cedarwood, creating a scent that feels effortlessly modern and deeply restorative. The ideal daytime fragrance for the sophisticated minimalists.\n\n**Longevity: 4-6 hours. Sillage: Soft.**",
    sku: "OZ-VL50",
    createdAt: "2023-10-04T12:00:00Z"
  },
  {
    id: "5",
    title: "LUNAR DUST 100ml",
    slug: "lunar-dust-100ml",
    shortDescription: "An ethereal blend of cold metallic notes and smooth iris. Futuristic and hauntingly beautiful.",
    price: 185.00,
    comparePrice: 0,
    volumeMl: 100,
    images: ["lunar-dust-bottle", "lunar-dust-shot"],
    categories: ["Unisex", "Abstract", "Niche"],
    tags: ["Iris", "Metallic", "Cold"],
    fragranceNotes: {
      top: ["Metallic Aldehydes", "Cold Spice"],
      middle: ["Orris Butter", "Violet Leaf", "Magnolia"],
      base: ["White Patchouli", "Iso E Super", "Clean Amber"],
    },
    featured: false,
    inventoryNumber: 12,
    description: "**LUNAR DUST** transcends traditional perfumery with its abstract, futuristic profile. It is a scent of contrasts: the sharp, cold edge of metallic aldehydes meets the luxurious, powdery warmth of Orris butter (Iris). It’s clean, dry, and surprisingly comforting, evoking the sensation of light on a chrome surface or the silent atmosphere of the moon. A truly unique signature for those who value individuality.\n\n**Longevity: 7-9 hours. Sillage: Moderate.**",
    sku: "OZ-LD100",
    createdAt: "2023-10-05T12:00:00Z"
  },
  {
    id: "6",
    title: "EAU DE PLAGE 75ml",
    slug: "eau-de-plage-75ml",
    shortDescription: "Sun-warmed skin, salt spray, and Mediterranean air. The perfect holiday memory in a bottle.",
    price: 85.00,
    comparePrice: 0,
    volumeMl: 75,
    images: ["eau-de-plage-bottle", "eau-de-plage-shot"],
    categories: ["Unisex", "Fresh", "Summer"],
    tags: ["Marine", "Coconut", "Citrus"],
    fragranceNotes: {
      top: ["Sea Salt", "Lemon Zest", "Eucalyptus"],
      middle: ["Tiare Flower", "Coconut Water", "Driftwood"],
      base: ["Salty Musk", "Vanilla Orchid"],
    },
    featured: false,
    inventoryNumber: 28,
    description: "**EAU DE PLAGE** is the olfactory embodiment of an endless summer afternoon. It captures the crisp, ozone freshness of the ocean mixed with the creamy, delicate scent of monoi and coconut water from a sun-drenched beach. It's a joyful, effortless fragrance, designed to be splashed liberally. The musk base is clean and subtle, leaving the impression of naturally beautiful, sun-kissed skin. The ultimate warm-weather essential.\n\n**Longevity: 4-6 hours. Sillage: Soft to Moderate.**",
    sku: "OZ-EP75",
    createdAt: "2023-10-06T12:00:00Z"
  },
  {
    id: "7",
    title: "RED VELVET OUD 50ml",
    slug: "red-velvet-oud-50ml",
    shortDescription: "Decadent dark chocolate, Turkish rose, and fiery oud. The scent of absolute indulgence.",
    price: 145.00,
    comparePrice: 0,
    volumeMl: 50,
    images: ["red-velvet-oud-bottle", "red-velvet-oud-shot"],
    categories: ["Women's", "Gourmand", "Intense"],
    tags: ["Oud", "Rose", "Chocolate"],
    fragranceNotes: {
      top: ["Dark Cocoa", "Red Berries"],
      middle: ["Turkish Rose Absolute", "Geranium"],
      base: ["Cambodian Oud", "Sandalwood", "Patchouli"],
    },
    featured: true,
    inventoryNumber: 10,
    description: "**RED VELVET OUD** is a fragrance of pure, sinful luxury. It starts with the rich, slightly bitter scent of dark cocoa and red berries, creating an immediate sense of warmth and decadence. This deep gourmand note is beautifully contrasted by the opulent, velvet-like Turkish Rose in the heart. The base is an animalic yet refined blend of high-quality Cambodian Oud and creamy sandalwood, making it an utterly seductive and powerful scent for special occasions.\n\n**Longevity: 10+ hours. Sillage: Heavy.**",
    sku: "OZ-RVO50",
    createdAt: "2023-10-07T12:00:00Z"
  },
  {
    id: "8",
    title: "VIOLET HAZE 75ml",
    slug: "violet-haze-75ml",
    shortDescription: "Powdery violet, iris root, and clean suede. An ode to classic luxury and quiet sophistication.",
    price: 130.00,
    comparePrice: 0,
    volumeMl: 75,
    images: ["violet-haze-bottle", "violet-haze-shot"],
    categories: ["Unisex", "Powdery", "Elegant"],
    tags: ["Violet", "Suede", "Musk"],
    fragranceNotes: {
      top: ["Violet Leaf", "Bergamot"],
      middle: ["Iris Root", "Heliotrope", "Clean Suede"],
      base: ["Cedar", "Tonka Bean", "Cashmere Wood"],
    },
    featured: false,
    inventoryNumber: 18,
    description: "**VIOLET HAZE** is the scent of a soft leather jacket draped over a perfectly tailored suit. It's built on a timeless blend of powdery violet and iris root, which lends a sophisticated, cosmetic-like texture to the heart. A beautifully rendered clean suede note introduces a soft, modern touch of elegance. This scent is subtle, refined, and utterly magnetic—perfect for professional settings or intimate gatherings.\n\n**Longevity: 6-8 hours. Sillage: Moderate.**",
    sku: "OZ-VH75",
    createdAt: "2023-10-08T12:00:00Z"
  },
  {
    id: "9",
    title: "SOLAR CITRON 100ml",
    slug: "solar-citron-100ml",
    shortDescription: "A dazzling burst of Sicilian lemon and neroli. Pure sunshine in a bottle.",
    price: 155.00,
    comparePrice: 0,
    volumeMl: 100,
    images: ["solar-citron-bottle", "solar-citron-shot"],
    categories: ["Unisex", "Citrus", "Summer"],
    tags: ["Lemon", "Neroli", "Fresh"],
    fragranceNotes: {
      top: ["Sicilian Lemon", "Bergamot", "Petitgrain"],
      middle: ["Neroli", "Orange Blossom", "Rosemary"],
      base: ["Vetiver", "Musk", "Sea Salt"],
    },
    featured: true,
    inventoryNumber: 30,
    description: "**SOLAR CITRON** is an explosion of pure, unadulterated joy. It opens with an intensely realistic and bright burst of Sicilian lemon, capturing the essence of a sun-drenched Italian orchard. The heart unfolds with the clean, slightly green floralcy of neroli and orange blossom, while a base of vetiver and musk provides a clean, lasting finish. It is the definitive luxury citrus fragrance, perfect for elevating your mood and refreshing your senses on the warmest of days. \n\n**Longevity: 5-7 hours. Sillage: Moderate.**",
    sku: "OZ-SC100",
    createdAt: "2024-01-10T12:00:00Z"
  },
  {
    id: "10",
    title: "MIDNIGHT OUD 50ml",
    slug: "midnight-oud-50ml",
    shortDescription: "A dark, mysterious oud for the modern connoisseur. For moments of quiet confidence.",
    price: 195.00,
    comparePrice: 220.00,
    volumeMl: 50,
    images: ["midnight-oud-bottle", "midnight-oud-shot"],
    categories: ["Men's", "Woody", "Intense"],
    tags: ["Oud", "Smoky", "Amber"],
    fragranceNotes: {
      top: ["Black Pepper", "Whiskey Accord"],
      middle: ["Oud", "Leather", "Coffee"],
      base: ["Incense", "Amber", "Vanilla"],
    },
    featured: false,
    inventoryNumber: 8,
    description: "**MIDNIGHT OUD** is a contemplative and sophisticated take on oud. It avoids the harshness of synthetic ouds, instead focusing on a smooth, smoky, and resinous profile. An opening of black pepper and a phantom whiskey note leads into a heart where a refined oud accord meets dark-roast coffee and worn leather. The base is a warm, enveloping blend of incense and amber. It is the scent of a leather-bound book in a fire-lit study. \n\n**Longevity: 9+ hours. Sillage: Strong.**",
    sku: "OZ-MO50",
    createdAt: "2024-01-12T12:00:00Z"
  },
  {
    id: "11",
    title: "PETAL CLOUD 75ml",
    slug: "petal-cloud-75ml",
    shortDescription: "A soft, dreamy musk with delicate peony and rose. Like floating on a cloud of petals.",
    price: 135.00,
    comparePrice: 0,
    volumeMl: 75,
    images: ["petal-cloud-bottle", "petal-cloud-shot"],
    categories: ["Women's", "Floral", "Powdery"],
    tags: ["Musk", "Peony", "Rose"],
    fragranceNotes: {
      top: ["Lychee", "Bergamot"],
      middle: ["Peony", "Turkish Rose", "Magnolia"],
      base: ["Clean Musk", "Cashmere Wood", "White Amber"],
    },
    featured: false,
    inventoryNumber: 25,
    description: "**PETAL CLOUD** is the fragrance equivalent of a cashmere sweater. It's an incredibly soft, clean, and comforting musk that envelops you in a gentle floral haze. The opening is a dewy lychee, leading to a heart of fluffy peony and delicate rose petals. The base is a symphony of clean musks and soft woods, creating a scent that feels personal and intimate. It’s the perfect 'your-skin-but-better' fragrance. \n\n**Longevity: 6-8 hours. Sillage: Soft.**",
    sku: "OZ-PC75",
    createdAt: "2024-02-01T12:00:00Z"
  },
  {
    id: "12",
    title: "EMBER SPICE 50ml",
    slug: "ember-spice-50ml",
    shortDescription: "A fiery blend of cinnamon, tobacco, and vanilla. The scent of warmth and comfort.",
    price: 115.00,
    comparePrice: 0,
    volumeMl: 50,
    images: ["ember-spice-bottle", "ember-spice-shot"],
    categories: ["Unisex", "Spicy", "Winter"],
    tags: ["Cinnamon", "Tobacco", "Vanilla"],
    fragranceNotes: {
      top: ["Cinnamon Bark", "Nutmeg"],
      middle: ["Tobacco Leaf", "Clove", "Ginger"],
      base: ["Vanilla Absolute", "Tonka Bean", "Sandalwood"],
    },
    featured: false,
    inventoryNumber: 19,
    description: "**EMBER SPICE** is a warm hug in a bottle. This fragrance is a masterful blend of sweet and spice, perfect for cozying up on a cold day. A dominant cinnamon note is balanced by the rich, earthy aroma of tobacco leaf and the creamy sweetness of vanilla absolute. It’s inviting, delicious, and deeply comforting without being overly sweet. A must-have for the fall and winter seasons. \n\n**Longevity: 8+ hours. Sillage: Moderate to Strong.**",
    sku: "OZ-ES50",
    createdAt: "2024-02-15T12:00:00Z"
  },
  {
    id: "13",
    title: "AQUA MYST 100ml",
    slug: "aqua-myst-100ml",
    shortDescription: "A modern aquatic with a mineralic twist. The scent of a cool sea breeze on a rocky shore.",
    price: 150.00,
    comparePrice: 0,
    volumeMl: 100,
    images: ["aqua-myst-bottle", "aqua-myst-shot"],
    categories: ["Men's", "Fresh", "Aquatic"],
    tags: ["Marine", "Mineral", "Citrus"],
    fragranceNotes: {
      top: ["Sea Minerals", "Grapefruit"],
      middle: ["Juniper", "Lavender", "Sage"],
      base: ["Ambroxan", "Driftwood", "Vetiver"],
    },
    featured: false,
    inventoryNumber: 28,
    description: "**AQUA MYST** reinvents the aquatic genre. Instead of a simple citrus-and-water combination, it introduces a cold, mineralic accord that evokes the scent of wet stones and sea salt in the air. A heart of aromatic juniper and sage adds a clean, almost gin-like freshness, while a robust base of ambroxan and driftwood ensures excellent longevity for a fresh fragrance. It's sophisticated, versatile, and distinctly modern. \n\n**Longevity: 7-9 hours. Sillage: Moderate.**",
    sku: "OZ-AM100",
    createdAt: "2024-03-01T12:00:00Z"
  },
  {
    id: "14",
    title: "RUBY FLAME 75ml",
    slug: "ruby-flame-75ml",
    shortDescription: "A juicy, intoxicating cherry and almond scent. Playful, seductive, and unforgettable.",
    price: 140.00,
    comparePrice: 0,
    volumeMl: 75,
    images: ["ruby-flame-bottle", "ruby-flame-shot"],
    categories: ["Women's", "Fruity", "Gourmand"],
    tags: ["Cherry", "Almond", "Vanilla"],
    fragranceNotes: {
      top: ["Black Cherry", "Bitter Almond"],
      middle: ["Turkish Rose", "Jasmine Sambac", "Plum"],
      base: ["Tonka Bean", "Vanilla", "Peru Balsam"],
    },
    featured: true,
    inventoryNumber: 11,
    description: "**RUBY FLAME** is a bold and flirtatious fragrance that is impossible to ignore. A hyper-realistic black cherry note opens the scent, made complex and sophisticated by a touch of bitter almond. A floral heart of rose and jasmine adds depth, while a rich, decadent base of tonka bean and vanilla creates a luscious, long-lasting trail. It's the perfect scent for a night out or any time you want to feel confident and alluring. \n\n**Longevity: 8+ hours. Sillage: Strong.**",
    sku: "OZ-RF75",
    createdAt: "2024-03-10T12:00:00Z"
  },
  {
    id: "15",
    title: "FOREST SANCTUM 50ml",
    slug: "forest-sanctum-50ml",
    shortDescription: "A meditative blend of Japanese cypress and incense. The scent of a tranquil forest temple.",
    price: 130.00,
    comparePrice: 0,
    volumeMl: 50,
    images: ["forest-sanctum-bottle", "forest-sanctum-shot"],
    categories: ["Unisex", "Woody", "Green"],
    tags: ["Cypress", "Incense", "Moss"],
    fragranceNotes: {
      top: ["Hinoki (Japanese Cypress)", "Pine Needle"],
      middle: ["Frankincense", "Myrrh", "Cedarwood"],
      base: ["Oakmoss", "Vetiver", "Patchouli"],
    },
    featured: false,
    inventoryNumber: 14,
    description: "**FOREST SANCTUM** is a spiritual and grounding fragrance experience. It transports you to a quiet, ancient forest temple in Japan. The dominant note is Hinoki, a type of cypress that has a unique lemony, pine-like, and slightly creamy woody aroma. This is paired with the sacred smoke of frankincense and myrrh. A damp, earthy base of oakmoss and vetiver completes the photorealistic experience. This is not a perfume; it's a meditation. \n\n**Longevity: 7-8 hours. Sillage: Moderate.**",
    sku: "OZ-FS50",
    createdAt: "2024-04-05T12:00:00Z"
  },
  {
    id: "16",
    title: "GOLDEN HOUR 100ml",
    slug: "golden-hour-100ml",
    shortDescription: "A warm, radiant amber and vanilla scent. Captures the magic of a sunset.",
    price: 170.00,
    comparePrice: 0,
    volumeMl: 100,
    images: ["golden-hour-bottle", "golden-hour-shot"],
    categories: ["Women's", "Amber", "Sweet"],
    tags: ["Amber", "Vanilla", "Cashmere"],
    fragranceNotes: {
      top: ["Bergamot", "Pink Peppercorn"],
      middle: ["Ylang-Ylang", "Cashmere Wood"],
      base: ["Amber", "Madagascar Vanilla", "Benzoin"],
    },
    featured: true,
    inventoryNumber: 20,
    description: "**GOLDEN HOUR** is the scent of warm, sun-kissed skin at sunset. A radiant and luminous amber accord forms the core of the fragrance, enriched by the creamy sweetness of Madagascar vanilla and the resinous depth of benzoin. A touch of ylang-ylang and cashmere wood in the heart adds a soft, feminine texture. It's a comforting, elegant, and effortlessly beautiful fragrance that glows from the skin. \n\n**Longevity: 8+ hours. Sillage: Moderate to Strong.**",
    sku: "OZ-GH100",
    createdAt: "2024-04-20T12:00:00Z"
  },
  {
    id: "17",
    title: "CONCRETE JUNGLE 75ml",
    slug: "concrete-jungle-75ml",
    shortDescription: "An edgy, urban scent of concrete, saffron, and leather. The pulse of the city.",
    price: 125.00,
    comparePrice: 140.00,
    volumeMl: 75,
    images: ["concrete-jungle-bottle", "concrete-jungle-shot"],
    categories: ["Men's", "Modern", "Niche"],
    tags: ["Mineral", "Leather", "Spicy"],
    fragranceNotes: {
      top: ["Ozonic Accord", "Saffron"],
      middle: ["Concrete Accord", "Violet Leaf", "Cardamom"],
      base: ["Black Leather", "Styrax", "Musk"],
    },
    featured: false,
    inventoryNumber: 16,
    description: "**CONCRETE JUNGLE** captures the dynamic energy of a metropolis. A unique 'concrete accord' gives the fragrance a cool, mineralic, and slightly wet feeling, like rain on hot pavement. This is contrasted with the warmth of saffron and the sharp, clean edge of violet leaf. A base of smooth black leather and styrax provides a dark, sophisticated, and slightly industrial finish. It’s the scent for the modern urbanite. \n\n**Longevity: 7-9 hours. Sillage: Moderate.**",
    sku: "OZ-CJ75",
    createdAt: "2024-05-01T12:00:00Z"
  },
  {
    id: "18",
    title: "IVORY MUSK 50ml",
    slug: "ivory-musk-50ml",
    shortDescription: "The ultimate clean musk. Pure, simple, and exquisitely crafted.",
    price: 110.00,
    comparePrice: 0,
    volumeMl: 50,
    images: ["ivory-musk-bottle", "ivory-musk-shot"],
    categories: ["Unisex", "Musk", "Clean"],
    tags: ["Musk", "Ambrette", "Sandalwood"],
    fragranceNotes: {
      top: ["Ambrette (Musk Mallow)"],
      middle: ["Angelica Root", "Magnolia"],
      base: ["White Musk", "Sandalwood", "Ambergris"],
    },
    featured: false,
    inventoryNumber: 35,
    description: "**IVORY MUSK** is a study in minimalism. It is designed to meld with your natural skin chemistry to create a scent that is uniquely yours. It opens with the subtle, plant-based musk of ambrette seed, which has a clean, slightly sweet, and nutty aroma. The heart is transparent and clean, while the base is a blend of several high-quality white musks and a touch of creamy sandalwood. It doesn’t scream; it becomes a part of you. \n\n**Longevity: 6-8 hours. Sillage: Soft.**",
    sku: "OZ-IM50",
    createdAt: "2024-05-15T12:00:00Z"
  },
  {
    id: "19",
    title: "SAFFRON SUEDE 75ml",
    slug: "saffron-suede-75ml",
    shortDescription: "A supple suede and saffron fragrance with a hint of raspberry. Modern luxury defined.",
    price: 165.00,
    comparePrice: 0,
    volumeMl: 75,
    images: ["saffron-suede-bottle", "saffron-suede-shot"],
    categories: ["Unisex", "Leather", "Fruity"],
    tags: ["Suede", "Saffron", "Raspberry"],
    fragranceNotes: {
      top: ["Saffron", "Raspberry"],
      middle: ["Thyme", "Olibanum", "Jasmine"],
      base: ["Leather", "Suede", "Amberwood"],
    },
    featured: false,
    inventoryNumber: 13,
    description: "**SAFFRON SUEDE** is a luxurious and tactile fragrance. It captures the texture of the finest suede, made slightly sweet and intriguing with a note of fresh raspberry. The heart is aromatic and slightly smoky with thyme and olibanum, while the base is a rich combination of leather, suede, and warm amberwood. It is smooth, sophisticated, and has a captivating presence that is both modern and timeless. \n\n**Longevity: 8+ hours. Sillage: Moderate to Strong.**",
    sku: "OZ-SS75",
    createdAt: "2024-06-02T12:00:00Z"
  },
  {
    id: "20",
    title: "CHAI ÉPICÉ 50ml",
    slug: "chai-epice-50ml",
    shortDescription: "A creamy, spicy chai latte in a bottle. The perfect cozy scent for autumn.",
    price: 105.00,
    comparePrice: 0,
    volumeMl: 50,
    images: ["chai-epice-bottle", "chai-epice-shot"],
    categories: ["Unisex", "Gourmand", "Spicy"],
    tags: ["Chai", "Cardamom", "Lactonic"],
    fragranceNotes: {
      top: ["Cardamom", "Ginger", "Cinnamon"],
      middle: ["Black Tea", "Star Anise", "Steamed Milk Accord"],
      base: ["Vanilla", "Brown Sugar", "Sandalwood"],
    },
    featured: false,
    inventoryNumber: 22,
    description: "**CHAI ÉPICÉ** is a photorealistic gourmand experience. It perfectly captures the aroma of a warm, spicy, and milky chai latte from your favorite café. A blast of authentic chai spices like cardamom, ginger, and cinnamon opens the fragrance, leading into a heart of strong black tea and a creamy steamed milk accord. The base is sweet and comforting with vanilla and brown sugar. It’s the ultimate comfort scent. \n\n**Longevity: 7-9 hours. Sillage: Moderate.**",
    sku: "OZ-CE50",
    createdAt: "2024-06-18T12:00:00Z"
  }
];

export const blogs: Blog[] = [
    {
        id: "1",
        title: "আপনার সিগনেচার পারফিউম খুঁজে বের করার ৫টি ধাপ",
        slug: "find-your-signature-perfume-bangla",
        excerpt: "হাজারো সুগন্ধির ভিড়ে নিজের জন্য সঠিক পারফিউমটি খুঁজে পাওয়া কঠিন হতে পারে। আমাদের এই ৫টি সহজ ধাপ অনুসরণ করে আপনার ব্যক্তিত্বের সাথে মানানসই সিগনেচার সেন্ট আবিষ্কার করুন।",
        content: `
# আপনার সিগনেচার পারফিউম খুঁজে বের করার ৫টি ধাপ

সঠিক পারফিউম নির্বাচন করা শুধু একটি সুগন্ধি বেছে নেওয়া নয়, এটি আপনার ব্যক্তিত্ব এবং স্টাইলের একটি অংশ। আপনার সিগনেচার সেন্ট হলো সেই সুবাস যা আপনার পরিচয় বহন করে। কিন্তু কীভাবে খুঁজে পাবেন সেই বিশেষ পারফিউম? চলুন জেনে নেওয়া যাক ৫টি সহজ ধাপ।

## ১. নোটগুলো সম্পর্কে জানুন
প্রতিটি পারফিউমের তিনটি স্তর বা 'নোট' থাকে:
- **টপ নোট:** লাগানোর সাথে সাথেই যে গন্ধ পাওয়া যায়। এটি হালকা হয় এবং বেশিক্ষণ থাকে না। (যেমন: লেবু, বার্গামট)
- **মিডল নোট (হার্ট নোট):** টপ নোট চলে যাওয়ার পর এই গন্ধটি প্রকাশ পায়। এটি পারফিউমের মূল বৈশিষ্ট্য। (যেমন: গোলাপ, জেসমিন)
- **বেস নোট:** এটি সবচেয়ে দীর্ঘস্থায়ী এবং পারফিউমের ভিত্তি তৈরি করে। (যেমন: চন্দন, ভ্যানিলা, কস্তুরী)

আপনার কোন ধরণের নোট বেশি ভালো লাগে, তা বোঝার চেষ্টা করুন।

## ২. পারফিউম ফ্যামিলি বা পরিবার চয়ন করুন
পারফিউমগুলোকে মূলত কয়েকটি পরিবারে ভাগ করা হয়। যেমন:
- **ফ্লোরাল (Floral):** ফুলের সুবাসযুক্ত, যেমন - গোলাপ, জুঁই, লিলি।
- **ওরিয়েন্টাল (Oriental):** উষ্ণ, मसालेदार এবং মিষ্টি গন্ধ, যেমন - ভ্যানিলা, দারুচিনি, অ্যাম্বার।
- **উডি (Woody):** কাঠ এবং মাটির মতো গন্ধ, যেমন - চন্দন, সিডারউড, ভেটিভার।
- **ফ্রেশ (Fresh):** সতেজ এবং পরিষ্কার গন্ধ, যেমন - লেবু, সমুদ্রের হাওয়া, সবুজ পাতা।

আপনি কোন ধরণের গন্ধ বেশি পছন্দ করেন, তা নির্ধারণ করুন।

## ৩. ত্বকে পরীক্ষা করুন
পারফিউম সবসময় নিজের ত্বকে পরীক্ষা করা উচিত। কাগজের স্ট্রিপ বা কাপড়ে যে গন্ধ পাওয়া যায়, আপনার ত্বকের রসায়নের সাথে মিশে তা বদলে যেতে পারে। পারফিউম কব্জিতে স্প্রে করুন এবং গন্ধটি সারাদিন কেমন থাকে তা পর্যবেক্ষণ করুন।

## ৪. তাড়াহুড়ো করবেন না
একদিনে তিন-চারটির বেশি পারফিউম পরীক্ষা করবেন না। এর বেশি হলে আপনার ঘ্রাণশক্তি সঠিকভাবে কাজ নাও করতে পারে। দুটি পারফিউমের গন্ধ শোঁকার মাঝে কফির বীজ শুঁকলে আপনার নাক পরিষ্কার হতে পারে।

## ৫. ঋতু এবং উপলক্ষ্য বিবেচনা করুন
সব পারফিউম সব সময়ের জন্য উপযুক্ত নয়। গরমকালে হালকা এবং ফ্রেশ সুগন্ধি ভালো লাগে, অন্যদিকে শীতকালে উষ্ণ এবং উডি বা ওরিয়েন্টাল সুগন্ধি বেশি আরামদায়ক মনে হয়। একইভাবে, দিনের বেলার জন্য হালকা এবং রাতের অনুষ্ঠানের জন্য তীব্র সুগন্ধি বেছে নিতে পারেন।

আপনার সিগনেচার সেন্ট খুঁজে পাওয়া একটি আনন্দদায়ক যাত্রা। সময় নিন, বিভিন্ন সুগন্ধি অন্বেষণ করুন এবং এমন একটি বেছে নিন যা আপনাকে আত্মবিশ্বাসী করে তোলে।
`,
        imageUrl: "https://picsum.photos/seed/blog1/1200/630",
        author: "ওজনিওর টিম",
        createdAt: "2024-07-26T10:00:00Z"
    },
    {
        id: "2",
        title: "পারফিউমের নোট: টপ, মিডল এবং বেস নোটের রহস্য",
        slug: "perfume-notes-explained-bangla",
        excerpt: "পারফিউমের জগতে 'নোট' একটি গুরুত্বপূর্ণ ধারণা। টপ, মিডল এবং বেস নোট কী এবং কীভাবে তারা একসাথে একটি সুরেলা সুগন্ধ তৈরি করে, তা বিস্তারিতভাবে জানুন।",
        content: `
# পারফিউমের নোট: টপ, মিডল এবং বেস নোটের রহস্য

যখন আমরা একটি পারফিউমের বর্ণনা পড়ি, তখন প্রায়শই 'টপ নোট', 'মিডল নোট' এবং 'বেস নোট' শব্দগুলো দেখতে পাই। এই নোটগুলো আসলে কী? এগুলো হলো একটি পারফিউমের বিভিন্ন সুগন্ধি স্তর, যা সময়ের সাথে সাথে ধাপে ধাপে প্রকাশ পায় এবং একটি সম্পূর্ণ ঘ্রাণ তৈরি করে। এই ধারণাকে 'ফ্র্যাগরেন্স পিরামিড' (Fragrance Pyramid) বলা হয়।

## টপ নোট (Top Notes)
টপ নোট হলো পারফিউম স্প্রে করার সাথে সাথে আপনি যে প্রথম গন্ধটি পান।
- **বৈশিষ্ট্য:** এগুলো সাধারণত হালকা, সতেজ এবং উদ্বায়ী হয়।
- **উদাহরণ:** সাইট্রাস (লেবু, বার্গামট), হালকা ফল (বেরি), এবং হার্বস (ল্যাভেন্ডার, বেসিল)।
- **স্থায়িত্ব:** সাধারণত ৫ থেকে ১৫ মিনিট স্থায়ী হয়।
- **উদ্দেশ্য:** টপ নোটের কাজ হলো প্রথম দর্শনে মুগ্ধ করা এবং মিডল নোটের জন্য মঞ্চ প্রস্তুত করা।

## মিডল নোট (Middle Notes)
টপ নোটগুলো মিলিয়ে যাওয়ার পর মিডল নোট বা 'হার্ট নোট' প্রকাশ পায়। এটি পারফিউমের মূল চরিত্র গঠন করে।
- **বৈশিষ্ট্য:** এগুলি টপ নোটের চেয়ে বেশি সময় স্থায়ী হয় এবং পারফিউমের মূল থিম তৈরি করে।
- **উদাহরণ:** ফুল (গোলাপ, জেসমিন, লিলি), মশলা (দারুচিনি, এলাচ), এবং সবুজ নোট (ঘাস)।
- **স্থায়িত্ব:** প্রায় ২০ থেকে ৬০ মিনিট পর্যন্ত স্থায়ী হয়।
- **উদ্দেশ্য:** মিডল নোট হলো পারফিউমের হৃদয়। এটি টপ নোটের সতেজতার সাথে বেস নোটের গভীরতার সংযোগ স্থাপন করে।

## বেস নোট (Base Notes)
মিডল নোট যখন ম্লান হতে শুরু করে, তখন বেস নোটের আগমন ঘটে। এটি পারফিউমের সবচেয়ে গভীর এবং দীর্ঘস্থায়ী স্তর।
- **বৈশিষ্ট্য:** এগুলি ভারী, насыщен এবং কম উদ্বায়ী হয়।
- **উদাহরণ:** উডি নোট (চন্দন, সিডারউড), রেজিন (অ্যাম্বার, লোবান), এবং মিষ্টি নোট (ভ্যানিলা, টonka বিন), কস্তুরী (Musk)।
- **স্থায়িত্ব:** ৬ ঘণ্টা বা তারও বেশি সময় ধরে থাকতে পারে।
- **উদ্দেশ্য:** বেস নোট পারফিউমকে স্থায়িত্ব এবং গভীরতা দেয়। এটি ত্বকের সাথে মিশে একটি অনন্য এবং দীর্ঘস্থায়ী সুবাস তৈরি করে।

### উপসংহার
একটি ভালো পারফিউম হলো এই তিনটি নোটের একটি শৈল্পিক মিশ্রণ। টপ নোটের সতেজ সূচনা, মিডল নোটের সমৃদ্ধ হৃদয় এবং বেস নোটের উষ্ণ সমাপ্তি—সবকিছু মিলে একটি সম্পূর্ণ এবং স্মরণীয় ঘ্রাণ অভিজ্ঞতা তৈরি করে। পরেরবার যখন পারফিউম কিনবেন, তখন শুধু প্রথম গন্ধে আকৃষ্ট না হয়ে, এর সম্পূর্ণ জীবনচক্র অনুভব করার জন্য সময় দিন।
`,
        imageUrl: "https://picsum.photos/seed/blog2/1200/630",
        author: "সুগন্ধ বিশেষজ্ঞ",
        createdAt: "2024-07-25T11:00:00Z"
    },
    {
        id: "3",
        title: "পারফিউম দীর্ঘস্থায়ী করার ৭টি কার্যকর উপায়",
        slug: "how-to-make-perfume-last-longer-bangla",
        excerpt: "আপনার পছন্দের পারফিউমটি কি বেশিক্ষণ স্থায়ী হয় না? কিছু সহজ কৌশল অবলম্বন করে আপনি আপনার সুগন্ধিকে সারাদিন ধরে রাখতে পারেন। জেনে নিন পারফিউম দীর্ঘস্থায়ী করার ৭টি গোপন টিপস।",
        content: `
# পারফিউম দীর্ঘস্থায়ী করার ৭টি কার্যকর উপায়

দামি পারফিউম কিনেছেন, কিন্তু গন্ধটা কয়েক ঘণ্টার মধ্যেই উবে যাচ্ছে? এটা খুবই হতাশাজনক। তবে কিছু সহজ কৌশল অবলম্বন করলে আপনার প্রিয় সুগন্ধি সারাদিন আপনাকে সঙ্গ দেবে। চলুন, জেনে নেওয়া যাক সেই গোপন কৌশলগুলো।

## ১. সঠিক সময়ে পারফিউম লাগান
গোসলের ঠিক পর পর পারফিউম লাগানোর সেরা সময়। তখন আপনার ত্বক উষ্ণ এবং আর্দ্র থাকে, যা সুগন্ধিকে ভালোভাবে শোষণ করতে এবং দীর্ঘক্ষণ ধরে রাখতে সাহায্য করে। শুকনো ত্বকের চেয়ে আর্দ্র ত্বকে পারফিউম বেশি স্থায়ী হয়।

## ২. ত্বককে ময়েশ্চারাইজ করুন
পারফিউম লাগানোর আগে আপনার ত্বকের পালস পয়েন্টগুলোতে (কব্জি, ঘাড়, কনুইয়ের ভাঁজ) একটি গন্ধহীন ময়েশ্চারাইজার বা ভ্যাসলিন লাগিয়ে নিন। তৈলাক্ত বা আর্দ্র ত্বক সুগন্ধিকে ভালোভাবে ধরে রাখে।

## ৩. পালস পয়েন্টে স্প্রে করুন
শরীরের যে জায়গাগুলোতে রক্তনালী ত্বকের কাছাকাছি থাকে, সেগুলোকে পালস পয়েন্ট বলে। এই জায়গাগুলো অন্য জায়গার চেয়ে উষ্ণ থাকে, যা সুগন্ধিকে সারাদিন ধরে ধীরে ধীরে ছড়িয়ে দিতে সাহায্য করে। কব্জি, ঘাড়ের দু'পাশ, কানের পেছনে, কনুইয়ের ভেতরের ভাঁজে পারফিউম লাগান।

## ৪. ঘষা থেকে বিরত থাকুন
অনেকেই পারফিউম লাগানোর পর দুই কব্জি একসাথে ঘষে নেন। এটি একটি বড় ভুল! এতে পারফিউমের অণুগুলো ভেঙে যায় এবং এর টপ ও মিডল নোটগুলো দ্রুত নষ্ট হয়ে যায়। ফলে গন্ধটি বেশিক্ষণ থাকে না। শুধু স্প্রে করে শুকিয়ে যেতে দিন।

## ৫. চুলে এবং কাপড়ে পারফিউম ব্যবহার করুন
চুল সুগন্ধিকে ত্বকের চেয়ে বেশি সময় ধরে রাখতে পারে। আপনার চুলের ব্রাশে সামান্য পারফিউম স্প্রে করে তারপর চুল আঁচড়ে নিন। সরাসরি চুলে স্প্রে করা থেকে বিরত থাকুন কারণ এতে থাকা অ্যালকোহল চুলকে শুষ্ক করে দিতে পারে। এছাড়াও, কাপড়েও পারফিউম ব্যবহার করতে পারেন, তবে সিল্কের মতো সংবেদনশীল কাপড়ে দাগ লাগার সম্ভাবনা থাকে।

## ৬. পারফিউম লেয়ারিং করুন
একই সুগন্ধযুক্ত বিভিন্ন পণ্য (যেমন বডি ওয়াশ, লোশন এবং পারফিউম) একসাথে ব্যবহার করাকে লেয়ারিং বলে। এটি আপনার সুগন্ধিকে আরও গভীর এবং দীর্ঘস্থায়ী করে তুলবে।

## ৭. সঠিক সংরক্ষণ পদ্ধতি
পারফিউম আলো, তাপ এবং আর্দ্রতার কারণে নষ্ট হয়ে যায়। তাই বাথরুমের পরিবর্তে আপনার পারফিউমের বোতলটি একটি ঠান্ডা, অন্ধকার এবং শুকনো জায়গায়, যেমন ড্রয়ার বা আলমারিতে সংরক্ষণ করুন।

এই সহজ টিপসগুলো অনুসরণ করে আপনার পছন্দের সুগন্ধিকে সকাল থেকে রাত পর্যন্ত উপভোগ করুন!
`,
        imageUrl: "https://picsum.photos/seed/blog3/1200/630",
        author: "ওজনিওর বিউটি",
        createdAt: "2024-07-24T12:00:00Z"
    },
    {
        id: "4",
        title: "উদ (Oud): পারফিউম জগতের 'তরল সোনা'",
        slug: "what-is-oud-fragrance-bangla",
        excerpt: "উদ বা আগরউড পারফিউম শিল্পের সবচেয়ে মূল্যবান এবং রহস্যময় উপাদানগুলোর মধ্যে একটি। কেন একে 'তরল সোনা' বলা হয়? এর ইতিহাস এবং অনন্য সুগন্ধ সম্পর্কে জানুন।",
        content: `
# উদ (Oud): পারফিউম জগতের 'তরল সোনা'

পারফিউমের জগতে 'উদ' (Oud) একটি নাম যা বিলাসিতা, রহস্য এবং ঐতিহ্যের প্রতীক। মধ্যপ্রাচ্যের সংস্কৃতিতে এর ব্যবহার বহু পুরনো হলেও, বর্তমানে বিশ্বজুড়ে নিช (Niche) এবং লাক্সারি পারফিউমারিতে এর জনপ্রিয়তা আকাশচুম্বী। কিন্তু কী এই উদ এবং কেন এটি এত মূল্যবান?

## উদ কী এবং কীভাবে তৈরি হয়?
উদ, যা আগরউড নামেও পরিচিত, আসলে একটি গাছের কাঠ। তবে এটি কোনো সাধারণ কাঠ নয়। যখন *Aquilaria* প্রজাতির গাছ এক ধরণের ছত্রাক (*Phialophora parasitica*) দ্বারা আক্রান্ত হয়, তখন গাছটি নিজেকে রক্ষা করার জন্য এক প্রকার গাঢ়, সুগন্ধি রেজিন বা রজন তৈরি করে। এই রজনযুক্ত কাঠই হলো উদ।

এই প্রক্রিয়াটি খুবই ধীর এবং প্রাকৃতিকভাবে খুব কম গাছেই এটি ঘটে। একটি গাছকে এই মূল্যবান রেজিন তৈরি করতে কয়েক দশক বা এমনকি শত শত বছর সময় লাগতে পারে। এর दुर्लभতা এবং জটিল উৎপাদন প্রক্রিয়ার কারণেই উদ তেলের দাম অনেক বেশি—কখনো কখনো সোনার চেয়েও বেশি। একারণেই একে **'তরল সোনা' (Liquid Gold)** বলা হয়।

## উদের গন্ধ কেমন?
উদের গন্ধ অত্যন্ত জটিল এবং বহুমুখী। এটি এক কথায় বর্ণনা করা প্রায় অসম্ভব। এর ঘ্রাণ হতে পারে:
- **উষ্ণ এবং উডি:** কাঠের গভীর এবং насыщен গন্ধ।
- **অ্যানিমেলিক (Animalic):** কিছুটা কস্তুরীর মতো তীব্র এবং প্রাণবন্ত।
- **মিষ্টি এবং ব্যালসামিক:** মধুর মতো মিষ্টি এবং রজনের মতো গভীর।
- **ধোঁয়াটে এবং চামড়ার মতো:** কিছুটা ধোঁয়ার গন্ধ বা নতুন চামড়ার মতো অনুভূতি।

গুণমান এবং উৎসের উপর নির্ভর করে উদের গন্ধের মধ্যে অনেক পার্থক্য দেখা যায়। কম্বোডিয়ান উদ কিছুটা মিষ্টি হয়, যেখানে ভারতীয় উদ বেশি অ্যানিমেলিক এবং শক্তিশালী হতে পারে।

## পারফিউমারিতে উদের ব্যবহার
ঐতিহ্যগতভাবে, মধ্যপ্রাচ্যে উদ কাঠ সরাসরি জ্বালিয়ে বা এর তেল ত্বকে ব্যবহার করা হতো। আধুনিক পারফিউমারিতে, উদকে একটি শক্তিশালী বেস নোট হিসেবে ব্যবহার করা হয়। এটি পারফিউমকে অবিশ্বাস্য গভীরতা, স্থায়িত্ব এবং একটি বিলাসবহুল চরিত্র প্রদান করে।

এটি প্রায়শই গোলাপ, জাফরান, অ্যাম্বার এবং মশলার মতো অন্যান্য দামি উপাদানের সাথেผสม করা হয়। **NOIR VOYAGE** বা **RED VELVET OUD**-এর মতো পারফিউমে উদের ব্যবহার একটি সাহসী এবং স্মরণীয় ঘ্রাণ তৈরি করে।

উদ সবার জন্য নয়। এর শক্তিশালী এবং স্বতন্ত্র গন্ধ অনেকের কাছে প্রথমদিকে একটু অচেনা লাগতে পারে। কিন্তু একবার এর মায়াজালে জড়িয়ে গেলে, অন্য কিছুতে মন বসানো কঠিন। উদ শুধু একটি সুগন্ধি নয়, এটি একটি অভিজ্ঞতা।
`,
        imageUrl: "https://picsum.photos/seed/blog4/1200/630",
        author: "সুগন্ধ বিশেষজ্ঞ",
        createdAt: "2024-07-23T09:00:00Z"
    },
    {
        id: "5",
        title: "শীতের জন্য সেরা পারফিউম: উষ্ণতা এবং আরামের সুবাস",
        slug: "best-perfumes-for-winter-bangla",
        excerpt: "শীতের ঠান্ডা আবহাওয়ায় কোন ধরণের পারফিউম ব্যবহার করবেন? উষ্ণ, मसालेदार এবং মিষ্টি নোটযুক্ত সুগন্ধিগুলো এই ঋতুর জন্য উপযুক্ত। শীতের সেরা পারফিউম বেছে নেওয়ার জন্য আমাদের গাইড পড়ুন।",
        content: `
# শীতের জন্য সেরা পারফিউম: উষ্ণতা এবং আরামের সুবাস

ঋতু পরিবর্তনের সাথে সাথে আমাদের পোশাক যেমন বদলায়, তেমনি পারফিউমও বদলে নেওয়া উচিত। শীতের ঠান্ডা, শুষ্ক বাতাস সুগন্ধিকে দ্রুত শুষে নেয়, তাই এই সময়ে এমন পারফিউম বেছে নেওয়া দরকার যা উষ্ণ, насыщен এবং দীর্ঘস্থায়ী।

শীতের দিনের জন্য কোন ধরণের সুগন্ধি সবচেয়ে ভালো? চলুন জেনে নেই।

## কেন শীতের পারফিউম আলাদা?
গ্রীষ্মে আমরা হালকা, সতেজ এবং সাইট্রাসি সুগন্ধি পছন্দ করি যা আমাদের ঠান্ডা অনুভূতি দেয়। কিন্তু শীতে আমাদের এমন কিছু দরকার যা উষ্ণতা এবং আরামের অনুভূতি জাগায়, ঠিক যেমন একটি নরম সোয়েটার বা আগুনের পাশের উষ্ণতা। ভারী এবং জটিল নোটগুলো ঠান্ডা আবহাওয়ায় ভালোভাবে ফুটে ওঠে।

## শীতের জন্য সেরা পারফিউম নোট
শীতের পারফিউম বেছে নেওয়ার সময় এই নোটগুলো খুঁজে দেখতে পারেন:

### ১. ওরিয়েন্টাল বা অ্যাম্বার নোট
এই পরিবারটি শীতের জন্য সবচেয়ে জনপ্রিয়।
- **অ্যাম্বার (Amber):** একটি উষ্ণ, মিষ্টি এবং রেজিনের মতো গন্ধ যা পারফিউমকে গভীরতা দেয়।
- **ভ্যানিলা (Vanilla):** শুধু মিষ্টিই নয়, এটি একটি আরামদায়ক এবং கவர்షణীয় উষ্ণতা প্রদান করে।
- **টংকা বিন (Tonka Bean):** ভ্যানিলার মতো, তবে এতে বাদাম এবং মশলার একটি জটিল মিশ্রণ থাকে।

আমাদের **EMBER SPICE** পারফিউমটি ভ্যানিলা এবং টংকার একটি নিখুঁত উদাহরণ।

### ২. উডি নোট (Woody Notes)
কাঠের গন্ধ শীতের প্রকৃতির সাথে মিশে যায়।
- **চন্দন (Sandalwood):** একটি নরম, ক্রিমি এবং মিষ্টি কাঠের গন্ধ।
- **সিডারউড (Cedarwood):** পেন্সিলের মতো শুকনো এবং পরিষ্কার কাঠের গন্ধ।
- **উদ (Oud):** একটি অত্যন্ত বিলাসবহুল, জটিল এবং শক্তিশালী উডি নোট, যা শীতের রাতের জন্য উপযুক্ত।

আমাদের **MIDNIGHT OUD** বা **FOREST SANCTUM** এই ক্যাটাগরির 대표।

### ৩. স্পাইসি নোট (Spicy Notes)
মশলার উষ্ণতা শীতের ঠান্ডাকে मात দিতে সাহায্য করে।
- **দারুচিনি (Cinnamon):** মিষ্টি এবং উষ্ণ, যা উৎসবের আমেজ নিয়ে আসে।
- **এলাচ (Cardamom):** কিছুটা মিষ্টি, কিছুটা मसालेदार এবং অত্যন্ত মার্জিত।
- **লবঙ্গ (Clove):** তীব্র, উষ্ণ এবং সামান্য মিষ্টি।

আমাদের **CHAI ÉPICÉ** পারফিউমে এই মশলাগুলোর একটি সুন্দর মিশ্রণ রয়েছে।

### ৪. গুরমান্ড নোট (Gourmand Notes)
খাবারের মতো সুস্বাদু গন্ধগুলো শীতকালে বিশেষভাবে আকর্ষণীয় মনে হয়।
- **চকলেট/কোക്കോ (Chocolate/Cocoa):** সমৃদ্ধ এবং বিলাসবহুল।
- **কফি (Coffee):** ভাজা কফির উষ্ণ এবং আরামদায়ক গন্ধ।
- **চেরি বা প্লাম (Cherry/Plum):** মিষ্টি এবং রসালো ফলের গভীর গন্ধ।

আমাদের **RED VELVET OUD**-এ ডার্ক কোকো এবং **RUBY FLAME**-এ ব্ল্যাক চেরির ব্যবহার রয়েছে।

### উপসংহার
শীতে এমন একটি পারফিউম বেছে নিন যা আপনাকে উষ্ণতা এবং আত্মবিশ্বাস দেয়। একটি насыщен এবং জটিল সুগন্ধি কেবল আপনার মনকেই ভালো রাখবে না, বরং আপনার শীতের স্টাইলকেও সম্পূর্ণ করবে।
`,
        imageUrl: "https://picsum.photos/seed/blog5/1200/630",
        author: "ওজনিওর স্টাইল",
        createdAt: "2024-07-22T14:00:00Z"
    },
    {
        id: "6",
        title: "পুরুষদের জন্য পারফিউম: কীভাবে সঠিক সেন্ট বেছে নেবেন?",
        slug: "mens-perfume-guide-bangla",
        excerpt: "সঠিক পারফিউম একজন পুরুষের ব্যক্তিত্বকে ফুটিয়ে তুলতে পারে। উডি, স্পাইসি, নাকি ফ্রেশ—কোন ধরণের সুগন্ধি আপনার জন্য? পুরুষদের পারফিউম বেছে নেওয়ার সম্পূর্ণ গাইড।",
        content: `
# পুরুষদের জন্য পারফিউম: কীভাবে সঠিক সেন্ট বেছে নেবেন?

পারফিউম শুধু নারীদের জন্য নয়, পুরুষদের সাজসজ্জারও একটি অপরিহার্য অংশ। একটি ভালো পারফিউম আপনার আত্মবিশ্বাস বাড়াতে পারে এবং অন্যদের উপর একটি স্থায়ী ছাপ ফেলতে পারে। কিন্তু বাজারে এত ধরণের পারফিউমের ভিড়ে নিজের জন্য সঠিকটি বেছে নেওয়া কঠিন হতে পারে।

এই গাইডটি আপনাকে আপনার ব্যক্তিত্ব এবং প্রয়োজন অনুযায়ী সেরা পারফিউমটি খুঁজে পেতে সাহায্য করবে।

## ১. সুগন্ধির পরিবারগুলো বুঝুন
পুরুষদের পারফিউমগুলো মূলত কয়েকটি ঘ্রাণ পরিবার বা 'ফ্যামিলি'-তে বিভক্ত:

- **উডি (Woody):** এটি পুরুষদের পারফিউমের সবচেয়ে ক্লাসিক এবং জনপ্রিয় পরিবার। চন্দন, সিডারউড, ভেটিভার এবং প্যাচুলির মতো নোটগুলো এই পরিবারে পড়ে। এটি একটি পুরুষালি, স্থিতিশীল এবং মার্জিত অনুভূতি দেয়। আমাদের **NOIR VOYAGE** একটি চমৎকার উডি পারফিউম।

- **ফ্রেশ (Fresh):** এই পরিবারে সাইট্রাস (লেবু, বার্গামট), অ্যাকোয়াটিক (সামুদ্রিক) এবং গ্রিন (সবুজ পাতা) নোট অন্তর্ভুক্ত। এগুলো হালকা, পরিষ্কার এবং সতেজ অনুভূতি দেয়, যা দিনের বেলা বা গরম আবহাওয়ার জন্য উপযুক্ত। আমাদের **AQUA MYST** এই ক্যাটাগরির একটি আধুনিক উদাহরণ।

- **ওরিয়েন্টাল/স্পাইসি (Oriental/Spicy):** এই পারফিউমগুলো উষ্ণ, मसालेदार এবং আকর্ষণীয় হয়। ভ্যানিলা, অ্যাম্বার, দারুচিনি, এলাচ এবং গোলমরিচের মতো নোট এখানে পাওয়া যায়। এগুলো সাধারণত রাতের অনুষ্ঠানের জন্য বা শীতকালে ব্যবহারের জন্য আদর্শ। আমাদের **EMBER SPICE** একটি উষ্ণ স্পাইসি পারফিউম।

- **এরোম্যাটিক (Aromatic):** ল্যাভেন্ডার, রোজমেরি, সেজ (sage) এর মতো হার্বাল নোটগুলো এই পরিবার গঠন করে। এগুলো সাধারণত উডি বা সাইট্রাস নোটের সাথে মিশ্রিত থাকে এবং একটি ক্লাসিক, পরিচ্ছন্ন এবং পুরুষালি ঘ্রাণ তৈরি করে।

## ২. পারফিউমের ঘনত্ব বা কনসেনট্রেশন জানুন
পারফিউমের গায়ে লেখা Eau de Toilette (EDT) বা Eau de Parfum (EDP)-এর অর্থ কী?

- **Eau de Cologne (EDC):** ২-৪% সুগন্ধি তেল। সবচেয়ে হালকা এবং ২-৩ ঘণ্টা স্থায়ী হয়।
- **Eau de Toilette (EDT):** ৫-১৫% সুগন্ধি তেল। দিনের বেলার জন্য জনপ্রিয় এবং প্রায় ৪-৬ ঘণ্টা স্থায়ী হয়।
- **Eau de Parfum (EDP):** ১৫-২০% সুগন্ধি তেল। তীব্র এবং দীর্ঘস্থায়ী, প্রায় ৬-৮ ঘণ্টা বা তার বেশি থাকে।
- **Parfum/Extrait:** ২০-৩০% সুগন্ধি তেল। সবচেয়ে ঘন এবং দীর্ঘস্থায়ী।

আপনার প্রয়োজন অনুযায়ী সঠিক ঘনত্ব বেছে নিন। দীর্ঘস্থায়িত্ব চাইলে EDP বেছে নেওয়া ভালো।

## ৩. উপলক্ষ্য এবং ব্যক্তিত্ব বিবেচনা করুন
- **অফিস বা পেশাগত পরিবেশ:** হালকা, পরিষ্কার এবং অ-বিরক্তিকর সুগন্ধি বেছে নিন। যেমন - হালকা উডি বা ফ্রেশ সাইট্রাস। **VERIDIAN LIGHT** একটি ভালো অপশন হতে পারে।
- **ক্যাজুয়াল বা দিনের বেলা:** যেকোনো ফ্রেশ বা হালকা স্পাইসি পারফিউম চলতে পারে।
- **রাতের অনুষ্ঠান বা ডেট:** সাহসী, উষ্ণ এবং আকর্ষণীয় কিছু বেছে নিন। যেমন - ওরিয়েন্টাল, লেদারি বা উডি পারফিউম। **MIDNIGHT OUD** বা **NOIR VOYAGE** এখানে দারুণ কাজ করবে।

আপনার ব্যক্তিত্ব কেমন? আপনি যদি শান্ত এবং অন্তর্মুখী হন, তবে একটি সূক্ষ্ম উডি বা মাস্কি সেন্ট ভালো মানাবে। আর যদি আপনি বহির্মুখী এবং উদ্যমী হন, তবে একটি স্পাইসি বা বোল্ড সাইট্রাস পারফিউম আপনার ব্যক্তিত্বকে ফুটিয়ে তুলবে।

## ৪. পরীক্ষা করার নিয়ম
পারফিউম কেনার আগে সবসময় ত্বকে পরীক্ষা করুন। আপনার কব্জিতে স্প্রে করে কয়েক ঘণ্টা অপেক্ষা করুন। আপনার শরীরের রসায়নের সাথে মিশে পারফিউমের আসল গন্ধটি প্রকাশ পাবে।

সঠিক পারফিউম আপনার স্টাইলের একটি শক্তিশালী অংশ হতে পারে। তাই সময় নিয়ে আপনার জন্য সেরাটি বেছে নিন।
`,
        imageUrl: "https://picsum.photos/seed/blog6/1200/630",
        author: "ওজনিওর স্টাইল",
        createdAt: "2024-07-21T15:00:00Z"
    },
    {
        id: "7",
        title: "অ্যাম্বার (Amber): পারফিউমের উষ্ণ আত্মা",
        slug: "what-is-amber-fragrance-bangla",
        excerpt: "অ্যাম্বার পারফিউমের জগতে একটি বহুল ব্যবহৃত এবং প্রিয় নোট। কিন্তু এটি আসলে কী? এর উষ্ণ, মিষ্টি এবং রহস্যময় গন্ধের উৎস এবং বৈশিষ্ট্য সম্পর্কে জানুন।",
        content: `
# অ্যাম্বার (Amber): পারফিউমের উষ্ণ আত্মা

পারফিউমের বর্ণনায় 'অ্যাম্বার' শব্দটি দেখলেই আমাদের মনে একটি উষ্ণ, আরামদায়ক এবং কিছুটা মিষ্টি গন্ধের ধারণা আসে। এটি পারফিউম জগতের অন্যতম মৌলিক এবং প্রিয় একটি নোট। কিন্তু অ্যাম্বার আসলে কী? এটি কি গাছ থেকে পাওয়া জীবাশ্ম অ্যাম্বার পাথর? উত্তরটি আপনাকে অবাক করতে পারে।

## পারফিউমারিতে অ্যাম্বার কী?
পারফিউমে ব্যবহৃত 'অ্যাম্বার' নোটটি আসলে জীবাশ্ম হয়ে যাওয়া গাছের রজন বা অ্যাম্বার পাথর থেকে আসে না। অ্যাম্বার পাথর নিজে 거의 গন্ধহীন।

পারফিউমারিতে 'অ্যাম্বার' হলো একটি **অ্যাকর্ড (accord)** বা বিভিন্ন উপাদানের মিশ্রণ যা একটি উষ্ণ, পাউডারি এবং মিষ্টি ঘ্রাণ তৈরি করে। এটি একটি কাল্পনিক নোট, যা বিভিন্ন উপাদানের সংমিশ্রণে তৈরি হয়।

এই অ্যাকর্ডের মূল উপাদানগুলো হলো:
1.  **ল্যাবডেনাম (Labdanum):** *Cistus* নামক গাছের রজন থেকে এটি পাওয়া যায়। এর গন্ধ উষ্ণ, মিষ্টি, কিছুটা চামড়ার মতো এবং অ্যানিমেলিক। অ্যাম্বার অ্যাকর্ডের ভিত্তি মূলত ল্যাবডেনাম।
2.  **ভ্যানিলা (Vanilla):** এটি অ্যাম্বারকে তার বৈশিষ্ট্যপূর্ণ মিষ্টি এবং আরামদায়ক অনুভূতি দেয়।
3.  **বেঞ্জোইন (Benzoin):** *Styrax* গাছের রজন, যার গন্ধ ভ্যানিলার মতো মিষ্টি এবং কিছুটা সিনামনের মতো मसालेदार। এটি পারফিউমকে গভীরতা এবং স্থায়িত্ব দেয়।
4.  **অন্যান্য উপাদান:** অনেক সময় অ্যাম্বার অ্যাকর্ডকে আরও জটিল করার জন্য প্যাচুলি, স্যান্ডালউড বা অন্যান্য মশলা যোগ করা হয়।

## অ্যাম্বারগ্রিস (Ambergris) বনাম অ্যাম্বার
অনেকেই অ্যাম্বার এবং অ্যাম্বারগ্রিসকে এক করে ফেলেন, কিন্তু দুটি সম্পূর্ণ ভিন্ন জিনিস।

- **অ্যাম্বারগ্রিস (Ambergris):** এটি স্পার্ম হোয়েল বা শুক্রাণু তিমির পাচনতন্ত্র থেকে তৈরি হওয়া একটি পদার্থ। এটি সমুদ্রে বহু বছর ধরে ভেসে থাকার পর তীরে এসে পৌঁছায়। এটি অত্যন্ত দুর্লভ এবং মূল্যবান। এর গন্ধ নোনতা, সামুদ্রিক এবং কিছুটা মিষ্টি। এটি পারফিউমকে স্থায়িত্ব দিতে ব্যবহৃত হয়।
- **অ্যাম্বার (Amber):** এটি উপরে বর্ণিত ল্যাবডেনাম, ভ্যানিলা এবং বেঞ্জোইনের একটি অ্যাকর্ড।

हालांकि, অ্যাম্বারগ্রিসের ঐতিহাসিক গুরুত্ব এবং উষ্ণ, অ্যানিমেলিক গন্ধের কারণে আধুনিক 'অ্যাম্বার' অ্যাকর্ডটি এর থেকে অনুপ্রেরণা নিয়েছে বলে মনে করা হয়।

## অ্যাম্বারের গন্ধ কেমন?
অ্যাম্বার নোটের গন্ধকে এভাবে বর্ণনা করা যেতে পারে:
- **উষ্ণ এবং আরামদায়ক:** কম্বলের মতো উষ্ণ এবং জড়িয়ে ধরার মতো অনুভূতি দেয়।
- **মিষ্টি এবং পাউডারি:** ভ্যানিলা এবং বেঞ্জোইনের কারণে একটি নরম, মিষ্টি এবং কিছুটা পাউডারের মতো গন্ধ থাকে।
- **রেজিনাস (Resinous):** রজনের মতো গভীর এবং কিছুটা ধোঁয়াটে।
- **বিলাসবহুল এবং আবেদনময়ী:** এর উষ্ণতা এবং গভীরতা একটি আবেদনময়ী এবং বিলাসবহুল অনুভূতি তৈরি করে।

আমাদের **GOLDEN HOUR** পারফিউমটি একটি চমৎকার অ্যাম্বার-ভিত্তিক সুগন্ধি, যা মাদাগাস্কার ভ্যানিলার সাথে মিশে একটি উজ্জ্বল এবং উষ্ণ অভিজ্ঞতা দেয়।

অ্যাম্বার ভিত্তিক পারফিউমগুলো সাধারণত শীতকাল বা সন্ধ্যার জন্য উপযুক্ত, কারণ এর উষ্ণতা ঠান্ডা আবহাওয়ায় বিশেষভাবে আরামদায়ক মনে হয়।
`,
        imageUrl: "https://picsum.photos/seed/blog7/1200/630",
        author: "সুগন্ধ বিশেষজ্ঞ",
        createdAt: "2024-07-20T18:00:00Z"
    },
    {
        id: "8",
        title: "নিশ (Niche) বনাম ডিজাইনার (Designer) পারফিউম: পার্থক্য কী?",
        slug: "niche-vs-designer-perfumes-bangla",
        excerpt: "পারফিউম কেনার সময় 'নিশ' এবং 'ডিজাইনার' এই দুটি শব্দ প্রায়ই শোনা যায়। কিন্তু এদের মধ্যে আসল পার্থক্যটা কোথায়? কোনটি আপনার জন্য সঠিক? বিস্তারিত জানুন।",
        content: `
# নিশ (Niche) বনাম ডিজাইনার (Designer) পারফিউম: পার্থক্য কী?

পারফিউমের বিশাল জগতে প্রধানত দুটি ক্যাটাগরি রয়েছে: **ডিজাইনার** এবং **নিশ**। আপনি যদি পারফিউম ভালোবাসেন, তাহলে এই দুটি শ্রেণীর মধ্যে পার্থক্য জানা আপনার জন্য গুরুত্বপূর্ণ। এটি আপনাকে আপনার রুচি এবং বাজেট অনুযায়ী সঠিক পারফিউমটি বেছে নিতে সাহায্য করবে।

## ডিজাইনার পারফিউম (Designer Perfumes)
ডিজাইনার পারফিউম হলো সেইগুলো যা বড় ফ্যাশন হাউস বা ব্র্যান্ড দ্বারা তৈরি হয়, যাদের মূল ব্যবসা পারফিউম নয়, বরং পোশাক, গয়না বা অন্যান্য বিলাসবহুল পণ্য।

- **ব্র্যান্ড:** Chanel, Dior, Gucci, Versace, Prada ইত্যাদি।
- **লক্ষ্য:** এদের মূল লক্ষ্য হলো ব্যাপক সংখ্যক গ্রাহকের কাছে পৌঁছানো। তাই তাদের সুগন্ধিগুলো সাধারণত নিরাপদ, জনপ্রিয় এবং সহজে পছন্দ করার মতো হয়।
- **সৃজনশীলতা:** ডিজাইনার পারফিউমগুলো প্রায়শই বাজারের ট্রেন্ড অনুসরণ করে তৈরি করা হয়। এখানে সৃজনশীলতার চেয়ে বাণিজ্যিক সাফল্য বেশি গুরুত্বপূর্ণ।
- **উপাদান:** সাধারণত উচ্চমানের সিন্থেটিক এবং কিছু প্রাকৃতিক উপাদান ব্যবহার করা হয়, তবে ব্যয়ের দিকে নজর রাখা হয়।
- **প্রাপ্যতা:** এগুলি ডিপার্টমেন্টাল স্টোর, শপিং মল এবং অনলাইন শপে সহজেই পাওয়া যায়।
- **মূল্য:** নিশ পারফিউমের তুলনায় ডিজাইনার পারফিউমের দাম সাধারণত কম হয়।

ডিজাইনার পারফিউমগুলো দৈনন্দিন ব্যবহারের জন্য এবং উপহার দেওয়ার জন্য চমৎকার।

## নিশ পারফিউম (Niche Perfumes)
নিশ পারফিউম হাউসগুলো এমন সংস্থা যাদের একমাত্র বা প্রধান ব্যবসাই হলো পারফিউম তৈরি করা।

- **ব্র্যান্ড:** Creed, Byredo, Le Labo, Amouage, এবং OZNIOR-এর মতো ব্র্যান্ড যারা শুধুমাত্র পারফিউম তৈরিতে মনোযোগ দেয়।
- **লক্ষ্য:** এদের লক্ষ্য কোনো নির্দিষ্ট ধরণের গ্রাহক বা 'নিশ' মার্কেট, যারা অনন্য, শৈল্পিক এবং সাধারণের চেয়ে ভিন্ন কিছু খুঁজছেন।
- **সৃজনশীলতা:** নিশ পারফিউমারিতে পারফিউমার বা 'নাক'-কে সম্পূর্ণ সৃজনশীল স্বাধীনতা দেওয়া হয়। তারা大胆 এবং unconventional সুগন্ধি তৈরি করতে পারেন, যা বাজারের চলতি ট্রেন্ডের বাইরে।
- **উপাদান:** নিশ পারফিউমে প্রায়ই অত্যন্ত উচ্চমানের, দুর্লভ এবং প্রাকৃতিক উপাদান ব্যবহার করা হয়। যেমন - আসল উদ, আইরিস বাটার বা জেসমিন অ্যাবসোলিউট।
- **প্রাপ্যতা:** এগুলি সাধারণত বিশেষায়িত পারফিউম বুটিক বা ব্র্যান্ডের নিজস্ব দোকানে পাওয়া যায়। সহজে সব জায়গায় পাওয়া যায় না।
- **মূল্য:** উচ্চমানের উপাদান এবং সীমিত উৎপাদনের কারণে নিশ পারফিউমের দাম ডিজাইনার পারফিউমের চেয়ে অনেক বেশি হয়।

আমাদের **LUNAR DUST** বা **CONCRETE JUNGLE**-এর মতো পারফিউমগুলো নিশ ঘরানার উদাহরণ, যা প্রচলিত ধারার বাইরে একটি অনন্য ঘ্রাণ অভিজ্ঞতা প্রদান করে।

### কোনটি আপনার জন্য?

- **যদি আপনি নিরাপদ, পরিচিত এবং নির্ভরযোগ্য কিছু চান:** ডিজাইনার পারফিউম আপনার জন্য ভালো।
- **যদি আপনি একটি গল্প বলতে চান, অনন্য হতে চান এবং পারফিউমকে শিল্প হিসেবে দেখেন:** নিশ পারফিউম আপনার জন্য।

শেষ পর্যন্ত, পারফিউম একটি ব্যক্তিগত পছন্দের বিষয়। সবচেয়ে গুরুত্বপূর্ণ হলো এমন একটি সুগন্ধি খুঁজে বের করা যা আপনি নিজে ভালোবাসেন এবং যা আপনাকে আত্মবিশ্বাসী করে তোলে—তা নিশ হোক বা ডিজাইনার।
`,
        imageUrl: "https://picsum.photos/seed/blog8/1200/630",
        author: "ওজনিওর जर्नल",
        createdAt: "2024-07-19T13:00:00Z"
    },
    {
        id: "9",
        title: "সুগন্ধের লেয়ারিং: নিজের অনন্য ঘ্রাণ তৈরির শিল্প",
        slug: "fragrance-layering-guide-bangla",
        excerpt: "ফ্র্যাগরেন্স লেয়ারিং হলো দুটি বা ততোধিক সুগন্ধি একসাথে ব্যবহার করে একটি সম্পূর্ণ নতুন এবং ব্যক্তিগত সুবাস তৈরি করার কৌশল। কীভাবে পারফিউম লেয়ারিং করবেন তার নিয়মকানুন জানুন।",
        content: `
# সুগন্ধের লেয়ারিং: নিজের অনন্য ঘ্রাণ তৈরির শিল্প

আপনি কি কখনো ভেবেছেন আপনার নিজের একটি সিগনেচার সেন্ট তৈরি করার কথা, যা আর কারো কাছে নেই? ফ্র্যাগরেন্স লেয়ারিং বা সুগন্ধের স্তরবিন্যাস হলো সেই শিল্প যা আপনাকে এই সুযোগ করে দেয়। এটি হলো দুটি বা ততোধিক সুগন্ধি একসাথে ব্যবহার করে একটি জটিল, বহুমাত্রিক এবং সম্পূর্ণ ব্যক্তিগত ঘ্রাণ তৈরি করার কৌশল।

## কেন লেয়ারিং করবেন?
- **অনন্যতা:** লেয়ারিংয়ের মাধ্যমে আপনি এমন একটি সুবাস তৈরি করতে পারেন যা একান্তই আপনার।
- **দীর্ঘস্থায়িত্ব:** একাধিক সুগন্ধির স্তর ব্যবহার করলে তা একটি পারফিউমের চেয়ে বেশি সময় স্থায়ী হয়।
- **পারফিউমের চরিত্র বদলানো:** আপনি একটি হালকা দিনের পারফিউমকে একটি গভীর বেস নোটযুক্ত পারফিউমের সাথে লেয়ার করে রাতের জন্য উপযুক্ত করে তুলতে পারেন।

## লেয়ারিংয়ের সহজ নিয়ম
লেয়ারিং একটি সৃজনশীল প্রক্রিয়া, তবে কিছু প্রাথমিক নিয়ম মেনে চললে ভালো ফল পাওয়া যায়।

### ১. সাধারণ নোট দিয়ে শুরু করুন
যদি আপনি লেয়ারিংয়ে নতুন হন, তবে সলিফ্লোর (soliflore) বা একটি মাত্র প্রধান নোটযুক্ত পারফিউম দিয়ে শুরু করুন। যেমন, একটি সাধারণ গোলাপের পারফিউমের সাথে একটি সাধারণ চন্দনের পারফিউম মেশানো।

### ২. ভারী থেকে হালকা 순序 বজায় রাখুন
সবসময় সবচেয়ে তীব্র বা ভারী পারফিউমটি আগে লাগান। এরপর তার উপর হালকা পারফিউমটি স্প্রে করুন। এতে ভারী গন্ধটি হালকা গন্ধকে ঢেকে ফেলবে না। উদাহরণস্বরূপ, একটি উডি বা ওরিয়েন্টাল পারফিউমের উপর একটি সাইট্রাস বা ফ্লোরাল পারফিউম লেয়ার করুন।

### ৩. নোট ফ্যামিলি মাথায় রাখুন
কিছু নোট ফ্যামিলি একসাথে খুব ভালোভাবে কাজ করে:
- **সাইট্রাস এবং উডি:** লেবুর সতেজতা চন্দনের উষ্ণতার সাথে মিশে একটি চমৎকার ভারসাম্য তৈরি করে।
- **ফ্লোরাল এবং স্পাইসি:** গোলাপের সাথে গোলমরিচ বা জেসমিনের সাথে এলাচ একটি আকর্ষণীয় কনট্রাস্ট তৈরি করে।
- **ভ্যানিলা এবং যেকোনো কিছু:** ভ্যানিলা একটি সার্বজনীন বেস নোট। এটিকে ফ্লোরাল, স্পাইসি বা উডি যেকোনো পারফিউমের সাথে মিশিয়ে উষ্ণতা এবং মিষ্টিতা যোগ করা যায়।

### ৪. একই ব্র্যান্ডের পণ্য ব্যবহার করুন
সবচেয়ে সহজ লেয়ারিং হলো একই সুগন্ধযুক্ত বিভিন্ন পণ্য ব্যবহার করা। যেমন, একটি পারফিউমের সাথে তার নিজস্ব বডি ওয়াশ এবং বডি লোশন ব্যবহার করা। এটি সুগন্ধিকে আরও গভীর এবং দীর্ঘস্থায়ী করে।

### ৫. পরীক্ষা করতে ভয় পাবেন না
লেয়ারিংয়ের সবচেয়ে মজার অংশ হলো পরীক্ষা-নিরীক্ষা। আপনার কব্জির দুটি ভিন্ন জায়গায় দুটি পারফিউম লাগিয়ে দেখুন, তারপর বাতাসের মধ্যে হাত নেড়ে দেখুন মিশ্রিত গন্ধটি কেমন লাগছে। যদি ভালো লাগে, তবে পরেরবার একসাথে লেয়ার করতে পারেন।

**একটি উদাহরণ লেয়ারিং কম্বো:**
- **বেস হিসেবে:** আমাদের **IVORY MUSK**-এর মতো একটি পরিষ্কার, মাস্কি পারফিউম।
- **এর উপর:** আমাদের **SOLAR CITRON**-এর মতো একটি উজ্জ্বল, সাইট্রাসি পারফিউম।

ফলাফল হবে একটি সতেজ কিন্তু গভীর এবং দীর্ঘস্থায়ী সুগন্ধ যা দিনের বেলার জন্য উপযুক্ত।

ফ্র্যাগরেন্স লেয়ারিং হলো আপনার সৃজনশীলতাকে প্রকাশ করার একটি দারুণ উপায়। তাই পরীক্ষা শুরু করুন এবং আপনার নিজের সিগনেচার সুবাস তৈরি করুন!
`,
        imageUrl: "https://picsum.photos/seed/blog9/1200/630",
        author: "ওজনিওর বিউটি",
        createdAt: "2024-07-18T16:00:00Z"
    },
    {
        id: "10",
        title: "গورমান্ড (Gourmand) পারফিউম: খাবারের মতো সুস্বাদু সুগন্ধি",
        slug: "gourmand-perfumes-explained-bangla",
        excerpt: "ভ্যানিলা, চকলেট, কফি, ক্যারামেল—যেসব পারফিউমের গন্ধ খাবারের কথা মনে করিয়ে দেয়, সেগুলোকে বলা হয় گورমান্ড পারফিউম। এই সুস্বাদু সুগন্ধি জগতটি আবিষ্কার করুন।",
        content: `
# گورমান্ড (Gourmand) পারফিউম: খাবারের মতো সুস্বাদু সুগন্ধি

পারফিউমের জগতে 'গورমান্ড' (Gourmand) শব্দটি ফরাসি ভাষা থেকে এসেছে, যার অর্থ এমন একজন ব্যক্তি যিনি খেতে ভালোবাসেন। পারফিউমারিতে, گورমান্ড সেই সব সুগন্ধিকে বোঝায় যেগুলোর প্রধান নোটগুলো বিভিন্ন সুস্বাদু খাবার এবং মিষ্টি থেকে অনুপ্রাণিত।

সহজ কথায়, যে পারফিউমের গন্ধ আপনাকে আপনার প্রিয় ডেজার্ট বা কফির কথা মনে করিয়ে দেয়, সেটিই একটি گورমান্ড পারফিউম।

## گورমান্ড পারফিউমের উত্থান
১৯৯২ সালে **Thierry Mugler**-এর **Angel** পারফিউমটির মাধ্যমে আধুনিক گورমান্ড ধারার জন্ম হয়। এতে ভ্যানিলা, চকলেট, ক্যারামেল এবং প্যাচুলির মতো নোট ব্যবহার করা হয়েছিল, যা সেই সময়ে একটি বিপ্লবী ধারণা ছিল। এরপর থেকে, এই ক্যাটাগরিটি অত্যন্ত জনপ্রিয় হয়ে ওঠে এবং পারফিউম শিল্পে একটি স্থায়ী আসন করে নেয়।

## সাধারণ گورমান্ড নোট
গورমান্ড পারফিউমে আপনি এই ধরণের নোটগুলো খুঁজে পাবেন:

- **ভ্যানিলা (Vanilla):** گورমান্ড জগতের রাজা। এটি মিষ্টি, ক্রিমি এবং অত্যন্ত আরামদায়ক। 거의 সব মিষ্টি সুগন্ধির ভিত্তি এটি।
- **চকলেট ও কোকো (Chocolate & Cocoa):** ডার্ক চকলেটের তিক্ততা থেকে শুরু করে মিল্ক চকলেটের মিষ্টতা পর্যন্ত, এটি পারফিউমকে একটি বিলাসবহুল এবং আবেদনময়ী অনুভূতি দেয়। আমাদের **RED VELVET OUD**-এ ডার্ক কোকোর ব্যবহার রয়েছে।
- **কফি (Coffee):** ভাজা কফি বিনের উষ্ণ, তিক্ত এবং আরামদায়ক গন্ধ পুরুষ এবং মহিলা উভয়ের পারফিউমেই জনপ্রিয়।
- **ক্যারামেল ও প্রালিন (Caramel & Praline):** পোড়া চিনির মিষ্টি এবং বাদামের মতো গন্ধ পারফিউমকে একটি মজাদার এবং আসক্তিপূর্ণ চরিত্র দেয়।
- **ফল (Fruits):** চেরি, প্লাম, পীচ বা বেরির মতো রসালো এবং মিষ্টি ফলের নোটগুলো প্রায়শই گورমান্ড পারফিউমে ব্যবহৃত হয়। আমাদের **RUBY FLAME** এর একটি চমৎকার উদাহরণ।
- **মশলা (Spices):** দারুচিনি, এলাচ, জায়ফল এবং আদার মতো উষ্ণ মশলা মিষ্টি নোটগুলোর সাথে মিশে একটি আরামদায়ক এবং উৎসবের আমেজ তৈরি করে। আমাদের **CHAI ÉPICÉ** এই ধারার একটি নিখুঁত পারফিউম।

## কেন گورমান্ড পারফিউম এত জনপ্রিয়?
গورমান্ড সুগন্ধিগুলো আমাদের মস্তিষ্কের স্মৃতি এবং আবেগের অংশকে সরাসরি স্পর্শ করে। খাবারের গন্ধ, বিশেষ করে মিষ্টির গন্ধ, আমাদের শৈশবের সুখকর স্মৃতি, আরাম এবং নিরাপত্তার কথা মনে করিয়ে দেয়। একারণে এই পারফিউমগুলো আমাদের মানসিকভাবে ভালো বোধ করায়।

এগুলো সাধারণত উষ্ণ এবং আবেদনময়ী হয়, যা শীতকাল বা সন্ধ্যার জন্য বিশেষভাবে উপযুক্ত। তবে সঠিক ভারসাম্য থাকলে হালকা گورমান্ড পারফিউম গরমকালেও ব্যবহার করা যেতে পারে।

আপনি যদি উষ্ণ, আরামদায়ক এবং কিছুটা খেলার ছলে আবেদনময়ী সুগন্ধি পছন্দ করেন, তাহলে گورমান্ড পারফিউমের জগতটি আপনার জন্য অপেক্ষা করছে। এটি এমন একটি সুবাস যা শুধুমাত্র আপনার মনকেই নয়, আপনার আত্মাকেও খুশি করে।
`,
        imageUrl: "https://picsum.photos/seed/blog10/1200/630",
        author: "সুগন্ধ বিশেষজ্ঞ",
        createdAt: "2024-07-17T11:30:00Z"
    },
    {
        id: "11",
        title: "পারফিউম এবং ত্বকের রসায়ন: কেন একই পারফিউম সবার গায়ে ভিন্ন গন্ধ দেয়?",
        slug: "perfume-skin-chemistry-bangla",
        excerpt: "কখনো ভেবেছেন কেন আপনার বন্ধুর গায়ে যে পারফিউমটি অসাধারণ লাগে, সেটি আপনার গায়ে ততটা ভালো লাগে না? এর পেছনের বিজ্ঞান হলো ত্বকের রসায়ন। আসুন, জেনে নিই।",
        content: `
# পারফিউম এবং ত্বকের রসায়ন: কেন একই পারফিউম সবার গায়ে ভিন্ন গন্ধ দেয়?

এটি পারফিউম প্রেমীদের একটি সাধারণ অভিজ্ঞতা: আপনি দোকানে একটি পারফিউম পরীক্ষা করলেন, আপনার খুব পছন্দ হলো। কিন্তু বাড়িতে এসে যখন লাগালেন, বা আপনার কোনো বন্ধুর গায়ে যখন একই পারফিউম শুঁকলেন, তখন গন্ধটা কিছুটা ভিন্ন লাগলো। কেন এমন হয়?

এর উত্তর লুকিয়ে আছে আপনার **ত্বকের অনন্য রসায়নে (Skin Chemistry)**।

প্রতিটি মানুষের ত্বক আলাদা। আমাদের খাদ্যাভ্যাস, জীবনযাত্রা, ত্বকের ধরন, এবং এমনকি হরমোনের মাত্রাও আমাদের ত্বকের উপর প্রভাব ফেলে। এই সমস্ত কিছু মিলে আমাদের ত্বকের একটি নিজস্ব গন্ধ এবং রাসায়নিক গঠন তৈরি করে। যখন একটি পারফিউম ত্বকের সংস্পর্শে আসে, তখন এটি এই অনন্য রসায়নের সাথে বিক্রিয়া করে, যার ফলে চূড়ান্ত ঘ্রাণটি ব্যক্তিভেদে কিছুটা পরিবর্তিত হয়।

## যে বিষয়গুলো পারফিউমের গন্ধকে প্রভাবিত করে:

### ১. ত্বকের ধরন (Skin Type)
- **তৈলাক্ত ত্বক (Oily Skin):** তৈলাক্ত ত্বক পারফিউমের অণুগুলোকে ভালোভাবে ধরে রাখে, যার ফলে সুগন্ধি আরও তীব্র এবং দীর্ঘস্থায়ী হয়। অনেক সময়, তৈলাক্ত ত্বকে পারফিউমের মিষ্টি নোটগুলো আরও বেশি ফুটে ওঠে।
- **শুষ্ক ত্বক (Dry Skin):** শুষ্ক ত্বক সুগন্ধিকে দ্রুত শোষণ করে নেয়, যার ফলে গন্ধটি হালকা মনে হতে পারে এবং বেশিক্ষণ স্থায়ী হয় না। এজন্য শুষ্ক ত্বকের অধিকারীদের পারফিউম লাগানোর আগে ময়েশ্চারাইজার ব্যবহার করার পরামর্শ দেওয়া হয়।

### ২. পিএইচ লেভেল (pH Level)
ত্বকের পিএইচ বা অম্লতা-ক্ষারত্বের মাত্রাও পারফিউমের গন্ধকে প্রভাবিত করতে পারে। স্বাভাবিক ত্বকের পিএইচ ৪.৫ থেকে ৬.২ এর মধ্যে থাকে। যদি আপনার ত্বক বেশি অম্লীয় বা ক্ষারীয় হয়, তবে এটি পারফিউমের কিছু উপাদানের সাথে বিক্রিয়া করে গন্ধ পরিবর্তন করতে পারে।

### ৩. শরীরের তাপমাত্রা
উষ্ণ ত্বক সুগন্ধিকে ভালোভাবে ছড়িয়ে দিতে সাহায্য করে। একারণেই পালস পয়েন্টে (যেখানে রক্ত সঞ্চালন বেশি) পারফিউম লাগাতে বলা হয়। যাদের শরীরের তাপমাত্রা স্বাভাবিকের চেয়ে বেশি, তাদের গায়ে পারফিউম আরও তীব্রভাবে প্রকাশ পায়।

### ৪. খাদ্যাভ্যাস এবং জীবনযাত্রা
আপনি কী খাচ্ছেন, তার প্রভাবও আপনার ত্বকের গন্ধে পড়তে পারে। যেমন, যারা বেশি মশলাযুক্ত খাবার খান, তাদের ত্বকের গন্ধ ভিন্ন হতে পারে, যা পারফিউমের সাথে মিশে একটি নতুন ঘ্রাণ তৈরি করে। ধূমপান বা অ্যালকোহল গ্রহণের ফলেও ত্বকের রসায়ন বদলাতে পারে।

### ৫. হরমোন
হরমোনের পরিবর্তন, বিশেষ করে নারীদের ক্ষেত্রে মাসিক চক্র বা গর্ভাবস্থায়, পারফিউমের গন্ধকে উল্লেখযোগ্যভাবে পরিবর্তন করতে পারে। যে পারফিউমটি একসময় আপনার খুব প্রিয় ছিল, হরমোনের পরিবর্তনের কারণে তা হঠাৎ করে ভালো নাও লাগতে পারে।

### উপসংহার
পারফিউম কেনা একটি অত্যন্ত ব্যক্তিগত অভিজ্ঞতা। কাগজের স্ট্রিপে বা বোতলে গন্ধ শুঁকে পারফিউম বিচার করা সবসময় সঠিক নয়। আপনার জন্য সেরা পারফিউমটি খুঁজে পেতে, এটি আপনার ত্বকে লাগিয়ে কয়েক ঘণ্টা সময় দিন। দেখুন কীভাবে এটি আপনার সাথে মিশে যায় এবং একটি অনন্য সুবাস তৈরি করে, যা একান্তই আপনার।
`,
        imageUrl: "https://picsum.photos/seed/blog11/1200/630",
        author: "ওজনিওর বিজ্ঞান",
        createdAt: "2024-07-16T09:00:00Z"
    },
    {
        id: "12",
        title: "বর্ষার জন্য পারফিউম: ভেজা মাটির গন্ধের সাথে সতেজ থাকুন",
        slug: "perfumes-for-monsoon-bangla",
        excerpt: "বর্ষার স্যাঁতস্যাঁতে আবহাওয়ায় কোন পারফিউম ব্যবহার করবেন? হালকা, সতেজ এবং জলীয় নোটযুক্ত সুগন্ধি এই ঋতুতে আপনাকে সারাদিন প্রাণবন্ত রাখতে পারে।",
        content: `
# বর্ষার জন্য পারফিউম: ভেজা মাটির গন্ধের সাথে সতেজ থাকুন

বর্ষাকাল মানেই ভেজা মাটির সোঁদা গন্ধ, চারপাশের সবুজ আর এক ধরণের রোমান্টিকতা। কিন্তু এই ঋতুর স্যাঁতস্যাঁতে এবং আর্দ্র আবহাওয়া পারফিউমের জন্য একটি চ্যালেঞ্জ হতে পারে। ভারী, মিষ্টি বা তীব্র পারফিউম এই সময়ে আরও বেশি গাঢ় এবং অসহ্য মনে হতে পারে।

তাহলে বর্ষার জন্য কেমন পারফিউম বেছে নেওয়া উচিত? চলুন জেনে নেই।

## বর্ষার জন্য উপযুক্ত নোট
বর্ষার আর্দ্র আবহাওয়ায় হালকা, পরিষ্কার এবং সতেজ নোটগুলো সবচেয়ে ভালো কাজ করে।

### ১. অ্যাকোয়াটিক বা জলীয় নোট (Aquatic Notes)
এই নোটগুলো সমুদ্রের বাতাস বা বৃষ্টির পরের সতেজতার কথা মনে করিয়ে দেয়।
- **সি সল্ট (Sea Salt):** নোনতা এবং খনিজ অনুভূতি দেয়।
- **ওজোনিক নোট (Ozonic Notes):** বৃষ্টির ঠিক আগের বাতাসের মতো একটি পরিষ্কার এবং বৈদ্যুতিক অনুভূতি।
- **ওয়াটারমেলন/শসা (Watermelon/Cucumber):** সতেজ এবং জলীয় ফলের গন্ধ।

আমাদের **AQUA MYST** পারফিউমে এই ধরণের মিনারেলিক এবং জলীয় নোট রয়েছে যা বর্ষার জন্য চমৎকার।

### ২. গ্রিন নোট (Green Notes)
সবুজ এবং সতেজ গন্ধগুলো বর্ষার প্রকৃতির সাথে মিশে যায়।
- **ফিগ লিফ (Fig Leaf):** ডুমুর পাতার সবুজ, কিছুটা দুধালো এবং সতেজ গন্ধ।
- **ভেটিভার (Vetiver):** ভেজা ঘাস এবং মাটির মতো একটি পরিষ্কার এবং শীতল গন্ধ।
- **মিন্ট (Mint):** ঠান্ডা এবং অত্যন্ত সতেজ অনুভূতি দেয়।
- **হোয়াইট টি (White Tea):** পরিষ্কার, সূক্ষ্ম এবং শান্ত একটি গন্ধ।

আমাদের **VERIDIAN LIGHT** পারফিউমটি গ্রিন নোটের একটি আদর্শ উদাহরণ।

### ৩. সাইট্রাস নোট (Citrus Notes)
সাইট্রাস নোটগুলো যেকোনো আবহাওয়ায় মন ভালো করে দেয়, এবং বর্ষার স্যাঁতস্যাঁতে ভাব কাটাতে দারুণ কার্যকরী।
- **বার্গামট (Bergamot):** লেবুর চেয়ে কিছুটা মিষ্টি এবং ফুলের মতো।
- **গ্রেপফ্রুট (Grapefruit):** সামান্য তিক্ত এবং অত্যন্ত সতেজ।
- **নেরোলি (Neroli):** কমলার ফুলের সতেজ এবং সামান্য সাবানের মতো পরিষ্কার গন্ধ।

আমাদের **SOLAR CITRON** পারফিউমে সাইট্রাস নোটের একটি উজ্জ্বল বিস্ফোরণ রয়েছে।

### ৪. হালকা ফ্লোরাল নোট (Light Floral Notes)
ভারী ফুলের গন্ধের পরিবর্তে বর্ষায় হালকা এবং জলীয় ফুলের সুবাস বেছে নিন।
- **ল্যাভেন্ডার (Lavender):** পরিষ্কার, হার্বাল এবং শান্ত একটি ফুলের গন্ধ।
- **ম্যাগনোলিয়া (Magnolia):** লেবুর মতো সতেজ এবং ক্রিমি ফুলের গন্ধ।
- **পিওনি (Peony):** গোলাপের মতো কিন্তু আরও হালকা এবং সতেজ।

## বর্ষায় পারফিউম ব্যবহারের টিপস
- **কম ব্যবহার করুন:** আর্দ্র আবহাওয়ায় পারফিউমের গন্ধ বেশি ছড়ায়, তাই স্বাভাবিকের চেয়ে কম স্প্রে করুন।
- **শুষ্ক জায়গায় লাগান:** ত্বকের শুষ্ক এবং ঠান্ডা জায়গায়, যেমন কানের পেছনে বা কলারবোনে পারফিউম লাগাতে পারেন।
- **কাপড়ে স্প্রে করুন:** যদি ত্বকে পারফিউম চটচটে মনে হয়, তবে আপনার কাপড়ে (যেমন স্কার্ফ বা শার্টের কলার) হালকা করে স্প্রে করতে পারেন।

বর্ষার জন্য সঠিক পারফিউম বেছে নিয়ে এই মেঘলা দিনেও থাকুন সতেজ এবং প্রাণবন্ত।
`,
        imageUrl: "https://picsum.photos/seed/blog12/1200/630",
        author: "ওজনিওর স্টাইল",
        createdAt: "2024-07-15T17:00:00Z"
    },
    {
        id: "13",
        title: "পারফিউমের ঘনত্ব: Parfum, EDP, EDT, এবং EDC-এর মধ্যে পার্থক্য",
        slug: "perfume-concentration-guide-bangla",
        excerpt: "পারফিউমের বোতলে লেখা Parfum, EDP, EDT বা EDC শব্দগুলোর অর্থ কী? এগুলোর মধ্যে পার্থক্য জানা আপনাকে সঠিক পারফিউম বেছে নিতে এবং এর স্থায়িত্ব সম্পর্কে ধারণা পেতে সাহায্য করবে।",
        content: `
# পারফিউমের ঘনত্ব: Parfum, EDP, EDT, এবং EDC-এর মধ্যে পার্থক্য

পারফিউম কেনার সময় আমরা বোতলের গায়ে বিভিন্ন সংক্ষিপ্ত রূপ দেখতে পাই, যেমন EDP, EDT বা EDC। এই শব্দগুলো পারফিউমের মধ্যে থাকা সুগন্ধি তেলের ঘনত্ব বা কনসেনট্রেশনকে নির্দেশ করে। ঘনত্ব যত বেশি হয়, পারফিউম তত বেশি তীব্র, দীর্ঘস্থায়ী এবং দামি হয়।

আসুন, এই প্রকারভেদগুলো সম্পর্কে বিস্তারিত জেনে নেওয়া যাক।

## ১. পারফাম (Parfum / Extrait de Parfum)
এটি পারফিউমের সবচেয়ে शुद्ध এবং ঘন রূপ।
- **সুগন্ধি তেলের ঘনত্ব:** ২০% থেকে ৩০% (বা তারও বেশি)।
- **স্থায়িত্ব:** এটি সবচেয়ে দীর্ঘস্থায়ী, যা ত্বকে ৮ ঘণ্টা থেকে ২৪ ঘণ্টা পর্যন্ত থাকতে পারে।
- **বৈশিষ্ট্য:** এর গন্ধ অত্যন্ত সমৃদ্ধ, গভীর এবং বহুমাত্রিক। এটি ধীরে ধীরে ত্বকের সাথে মিশে যায় এবং সময়ের সাথে সাথে এর চরিত্র বদলায়। অল্প পরিমাণই যথেষ্ট।
- **মূল্য:** উচ্চ ঘনত্বের কারণে এটি সবচেয়ে ব্যয়বহুল।
- **ব্যবহার:** বিশেষ অনুষ্ঠান বা রাতের জন্য এটি আদর্শ।

## ২. ইউ ডি পারফাম (Eau de Parfum / EDP)
এটি সবচেয়ে জনপ্রিয় এবং বহুল ব্যবহৃত পারফিউমের ঘনত্ব।
- **সুগন্ধি তেলের ঘনত্ব:** ১৫% থেকে ২০%।
- **স্থায়িত্ব:** এটি বেশ দীর্ঘস্থায়ী, সাধারণত ৬ থেকে ৮ ঘণ্টা পর্যন্ত স্থায়ী হয়।
- **বৈশিষ্ট্য:** এটি পারফামের চেয়ে কিছুটা হালকা হলেও এর তীব্রতা এবং স্থায়িত্ব চমৎকার। EDP-তে হার্ট নোট বা মিডল নোটগুলো বেশি প্রাধান্য পায়।
- **মূল্য:** পারফামের চেয়ে সাশ্রয়ী, কিন্তু EDT-এর চেয়ে দামি।
- **ব্যবহার:** দৈনন্দিন ব্যবহার থেকে শুরু করে যেকোনো অনুষ্ঠানের জন্য এটি উপযুক্ত। OZNIOR-এর বেশিরভাগ পারফিউমই EDP ঘনত্বের।

## ৩. ইউ ডি টয়লেট (Eau de Toilette / EDT)
এটিও একটি জনপ্রিয় এবং হালকা বিকল্প, যা দিনের বেলা ব্যবহারের জন্য চমৎকার।
- **সুগন্ধি তেলের ঘনত্ব:** ৫% থেকে ১৫%।
- **স্থায়িত্ব:** প্রায় ৪ থেকে ৬ ঘণ্টা স্থায়ী হয়।
- **বৈশিষ্ট্য:** EDP-এর তুলনায় এটি হালকা এবং সতেজ হয়। EDT-তে টপ নোটগুলো বেশি শক্তিশালী থাকে, যা লাগানোর সাথে সাথেই একটি সতেজ অনুভূতি দেয়।
- **মূল্য:** EDP-এর চেয়ে কম দামি।
- **ব্যবহার:** অফিস, কলেজ বা গরম আবহাওয়ার জন্য এটি একটি আদর্শ পছন্দ।

## ৪. ইউ ডি কলোন (Eau de Cologne / EDC)
ঐতিহ্যগতভাবে, কলোন বলতে একটি নির্দিষ্ট সাইট্রাস-ভিত্তিক সুগন্ধির ফর্মুলাকে বোঝানো হতো। তবে আধুনিক পারফিউমারিতে এটি একটি ঘনত্বের স্তরকেও বোঝায়।
- **সুগন্ধি তেলের ঘনত্ব:** ২% থেকে ৪%।
- **স্থায়িত্ব:** এটি সবচেয়ে কম স্থায়ী, সাধারণত ২ থেকে ৩ ঘণ্টা থাকে।
- **বৈশিষ্ট্য:** এটি খুবই হালকা এবং সতেজকারক। গরমের দিনে শরীরকে চাঙ্গা করতে এটি ব্যবহার করা হয়।
- **মূল্য:** এটি সবচেয়ে সাশ্রয়ী।
- **ব্যবহার:** গোসলের পর বা জিমে যাওয়ার আগে সতেজ অনুভূতির জন্য ব্যবহার করা যেতে পারে।

### কোনটি আপনার জন্য?
আপনার প্রয়োজন এবং বাজেটের উপর নির্ভর করে আপনি সঠিক ঘনত্বটি বেছে নিতে পারেন।
- **দীর্ঘস্থায়িত্ব এবং তীব্রতা চাইলে:** EDP বা Parfum বেছে নিন।
- **দিনের বেলা বা অফিসের জন্য হালকা কিছু চাইলে:** EDT একটি ভালো বিকল্প।
- **খুবই হালকা এবং সতেজ কিছু চাইলে:** EDC ব্যবহার করতে পারেন।

সঠিক ঘনত্ব সম্পর্কে জানা আপনাকে আপনার পরবর্তী পারফিউম কেনার ক্ষেত্রে একজন বিজ্ঞ সিদ্ধান্ত নিতে সাহায্য করবে।
`,
        imageUrl: "https://picsum.photos/seed/blog13/1200/630",
        author: "ওজনিওর जर्नल",
        createdAt: "2024-07-14T10:00:00Z"
    },
    {
        id: "14",
        title: "কস্তুরী (Musk): পারফিউমের আবেদনময়ী ভিত্তি",
        slug: "what-is-musk-fragrance-bangla",
        excerpt: "কস্তুরী বা মাস্ক পারফিউম জগতের সবচেয়ে গুরুত্বপূর্ণ এবং রহস্যময় উপাদানগুলোর মধ্যে একটি। এর ইতিহাস, প্রকারভেদ এবং কেন এটি এত আবেদনময়ী তা জানুন।",
        content: `
# কস্তুরী (Musk): পারফিউমের আবেদনময়ী ভিত্তি

'মাস্ক' বা কস্তুরী শব্দটি পারফিউমের বর্ণনায় প্রায়শই পাওয়া যায়। এটি এমন একটি নোট যা সুগন্ধিকে গভীরতা, স্থায়িত্ব এবং এক ধরণের অবর্ণনীয় আবেদনময়তা প্রদান করে। কিন্তু কস্তুরী আসলে কী? এর উৎস কোথায়?

## কস্তুরীর ইতিহাস: অ্যানিমেলিক থেকে সিন্থেটিক
ঐতিহাসিকভাবে, 'কস্তুরী' বলতে পুরুষ কস্তুরী হরিণের (Musk Deer) গ্রন্থি থেকে প্রাপ্ত এক ধরণের তীব্র গন্ধযুক্ত পদার্থকে বোঝানো হতো। এই প্রাকৃতিক কস্তুরী অত্যন্ত শক্তিশালী, অ্যানিমেলিক এবং কিছুটা মল-এর মতো গন্ধযুক্ত ছিল। কিন্তু যখন এটিকে অ্যালকোহলে দ্রবীভূত করা হতো, তখন এটি একটি উষ্ণ, মিষ্টি এবং ত্বকের মতো আবেদনময়ী ঘ্রাণে রূপান্তরিত হতো।

এর অসাধারণ সুগন্ধ এবং পারফিউমকে দীর্ঘস্থায়ী করার ক্ষমতার কারণে এটি অত্যন্ত মূল্যবান ছিল। কিন্তু নৈতিক কারণে এবং কস্তুরী হরিণের সুরক্ষার জন্য, ১৯৭৯ সাল থেকে প্রাকৃতিক কস্তুরীর ব্যবহার বিশ্বব্যাপী নিষিদ্ধ করা হয়।

## আধুনিক কস্তুরী: সিন্থেটিক এবং প্ল্যান্ট-বেসড
আজকাল আমরা পারফিউমে যে 'মাস্ক' নোট পাই, তা মূলত দুই ধরণের:

### ১. সিন্থেটিক মাস্ক (Synthetic Musks)
উনবিংশ শতাব্দীর শেষের দিকে বিজ্ঞানীরা ল্যাবরেটরিতে কস্তুরীর মতো গন্ধযুক্ত অণু তৈরি করতে সক্ষম হন। এগুলি **'হোয়াইট মাস্ক' (White Musks)** নামে পরিচিত।
- **বৈশিষ্ট্য:** এগুলোর গন্ধ প্রাকৃতিক কস্তুরীর মতো তীব্র অ্যানিমেলিক নয়, বরং অনেক বেশি পরিষ্কার, নরম, কিছুটা পাউডারি এবং সাবানের মতো। এগুলোকে 'ত্বকের গন্ধ' (skin-scent) বলা হয় কারণ এগুলো ত্বকের প্রাকৃতিক গন্ধের মতো একটি উষ্ণ এবং আরামদায়ক অনুভূতি দেয়।
- **উদাহরণ:** Galaxolide, Ambrettolide, Ethylene Brassylate ইত্যাদি।
- **ব্যবহার:** আধুনিক পারফিউমারির প্রায় ৯৯% মাস্কই সিন্থেটিক। আমাদের **IVORY MUSK** বা **SILK ENIGMA** পারফিউমে এই ধরণের পরিষ্কার এবং নরম মাস্ক ব্যবহার করা হয়েছে।

### ২. প্ল্যান্ট-বেসড মাস্ক (Plant-Based Musks)
কিছু গাছ থেকেও কস্তুরীর মতো গন্ধ পাওয়া যায়।
- **উদাহরণ:** অ্যাঞ্জেলিকা (Angelica) গাছের মূল এবং অ্যামব্রেট (Ambrette) বীজ থেকে প্রাপ্ত তেল। অ্যামব্রেট বীজের গন্ধ কিছুটা মিষ্টি, পাউডারি এবং উষ্ণ মাস্কি। আমাদের **IVORY MUSK** পারফিউমের টপ নোটে অ্যামব্রেটের ব্যবহার রয়েছে।

## কেন কস্তুরী এত গুরুত্বপূর্ণ?
কস্তুরীর জনপ্রিয়তার পেছনে কয়েকটি কারণ রয়েছে:

1.  **স্থায়িত্ব (Fixative):** কস্তুরীর অণুগুলো বেশ ভারী, তাই এগুলো খুব ধীরে উবে যায়। একারণে এটি পারফিউমের অন্যান্য হালকা নোটগুলোকে ধরে রাখতে সাহায্য করে এবং পারফিউমকে দীর্ঘস্থায়ী করে। এটি একটি চমৎকার 'ফিক্সেটিভ'।
2.  **ভারসাম্য এবং গভীরতা:** কস্তুরী পারফিউমের বিভিন্ন নোটকে একসাথে মিশ্রিত করে একটি মসৃণ এবং সম্পূর্ণ ঘ্রাণ তৈরি করতে সাহায্য করে। এটি সুগন্ধিকে একটি গভীরতা এবং সমৃদ্ধি প্রদান করে।
3.  **আবেদনময়তা (Sensuality):** কস্তুরীর গন্ধ মানুষের ত্বকের প্রাকৃতিক গন্ধের খুব কাছাকাছি। এই পরিচিতি এবং উষ্ণতার কারণে এটি একটি অবচেতন আকর্ষণ এবং আবেদনময়ী অনুভূতি তৈরি করে।

কস্তুরী হলো পারফিউমারের প্যালেটের একটি অপরিহার্য রঙ। এটি ছাড়া আধুনিক পারফিউমারি কল্পনা করা প্রায় অসম্ভব। এটি সেই অদৃশ্য ভিত্তি যা একটি সুগন্ধিকে নিছক গন্ধ থেকে একটি শিল্পকর্মে রূপান্তরিত করে।
`,
        imageUrl: "https://picsum.photos/seed/blog14/1200/630",
        author: "সুগন্ধ বিশেষজ্ঞ",
        createdAt: "2024-07-13T12:00:00Z"
    },
    {
        id: "15",
        title: "পারফিউম বনাম অ্যাটার: পার্থক্য কোথায়?",
        slug: "perfume-vs-attar-difference-bangla",
        excerpt: "পারফিউম এবং অ্যাটার উভয়ই সুগন্ধি, কিন্তু তাদের তৈরি, ব্যবহার এবং চরিত্রে অনেক পার্থক্য রয়েছে। এই দুটি জনপ্রিয় সুগন্ধির মধ্যে মূল পার্থক্যগুলো জেনে নিন।",
        content: `
# পারফিউম বনাম অ্যাটার: পার্থক্য কোথায়?

সুগন্ধির জগতে 'পারফিউম' এবং 'অ্যাটার'—এই দুটি শব্দই খুব পরিচিত। যদিও উভয়ই আমাদের সুবাসিত করার জন্য ব্যবহৃত হয়, তাদের মধ্যে তৈরি, উপাদান, ঘনত্ব এবং সাংস্কৃতিক ইতিহাসে অনেক বড় পার্থক্য রয়েছে।

আসুন, এই দুটি সুগন্ধির জগতের মধ্যে পার্থক্যগুলো জেনে নেওয়া যাক।

## অ্যাটার (Attar / Ittar)
অ্যাটার হলো একটি ঐতিহ্যবাহী এবং প্রাকৃতিক সুগন্ধি তেল।
- **উৎপত্তি:** অ্যাটারের ইতিহাস বহু পুরনো, বিশেষ করে মধ্যপ্রাচ্য এবং দক্ষিণ এশিয়ায় (ভারত, পাকিস্তান, বাংলাদেশ) এর প্রচলন হাজার হাজার বছর ধরে।
- **তৈরির প্রক্রিয়া:** অ্যাটার তৈরি হয় একটি ঐতিহ্যবাহী гидро-ডিস্টিলেশন (hydro-distillation) প্রক্রিয়ার মাধ্যমে। ফুল, মশলা, কাঠ বা অন্যান্য প্রাকৃতিক উপাদানগুলোকে একটি তামার পাত্রে (দেগ) জলের সাথে ফোটানো হয়। সেই বাষ্প একটি বাঁশের নল (চোঙা) দিয়ে গিয়ে একটি অন্য পাত্রে (ভাপকা) রাখা চন্দন তেলের মধ্যে সংগ্রহ করা হয়। এই প্রক্রিয়াটি অত্যন্ত ধীর এবং সময়সাপেক্ষ।
- **উপাদান:** অ্যাটার সম্পূর্ণরূপে প্রাকৃতিক। এর বেস হিসেবে সাধারণত চন্দন তেল (Sandalwood oil) ব্যবহৃত হয় এবং এতে কোনো অ্যালকোহল থাকে না।
- **ঘনত্ব:** এটি অত্যন্ত ঘন সুগন্ধি তেল।
- **ব্যবহার:** অ্যালকোহল না থাকায় এটি সরাসরি ত্বকে লাগানো হয়। অল্প পরিমাণই যথেষ্ট এবং এর গন্ধ দীর্ঘ সময় ধরে থাকে, যা সময়ের সাথে সাথে ত্বকের সাথে মিশে আরও সুন্দর হয়।

## পারফিউম (Perfume)
পারফিউম হলো আধুনিক সুগন্ধি যা বিশ্বব্যাপী ব্যবহৃত হয়।
- **উৎপত্তি:** আধুনিক অ্যালকোহল-ভিত্তিক পারফিউমের জন্ম হয় ইউরোপে, বিশেষ করে ফ্রান্সে।
- **তৈরির প্রক্রিয়া:** পারফিউম তৈরি হয় বিভিন্ন প্রাকৃতিক এবং সিন্থেটিক সুগন্ধি অণু বা 'নোট' একসাথে মিশিয়ে। এই মিশ্রণটিকে তারপর ইথাইল অ্যালকোহল এবং জলের একটি দ্রবণে (solvent) মেশানো হয়।
- **উপাদান:** পারফিউমে প্রাকৃতিক এবং সিন্থেটিক উভয় ধরণের উপাদানই থাকতে পারে। এর প্রধান দ্রাবক হলো অ্যালকোহল, যা সুগন্ধিকে বাতাসে ছড়িয়ে দিতে সাহায্য করে।
- **ঘনত্ব:** পারফিউমের বিভিন্ন ঘনত্ব থাকে, যেমন - EDP (Eau de Parfum) এবং EDT (Eau de Toilette), যা আমরা আগের একটি ব্লগে আলোচনা করেছি।
- **ব্যবহার:** এটি সাধারণত স্প্রে বোতলে আসে এবং ত্বক ও কাপড়ে স্প্রে করা হয়। অ্যালকোহলের কারণে এটি লাগানোর সাথে সাথেই একটি শক্তিশালী গন্ধ দেয় যা ধীরে ধীরে মিলিয়ে যায়।

## মূল পার্থক্য এক নজরে:

| বৈশিষ্ট্য | অ্যাটার (Attar) | পারফিউম (Perfume) |
| :--- | :--- | :--- |
| **বেস** | তেল-ভিত্তিক (সাধারণত চন্দন) | অ্যালকোহল-ভিত্তিক |
| **উপাদান** | সম্পূর্ণ প্রাকৃতিক | প্রাকৃতিক এবং সিন্থেটিক |
| **তৈরি** | ঐতিহ্যবাহী ডিস্টিলেশন | আধুনিক মিশ্রণ প্রক্রিয়া |
| **গন্ধের প্রকাশ** | ধীরে ধীরে এবং ব্যক্তিগত | দ্রুত এবং ব্যাপক |
| **স্থায়িত্ব** | অত্যন্ত দীর্ঘস্থায়ী, ত্বকের সাথে মিশে যায় | ঘনত্বের উপর নির্ভরশীল |
| **ব্যবহার** | ত্বকে সরাসরি রোল-অন বা আঙুল দিয়ে | স্প্রে করে ব্যবহার |

### কোনটি ভালো?
অ্যাটার এবং পারফিউম—দুটিরই নিজস্ব সৌন্দর্য এবং আবেদন রয়েছে।
- **অ্যাটার** একটি প্রাকৃতিক, গভীর এবং ব্যক্তিগত ঘ্রাণ অভিজ্ঞতা প্রদান করে। যারা অ্যালকোহল এড়িয়ে চলতে চান বা ঐতিহ্যবাহী সুগন্ধি পছন্দ করেন, তাদের জন্য এটি চমৎকার।
- **পারফিউম** একটি বৈচিত্র্যময়, আধুনিক এবং সহজে ব্যবহারযোগ্য বিকল্প। এর প্রোজেকশন বা বিস্তৃতি বেশি হওয়ায় এটি একটি 'সেন্ট ট্রেইল' (scent trail) তৈরি করতে পারে।

শেষ পর্যন্ত, পছন্দটি সম্পূর্ণ আপনার ব্যক্তিগত রুচি এবং প্রয়োজনের উপর নির্ভর করে।
`,
        imageUrl: "https://picsum.photos/seed/blog15/1200/630",
        author: "ওজনিওর जर्नल",
        createdAt: "2024-07-12T15:00:00Z"
    }
];

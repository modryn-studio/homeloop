// Demo data - realistic home service providers
// Images use Unsplash for professional photos

export const categories = [
  {
    id: "cat_plumbing",
    name: "Plumbing",
    slug: "plumbing",
    icon_name: "droplet",
    subcategories: [
      { id: "sub_1", name: "Emergency Repairs" },
      { id: "sub_2", name: "Drain Cleaning" },
      { id: "sub_3", name: "Water Heaters" },
      { id: "sub_4", name: "Pipe Installation" },
    ],
  },
  {
    id: "cat_electrical",
    name: "Electrical",
    slug: "electrical",
    icon_name: "zap",
    subcategories: [
      { id: "sub_5", name: "Panel Upgrades" },
      { id: "sub_6", name: "Wiring" },
      { id: "sub_7", name: "Lighting" },
      { id: "sub_8", name: "EV Charger Installation" },
    ],
  },
  {
    id: "cat_hvac",
    name: "HVAC",
    slug: "hvac",
    icon_name: "thermometer",
    subcategories: [
      { id: "sub_9", name: "AC Installation" },
      { id: "sub_10", name: "Heating Repair" },
      { id: "sub_11", name: "Duct Cleaning" },
    ],
  },
  {
    id: "cat_landscaping",
    name: "Landscaping",
    slug: "landscaping",
    icon_name: "trees",
    subcategories: [
      { id: "sub_12", name: "Lawn Care" },
      { id: "sub_13", name: "Tree Service" },
      { id: "sub_14", name: "Hardscaping" },
    ],
  },
  {
    id: "cat_cleaning",
    name: "Cleaning",
    slug: "cleaning",
    icon_name: "sparkles",
    subcategories: [
      { id: "sub_15", name: "House Cleaning" },
      { id: "sub_16", name: "Deep Cleaning" },
      { id: "sub_17", name: "Move-out Cleaning" },
    ],
  },
  {
    id: "cat_roofing",
    name: "Roofing",
    slug: "roofing",
    icon_name: "home",
    subcategories: [],
  },
  {
    id: "cat_painting",
    name: "Painting",
    slug: "painting",
    icon_name: "paintbrush",
    subcategories: [],
  },
  {
    id: "cat_pest_control",
    name: "Pest Control",
    slug: "pest-control",
    icon_name: "bug",
    subcategories: [],
  },
];

export const providers = [
  // PLUMBING
  {
    id: "prov_1",
    business_name: "Premier Plumbing Solutions",
    slug: "premier-plumbing-solutions",
    email: "contact@premierplumbing.com",
    phone: "(512) 555-0147",
    bio: "Family-owned and operated since 1998. We specialize in residential plumbing repairs, installations, and 24/7 emergency services. Licensed, bonded, and insured with over 25 years of combined experience.",
    business_hours: "Mon-Fri: 7AM-7PM, Sat: 8AM-4PM",
    average_response_time: "Within 2 hours",
    service_areas: ["78701", "78702", "78703", "78704", "78705"],
    status: "active",
    category_id: "cat_plumbing",
    category_name: "Plumbing",
    logo_url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=200&h=200&fit=crop",
    services: [
      { id: "srv_1", title: "Emergency Leak Repair", description: "24/7 emergency response for burst pipes, water leaks, and flooding. We arrive within 2 hours guaranteed." },
      { id: "srv_2", title: "Water Heater Installation", description: "Expert installation of tank and tankless water heaters. Free estimates and same-day service available." },
      { id: "srv_3", title: "Drain Cleaning & Unclogging", description: "Professional drain cleaning using hydro-jetting technology. Clears even the toughest blockages." },
      { id: "srv_4", title: "Bathroom Remodeling", description: "Complete bathroom plumbing for renovations including fixture installation, pipe relocation, and more." },
    ],
    gallery: [
      { id: "gal_1", image_url: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=400&fit=crop", caption: "Water heater installation" },
      { id: "gal_2", image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", caption: "Bathroom renovation" },
      { id: "gal_3", image_url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop", caption: "Kitchen plumbing" },
    ],
  },
  {
    id: "prov_2",
    business_name: "Austin Drain Masters",
    slug: "austin-drain-masters",
    email: "service@austindrainmasters.com",
    phone: "(512) 555-0283",
    bio: "Specialists in drain cleaning, sewer repair, and trenchless pipe replacement. Using the latest camera inspection technology to diagnose problems accurately before any work begins.",
    business_hours: "Mon-Sun: 6AM-10PM",
    average_response_time: "Within 1 hour",
    service_areas: ["78721", "78722", "78723", "78724", "78725", "78726"],
    status: "active",
    category_id: "cat_plumbing",
    category_name: "Plumbing",
    logo_url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",
    services: [
      { id: "srv_5", title: "Sewer Line Inspection", description: "HD camera inspection to identify blockages, cracks, and root intrusion without digging." },
      { id: "srv_6", title: "Hydro Jetting", description: "High-pressure water jetting to clear grease, scale, and debris from drain lines." },
      { id: "srv_7", title: "Trenchless Pipe Repair", description: "No-dig pipe repair and replacement. Save your landscaping and driveway." },
    ],
    gallery: [
      { id: "gal_4", image_url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=400&fit=crop", caption: "Camera inspection" },
    ],
  },

  // ELECTRICAL
  {
    id: "prov_3",
    business_name: "Bright Spark Electric",
    slug: "bright-spark-electric",
    email: "info@brightsparkelectric.com",
    phone: "(512) 555-0391",
    bio: "Licensed master electricians serving the Austin metro area. From panel upgrades to smart home installations, we handle all residential electrical needs with precision and safety.",
    business_hours: "Mon-Fri: 7AM-6PM, Sat: 8AM-2PM",
    average_response_time: "Within 4 hours",
    service_areas: ["78701", "78702", "78703", "78731", "78732", "78733"],
    status: "active",
    category_id: "cat_electrical",
    category_name: "Electrical",
    logo_url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=200&h=200&fit=crop",
    services: [
      { id: "srv_8", title: "Electrical Panel Upgrade", description: "Upgrade your electrical panel to handle modern power demands. 100, 200, and 400 amp services available." },
      { id: "srv_9", title: "EV Charger Installation", description: "Level 2 EV charger installation for Tesla, Ford, and all electric vehicles. Includes permit and inspection." },
      { id: "srv_10", title: "Whole-Home Rewiring", description: "Complete electrical rewiring for older homes. Bring your home up to current safety codes." },
      { id: "srv_11", title: "Smart Home Integration", description: "Install smart switches, outlets, and home automation systems. Works with Alexa, Google Home, and HomeKit." },
    ],
    gallery: [
      { id: "gal_5", image_url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop", caption: "Panel upgrade" },
      { id: "gal_6", image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", caption: "EV charger install" },
    ],
  },
  {
    id: "prov_4",
    business_name: "SafeWire Electrical Services",
    slug: "safewire-electrical-services",
    email: "hello@safewireelectric.com",
    phone: "(512) 555-0472",
    bio: "Your trusted neighborhood electrician. We specialize in troubleshooting, repairs, and installations. No job too small - from changing outlets to complete home rewires.",
    business_hours: "Mon-Fri: 8AM-5PM",
    average_response_time: "Within 24 hours",
    service_areas: ["78741", "78742", "78744", "78745", "78746", "78747", "78748", "78749"],
    status: "active",
    category_id: "cat_electrical",
    category_name: "Electrical",
    logo_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop",
    services: [
      { id: "srv_12", title: "Outlet & Switch Installation", description: "Install new outlets, switches, and USB charging ports throughout your home." },
      { id: "srv_13", title: "Lighting Installation", description: "Recessed lighting, ceiling fans, chandeliers, and outdoor lighting installation." },
      { id: "srv_14", title: "Electrical Troubleshooting", description: "Diagnose and repair electrical issues including flickering lights, tripped breakers, and more." },
    ],
    gallery: [],
  },

  // HVAC
  {
    id: "prov_5",
    business_name: "Cool Comfort HVAC",
    slug: "cool-comfort-hvac",
    email: "service@coolcomforthvac.com",
    phone: "(512) 555-0593",
    bio: "Austin's premier HVAC company. We install, repair, and maintain all major brands of heating and cooling systems. Carrier, Trane, Lennox, and more. Financing available.",
    business_hours: "Mon-Fri: 7AM-8PM, Sat-Sun: 8AM-6PM",
    average_response_time: "Within 2 hours",
    service_areas: ["78701", "78702", "78703", "78704", "78705", "78751", "78752", "78753", "78754", "78756", "78757", "78758"],
    status: "active",
    category_id: "cat_hvac",
    category_name: "HVAC",
    logo_url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&h=200&fit=crop",
    services: [
      { id: "srv_15", title: "AC Installation & Replacement", description: "Expert installation of central AC systems. Free in-home estimates and flexible financing options." },
      { id: "srv_16", title: "Heating System Repair", description: "Furnace and heat pump repairs. Same-day service available for most repairs." },
      { id: "srv_17", title: "Preventative Maintenance", description: "Annual tune-ups to keep your system running efficiently. Includes filter replacement and full inspection." },
      { id: "srv_18", title: "Duct Cleaning & Sealing", description: "Improve air quality and efficiency with professional duct cleaning and sealing services." },
    ],
    gallery: [
      { id: "gal_7", image_url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop", caption: "New AC installation" },
      { id: "gal_8", image_url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop", caption: "System maintenance" },
    ],
  },

  // LANDSCAPING
  {
    id: "prov_6",
    business_name: "Green Valley Landscaping",
    slug: "green-valley-landscaping",
    email: "info@greenvalleylandscape.com",
    phone: "(512) 555-0634",
    bio: "Transform your outdoor space with our award-winning landscape design and maintenance services. From weekly lawn care to complete backyard renovations, we bring your vision to life.",
    business_hours: "Mon-Sat: 7AM-6PM",
    average_response_time: "Within 24 hours",
    service_areas: ["78701", "78702", "78703", "78704", "78731", "78732", "78733", "78746", "78756"],
    status: "active",
    category_id: "cat_landscaping",
    category_name: "Landscaping",
    logo_url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=200&fit=crop",
    services: [
      { id: "srv_19", title: "Weekly Lawn Maintenance", description: "Mowing, edging, trimming, and blowing. Keep your lawn looking pristine year-round." },
      { id: "srv_20", title: "Landscape Design", description: "Custom landscape design by our certified designers. 3D renderings included." },
      { id: "srv_21", title: "Irrigation Installation", description: "Sprinkler system installation and repair. Smart controllers for water efficiency." },
      { id: "srv_22", title: "Tree & Shrub Care", description: "Pruning, fertilization, and disease treatment for healthy trees and shrubs." },
    ],
    gallery: [
      { id: "gal_9", image_url: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400&h=400&fit=crop", caption: "Backyard transformation" },
      { id: "gal_10", image_url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop", caption: "Garden design" },
      { id: "gal_11", image_url: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=400&h=400&fit=crop", caption: "Patio installation" },
    ],
  },

  // CLEANING
  {
    id: "prov_7",
    business_name: "Sparkle Clean Pro",
    slug: "sparkle-clean-pro",
    email: "book@sparklecleanpro.com",
    phone: "(512) 555-0725",
    bio: "Professional house cleaning services with eco-friendly products. Our bonded and insured cleaners provide consistent, thorough cleaning you can count on. Online booking available.",
    business_hours: "Mon-Sat: 8AM-6PM",
    average_response_time: "Within 4 hours",
    service_areas: ["78701", "78702", "78703", "78704", "78705", "78721", "78722", "78723", "78741", "78745"],
    status: "active",
    category_id: "cat_cleaning",
    category_name: "Cleaning",
    logo_url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&h=200&fit=crop",
    services: [
      { id: "srv_23", title: "Regular House Cleaning", description: "Weekly, bi-weekly, or monthly cleaning services. Customizable to your needs." },
      { id: "srv_24", title: "Deep Cleaning", description: "Intensive top-to-bottom cleaning. Perfect for spring cleaning or before/after events." },
      { id: "srv_25", title: "Move-In/Move-Out Cleaning", description: "Get your security deposit back with our thorough move-out cleaning service." },
    ],
    gallery: [
      { id: "gal_12", image_url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop", caption: "Kitchen cleaning" },
    ],
  },

  // ROOFING
  {
    id: "prov_8",
    business_name: "Apex Roofing & Restoration",
    slug: "apex-roofing-restoration",
    email: "estimates@apexroofing.com",
    phone: "(512) 555-0816",
    bio: "Central Texas roofing experts. We handle storm damage, complete replacements, and repairs for shingle, metal, and tile roofs. Free inspections and insurance claim assistance.",
    business_hours: "Mon-Fri: 7AM-6PM, Sat: 8AM-12PM",
    average_response_time: "Within 24 hours",
    service_areas: ["78701", "78702", "78703", "78704", "78705", "78721", "78722", "78723", "78724", "78725", "78741", "78745", "78746", "78731", "78732"],
    status: "active",
    category_id: "cat_roofing",
    category_name: "Roofing",
    logo_url: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=200&h=200&fit=crop",
    services: [
      { id: "srv_26", title: "Roof Replacement", description: "Complete tear-off and replacement. Premium materials with 25-50 year warranties." },
      { id: "srv_27", title: "Storm Damage Repair", description: "Fast response for hail and wind damage. We work directly with your insurance." },
      { id: "srv_28", title: "Roof Inspection", description: "Comprehensive inspection with detailed report and photos. Free for homeowners." },
      { id: "srv_29", title: "Gutter Installation", description: "Seamless aluminum gutters with leaf guards. Protects your foundation and landscaping." },
    ],
    gallery: [
      { id: "gal_13", image_url: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=400&fit=crop", caption: "Roof replacement" },
      { id: "gal_14", image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop", caption: "Completed project" },
    ],
  },

  // PAINTING
  {
    id: "prov_9",
    business_name: "ColorCraft Painting Co.",
    slug: "colorcraft-painting",
    email: "quote@colorcraftpainting.com",
    phone: "(512) 555-0927",
    bio: "Professional interior and exterior painting for homes and businesses. We use premium paints from Sherwin-Williams and Benjamin Moore. Color consultation included with every project.",
    business_hours: "Mon-Fri: 8AM-5PM",
    average_response_time: "Within 24 hours",
    service_areas: ["78701", "78702", "78703", "78704", "78705", "78751", "78752", "78756", "78757"],
    status: "active",
    category_id: "cat_painting",
    category_name: "Painting",
    logo_url: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=200&h=200&fit=crop",
    services: [
      { id: "srv_30", title: "Interior Painting", description: "Walls, ceilings, trim, and doors. Furniture moving and wall repair included." },
      { id: "srv_31", title: "Exterior Painting", description: "Full exterior painting including siding, trim, doors, and shutters. Power washing included." },
      { id: "srv_32", title: "Cabinet Refinishing", description: "Transform your kitchen with professionally refinished cabinets. Fraction of replacement cost." },
    ],
    gallery: [
      { id: "gal_15", image_url: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=400&fit=crop", caption: "Interior painting" },
      { id: "gal_16", image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop", caption: "Exterior project" },
    ],
  },

  // PEST CONTROL
  {
    id: "prov_10",
    business_name: "Guardian Pest Solutions",
    slug: "guardian-pest-solutions",
    email: "help@guardianpest.com",
    phone: "(512) 555-0108",
    bio: "Protecting Austin homes from pests since 2005. We eliminate ants, roaches, spiders, rodents, termites, and more. Eco-friendly options available. Satisfaction guaranteed.",
    business_hours: "Mon-Sat: 7AM-7PM",
    average_response_time: "Within 4 hours",
    service_areas: ["78701", "78702", "78703", "78704", "78705", "78721", "78722", "78723", "78724", "78741", "78745", "78746", "78751", "78752", "78756", "78757", "78758"],
    status: "active",
    category_id: "cat_pest_control",
    category_name: "Pest Control",
    logo_url: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=200&h=200&fit=crop",
    services: [
      { id: "srv_33", title: "General Pest Control", description: "Quarterly treatments to prevent and eliminate common household pests." },
      { id: "srv_34", title: "Termite Treatment", description: "Termite inspection, treatment, and prevention. Protect your home's foundation." },
      { id: "srv_35", title: "Rodent Control", description: "Humane trapping and exclusion services. We seal entry points to prevent return." },
      { id: "srv_36", title: "Mosquito Treatment", description: "Yard treatments to reduce mosquito populations. Enjoy your outdoor space again." },
    ],
    gallery: [],
  },
];

// Helper functions
export function getCategoryBySlug(slug) {
  return categories.find((cat) => cat.slug === slug);
}

export function getProvidersByCategory(categorySlug, zipFilter = null) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return { category: null, providers: [] };

  let filtered = providers.filter(
    (p) => p.category_id === category.id && p.status === "active"
  );

  if (zipFilter) {
    filtered = filtered.filter((p) => p.service_areas.includes(zipFilter));
  }

  return { category, providers: filtered };
}

export function getProviderBySlug(slug) {
  return providers.find((p) => p.slug === slug);
}

export function searchProviders(query, categorySlug = null, zip = null) {
  let results = providers.filter((p) => p.status === "active");

  if (categorySlug) {
    const category = getCategoryBySlug(categorySlug);
    if (category) {
      results = results.filter((p) => p.category_id === category.id);
    }
  }

  if (zip) {
    results = results.filter((p) => p.service_areas.includes(zip));
  }

  if (query) {
    const q = query.toLowerCase();
    results = results.filter(
      (p) =>
        p.business_name.toLowerCase().includes(q) ||
        p.bio.toLowerCase().includes(q) ||
        p.services.some(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.description.toLowerCase().includes(q)
        )
    );
  }

  return results;
}

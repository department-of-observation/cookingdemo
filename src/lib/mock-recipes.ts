// src/lib/mock-recipes.ts
export type Recipe = {
  slug: string;
  title: string;
  blurb: string;
  category: string;
  tags: string[];
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  isMemberOnly: boolean;
  tier?: "Basic" | "Intermediate";
  hasCalculator: boolean;
};

export const CATEGORIES = [
  "Weeknight",
  "One-Pot",
  "Bakes",
  "Comfort Food",
  "Sauces & Sides",
] as const;

export const TAGS = [
  "chicken",
  "pork",
  "noodles",
  "rice",
  "spicy",
  "budget",
  "family",
  "meal-prep",
  "vegetarian",
] as const;

export const RECIPES: Recipe[] = [
  {
    slug: "garlic-butter-chicken-rice",
    title: "Garlic Butter Chicken Rice",
    blurb: "Golden chicken, buttery rice, and that cozy garlic aroma that makes the whole kitchen feel warm.",
    category: "Weeknight",
    tags: ["chicken", "rice", "family", "budget"],
    minutes: 35,
    difficulty: "Easy",
    isMemberOnly: false,
    hasCalculator: true,
  },
  {
    slug: "smoky-paprika-one-pot-pasta",
    title: "Smoky Paprika One-Pot Pasta",
    blurb: "One pot, big comfort. Creamy-tangy, lightly smoky, and dangerously easy to finish.",
    category: "One-Pot",
    tags: ["noodles", "budget", "meal-prep"],
    minutes: 25,
    difficulty: "Easy",
    isMemberOnly: false,
    hasCalculator: true,
  },
  {
    slug: "crispy-pork-cutlet-sauce",
    title: "Crispy Pork Cutlet + Quick Pan Sauce",
    blurb: "Crunchy edges, juicy center, and a fast pan sauce that tastes like you tried way harder.",
    category: "Comfort Food",
    tags: ["pork", "family"],
    minutes: 40,
    difficulty: "Medium",
    isMemberOnly: false,
    hasCalculator: true,
  },
  {
    slug: "chili-oil-noodles-10min",
    title: "10-Min Chili Oil Noodles",
    blurb: "Silky noodles, punchy aromatics, and a customizable heat level for everyone at the table.",
    category: "Weeknight",
    tags: ["noodles", "spicy", "budget"],
    minutes: 10,
    difficulty: "Easy",
    isMemberOnly: false,
    hasCalculator: true,
  },

  // Member-only monthly recipe (Basic)
  {
    slug: "monthly-subscriber-braised-chicken",
    title: "Monthly Subscriber Recipe: Cozy Soy-Braised Chicken",
    blurb: "Deep savory braise, glossy sauce, and the kind of smell that makes people wander into the kitchen.",
    category: "Comfort Food",
    tags: ["chicken", "family"],
    minutes: 75,
    difficulty: "Medium",
    isMemberOnly: true,
    tier: "Basic",
    hasCalculator: true,
  },

  // Tier 2 extra video + written post (Intermediate)
  {
    slug: "intermediate-braised-miso-ragu",
    title: "Intermediate Extra: Miso Braised Ragu (10-min video)",
    blurb: "Slow comfort with a modern twist—miso depth, tender bites, and a sauce that clings perfectly.",
    category: "One-Pot",
    tags: ["noodles", "family"],
    minutes: 110,
    difficulty: "Hard",
    isMemberOnly: true,
    tier: "Intermediate",
    hasCalculator: false,
  },
];

export function getRecipe(slug: string) {
  return RECIPES.find((r) => r.slug === slug) ?? null;
}

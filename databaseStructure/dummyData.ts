// Dummy Data

import { Pest, PestSeverity, Plant, Month, WaterFrequency, SunLight, HardinessZone, GrowthRate, ToxicityLevel, Garden, User, UserPlant, Level } from "./models";

// Pests
const pests: Pest[] = [
  {
    id: 1,
    name: "Aphids",
    description: "Small sap-sucking insects that can damage plants by stunting growth and transmitting diseases.",
    severity: PestSeverity.HIGH,
    controlMethods: ["Neem oil", "Ladybugs", "Insecticidal soap"]
  },
  {
    id: 2,
    name: "Spider Mites",
    description: "Tiny mites that create webbing on plants and cause yellowing of leaves.",
    severity: PestSeverity.MEDIUM,
    controlMethods: ["Miticides", "Horticultural oils", "Beneficial insects"]
  },
  {
    id: 3,
    name: "Whiteflies",
    description: "Flying pests that suck sap from the undersides of plant leaves.",
    severity: PestSeverity.LOW,
    controlMethods: ["Yellow sticky traps", "Insecticidal soap", "Neem oil"]
  }
];

// Plants
const plants: Plant[] = [
  {
    id: 1,
    name: { commonName: "Tomato", scientificName: "Solanum lycopersicum" },
    blooming: { start: Month.JUNE, end: Month.AUGUST, flowerColor: "Yellow" },
    waterFrequency: WaterFrequency.WEEKLY,
    soil: { ph: 6.0, type: "Loamy" },
    harvest: { start: Month.JULY, end: Month.SEPTEMBER, yield: 20, edibleParts: "Fruit" },
    sunLight: SunLight.FULL_SUN,
    temperature: { min: 15, max: 35 },
    size: { height: 100, width: 60 },
    hardinessZone: HardinessZone.ZONE_9,
    growthRate: GrowthRate.FAST,
    fertilizerType: "Organic compost",
    toxicity: ToxicityLevel.NON_TOXIC,
    commonPests: [pests[0], pests[2]],
    planting: { start: Month.MARCH, end: Month.APRIL },
    region: "Tropical",
    pruning: "Prune suckers regularly",
    companion: []
  },
  {
    id: 2,
    name: { commonName: "Rose", scientificName: "Rosa" },
    blooming: { start: Month.MAY, end: Month.OCTOBER, flowerColor: "Red" },
    waterFrequency: WaterFrequency.WEEKLY,
    soil: { ph: 6.5, type: "Sandy loam" },
    harvest: { start: Month.JUNE, end: Month.JULY, yield: 10, edibleParts: "Petals" },
    sunLight: SunLight.PARTIAL_SUN,
    temperature: { min: 10, max: 30 },
    size: { height: 150, width: 100 },
    hardinessZone: HardinessZone.ZONE_8,
    growthRate: GrowthRate.MODERATE,
    fertilizerType: "Rose fertilizer",
    toxicity: ToxicityLevel.NON_TOXIC,
    commonPests: [pests[1]],
    planting: { start: Month.MARCH, end: Month.MAY },
    region: "Temperate",
    pruning: "Prune dead wood and encourage blooms",
    companion: []
  },
  {
    id: 3,
    name: { commonName: "Carrot", scientificName: "Daucus carota" },
    blooming: { start: Month.JUNE, end: Month.AUGUST, flowerColor: "White" },
    waterFrequency: WaterFrequency.WEEKLY,
    soil: { ph: 6.0, type: "Sandy" },
    harvest: { start: Month.AUGUST, end: Month.SEPTEMBER, yield: 50, edibleParts: "Root" },
    sunLight: SunLight.FULL_SUN,
    temperature: { min: 10, max: 25 },
    size: { height: 30, width: 5 },
    hardinessZone: HardinessZone.ZONE_5,
    growthRate: GrowthRate.MODERATE,
    fertilizerType: "All-purpose fertilizer",
    toxicity: ToxicityLevel.NON_TOXIC,
    commonPests: [pests[2]],
    planting: { start: Month.MARCH, end: Month.JUNE },
    region: "Cool",
    pruning: "Thin seedlings to 2-3 inches apart",
    companion: []
  },
  {
    id: 4,
    name: { commonName: "Basil", scientificName: "Ocimum basilicum" },
    blooming: { start: Month.JUNE, end: Month.AUGUST, flowerColor: "Purple" },
    waterFrequency: WaterFrequency.DAILY,
    soil: { ph: 6.5, type: "Loamy" },
    harvest: { start: Month.JUNE, end: Month.AUGUST, yield: 30, edibleParts: "Leaves" },
    sunLight: SunLight.FULL_SUN,
    temperature: { min: 15, max: 30 },
    size: { height: 45, width: 30 },
    hardinessZone: HardinessZone.ZONE_9,
    growthRate: GrowthRate.FAST,
    fertilizerType: "Balanced fertilizer",
    toxicity: ToxicityLevel.NON_TOXIC,
    commonPests: [],
    planting: { start: Month.APRIL, end: Month.MAY },
    region: "Mediterranean",
    pruning: "Pinch leaves regularly to promote growth",
    companion: []
  },
  {
    id: 5,
    name: { commonName: "Lavender", scientificName: "Lavandula" },
    blooming: { start: Month.JUNE, end: Month.AUGUST, flowerColor: "Purple" },
    waterFrequency: WaterFrequency.BIWEEKLY,
    soil: { ph: 7.0, type: "Well-drained" },
    harvest: { start: Month.JULY, end: Month.AUGUST, yield: 15, edibleParts: "Flowers" },
    sunLight: SunLight.FULL_SUN,
    temperature: { min: 10, max: 30 },
    size: { height: 60, width: 90 },
    hardinessZone: HardinessZone.ZONE_7,
    growthRate: GrowthRate.SLOW,
    fertilizerType: "No fertilizer required",
    toxicity: ToxicityLevel.NON_TOXIC,
    commonPests: [pests[1]],
    planting: { start: Month.MARCH, end: Month.APRIL },
    region: "Mediterranean",
    pruning: "Prune after flowering",
    companion: []
  }
];

// Gardens
const gardens: Garden[] = [
  { id: 1, location: "Backyard", plantIds: [1, 2] },
  { id: 2, location: "Front Yard", plantIds: [3, 4] },
  { id: 3, location: "Community Garden", plantIds: [5] }
];

// Users
const users: User[] = [
  {
    id: 1,
    username: "gardener_john",
    firstName: "John",
    lastName: "Doe",
    gardenIds: [1],
    plantIds: [1, 2]
  },
  {
    id: 2,
    username: "green_thumb",
    firstName: "Jane",
    lastName: "Smith",
    gardenIds: [2],
    plantIds: [3, 4]
  },
  {
    id: 3,
    username: "plant_lover",
    firstName: "Emily",
    lastName: "Brown",
    gardenIds: [3],
    plantIds: [5]
  }
];

// UserPlants
const userPlants: UserPlant[] = [
  {
    id: 1,
    plant: plants[0],
    wateredDate: "2024-09-12",
    plantedDate: "2024-04-10",
    moistureLevel: Level.OPTIMAL,
    sunlightLevel: Level.OPTIMAL,
    harvested: false
  },
  {
    id: 2,
    plant: plants[1],
    wateredDate: "2024-09-10",
    plantedDate: "2024-05-01",
    moistureLevel: Level.TOO_LOW,
    sunlightLevel: Level.OPTIMAL,
    harvested: false
  },
  {
    id: 3,
    plant: plants[2],
    wateredDate: "2024-09-14",
    plantedDate: "2024-03-15",
    moistureLevel: Level.OPTIMAL,
    sunlightLevel: Level.TOO_HIGH,
    harvested: true
  },
  {
    id: 4,
    plant: plants[3],
    wateredDate: "2024-09-13",
    plantedDate: "2024-05-01",
    moistureLevel: Level.TOO_HIGH,
    sunlightLevel: Level.OPTIMAL,
    harvested: false
  },
  {
    id: 5,
    plant: plants[4],
    wateredDate: "2024-09-11",
    plantedDate: "2024-04-01",
    moistureLevel: Level.OPTIMAL,
    sunlightLevel: Level.OPTIMAL,
    harvested: true
  }
];

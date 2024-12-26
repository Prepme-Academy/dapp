export const examOptions = [
  {
    id: "1",
    name: "WAEC",
    examicon: "/icons/onboarding/waec.svg",
  },
  {
    id: "2",
    name: "BECE",
    examicon: "/icons/onboarding/bece.svg",
  },
  {
    id: "3",
    name: "IGSCE",
    examicon: "/icons/onboarding/igsce.svg",
  },
  {
    id: "4",
    name: "GRE",
    examicon: "/icons/onboarding/gre.svg",
  },
  {
    id: "5",
    name: "JAMB",
    examicon: "/icons/onboarding/jamb.svg",
  },
  {
    id: "6",
    name: "SAT",
    examicon: "/icons/onboarding/sat.svg",
  },
  {
    id: "7",
    name: "NECO",
    examicon: "/icons/onboarding/neco.svg",
  },
];

export const practiceDurationOptions = [
  {
    id: "1",
    name: "30 mins /day",
    duration: 30,
  },
  {
    id: "2",
    name: "1 hour /day",
    duration: 60,
  },
  {
    id: "3",
    name: "1 hr 30 mins/day",
    duration: 72,
  },
  {
    id: "4",
    name: "2 hours /day",
    duration: 120,
  },
];

export const questsData = [
  { id: "1", title: "Complete 1 exam", percentage: 0 },
  { id: "2", title: "Spend 30 mins practicing", percentage: 0 },
];

export const leaderboardData = [
  { id: "1", username: "Zanny", score: 550 },
  { id: "2", username: "Zanny", score: 510 },
  { id: "3", username: "Zanny", score: 410 },
  { id: "4", username: "Zanny", score: 410 },
  { id: "5", username: "Zanny", score: 410 },
  { id: "6", username: "Zanny", score: 410 },
  { id: "7", username: "Zanny", score: 410 },
  { id: "8", username: "Zanny", score: 410 },
  { id: "9", username: "Zanny", score: 410 },
  { id: "10", username: "Zanny", score: 410 },
  { id: "11", username: "Zanny", score: 410 },
  { id: "12", username: "Zanny", score: 410 },
  { id: "13", username: "Zanny", score: 410 },
  { id: "14", username: "Zanny", score: 410 },
  { id: "15", username: "Zanny", score: 410 },
  { id: "16", username: "Zanny", score: 410 },
  { id: "17", username: "Zanny", score: 410 },
  { id: "18", username: "Zanny", score: 410 },
  { id: "19", username: "Zanny", score: 410 },
  { id: "20", username: "Zanny", score: 410 },
  { id: "21", username: "Sussybabe (You)", score: 0 },
];

export const examQuestions = [
    {
      id: "jamb_chemistry_2020",
      examType: "Jamb",
      year: 2020,
      subject: "Chemistry",
      questions: [
        {
          question: "What is the chemical formula for water?",
          options: ["H2O", "CO2", "O2", "H2"],
          answer: "H2O",
        },
        {
          question: "What is the atomic number of Carbon?",
          options: [6, 12, 14, 16],
          answer: 6,
        },
        {
          question: "Which element is represented by the symbol 'Na'?",
          options: ["Sodium", "Nitrogen", "Nickel", "Neon"],
          answer: "Sodium",
        },
        {
          question: "What is the pH of a neutral solution?",
          options: [7, 0, 14, 3],
          answer: 7,
        },
        {
          question: "Which gas is produced by the reaction of hydrochloric acid and zinc?",
          options: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon Dioxide"],
          answer: "Hydrogen",
        },
        {
          question: "What is the main constituent of natural gas?",
          options: ["Methane", "Ethane", "Propane", "Butane"],
          answer: "Methane",
        },
        {
          question: "Which of the following is a noble gas?",
          options: ["Helium", "Oxygen", "Hydrogen", "Nitrogen"],
          answer: "Helium",
        },
        {
          question: "What is the chemical formula for ammonia?",
          options: ["NH3", "NH4", "N2H4", "N2H"],
          answer: "NH3",
        },
        {
          question: "Which element has the highest electronegativity?",
          options: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"],
          answer: "Fluorine",
        },
        {
          question: "Which of the following is a diatomic molecule?",
          options: ["O2", "H2O", "CO2", "CH4"],
          answer: "O2",
        },
        {
          question: "What is the product of the complete combustion of hydrocarbons?",
          options: ["CO2 and H2O", "CO and H2O", "CO and O2", "C and H2O"],
          answer: "CO2 and H2O",
        },
        {
          question: "Which acid is found in vinegar?",
          options: ["Acetic Acid", "Citric Acid", "Sulfuric Acid", "Hydrochloric Acid"],
          answer: "Acetic Acid",
        },
        {
          question: "What is the first element on the periodic table?",
          options: ["Hydrogen", "Helium", "Lithium", "Carbon"],
          answer: "Hydrogen",
        },
        {
          question: "What is the most abundant gas in the Earth's atmosphere?",
          options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
          answer: "Nitrogen",
        },
        {
          question: "What is the chemical formula for sulfuric acid?",
          options: ["H2SO4", "H2SO3", "HSO4", "SO4"],
          answer: "H2SO4",
        },
        {
          question: "Which element is a liquid at room temperature?",
          options: ["Mercury", "Sodium", "Iron", "Zinc"],
          answer: "Mercury",
        },
        {
          question: "What is the process of converting a liquid to a gas?",
          options: ["Evaporation", "Condensation", "Sublimation", "Deposition"],
          answer: "Evaporation",
        },
        {
          question: "What is the main component of limestone?",
          options: ["Calcium Carbonate", "Calcium Oxide", "Calcium Sulfate", "Calcium Chloride"],
          answer: "Calcium Carbonate",
        },
        {
          question: "What is the charge of a proton?",
          options: ["+1", "0", "-1", "+2"],
          answer: "+1",
        },
        {
          question: "What is the chemical formula for glucose?",
          options: ["C6H12O6", "C6H6O6", "C5H10O5", "C6H12O5"],
          answer: "C6H12O6",
        },
        {
          question: "Which gas is used in the manufacture of ammonia by the Haber process?",
          options: ["Nitrogen", "Oxygen", "Hydrogen", "Carbon Dioxide"],
          answer: "Nitrogen",
        },
        {
          question: "What is the name of the process by which plants make their food?",
          options: ["Photosynthesis", "Respiration", "Digestion", "Fermentation"],
          answer: "Photosynthesis",
        },
        {
          question: "Which element is the primary component of steel?",
          options: ["Iron", "Aluminum", "Copper", "Zinc"],
          answer: "Iron",
        },
        {
          question: "What is the common name for sodium chloride?",
          options: ["Table Salt", "Baking Soda", "Bleach", "Vinegar"],
          answer: "Table Salt",
        },
        {
          question: "What is the pH of a basic solution?",
          options: ["Greater than 7", "Less than 7", "Equal to 7", "Equal to 0"],
          answer: "Greater than 7",
        },
        {
          question: "What is the chemical formula for methane?",
          options: ["CH4", "C2H6", "C3H8", "C4H10"],
          answer: "CH4",
        },
        {
          question: "Which of the following is a halogen?",
          options: ["Chlorine", "Oxygen", "Nitrogen", "Helium"],
          answer: "Chlorine",
        },
        {
          question: "What is the main gas found in natural gas?",
          options: ["Methane", "Ethane", "Propane", "Butane"],
          answer: "Methane",
        },
        {
          question: "What is the chemical formula for sodium hydroxide?",
          options: ["NaOH", "NaCl", "NaHCO3", "Na2CO3"],
          answer: "NaOH",
        },
        {
          question: "Which element has the symbol 'Fe'?",
          options: ["Iron", "Fluorine", "Phosphorus", "Francium"],
          answer: "Iron",
        },
        {
          question: "What is the name of the process by which a solid changes directly to a gas?",
          options: ["Sublimation", "Evaporation", "Condensation", "Deposition"],
          answer: "Sublimation",
        },
        {
          question: "Which element is used in the filament of light bulbs?",
          options: ["Tungsten", "Copper", "Aluminum", "Zinc"],
          answer: "Tungsten",
        },
        {
          question: "What is the chemical formula for carbon dioxide?",
          options: ["CO2", "CO", "C2O", "C2O2"],
          answer: "CO2",
        },
        {
          question: "Which gas is known as 'laughing gas'?",
          options: ["Nitrous Oxide", "Carbon Dioxide", "Oxygen", "Helium"],
          answer: "Nitrous Oxide",
        },
        {
          question: "What is the main component of natural gas?",
          options: ["Methane", "Ethane", "Propane", "Butane"],
          answer: "Methane",
        },
        {
          question: "What is the symbol for potassium?",
          options: ["K", "P", "Po", "Pt"],
          answer: "K",
        },
        {
          question: "What is the chemical formula for hydrochloric acid?",
          options: ["HCl", "H2Cl", "HCl2", "H2C"],
          answer: "HCl",
        },
        {
          question: "Which of the following is an alkaline earth metal?",
          options: ["Calcium", "Sodium", "Potassium", "Magnesium"],
          answer: "Calcium",
        },
        {
          question: "What is the chemical formula for ethanol?",
          options: ["C2H5OH", "C2H6O", "C2H4OH", "C2H6OH"],
          answer: "C2H5OH",
        },
        {
          question: "What is the charge of an electron?",
          options: ["-1", "0", "+1", "-2"],
          answer: "-1",
        },
        {
          question: "Which element is represented by the symbol 'O'?",
          options: ["Oxygen", "Osmium", "Oganesson", "Osmium"],
          answer: "Oxygen",
        },
        {
          question: "What is the chemical formula for sodium bicarbonate?",
          options: ["NaHCO3", "Na2CO3", "Na2HCO3", "NaCO3"],
          answer: "NaHCO3",
        },
        {
          question: "Which of the following is a transition metal?",
          options: ["Copper", "Sodium", "Calcium", "Potassium"],
          answer: "Copper",
        },
        {
          question: "What is the chemical formula for acetic acid?",
          options: ["CH3COOH", "C2H5OH", "C3H7OH", "CH3OH"],
          answer: "CH3COOH",
        },
        {
          question: "Which gas is produced by photosynthesis?",
          options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
          answer: "Oxygen",
        },
        {
          question: "What is the main element in organic compounds?",
          options: ["Carbon", "Oxygen", "Hydrogen", "Nitrogen"],
          answer: "Carbon",
        },
        {
          question: "Which element is used in the production of nuclear energy?",
          options: ["Uranium", "Thorium", "Plutonium", "Radium"],
          answer: "Uranium",
        },
        {
          question: "What is the chemical formula for sulfur dioxide?",
          options: ["SO2", "SO3", "S2O", "S2O3"],
          answer: "SO2",
        },
        {
          question: "Which of the following is a non-metal?",
          options: ["Sulfur", "Iron", "Magnesium", "Copper"],
          answer: "Sulfur",
        },
        {
          question: "What is the chemical formula for nitric acid?",
          options: ["HNO3", "HNO2", "HNO", "H2NO3"],
          answer: "HNO3",
        },
      ],
    },
  {
    id: "jamb_physics_2021",
    examType: "Jamb",
    year: 2021,
    subject: "Physics",
    questions: [
      {
        question: "What is the speed of light?",
        options: [
          "3 x 10^8 m/s",
          "1.5 x 10^8 m/s",
          "2 x 10^8 m/s",
          "3.5 x 10^8 m/s",
        ],
        answer: "3 x 10^8 m/s",
      },
      {
        question: "Who formulated the theory of relativity?",
        options: [
          "Isaac Newton",
          "Albert Einstein",
          "Galileo Galilei",
          "Niels Bohr",
        ],
        answer: "Albert Einstein",
      },
    ],
  },
  {
    id: "jamb_mathematics_2020",
    examType: "Jamb",
    year: 2022,
    subject: "Mathematics",
    questions: [
      {
        question: "What is the value of π?",
        options: ["3.14", "2.14", "3.41", "3.15"],
        answer: "3.14",
      },
      {
        question: "What is the derivative of x^2?",
        options: ["2x", "x", "x^2", "2"],
        answer: "2x",
      },
    ],
  },
];

export const transactionHistory = [
  {
    id: "1",
    date: "Dec 4, 2024",
    transactions: [
      {
        id: "01",
        transationInfo: {
          title: "Send EDU",
          info: "-20 EDU",
          debit: "-500 XP",
        },
        status: "Confirmed",
      },
      {
        id: "02",
        transationInfo: {
          title: "Convert 200 XP",
          info: "-200 XP",
          debit: "20 EDU",
        },
        status: "Pending",
      },
      {
        id: "03",
        transationInfo: {
          title: "Send EDU",
          info: "-20 EDU",
          debit: "-500 XP",
        },
        status: "Confirmed",
      },
    ],
  },
  {
    id: "2",
    date: "Dec 2, 2024",
    transactions: [
      {
        id: "01",
        transationInfo: {
          title: "Convert 200 XP",
          info: "-20 EDU",
          debit: "-500 XP",
        },
        status: "Confirmed",
      },
      {
        id: "02",
        transationInfo: {
          title: "Convert 200 XP",
          info: "-200 XP",
          debit: "20 EDU",
        },
        status: "Failed",
      },
    ],
  },
];

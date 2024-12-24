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

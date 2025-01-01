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

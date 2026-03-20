export const userProfile = {
  firstName: "Arjun",
  city: "Bengaluru",
  partnerType: "Urban Delivery Partner",
};

export const dashboardData = {
  weeklyProtectedEarnings: 12850,
  insuranceStatus: "Active",
  riskLevel: "Medium",
  policyName: "GigShield Weekly Cover",
  nextPremiumDate: "23 Mar 2026",
};

export const policyData = {
  weeklyPremium: 149,
  activeStatus: "Active",
  coverageDetails: [
    "Income protection up to ₹15,000 per week",
    "Instant support for weather-triggered disruptions",
    "Hospital cash benefit during recovery period"
  ],
};

export const claimsData = [
  {
    id: "CLM-1028",
    title: "Rainfall disruption payout",
    status: "Approved",
    amount: 2200,
    date: "17 Mar 2026",
  },
  {
    id: "CLM-1022",
    title: "Accident recovery support",
    status: "Pending",
    amount: 3500,
    date: "12 Mar 2026",
  },
  {
    id: "CLM-1004",
    title: "Heatwave work-loss cover",
    status: "Rejected",
    amount: 0,
    date: "03 Mar 2026",
  },
];

export const notificationsData = [
  {
    id: "NTF-01",
    title: "Claim triggered automatically",
    description: "Heavy rain alert matched your work zone. Your claim has been initiated.",
    time: "2h ago",
  },
  {
    id: "NTF-02",
    title: "Payout processed",
    description: "₹2,200 has been credited to your linked bank account.",
    time: "Yesterday",
  },
  {
    id: "NTF-03",
    title: "Premium reminder",
    description: "Your weekly premium of ₹149 is due on 23 Mar 2026.",
    time: "Yesterday",
  },
];

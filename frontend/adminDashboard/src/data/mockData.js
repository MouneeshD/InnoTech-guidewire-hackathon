export const overviewStats = [
  {
    title: "Total Users",
    value: "18,420",
    change: "+12.4%",
    tone: "primary",
  },
  {
    title: "Active Policies",
    value: "13,280",
    change: "+8.1%",
    tone: "success",
  },
  {
    title: "Claims Processed",
    value: "1,248",
    change: "+5.7%",
    tone: "warning",
  },
  {
    title: "Total Payouts",
    value: "₹42.8L",
    change: "+18.2%",
    tone: "primary",
  },
  {
    title: "Fraud Alerts",
    value: "29",
    change: "+4 new",
    tone: "danger",
  },
];

export const claims = [
  { id: "CLM-9001", userName: "Aman Verma", location: "Bengaluru", amount: 4200, status: "Approved", date: "2026-03-18" },
  { id: "CLM-9002", userName: "Ravi Kumar", location: "Delhi", amount: 3100, status: "Pending", date: "2026-03-19" },
  { id: "CLM-9003", userName: "Neha Yadav", location: "Mumbai", amount: 5800, status: "Rejected", date: "2026-03-16" },
  { id: "CLM-9004", userName: "Sahil Khan", location: "Hyderabad", amount: 2700, status: "Approved", date: "2026-03-20" },
  { id: "CLM-9005", userName: "Priya Sharma", location: "Pune", amount: 4900, status: "Pending", date: "2026-03-15" },
  { id: "CLM-9006", userName: "Imran Ali", location: "Chennai", amount: 3600, status: "Approved", date: "2026-03-14" },
];

export const riskDistribution = [
  { name: "Low", value: 58 },
  { name: "Medium", value: 29 },
  { name: "High", value: 13 },
];

export const claimsByRegion = [
  { region: "Bengaluru", claims: 264 },
  { region: "Delhi", claims: 198 },
  { region: "Mumbai", claims: 243 },
  { region: "Hyderabad", claims: 151 },
  { region: "Pune", claims: 126 },
];

export const flaggedClaims = [
  {
    id: "FRD-210",
    userName: "Vikram S",
    location: "Delhi",
    riskScore: 92,
    activity: "Repeated claim triggers within 24 hours across overlapping geozones",
  },
  {
    id: "FRD-214",
    userName: "Deepa M",
    location: "Mumbai",
    riskScore: 86,
    activity: "High payout request from a device linked to two separate partner accounts",
  },
  {
    id: "FRD-219",
    userName: "Karthik R",
    location: "Hyderabad",
    riskScore: 78,
    activity: "Suspicious claim time pattern inconsistent with historical route behavior",
  },
];

export const users = [
  { id: "USR-001", name: "Aman Verma", location: "Bengaluru", riskScore: 34, policyStatus: "Active" },
  { id: "USR-002", name: "Priya Sharma", location: "Pune", riskScore: 52, policyStatus: "Active" },
  { id: "USR-003", name: "Neha Yadav", location: "Mumbai", riskScore: 74, policyStatus: "Inactive" },
  { id: "USR-004", name: "Ravi Kumar", location: "Delhi", riskScore: 63, policyStatus: "Active" },
  { id: "USR-005", name: "Imran Ali", location: "Chennai", riskScore: 28, policyStatus: "Active" },
  { id: "USR-006", name: "Sahil Khan", location: "Hyderabad", riskScore: 81, policyStatus: "Active" },
];

export const notifications = [
  {
    id: "NT-1",
    title: "Fraud detected in Delhi zone",
    description: "A cluster of unusual claims was flagged for manual review.",
    type: "Fraud",
    time: "5 min ago",
  },
  {
    id: "NT-2",
    title: "Claim triggered automatically",
    description: "Rainfall threshold breached for 43 users in Bengaluru.",
    type: "Claim",
    time: "22 min ago",
  },
  {
    id: "NT-3",
    title: "System update complete",
    description: "Risk scoring engine refreshed with the latest route volatility model.",
    type: "System",
    time: "1 hr ago",
  },
];

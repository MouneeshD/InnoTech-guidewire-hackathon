import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./layout/AppShell";
import ClaimsManagement from "./pages/ClaimsManagement";
import DashboardOverview from "./pages/DashboardOverview";
import FraudDetection from "./pages/FraudDetection";
import NotificationsPage from "./pages/NotificationsPage";
import RiskAnalytics from "./pages/RiskAnalytics";
import UsersPage from "./pages/UsersPage";

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<DashboardOverview />} />
        <Route path="/claims" element={<ClaimsManagement />} />
        <Route path="/risk-analytics" element={<RiskAnalytics />} />
        <Route path="/fraud-detection" element={<FraudDetection />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  );
}

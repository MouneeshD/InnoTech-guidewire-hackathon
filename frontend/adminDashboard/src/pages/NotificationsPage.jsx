import NotificationList from "../components/NotificationList";
import PageHeader from "../components/PageHeader";
import PanelCard from "../components/PanelCard";
import { notifications } from "../data/mockData";

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Notifications Panel"
        description="Keep admins informed about fraud activity, claim triggers, and system-level operational updates."
      />

      <PanelCard title="Recent Alerts">
        <NotificationList items={notifications} />
      </PanelCard>
    </div>
  );
}

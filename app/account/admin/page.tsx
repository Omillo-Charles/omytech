import type { Metadata } from "next";
import AdminDashboard from "../../../components/admin/AdminDashboard";

export const metadata: Metadata = {
    title: "Admin Dashboard | OMYTECH Kenya",
};

export default function AdminAccountPage() {
    return <AdminDashboard />;
}

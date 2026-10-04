import type { Metadata } from "next";
import AccessGuard from "../../../components/auth/AccessGuard";
import AdminDashboard from "../../../components/admin/AdminDashboard";

export const metadata: Metadata = {
    title: "Admin Dashboard | OMYTECH Kenya",
};

export default function AdminAccountPage() {
    return (
        <AccessGuard>
            <AdminDashboard />
        </AccessGuard>
    );
}

import {
  FiBriefcase,
  FiCreditCard,
  FiFileText,
  FiFolder,
  FiGrid,
  FiShare2,
  FiUsers,
} from "react-icons/fi";

export type AdminView =
  | "Overview"
  | "Projects"
  | "Quotes"
  | "Clients"
  | "Invoices"
  | "Payments"
  | "Referrals"
  | "Files"
  | "Settings";

export const adminNavigation: { label: AdminView; icon: typeof FiGrid }[] = [
  { label: "Overview", icon: FiGrid },
  { label: "Projects", icon: FiBriefcase },
  { label: "Quotes", icon: FiFileText },
  { label: "Clients", icon: FiUsers },
  { label: "Invoices", icon: FiCreditCard },
  { label: "Payments", icon: FiCreditCard },
  { label: "Referrals", icon: FiShare2 },
  { label: "Files", icon: FiFolder },
];

export const adminProjects = [
  {
    client: "Castra Households",
    project: "E-commerce platform",
    status: "In progress",
    value: "KES 86,000",
    progress: 68,
    color: "#0b78b7",
  },
  {
    client: "Mhengagee Media",
    project: "Media website",
    status: "Review needed",
    value: "KES 64,000",
    progress: 91,
    color: "#8a5cf6",
  },
  {
    client: "Soltec Electric",
    project: "Business website",
    status: "Planning",
    value: "KES 42,000",
    progress: 18,
    color: "#d58a22",
  },
  {
    client: "NTCOGK",
    project: "Event registration",
    status: "In progress",
    value: "KES 52,000",
    progress: 54,
    color: "#26834b",
  },
];

export const quoteRequests = [
  {
    client: "Grace Wanjiku",
    service: "Mobile app development",
    received: "Today, 09:42",
    budget: "KES 40k - 50k",
    status: "New",
  },
  {
    client: "Mwangaza Foundation",
    service: "Custom software",
    received: "Yesterday",
    budget: "Above KES 50k",
    status: "Reviewing",
  },
  {
    client: "David Otieno",
    service: "Digital marketing",
    received: "Sep 19, 2026",
    budget: "KES 20k - 30k",
    status: "Contacted",
  },
];

import type { Metadata } from "next";
import SponsorDashboardClient from "./SponsorDashboardClient";

export const metadata: Metadata = {
  title: "Sponsor Dashboard | BountiFi",
  description:
    "Track spending, active bounties, and escrowed budget across the repositories you fund.",
};

export default function SponsorDashboardPage() {
  return <SponsorDashboardClient />;
}

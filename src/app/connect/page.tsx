import type { Metadata } from "next";
import { ConnectPanel } from "./ConnectPanel";

const connectDescription =
  "Connect GitHub and Stellar accounts to fund issues, claim bounties, and receive BountiFi payouts.";

export const metadata: Metadata = {
  title: "Connect | BountiFi",
  description: connectDescription,
  openGraph: {
    title: "Connect | BountiFi",
    description: connectDescription,
    url: "/connect",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect | BountiFi",
    description: connectDescription,
  },
};

export default function ConnectPage() {
  return <ConnectPanel />;
}

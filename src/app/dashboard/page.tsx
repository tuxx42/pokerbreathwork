import { auth } from "@/lib/auth";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default async function DashboardPage() {
  const session = await auth();
  // Middleware guarantees session exists and user isPaid

  const firstName = session?.user.name?.split(" ")[0] ?? "there";

  return (
    <>
      <Nav isSignedIn isPaid />
      <div className="dashboard-page">
        <span className="label">Members Area</span>
        <h1>Welcome, {firstName}.</h1>
        <p className="welcome-sub">Book your next session below.</p>
        <CalendlyEmbed url={process.env.NEXT_PUBLIC_CALENDLY_URL ?? ""} />
      </div>
      <Footer />
    </>
  );
}

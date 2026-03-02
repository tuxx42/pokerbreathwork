import { auth, signIn } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import ApplyForm from "@/components/ApplyForm";

export default async function ApplyPage() {
  const session = await auth();

  // Not signed in — show Google sign-in prompt
  if (!session) {
    return (
      <>
        <Nav />
        <div className="apply-page">
          <span className="label">Apply</span>
          <h1>Apply for Regulate</h1>
          <p className="sub">
            Sign in with Google to submit your application.
          </p>
          <div className="signin-prompt">
            <p>You&apos;ll need to sign in to apply.</p>
            <form
              action={async () => {
                "use server";
                await signIn("google", { redirectTo: "/apply" });
              }}
            >
              <button type="submit" className="btn btn--large">
                Sign in with Google →
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Check if application already exists
  const application = await prisma.application.findUnique({
    where: { userId: session.user.id },
  });

  return (
    <>
      <Nav
        isSignedIn
        isPaid={session.user.isPaid}
        hasApplication={!!application}
      />
      <div className="apply-page">
        <span className="label">Apply</span>
        <h1>Apply for Regulate</h1>

        {application ? (
          <>
            <p className="sub">
              Your application has been received. The coach will review it
              shortly.
            </p>
            <div className="status-box">
              <span className="status-label">Application status</span>
              <span className={`status-badge ${application.status}`}>
                {application.status}
              </span>
              {application.isPaid && (
                <div style={{ marginTop: "1rem" }}>
                  <span
                    className="status-badge APPROVED"
                    style={{ marginLeft: 0 }}
                  >
                    ✓ Payment confirmed — check your dashboard
                  </span>
                </div>
              )}
            </div>
            {application.isPaid && (
              <a href="/dashboard" className="btn btn--large">
                Go to Dashboard →
              </a>
            )}
          </>
        ) : (
          <>
            <p className="sub">
              Tell us about your game. Spots are limited — this is a quick
              application, not a commitment.
            </p>
            <ApplyForm userEmail={session.user.email ?? ""} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

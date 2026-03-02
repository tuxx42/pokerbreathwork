import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import AdminRow from "@/components/AdminRow";

export default async function AdminPage() {
  const session = await auth();
  // Middleware guarantees session + admin email

  const applications = await prisma.application.findMany({
    orderBy: { submittedAt: "desc" },
    include: { user: { select: { email: true } } },
  });

  return (
    <>
      <Nav isSignedIn isPaid={session?.user.isPaid} />
      <div className="admin-page">
        <span className="label">Admin</span>
        <h1>Applications</h1>
        <p className="admin-meta">
          {applications.length} total · signed in as {session?.user.email}
        </p>

        {applications.length === 0 ? (
          <div className="empty-state">No applications yet.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Applicant</th>
                <th>Stakes</th>
                <th>Message</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Submitted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app: typeof applications[number]) => (
                <AdminRow
                  key={app.id}
                  id={app.id}
                  name={app.name}
                  email={app.email}
                  stakes={app.stakes}
                  message={app.message}
                  status={app.status}
                  isPaid={app.isPaid}
                  submittedAt={app.submittedAt.toISOString()}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </>
  );
}

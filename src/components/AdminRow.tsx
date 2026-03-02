"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface AdminRowProps {
  id: string;
  name: string;
  email: string;
  stakes: string;
  message: string;
  status: string;
  isPaid: boolean;
  submittedAt: string;
}

export default function AdminRow({
  id,
  name,
  email,
  stakes,
  message,
  status,
  isPaid,
  submittedAt,
}: AdminRowProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function post(path: string, body: object) {
    setLoading(true);
    await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setLoading(false);
    router.refresh();
  }

  const date = new Date(submittedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <tr>
      <td>
        <div style={{ fontWeight: 500 }}>{name}</div>
        <div style={{ color: "var(--muted)", fontSize: "0.8rem" }}>{email}</div>
      </td>
      <td>{stakes}</td>
      <td className="message-cell">{message}</td>
      <td>
        <span className={`status-badge ${status}`}>{status}</span>
      </td>
      <td>
        {isPaid ? (
          <span style={{ color: "var(--accent)", fontFamily: "DM Mono, monospace", fontSize: "11px" }}>
            ✓ Paid
          </span>
        ) : (
          <span style={{ color: "var(--muted)", fontFamily: "DM Mono, monospace", fontSize: "11px" }}>
            Unpaid
          </span>
        )}
      </td>
      <td style={{ color: "var(--muted)", fontFamily: "DM Mono, monospace", fontSize: "11px" }}>
        {date}
      </td>
      <td>
        <div className="admin-actions">
          {status !== "APPROVED" && (
            <button
              className="btn--admin approve"
              disabled={loading}
              onClick={() =>
                post("/api/admin/update-status", { id, status: "APPROVED" })
              }
            >
              Approve
            </button>
          )}
          {status !== "REJECTED" && (
            <button
              className="btn--admin reject"
              disabled={loading}
              onClick={() =>
                post("/api/admin/update-status", { id, status: "REJECTED" })
              }
            >
              Reject
            </button>
          )}
          {!isPaid ? (
            <button
              className="btn--admin paid"
              disabled={loading}
              onClick={() => post("/api/admin/toggle-paid", { id, isPaid: true })}
            >
              Mark Paid
            </button>
          ) : (
            <button
              className="btn--admin unpaid"
              disabled={loading}
              onClick={() => post("/api/admin/toggle-paid", { id, isPaid: false })}
            >
              Mark Unpaid
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}

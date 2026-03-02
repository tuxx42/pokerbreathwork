"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApplyForm({ userEmail }: { userEmail: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      stakes: (form.elements.namedItem("stakes") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (!res.ok) {
      const json = await res.json().catch(() => ({}));
      setError(json.error ?? "Something went wrong. Please try again.");
      return;
    }

    setSuccess(true);
    router.refresh();
  }

  if (success) {
    return (
      <div className="form-success">
        <span className="label">Application received</span>
        <p>
          Thanks for applying. The coach will review your application and be in
          touch within a few days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          defaultValue={userEmail}
        />
      </div>

      <div className="form-group">
        <label htmlFor="stakes">Stakes you play</label>
        <select id="stakes" name="stakes" required>
          <option value="">Select your stakes</option>
          <option value="NL100-NL500">NL100–NL500 / $1/$2–$2/$5</option>
          <option value="NL500-NL2500">NL500–NL2500 / $5/$10–$10/$25</option>
          <option value="NL2500+">NL2500+ / $25/$50+</option>
          <option value="MTT-500">Tournaments $500–$2k buy-in</option>
          <option value="MTT-2000+">Tournaments $2k+ buy-in</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">What&apos;s the main challenge you want to solve?</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Describe what's been happening at the table — when pressure hits, what does it look like for you?"
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <button
        type="submit"
        className="btn btn--large"
        disabled={loading}
        style={{ marginTop: "1.5rem" }}
      >
        {loading ? "Sending..." : "Submit Application →"}
      </button>
    </form>
  );
}

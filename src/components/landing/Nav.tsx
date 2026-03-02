import Link from "next/link";

interface NavProps {
  isPaid?: boolean;
  hasApplication?: boolean;
  isSignedIn?: boolean;
}

export default function Nav({ isPaid, hasApplication, isSignedIn }: NavProps) {
  let ctaHref = "/apply";
  let ctaLabel = "Apply Now";

  if (isSignedIn && isPaid) {
    ctaHref = "/dashboard";
    ctaLabel = "Dashboard";
  } else if (isSignedIn && hasApplication) {
    ctaHref = "/apply";
    ctaLabel = "Application Pending";
  }

  return (
    <nav>
      <Link href="/" className="nav-logo">
        Regulate
      </Link>
      <Link href={ctaHref} className="btn">
        {ctaLabel}
      </Link>
    </nav>
  );
}

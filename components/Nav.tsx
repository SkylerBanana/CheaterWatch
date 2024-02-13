import AuthButton from "./AuthButton";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <Link href="/my-list">
          <p>My List</p>
        </Link>
        <Link href="/ban-stats">
          <p>Ban Stats</p>
        </Link>
        <AuthButton />
      </div>
    </nav>
  );
}

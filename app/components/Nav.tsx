import AuthButton from "./AuthButton";
import Link from "next/link";
export default async function Nav() {
  return (
    <nav className="w-full flex  justify-center border-b border-b-foreground/10 bg-black ">
      <div className="w-full max-w-4xl flex justify-between items-end pl-2 pr-2 text-sm">
        <Link href="/my-list">
          <div className=" hover:border-blue-700 border-transparent border-b-2 text-lg">
            My List
          </div>
        </Link>

        <Link href="/ban-stats">
          <div className=" hover:border-blue-700 border-transparent border-b-2 text-lg">
            Ban Stats
          </div>
        </Link>
        <AuthButton />
      </div>
    </nav>
  );
}

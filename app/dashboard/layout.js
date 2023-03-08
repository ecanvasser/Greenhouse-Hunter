import Link from "next/link";

export const metadata = {
    title: "Dashboard",
  };

export default function layout({ children }) {
  return (
    <>
      <nav className="flex justify-between py-6 px-8 text-white bg-black">
        <div>Greenhouse Hunter</div>
        <ul className="flex gap-6">
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>
      </nav>
      {children}
    </>
  );
}

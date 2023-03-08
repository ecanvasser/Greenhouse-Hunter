import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <main className="text-2xl flex flex-col items-center justify-center gap-24 h-screen bg-black text-white">
      HomePage
      <Link href="/dashboard" className="text-lg text-black bg-white rounded px-2 py-1">Browse Companies</Link>
    </main>
  )
}
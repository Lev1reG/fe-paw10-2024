import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-200">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-2xl font-semibold text-black drop-shadow-md", font.className)}>
          Items Management System
        </h1>
      </div>
    </main>
  );
}

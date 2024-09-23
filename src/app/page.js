import { MainPage } from "@/components/main-page/main-page";

export const revalidate = 10;

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-200">
      <MainPage />
    </main>
  );
}

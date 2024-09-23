import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/all-page/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const NavBar = () => {
  return (
    <nav className={cn("fixed w-screen flex px-24 py-5 bg-black")}>
      <div className={cn("w-full flex flex-row items-center justify-between")}>
        <h1 className={cn("text-3xl text-white font-bold", font.className)}>
          PAW 10
        </h1>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Login
            </Button>
          </LoginButton>
        </div>
      </div>
    </nav>
  );
}

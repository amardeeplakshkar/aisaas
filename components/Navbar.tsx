import { Music2Icon, HamIcon, ScanLine, Music3, Podcast } from "lucide-react";
import { ROUTES } from "./constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SheetClose } from "./ui/sheet";
import Image from "next/image";
import Logo from "@/public/logo.png"

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="grid gap-2 p-1">
      <Link href={'/'} className='flex items-center justify-center gap-2 py-4'>
        <Image width={45} height={45} src={Logo} alt="logo"/>
        <h1 className='text-white text-2xl font-bold'>XenorAI</h1>
      </Link>
      {
        ROUTES.map((route) =>
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm group flex p-4 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-xl transition",
              pathname === route.href
                ? "text-white bg-white/10"
                : "text-zinc-400",
            )}
          >
            <div className="flex items-center flex-1">
              <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
              {route.label}
            </div>
          </Link>
        )}
    </div>
  );
}

export default Navbar;
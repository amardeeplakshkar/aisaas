import { ArrowRightIcon, MessageSquare } from "lucide-react";
import Link from "next/link";
import { TOOLS } from "@/components/constants";
import { cn } from "@/lib/utils";

const DashboardPage = () => {
  return (
    <>
      <div className="w-full py-8">
        <h2 className="text-center text-2xl font-bold">Explore the power of AI</h2>
        <p className='p-2 text-center text-muted-foreground text-xs'>Chat with the smartest AI - Experience the power of AI.</p>
        <div className='grid gap-2 md:p-12 p-4'>
          {
            TOOLS.map((tool)=>
              <Link key={tool.href} href={tool.href} className="hover:shadow-md w-full border-2 items-center flex justify-between p-4 rounded-xl">
            <div className="flex items-center">
              <div className={cn("bg-violet-700/10 text-violet-700 p-4 rounded-xl", tool.color, tool.bgColor)}>
                <tool.icon size={30} />
              </div>
              <p className="px-4 font-bold">
                {tool.label}
              </p>
            </div>
            <div><ArrowRightIcon/></div>
          </Link>
            )
          }
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
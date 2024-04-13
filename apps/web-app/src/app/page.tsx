import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/utils/authOptions";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ImageContainer from "@/components/ImageContainer";

export default async function LandingPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-center justify-center mx-auto gap-x-4 mt-48">
        <a href="https:twitter.com/skushagrasharma">
          <Badge variant="outline" className="tracking-tight border-indigo-300 bg-indigo-50 dark:bg-indigo-950 text-indigo-500 dark:text-indigo-300 text-sm font-medium">
            <TwitterLogoIcon />&nbsp; Follow @skushagrasharma on Twitter
          </Badge>
        </a>
        <div className="mt-3 text-center  text-5xl md:text-7xl font-bold tracking-tighter">
          Conversations made vibrant, connections made effortless.
        </div>

        <div className="mx-auto mt-5 max-w-screen-md text-center text-lg md:text-xl text-muted-foreground px-4">
          Connect one-on-one or dive into lively group chats in our intuitive platform.
        </div>

        <div className="mt-8 flex flex-row justify-center gap-x-5">
          <a href={`${session ? "/chat" : "/login"}`}><Button>Get Started</Button></a>
          <a href="https://github.com/skushagra9/ConvoSphere"> <Button variant={"outline"}><GitHubLogoIcon />&nbsp; Star On Github</Button></a>
        </div>
        <ImageContainer />
      </div >
    </div >
  );
}



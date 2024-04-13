"use client"
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function Footer() {
  const router = useRouter();
  const path = usePathname()

  if (path === "/login" || path === "/register") {
    return null
  }

  return (
    <div className="flex flex-row mx-auto w-full md:w-2/3 p-4 justify-between items-center mb-0">
      <span className="flex flex-row justify-center md:justify-start tracking-tighter">
        Made By Kushagra Sharma
      </span>
      <div className="flex flex-row items-center md:justify-end">
        <Button size={"icon"} variant={"ghost"} onClick={() => router.push("https://github.com/skushagra9")}>
          <GitHubLogoIcon />
        </Button>
        <Button size={"icon"} variant={"ghost"} onClick={() => router.push("https://twitter.com/skushagrasharma")}>
          <TwitterLogoIcon />
        </Button>
      </div>
    </div>
  );
}


import React from "react";
import { Info, Phone, Video } from "lucide-react";
import Link from "next/link";
import { Myavatar } from "../Avatar";
export const TopbarIcons = [{ icon: Info }];

export default function ChatTopbar({ name }: { name: string }) {
  return (
    <div className="w-full h-20 flex p-4 justify-between items-center border-b">
      <div className="flex items-center gap-2">
        <Myavatar />
        <div className="flex flex-col">
          <span className="font-medium">{name}</span>
          {/* <span className="text-xs">Active 2 mins ago</span> */}
        </div>
      </div>

      <div className="flex flex-row gap-x-3">
        {TopbarIcons.map((icon, index) => (
          <Link key={index} href="#">
            <icon.icon size={20} className="text-muted-foreground" />
          </Link>
        ))}
      </div>
    </div>
  );
}


import { cookies } from "next/headers";
import { ChatLayout } from "@/components/chat/chat-layout";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/utils/authOptions";
export default async function Home() {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const session = await getServerSession(authOptions);

  // if (!session || !session.user || !session.user.email) {
  //   redirect('/login')
  // }

  return (
    <main className="flex md:h-[calc(100dvh)] flex-col items-center justify-center py-8">
      <div className="z-10 border rounded-lg max-w-5xl w-full h-full text-sm lg:flex">
        <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
      </div>
    </main>
  );
}

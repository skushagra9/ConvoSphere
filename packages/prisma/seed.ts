import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.chat.upsert({
    where: {
      id: "ck4dv8cw00004la7j6z1kupwb",
    },
    update: {},
    create: {
      id: "ck4dv8cw00004la7j6z1kupwb",
      userId: "cluwhgrzi00007ylhwlg7oe0n",
      messages: {
        create: {
          id: "ck4dv8d0m0005la7jj0vz52vl",
          userIdConnection: "cluzc2djr0000avcdpnf9h37k",
          messages: [
            "Hi",
            "I am fine",
            "What about you",
            "Have you excercised today",
            "Great",
          ],
        },
      },
    },
  });

  // const bob = await prisma.user.upsert({
  //   where: { number: "9999999998" },
  //   update: {},
  //   create: {
  //     number: "9999999998",
  //     password: "bob",
  //     name: "bob",
  //     OnRampTransaction: {
  //       create: {
  //         startTime: new Date(),
  //         status: "Failure",
  //         amount: 2000,
  //         token: "123",
  //         provider: "HDFC Bank",
  //       },
  //     },
  //   },
  // });
  console.log({ alice });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

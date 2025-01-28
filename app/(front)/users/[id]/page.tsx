import db from "@/lib/database";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";

interface UserPageProps {
  params: { id: string };
}

const getUser = cache(async (id: string) => {
  return db.user.findUnique({
    where: { id },
    select: { id: true, name: true, email: true, image: true, createdAt: true },
  });
});

export async function generateStaticParams() {
  const users = await db.user.findMany();
  return users.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: UserPageProps) {
  const id = await params.id;
  const user = await getUser(id);
  return {
    title: user?.name || `User ${id}`,
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const id = await params.id;

  await new Promise((resolve) => setTimeout(resolve, 1500));

  const user = await getUser(id);

  if (!user) notFound();
  return (
    <div className="mx-3 my-10 flex flex-col items-center gap-3">
      {user.image && (
        <Image
          src={user.image}
          width={100}
          height={100}
          alt={user.name || "Profile Picture"}
          className="aspect-square rounded-full bg-background object-cover"
        />
      )}
      <h1 className="text-center text-xl font-bold">{user.name || "User"}</h1>
      <p className="text-muted-foreground">
        User since {new Date(user.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default UserPage;

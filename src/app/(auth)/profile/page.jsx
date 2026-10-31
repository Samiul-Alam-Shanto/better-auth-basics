import { auth } from "@/lib/auth";
import { Button, Card, CloseButton } from "@heroui/react";
// path to your Better Auth server instance
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  console.log(user);

  return (
    <Card className="w-full items-stretch md:flex-row">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
        <Image src={user.image} width={300} height={200} alt="Image" />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pe-8">{user.name}</Card.Title>
          <Card.Description>{user.email}</Card.Description>

          <Button className="w-full sm:w-auto">
            <Link href={"/update-user"}>Update User</Link>
          </Button>
        </Card.Header>
      </div>
    </Card>
  );
};

export default ProfilePage;

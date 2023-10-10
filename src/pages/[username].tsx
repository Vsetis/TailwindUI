import { useRouter } from "next/router";
import { useUser } from "~/utils/atoms";

export default function UserPage() {
  const [user, setUser] = useUser();

  const router = useRouter();

  if (!user) {
    return <>Loading...</>;
  }

  if (router.isReady && !user) {
    router.push("/");
  }

  if (router.isReady)
    return (
      <>
        <div className="flex items-center justify-center">{user!.username}</div>
      </>
    );
}

UserPage.layout = "dashboard";

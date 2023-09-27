import { api } from "~/utils/api";
import { useUser } from "~/utils/atoms";

export default function Home() {
  const [user, setUser] = useUser();
  const logoutMutation = api.auth.logout.useMutation({
    onSuccess: () => {
      setUser(null);
    },
  });

  return (
    <>
      <h1>{user?.username}</h1>
    </>
  );
}

Home.layout = "app";

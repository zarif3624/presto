import React, { useEffect } from "react";
//import DashboardPlaceholder from "./../components/DashboardPlaceholder";
import Tabs from "./../components/Tabs";
import { useAuth } from "./../util/auth.js";
import { useRouter } from "./../util/router.js";

function DashboardPage(props) {
  const auth = useAuth();
  const router = useRouter();

  // Redirect to /signin
  // if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push("/auth/signin");
    }
  }, [auth, router]);

  return (
    <div>
      <Tabs />

    

    {/* <DashboardPlaceholder
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Dashboard"
      subtitle="Dashboard components are coming to the Divjoy library soon. For now, you can implement a custom dashboard here after exporting your code."
    ></DashboardPlaceholder> */}
    </div>

  );
}

export default DashboardPage;

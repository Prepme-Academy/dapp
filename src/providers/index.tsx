"use client";

import useClientStore from "@/store/clientStore";
import { PrivyProvider } from "@privy-io/react-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const client = new QueryClient();

interface ProvidersProps {
  children: React.ReactNode;
}

const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID as string;

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  const { initializingState, setinitializingState } = useClientStore();

  useEffect(() => {
    setIsClient(true);
    setinitializingState(true);
  }, [initializingState, setinitializingState]);

  if (!isClient) {
    return null;
  }

  return (
    <QueryClientProvider client={client}>
      <PrivyProvider
        appId={appId}
        config={{
          appearance: {
            theme: "light",
            accentColor: "#676FFF",
            logo: "https://www.prepme.academy/images/logo-site.png",
          },
          loginMethods: [
            "email",
            "google",
            "apple",
            "discord",
            "twitter",
            "telegram",
            "wallet",
          ],
        }}
      >
        {children}
      </PrivyProvider>
    </QueryClientProvider>
  );
};

export default Providers;

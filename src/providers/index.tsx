"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PrivyProvider } from "@privy-io/react-auth";
import { useEffect, useState } from "react";

const client = new QueryClient();

interface ProvidersProps {
  children: React.ReactNode;
}

const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID as string;

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

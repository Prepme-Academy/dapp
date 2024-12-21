"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient();

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default Providers;

import React from "react";
import Providers from "@/providers";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}

export default layout;

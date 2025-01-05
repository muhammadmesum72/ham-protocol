"use client";
import { ThemeProvider } from "next-themes";
import { createAppKit } from "@reown/appkit/react";
import { WagmiProvider } from "wagmi";
// import { bsc } from "@reown/appkit/networks";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { bsc } from "viem/chains";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.reown.com
const projectId = "3293677cac106bf18eec1d4dbd185bfb";

// 2. Create a metadata object - optional
const metadata = {
  name: "Ham",
  description: "AppKit Example",
  url: "", // origin must match your domain & subdomain
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

// 3. Set the networks
// const networks = [bsc];

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks: [bsc],
  projectId,
  ssr: true,
});

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks: [bsc],
  projectId,
  metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
}

/**
 * Function to format a wallet address to the desired format
 * @param address - The original Ethereum wallet address
 * @returns The formatted wallet address
 */
export function formatWalletAddress(address: string): string {
  // Ensure the address is a string and starts with '0x'
  if (typeof address !== "string" || !address.startsWith("0x")) {
    throw new Error("Invalid wallet address format");
  }

  // Extract the first three characters and the last three characters
  const start = address.slice(0, 3); // "0xr"
  const end = address.slice(-3); // "657"

  // Return the formatted address
  return `${start}....${end}`;
}

export const dummyAddress="0x0000000000000000000000000000000000000000"
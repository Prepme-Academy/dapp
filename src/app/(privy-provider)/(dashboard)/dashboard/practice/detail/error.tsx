"use client";

import Link from "next/link";
import * as React from "react";

export default function Error({ error }: { error: Error; reset: () => void }) {
  React.useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div className="flex h-full min-h-screen w-full justify-center overflow-y-auto rounded-md bg-blue-50 p-4 py-10 text-center text-main-solid md:pb-[6.75rem] md:pt-20">
      <div className="flex flex-col items-center">
        <h2 className="mb-4 max-w-xs font-heading text-xl font-bold">
          There was an issue while loading this page.
        </h2>

        <div className="flex mb-8 gap-4">
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Reload
          </button>
          <Link href="/dashboard/practice">Go to dashboard</Link>
        </div>

        <div>
          <div className="mb-4 rounded-md p-2 px-4 text-sm text-blue-800/70 transition duration-300 hover:bg-blue-100">
            View technical details
          </div>

          <div className="mx-auto max-h-none max-w-xl text-blue-800/70">
            <p className="max-h-64 w-full overflow-auto break-all font-mono">
              {error.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

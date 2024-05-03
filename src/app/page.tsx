'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";

export default function Home() {
  const [url, setUrl] = useState(""); // State variable to hold URL

  const pathname = usePathname()
  const searchParams = useSearchParams()
 
  useEffect(() => {
    // Function to log URL at intervals of every 1 second
    const logURL = () => {
      const url = `${pathname}?${searchParams}`
      setUrl(url); // Update URL in state
      console.log("URL GOT FROM THE CAS AUTHENTICATION: ", url)
    };

    // Call logURL immediately
    logURL();

    // Set interval to call logURL every 1 second
    const intervalId = setInterval(logURL, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [pathname, searchParams]); // Add dependencies to trigger useEffect when these values change

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          TEST: {url}&nbsp; {/* Display URL */}
        </p>
      </div>
    </main>
  );
}

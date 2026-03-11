"use client";

import { useEffect, useState } from "react";
import Home from "./page/HomePage";
import Header from "./component/layout/header/Header";

const initialStatus = {
  label: "Checking backend",
  tone: "text-amber-300",
};

export default function HomePage() {
  const [apiStatus, setApiStatus] = useState(initialStatus);

  useEffect(() => {
    const controller = new AbortController();

    async function loadStatus() {
      try {
        const response = await fetch("/api/health", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Backend returned ${response.status}`);
        }

        const data = await response.json();

        setApiStatus({
          label: `${data.status} on ${data.service}`,
          tone: "text-emerald-300",
        });
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }

        setApiStatus({
          label: "Backend not reachable yet",
          tone: "text-rose-300",
        });
      }
    }

    loadStatus();

    return () => controller.abort();
  }, []);

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-09-21&sortBy=publishedAt&apiKey=405ca84febde4450b440abca015518ca") // API endpoint add karein
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error)); // error handling
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1>Car Data</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

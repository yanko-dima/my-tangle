import React from "react";

const Page = async ({ searchParams }: { searchParams: { query: string } }) => {
  const { query } = await searchParams;

  return <div>Search page for: {query}</div>;
};

export default Page;

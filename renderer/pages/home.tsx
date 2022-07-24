import React from "react";
import Head from "next/head";
import Cards from "./../components/ui/home/Cards";
import Chart from "../components/ui/home/Chart";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - D.fy</title>
      </Head>
      <div className="p-8">
        <div className="mb-6">
          <div className="text-3xl font-semibold mb-2">Welcome, Fallah</div>
          <span className="text-gray-500">
            Discover whatever you need easily
          </span>
        </div>
        <Cards />
        {window && <Chart type="bar" />}
      </div>
    </React.Fragment>
  );
}

export default Home;

import React from "react";
import Head from "next/head";
import Welcome from "../components/ui/Welcome";
import Cards from "../components/ui/home/Cards";
import Chart from "../components/ui/home/Chart";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - D.fy</title>
      </Head>
      <Welcome name="Fallah" />
      <Cards />
      <Chart type="bar" />
    </React.Fragment>
  );
}

export default Home;

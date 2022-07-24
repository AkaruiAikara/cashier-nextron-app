import React from "react";
import Head from "next/head";
import Welcome from "../../components/ui/Welcome";
import Search from "../../components/ui/products/Search";
import Categories from "../../components/ui/products/Categories";
import Products from "../../components/ui/products/Products";

const Product = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home - D.fy</title>
      </Head>
      <div className="flex flex-row justify-between items-center mb-12">
        <Welcome name="Fallah" />
        <Search />
      </div>
      <Categories />
      <Products />
    </React.Fragment>
  );
};

export default Product;

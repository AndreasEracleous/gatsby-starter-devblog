// root-wrapper.js
import React from "react";
import Layout from "./src/components/Layout";

export const rootWrapper = ({ element }) => {
  return <Layout>{element}</Layout>;
};

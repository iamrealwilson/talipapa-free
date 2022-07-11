import { ReactElement } from "react";

import { PageLayout } from "../../components";

// import { Grid } from "@mui/material";

import Banner from "./banner-carousel";

import ProductSection from "./product-section";

export const LandingPage = (): ReactElement => {
  return (
    <>
      <PageLayout>
        <>
          <Banner />
          <ProductSection />
        </>
      </PageLayout>
    </>
  );
};

export default LandingPage;

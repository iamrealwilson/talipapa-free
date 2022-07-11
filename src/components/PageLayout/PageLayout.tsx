import { ReactElement } from "react";

import { Navbar, Footer, CategoryTab } from "../../layout";

interface PageLayoutProps {
  children: ReactElement;
}

export const PageLayout = (props: PageLayoutProps): ReactElement => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <CategoryTab />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;

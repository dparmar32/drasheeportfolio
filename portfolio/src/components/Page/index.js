import React from "react";
import PageContent from "../PageContent";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";
import { capitalizeFirstLetter } from "../../utils/helpers";
/**
 * This function renders the page based on the current page
 * @returns A section with a heading and a PageContent component.
 */
function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about me":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;

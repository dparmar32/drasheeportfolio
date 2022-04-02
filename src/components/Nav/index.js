import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
/**
 * It takes in a list of pages and a function that sets the current page. It then loops through the
 * list of pages and renders a list item for each page. If the current page is the same as the page in
 * the list item, it sets the class of the list item to navActive
 * @param props - The props passed to the component.
 * @returns The Nav component is returning a nav element with a ul element inside of it. The ul element
 * has a list of li elements inside of it. Each li element has a span element inside of it. The span
 * element has the text of the page name.
 */
function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);
  return (
    <nav>
      <ul className="flex-row">
        {pages.map((Page) => (
          <li
            className={`mx-5 ${currentPage.name === Page.name && "navActive"}`}
            key={Page.name}
          >
            <span onClick={() => setCurrentPage(Page)}>
              {capitalizeFirstLetter(Page.name)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;

import React from "react";
/**
 * It takes in a single parameter, which is the children of the component, and returns a div
 * @param props - The props object is a JavaScript object that contains any data that you want to pass
 * down to the component.
 * @returns A div.
 */
const PageContent = (props) => {
  return <div>{props.children}</div>;
};
export default PageContent;

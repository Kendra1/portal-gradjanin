import React from "react";
// import { useSelector } from "react-redux";
// import { selectCurrentPDF } from "../../app/citizen/citizen.selectors";

export const XHTMLPage = () => {
  // const document = useSelector(selectCurrentPDF);
  const description = "<html><div>AQUI ESTOY</div></html>";
  return <div dangerouslySetInnerHTML={{ __html: description }} />;
  // return <div dangerouslySetInnerHTML={{ __html: document }} />;
};

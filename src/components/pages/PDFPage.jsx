import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentPDF } from "../../app/citizen/citizen.selectors";
import { Document, Page } from "react-pdf";

export const PDFPage = () => {
  const document = useSelector(selectCurrentPDF);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Document file={document} onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber} />
    </Document>
  );
};

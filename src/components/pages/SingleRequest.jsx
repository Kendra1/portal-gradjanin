import { Button } from "@material-ui/core";
import React, { useState, useMemo, useEffect } from "react";
import { XmlEditor } from "react-xml-editor";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { exportToXHTML, exportToPDF } from "../../app/citizen/citizen.actions";
import {
  selectCurrentPDF,
  selectCurrentXHTML,
} from "../../app/citizen/citizen.selectors";

export const SingleRequest = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState(localStorage.getItem("currentRequest"));
  const ref = useMemo(() => React.createRef(), []);

  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(state, "text/xml");
  const id = xmlDoc
    .getElementsByTagName("zah:dokument_zahtev")[0]
    .getAttribute("id");

  const pdfBytes = useSelector(selectCurrentPDF);
  const xhtmlBytes = useSelector(selectCurrentXHTML);

  useEffect(() => {
    if (pdfBytes) {
      const fileUrl = URL.createObjectURL(pdfBytes);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.setAttribute("style", "display: none");
      a.href = fileUrl;
      a.download = "Zahtev.pdf";
      a.click();
      window.URL.revokeObjectURL(fileUrl);
      a.remove();
    }
  }, [pdfBytes]);

  useEffect(() => {
    if (xhtmlBytes) {
      const file = new Blob([xhtmlBytes], { type: "application/html" });
      const fileUrl = URL.createObjectURL(file);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.setAttribute("style", "display: none");
      a.href = fileUrl;
      a.download = "Zahtev.html";
      a.click();
      window.URL.revokeObjectURL(fileUrl);
      a.remove();
    }
  }, [xhtmlBytes]);

  const handleExportToXHTML = () => {
    dispatch(exportToXHTML(id));
  };

  const handleExportToPDF = () => {
    dispatch(exportToPDF(id));
  };
  return (
    <>
      <XmlEditor docSpec={{}} ref={ref} xml={state} mode='laic' />
      {/* <Button onClick={handleExportToXHTML}>Export to XHTML</Button> */}
      <Button onClick={handleExportToPDF}>Export to PDF</Button>
      <Button onClick={handleExportToXHTML}>Export to XHTML</Button>
    </>
  );
};

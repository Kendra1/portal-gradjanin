import { Button } from "@material-ui/core";
import React, { useState, useMemo, useEffect } from "react";
import { XmlEditor } from "react-xml-editor";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  exportInformationPDF,
  exportInformationXHTML,
} from "../../app/official/official.action";
import {
  selectInformationXHTML,
  selectInformationPDF,
} from "../../app/official/official.selector";

export const SingleInformation = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState(
    localStorage.getItem("currentInformation")
  );
  const ref = useMemo(() => React.createRef(), []);

  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(state, "text/xml");
  const id = xmlDoc
    .getElementsByTagName("ob:obavestenje")[0]
    .getAttribute("id");

  const handleExportToXHTML = () => {
    dispatch(exportInformationXHTML(id));
  };

  const handleExportToPDF = () => {
    dispatch(exportInformationPDF(id));
  };

  const pdfBytes = useSelector(selectInformationPDF);
  const xhtmlBytes = useSelector(selectInformationXHTML);

  useEffect(() => {
    if (pdfBytes) {
      console.log("PDF BYTES EFFETCT", pdfBytes);
      const fileUrl = URL.createObjectURL(pdfBytes);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.setAttribute("style", "display: none");
      a.href = fileUrl;
      a.download = "Obavestenje.pdf";
      a.click();
      window.URL.revokeObjectURL(fileUrl);
      a.remove();
    }
  }, [pdfBytes]);

  useEffect(() => {
    if (xhtmlBytes) {
      console.log("PDF BYTES EFFETCT", xhtmlBytes);
      const file = new Blob([xhtmlBytes], { type: "application/html" });
      const fileUrl = URL.createObjectURL(file);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.setAttribute("style", "display: none");
      a.href = fileUrl;
      a.download = "Obavestenje.html";
      a.click();
      window.URL.revokeObjectURL(fileUrl);
      a.remove();
    }
  }, [xhtmlBytes]);

  return (
    <>
      <XmlEditor docSpec={{}} ref={ref} xml={state} mode='laic' />
      <Button onClick={handleExportToXHTML}>Export to XHTML</Button>
      <Button onClick={handleExportToPDF}>Export to PDF</Button>
      {/* <a href={`http://192.168.8.100:9001/api/obavestenje/generate/html/${id}`}>
        Export to XHTML
      </a> */}
      {/* <a href={`http://192.168.8.100:9001/api/zahtev/generate/pdf/${id}`}>
        Export to PDF
      </a> */}
    </>
  );
};

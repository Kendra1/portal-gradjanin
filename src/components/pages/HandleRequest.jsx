import { Button } from "@material-ui/core";
import React, { useState, useMemo, useEffect } from "react";
import { Util, XmlEditor } from "react-xml-editor";
import { useDispatch, useSelector } from "react-redux";
import { denyRequest } from "../../app/official/official.action";
import { useHistory } from "react-router-dom";
import { exportToPDF, exportToXHTML } from "../../app/citizen/citizen.actions";
import axios from "axios";
import {
  selectCurrentPDF,
  selectCurrentXHTML,
} from "../../app/citizen/citizen.selectors";

const docSpec = {
  elements: {
    item: {
      attributes: {
        label: {
          asker: Util.askString,
          menu: [
            {
              action: Util.deleteAttribute,
              caption: "Delete attribute",
            },
          ],
        },
        type: {
          asker: Util.askPicklist([
            {
              value: "short",
              caption: "short",
            },
            {
              value: "medium",
              caption: "medium",
            },
            "long",
          ]),
        },
      },
      menu: [
        {
          action: Util.newElementChild("<child />"),
          caption: "Append child <child />",
        },
        {
          action: Util.newAttribute({
            name: "label",
            value: "default value",
          }),
          caption: "Add attribute @label",
          hideIf: (xml, id) => {
            const element = Util.getXmlNode(xml, id);
            return (
              element && element.$ && typeof element.$.label !== "undefined"
            );
          },
        },
        {
          action: Util.deleteElement,
          caption: "Delete this <item />",
        },
        {
          action: Util.newElementBefore("<item />"),
          caption: "New <item /> before this",
        },
        {
          action: Util.newElementAfter("<item />"),
          caption: "New <item /> after this",
        },
        {
          action: Util.duplicateElement,
          caption: "Copy <item />",
        },
        {
          action: Util.moveElementUp,
          caption: "Move <item /> up",
          hideIf: (xml, id) => !Util.canMoveElementUp(xml, id),
        },
        {
          action: Util.moveElementDown,
          caption: "Move <item /> down",
          hideIf: (xml, id) => !Util.canMoveElementDown(xml, id),
        },
      ],
    },
  },
};

export const HandleRequest = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const state = useMemo(
    () => localStorage.getItem("currentRequest").toString(),
    []
  );

  const ref = useMemo(() => React.createRef(), []);

  const parser = useMemo(() => new DOMParser(), []);
  const stateObject = useMemo(() => parser.parseFromString(state, "text/xml"), [
    parser,
    state,
  ]);

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

  const status = stateObject
    .getElementsByTagName("zah:dokument_zahtev")[0]
    .getAttribute("status");

  const id = stateObject
    .getElementsByTagName("zah:dokument_zahtev")[0]
    .getAttribute("id");

  const handleExportToXHTML = () => {
    dispatch(exportToXHTML(id));
  };

  const handleExportToPDF = () => {
    dispatch(exportToPDF(id));
  };

  const respondToRequest = () => {
    localStorage.setItem(
      "requestID",
      JSON.stringify(
        stateObject
          .getElementsByTagName("zah:dokument_zahtev")[0]
          .getAttribute("id")
      )
    );
    history.push("respondToRequest");
  };

  const denyRequestHandler = () => {
    dispatch(
      denyRequest(
        stateObject
          .getElementsByTagName("zah:dokument_zahtev")[0]
          .getAttribute("id")
      )
    );
  };

  return (
    <>
      <XmlEditor docSpec={docSpec} ref={ref} xml={state} mode='laic' />
      <a href={`http://192.168.8.100:9001/api/zahtev/generate/html/${id}`}>
        Export to XHTML
      </a>
      <Button onClick={handleExportToPDF}>Export PDF</Button>
      <Button onClick={handleExportToXHTML}>Export XHTML</Button>
      <Button>Export RDF</Button>
      <Button>Export JSON</Button>
      {status === "PENDING" ? (
        <>
          <Button onClick={respondToRequest}>Accept request</Button>
          <Button onClick={denyRequestHandler}>Deny request</Button>
        </>
      ) : null}
    </>
  );
};

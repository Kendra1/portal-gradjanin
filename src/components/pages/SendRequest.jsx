import React, { useEffect, useState } from "react";
import { Builder, XmlEditor } from "react-xml-editor";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getRequestPattern,
  sendRequest,
} from "../../app/citizen/citizen.actions";
import { Util } from "react-xml-editor";
import { Button } from "@material-ui/core";
import { selectPattern } from "../../app/citizen/citizen.selectors";

export const docSpec = {
  elements: {
    "zah:zahtev": {
      attributes: {
        check: {
          asker: Util.askPicklist([
            {
              value: "da",
              caption: "da",
            },
            {
              value: "ne",
              caption: "ne",
            },
          ]),
        },
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
          // hideIf: (xml, id) => {
          //     const element = Util.getXmlNode(xml, id);
          //     return element && element.$ && typeof element.$.label !== 'undefined';
          // },
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
          // hideIf: (xml, id) => !Util.canMoveElementUp(xml, id),
        },
        {
          action: Util.moveElementDown,
          caption: "Move <item /> down",
          // hideIf: (xml, id) => !Util.canMoveElementDown(xml, id),
        },
      ],
    },
    "zah:nacin": {
      attributes: {
        check: {
          asker: Util.askPicklist([
            {
              value: "da",
              caption: "da",
            },
            {
              value: "ne",
              caption: "ne",
            },
          ]),
        },
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
          // hideIf: (xml, id) => {
          //     const element = Util.getXmlNode(xml, id);
          //     return element && element.$ && typeof element.$.label !== 'undefined';
          // },
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
          // hideIf: (xml, id) => !Util.canMoveElementUp(xml, id),
        },
        {
          action: Util.moveElementDown,
          caption: "Move <item /> down",
          // hideIf: (xml, id) => !Util.canMoveElementDown(xml, id),
        },
      ],
    },
  },
};

export const SendRequest = () => {
  const [ref, setRef] = useState(React.createRef());
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getRequestPattern());
  }, [dispatch]);

  const pattern = useSelector(selectPattern);

  const onClickHarvest = () => {
    if (ref.current) {
      const builder = new Builder({});
      const newState = ref.current.getXml();

      if (newState) {
        const newestState = builder.buildObject(newState);
        // setState(builder.buildObject(newState));
        dispatch(sendRequest(newestState));
      }
    }
    history.push("");
  };

  return pattern ? (
    <>
      <XmlEditor docSpec={docSpec} ref={ref} xml={pattern} mode='laic' />
      <Button onClick={onClickHarvest}>Send</Button>
    </>
  ) : null;
};

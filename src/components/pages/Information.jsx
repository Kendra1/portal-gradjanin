import React, { useCallback, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getInformation } from "../../app/official/official.action";
import { selectInformation } from "../../app/official/official.selector";

export const Information = () => {
  const history = useHistory();
  const loggedUser = JSON.parse(localStorage.getItem("logged_user"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInformation());
  }, [dispatch, loggedUser.role]);

  const information = useSelector(selectInformation, shallowEqual);

  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(information, "text/xml");
  const requests = useMemo(
    () => (xmlDoc ? xmlDoc.getElementsByTagName("ob:obavestenje") : []),
    [xmlDoc]
  );

  const handleSingleRequest = useCallback(
    (request) => {
      localStorage.setItem("currentInformation", request);
      history.push("singleInformation");
    },
    [history]
  );

  const mapXmlToString = useCallback((xmls) => {
    const array = [];
    for (let i = 0; i < xmls.length; i++) {
      const id = xmls[i].getAttribute("id");
      const element = {
        id: id,
        document: new XMLSerializer().serializeToString(xmls[i]),
      };
      array.push(element);
    }
    return array;
  }, []);

  return (
    <div>
      {mapXmlToString(requests).map((req) => (
        <div
          style={{
            padding: "20px",
            border: "1px solid grey",
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <span>{req.id}</span>
          <Button
            style={{
              display: "inline-block",
              width: "50%",
            }}
            onClick={() => +req.document}
          >
            Go to Information
          </Button>
        </div>
      ))}
    </div>
  );
};

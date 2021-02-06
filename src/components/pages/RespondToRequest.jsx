import React, { useState, useMemo, useEffect } from "react";
import { Builder, XmlEditor } from "react-xml-editor";
import { useDispatch, useSelector } from "react-redux";
import { docSpec } from "../../assets/data/docsSpec";
import {
  createResponse,
  acceptRequest,
  getInformationPattern,
} from "../../app/official/official.action";
import { Button } from "@material-ui/core";
import {
  selectCreation,
  selectPattern,
} from "../../app/official/official.selector";

export const RespondToRequest = () => {
  const [state, setState] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInformationPattern());
  }, [dispatch]);

  var parser = useMemo(() => new DOMParser(), []);
  const pattern = useSelector(selectPattern);

  var xmlDoc = useMemo(() => parser.parseFromString(pattern, "text/xml"), [
    parser,
    pattern,
  ]);

  const serializer = useMemo(() => new XMLSerializer(), []);

  const patternDoc = useMemo(
    () => xmlDoc.getElementsByTagName("ob:obavestenje")[0],
    [xmlDoc]
  );

  const [ref, setRef] = useState(React.createRef());
  const requestId = useMemo(
    () => JSON.stringify(localStorage.getItem("currentRequestID")),
    []
  );

  useEffect(() => {
    if (patternDoc && !state) {
      patternDoc.setAttribute(
        "zahtevId",
        requestId.slice(1, requestId.length - 1)
      );
      setState(serializer.serializeToString(patternDoc));
    }
  }, [patternDoc, requestId, serializer, state]);

  const creation = useSelector(selectCreation);

  const onClickHarvest = () => {
    if (ref.current) {
      const builder = new Builder({});
      const newState = ref.current.getXml();

      if (newState) {
        const newestState = builder.buildObject(newState);
        dispatch(createResponse(newestState));
      }
    }
  };

  const handleAcceptRequest = () => {
    dispatch(acceptRequest(creation));
  };

  return state ? (
    <>
      <XmlEditor docSpec={docSpec} ref={ref} xml={state} mode='laic' />
      <Button onClick={onClickHarvest}>Create response</Button>
      {creation ? (
        <Button onClick={handleAcceptRequest}>Send response</Button>
      ) : null}
    </>
  ) : null;
};

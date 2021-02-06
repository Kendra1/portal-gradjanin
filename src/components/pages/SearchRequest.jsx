import React, { useState, useMemo, useCallback } from "react";
import Search from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { selectSearchResults } from "../../app/official/official.selector";
import { searchRequests } from "../../app/official/official.action";

export const SearchRequest = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [search, setSearch] = useState("");

  const handleValueChange = (event) => {
    setSearch(event.target.value);
  };

  const submit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(searchRequests(search));
    },
    [dispatch, search]
  );

  const requestsState = useSelector(selectSearchResults);
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(requestsState, "text/xml");
  const requests = useMemo(
    () => (xmlDoc ? xmlDoc.getElementsByTagName("zah:dokument_zahtev") : []),
    [xmlDoc]
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

  const handleSingleRequest = useCallback(
    (request) => {
      localStorage.setItem("currentRequest", request);
      history.push("singleRequest");
    },
    [history]
  );

  return (
    <>
      <form onSubmit={submit}>
        <Grid item>
          <FormControl variant='outlined'>
            <InputLabel>Search parameter</InputLabel>
            <OutlinedInput
              type='Input'
              value={search}
              onChange={handleValueChange}
              startAdornment={
                <InputAdornment position='start'>
                  <Search />
                </InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <Grid item>
            <Button type='submit' variant='contained' color='secondary'>
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
      {requests ? (
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
                onClick={() => handleSingleRequest(req.document)}
              >
                Go to Request
              </Button>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

import React, { useState, useMemo, useCallback, useEffect } from "react";
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
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { selectAdvancedSearchResults } from "../../app/official/official.selector";
import { advancedSearchRequests } from "../../app/official/official.action";

export const AdvancedSearch = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [organVlasti, setOrganVlasti] = useState("");
  const [mestoOrganaVlasti, setMestoOrganaVlasti] = useState("");
  const [datumZahteva, setDatumZahteva] = useState("");
  const [imePodnosioca, setImePodnosioca] = useState("");
  const [mestoPodnosioca, setMestoPodnosioca] = useState("");
  const [orOperator, setOrOperator] = useState(false);

  const handleOrganVlastiChange = useCallback((event) => {
    setOrganVlasti(event.target.value);
  }, []);
  const handleMestoChange = useCallback((event) => {
    setMestoOrganaVlasti(event.target.value);
  }, []);
  const handleDatumChange = useCallback((event) => {
    setDatumZahteva(event.target.value);
  }, []);
  const handleImeChange = useCallback((event) => {
    setImePodnosioca(event.target.value);
  }, []);
  const handleMestoPodnosiocaChange = useCallback((event) => {
    setMestoPodnosioca(event.target.value);
  }, []);

  const handleOrChange = useCallback(() => {
    setOrOperator(!orOperator);
  }, [orOperator]);

  const submit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(
        advancedSearchRequests({
          organVlasti: organVlasti,
          mestoOrganaVlasti: mestoOrganaVlasti,
          datumZahteva: datumZahteva,
          imePodnosioca: imePodnosioca,
          mestoPodnosioca: mestoPodnosioca,
          orOperator: orOperator,
        })
      );
    },
    [
      datumZahteva,
      dispatch,
      imePodnosioca,
      mestoOrganaVlasti,
      mestoPodnosioca,
      orOperator,
      organVlasti,
    ]
  );

  const requestsState = useSelector(selectAdvancedSearchResults);

  var parser = useMemo(() => new DOMParser(), []);
  var xmlDoc = useMemo(
    () => parser.parseFromString(requestsState, "text/xml"),
    [parser, requestsState]
  );
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
            <InputLabel>Organ vlasti</InputLabel>
            <OutlinedInput
              type='Input'
              value={organVlasti}
              onChange={handleOrganVlastiChange}
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
          <FormControl variant='outlined'>
            <InputLabel>Mesto organa vlasti</InputLabel>
            <OutlinedInput
              type='Input'
              value={mestoOrganaVlasti}
              onChange={handleMestoChange}
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
          <FormControl variant='outlined'>
            <InputLabel>Datum podnosenja zahteva</InputLabel>
            <OutlinedInput
              type='Input'
              value={datumZahteva}
              onChange={handleDatumChange}
              placeholder='22/10/2016'
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
          <FormControl variant='outlined'>
            <InputLabel>Ime podnosioca</InputLabel>
            <OutlinedInput
              type='Input'
              value={imePodnosioca}
              onChange={handleImeChange}
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
          <FormControl variant='outlined'>
            <InputLabel>Mesto podnosioca</InputLabel>
            <OutlinedInput
              type='Input'
              value={mestoPodnosioca}
              onChange={handleMestoPodnosiocaChange}
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
          <FormControlLabel
            control={
              <Checkbox
                checked={orOperator}
                onChange={handleOrChange}
                name='checkedB'
                color='primary'
              />
            }
            label='ILI'
          />
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

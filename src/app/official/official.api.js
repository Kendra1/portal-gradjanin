export const getRequestsAPI = () => ({
  uri: `/api/zahtev/all`,
  method: "get",
});

export const getInformationAPI = () => ({
  uri: `/api/obavestenje/all`,
  method: "get",
});

export const getInformationPatternAPI = () => ({
  uri: `/api/obavestenje/parse/object`,
  method: "get",
});

export const createResponseAPI = (data) => ({
  uri: `/api/obavestenje`,
  method: "post",
  data,
});

export const acceptRequestAPI = (data) => ({
  uri: "/api/obavestenje/sendResponse",
  method: "post",
  data,
});

export const denyRequestAPI = (id) => ({
  uri: `/api/zahtev/reject/${id}`,
  method: "post",
});

export const exportInformationToXTHMLAPI = (id) => ({
  uri: `/api/obavestenje/generate/html/${id}`,
  method: "get",
});

export const exportInformationPDFAPI = (id) => ({
  uri: `/api/obavestenje/generate/pdf/${id}`,
  method: "get",
});

export const searchResultsAPI = (param) => ({
  uri: `/api/zahtev/search/${param}`,
  method: "get",
});

export const advancedSearchResultsAPI = (body) => ({
  uri: `/api/zahtev/advancedSearch`,
  method: "post",
  data: body,
});

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

export const exportInformationToXTHMLAPI = (data) => ({
  uri: "/exportXHTML",
  method: "post",
  data,
});

export const exportInformationPDFAPI = (data) => ({
  uri: "/exportPDF",
  method: "post",
  data,
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

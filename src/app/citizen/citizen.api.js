export const sendRequestAPI = (request) => ({
  uri: `/api/zahtev`,
  method: "post",
  data: request,
});

export const getRequestPatternAPI = () => ({
  uri: `/api/zahtev/parse/object`,
  method: "get",
});

export const getMyRequestsAPI = () => ({
  uri: "/api/zahtev/all/userId",
  method: "get",
});

export const getMyInformationAPI = () => ({
  uri: "/api/obavestenje/all/userId",
  method: "get",
});

export const exportToXHTMLAPI = (id) => ({
  uri: `/api/zahtev/generate/html/${id}`,
  method: "get",
});

export const exportToPDFAPI = (id) => ({
  uri: `api/zahtev/generate/pdf/${id}`,
  method: "get",
});

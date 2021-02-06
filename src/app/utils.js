export const transformToString = (document) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(document, "text/xml");
  const xmlDocStr = new XMLSerializer().serializeToString(xmlDoc);
  return xmlDocStr;
};

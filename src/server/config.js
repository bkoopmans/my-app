const config = {
    endpoint: "https://my-app-db.documents.azure.com:443/",
    key: "",
    databaseId: "Dives",
    containerId: "MyCollection",
    partitionKey: { kind: "Hash", paths: ["/location"] }
  };
  
  module.exports = config;
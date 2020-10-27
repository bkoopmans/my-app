const config = {
    endpoint: "https://my-app-db.documents.azure.com:443/",
    key: "IeB85Lz5EzFchGyG7izHzn1sv6jRsVCfBZWfDFSfXO71lV9shGDeHVePyrRpDRkng891Ba4aRjRw3rk2uXdlFw==",
    databaseId: "Dives",
    containerId: "MyCollection",
    partitionKey: { kind: "Hash", paths: ["/location"] }
  };
  
  module.exports = config;
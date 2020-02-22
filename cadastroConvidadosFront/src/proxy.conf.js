const proxy = [
  {
    "/convidados/**": {
      "target": "http://localhost:8080",
      "secure": false,
      "pathRewrite": {"^/convidados" : ""}
    }
  }
  ];
  module.exports = proxy;
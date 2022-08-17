const externals = {
  'rxjs': 'rxjs',
  'rxjs/operators': 'rxjs.operators',
  "redux": "Redux",
  "handlebars": "Handlebars",
  "dexie": "Dexie",
  "uuid": "uuid",
  "handlebars": "Handlebars",
  "async": "async",
  "lodash": "_",
  "loadjs": "loadjs",
  "socket.io-client": "io",
  "notyf": "Notyf",
  "immer": "immer",
  "rfc6902": "rfc6902"
};

module.exports = {
  output: {
    uniqueName: 'ScUpdatedInfoJsonp'
  },
  externals: externals
};

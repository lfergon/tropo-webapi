Package.describe({
  summary: 'Tropo package for meteor.js (https://github.com/tropo/tropo-webapi-node)'
});

Package.on_use(function (api, where) {
  api.add_files('tropo-webapi.js', 'server');
	if (api.export) {
		api.export("Tropo");
  }
});

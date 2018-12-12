const UniversalHotReload = require('universal-hot-reload').default;

UniversalHotReload(require('../../webpack.config.server.dev.js'), require('../../webpack.config.js'));

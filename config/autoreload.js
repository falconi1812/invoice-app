module.exports.autoreload = {
    active: true,
    usePolling: true,
    dirs: [
      "api/models",
      "api/controllers",
      "api/services",
      "config/locales",
      "config"
    ],
    ignored: [
      // Ignore all files with .ts extension
      "**.ts"
    ]
  };
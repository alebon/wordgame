module.exports = {
  files: {

    javascripts: {
      entryPoints: {
        'app/initialize.js': 'bundle.js'
      },
      joinTo: {
        'vendor.js': /^(?!app)/
      }
    },

    stylesheets: {
      joinTo: 'app.css'
    },

    templates: {
      joinTo: {
        'templates.js': /^app/
      }
    }
  },

  plugins: {
    babel: { presets: ['es2015'] },
    angular_templates: {
      module: 'wordgame-templates'
    }
  },
  npm: {
    globals: { humanizeDuration: "humanize-duration", moment: "moment" }
  }
};

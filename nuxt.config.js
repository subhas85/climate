var glob = require('glob');
var path = require('path');

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.


var dynamicRoutes = getDynamicPaths({
  '/blog': 'blog/posts/*.json',
  '/blog2': 'blog2/posts/*.json'
});


module.exports = {
  /*
  ** Headers of the page
  */
 head: {
  title: 'Climate Control Trinidad',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Nuxt.js project' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900' },
    { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
    { rel: 'stylesheet', href: '/css/bootstrap-theme.css' },
    { rel: 'stylesheet', href: '/css/font-awesome.min.css' },
    { rel: 'stylesheet', href: '/css/select2.css' },
    { rel: 'stylesheet', href: '/css/pages.css' },
    { rel: 'stylesheet', href: '/css/styles.css' }
  ],
  script: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
  ]
}, 
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Route config for pre-rendering
  */
 
  generate: {
    routes: dynamicRoutes
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}

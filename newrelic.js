/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['Is My Baby Still Breathing'],
  /**
   * Your New Relic license key.
   */
  license_key: process.env.NRLICENSE,
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info'
  },
  browser_monitoring: {

    /**
     * Enable browser monitoring header generation.
     *
     * This does not auto-instrument, rather it enables the agent to generate headers.
     * The newrelic module can generate the appropriate <script> header, but you must
     * inject the header yourself, or use a module that does so.
     *
     * Usage:
     *
     *     var newrelic = require('newrelic');
     *
     *     router.get('/', function (req, res) {
     *       var header = newrelic.getBrowserTimingHeader();
     *       res.write(header)
     *       // write the rest of the page
     *     });
     *
     * This generates the <script>...</script> header necessary for Browser Monitoring
     * This script must be manually injected into your templates, as high as possible
     * in the header, but _after_ any X-UA-COMPATIBLE HTTP-EQUIV meta tags.
     * Otherwise you may hurt IE!
     *
     * This method must be called _during_ a transaction, and must be called every
     * time you want to generate the headers.
     *
     * Do *not* reuse the headers between users, or even between requests.
     *
     * @env NEW_RELIC_BROWSER_MONITOR_ENABLE
     */
    enable: true,

    /**
     * Request un-minified sources from the server.
     *
     * @env NEW_RELIC_BROWSER_MONITOR_DEBUG
     */
    debug: false
  }
}

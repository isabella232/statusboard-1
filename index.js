'use strict'
const path = require('path')
const statusboard = require('@pkgjs/statusboard')

module.exports = async (c) => {
  return statusboard(await config(c))
}

const config = module.exports.config = async (c = {}) => {
  const buildDir = path.join(__dirname, 'build')

  return Object.assign({
    // Status Board Config
    db: path.join(buildDir, 'data', 'data.db'),
    baseUrl: '/statusboard/',
    outputDirectory: buildDir,

    // Project configs
    title: 'Express',
    description: '',

    issueTags: {
      topPriority: 'top priority',
      goodFirstIssue: 'good first issue',
      helpWanted: 'help wanted',
      discuss: 'discuss'
    },

    projects: [
      'expressjs/express',
      'expressjs/cors',
      'expressjs/morgan',
      'expressjs/response-time',
      'expressjs/session',
      'expressjs/multer',
      'expressjs/body-parser',
      'expressjs/compression',
      'expressjs/serve-static',
      'expressjs/errorhandler',
      'expressjs/serve-index',
      'expressjs/csurf',
      'expressjs/timeout',
      'expressjs/flash',
      'expressjs/vhost',

      'pillarjs/router',
      'pillarjs/cookies',
      'pillarjs/send',
      'pillarjs/finalhandler',
      'pillarjs/path-to-regexp',

      'jshttp/cookie',
      'jshttp/fresh',
      'jshttp/content-disposition',
      'jshttp/mime-db',
      'jshttp/media-typer',
      'jshttp/range-parser',
      'jshttp/type-is',
      'jshttp/accepts',
      'jshttp/negotiator',
      'jshttp/mime-types',
      'jshttp/compressible',
      'jshttp/content-type',
      'jshttp/http-errors',
      'jshttp/proxy-addr',
      'jshttp/etag',
      'jshttp/forwarded',
      'jshttp/on-finished',
      'jshttp/on-headers',
      'jshttp/vary',
      'jshttp/basic-auth',
      'jshttp/methods',
      'jshttp/statuses'
    ],

    teams: {
      technicalCommitee: [{
        name: 'Doug Wilson',
        github: 'dougwilson',
        npm: 'dougwilson',
        twitter: 'blipsofadoug',
        email: 'doug@somethingdoug.com'
      }, {
        name: 'Jonathan Ong',
        github: 'jonathanong',
        npm: 'jongleberry',
        twitter: 'jongleberry',
        email: 'me@jongleberry.com',
        avatar: '6e33cc0412b61cc01daac23c8989003c'
      }, {
        name: 'Jeremiah Senkpiel',
        github: 'fishrock123',
        npm: 'fishrock123',
        twitter: 'fishrock123',
        email: 'fishrock123@rocketmail.com'
      }, {
        name: 'Alex Kocharin',
        github: 'rlidwka',
        npm: 'rlidwka',
        twitter: 'rlidwka',
        email: 'alex@kocharin.ru'
      }, {
        name: 'Linus Unnebäck',
        github: 'LinusU',
        npm: 'linusu',
        twitter: 'LinusU',
        email: 'linus@folkdatorn.se'
      }, {
        name: 'Wes Todd',
        github: 'wesleytodd',
        npm: 'wesleytodd',
        twitter: 'wesleytodd',
        email: 'wes@wesleytodd.com'
      }]
    }
  }, c)
}

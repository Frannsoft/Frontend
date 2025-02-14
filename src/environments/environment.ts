// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mocking: false,
  baseUrl: 'https://localhost:5001',
  authentication: {
    authUrl: 'http://localhost:5000',
    callbackUrl: 'http://localhost:4200/auth-callback',
    redirectUrl: 'http://localhost:4200/',
    clientId: 'fightcore_dev'
  },
  // TODO Move this to a possible environment.json
  links: {
    discord: 'https://discord.gg/CVqDy6c',
    github: 'https://github.com/fightcore',
    dockerhub: 'https://cloud.docker.com/u/fightcore/repository/list',
    kofi: 'https://ko-fi.com/bartdebever',
    twitter: null
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

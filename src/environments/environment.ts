// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  base_url: `http://ws.audioscrobbler.com/2.0/`,
  api_key: `&api_key=a12259621990625ffd4cd961783ffe84&format=json`,
  worldwide: `?method=chart.gettoptracks&page=1&limit=50`,
  country: `?method=geo.gettoptracks&page=2&limit=100&country=`,
  youtubeLink: `https://www.googleapis.com/youtube/v3/search/?key=AIzaSyBTCzCUnHOXEhEFdxiuVOkzX0RRul_FWK8&part=snippet&q=`,
  youtubeLink2: `&maxResults=1`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


export const environment = {
  production: true,
  base_url: `http://ws.audioscrobbler.com/2.0/`,
  api_key: `&api_key=a12259621990625ffd4cd961783ffe84&format=json`,
  worldwide: `?method=chart.gettoptracks&page=1&limit=50`,
  country: `?method=geo.gettoptracks&page=2&limit=100&country=`,
  youtubeLink: `https://www.googleapis.com/youtube/v3/search/?key=AIzaSyBTCzCUnHOXEhEFdxiuVOkzX0RRul_FWK8&part=snippet&q=`,
  youtubeLink2: `&maxResults=1`
};

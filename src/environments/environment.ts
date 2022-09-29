// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const googleLogoSearch :string="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";

export const apiKey :string="fc97a23184msha5b88cf00795813p14b9c3jsn46a00e7ca6ed";

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1/"

export const SearchUrl:string = `${baseUrl}search/`
export const ImageUrl:string = `${baseUrl}image/`
export const videoUrl:string = `${baseUrl}video/`
export const NewsUrl:string = `${baseUrl}news/`




/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

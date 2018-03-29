// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCrLHvvyPjqCEBHRKnpDWFrgNenkj-kQ6I",
    authDomain: "registrationcardbasedemo.firebaseapp.com",
    databaseURL: "https://registrationcardbasedemo.firebaseio.com",
    projectId: "registrationcardbasedemo",
    storageBucket: "registrationcardbasedemo.appspot.com",
    messagingSenderId: "994162641485"
  }
};

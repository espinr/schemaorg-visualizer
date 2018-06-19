export function configLogProvider ($logProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);
}

export function configThemingProvider ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange');
}

export const keys = {
  googleKey: 'AIzaSyAQhRbXXRPGPdnBVkZOJRTFVG4cq6tHbkg', // key for Google Maps
  mlabKey: 'Qf0_sBJlCJOmF1LfKw5zjVUKr6aU3KWR', // key for mLab
  mlabDbName: 'opentrack-ld-viz' // database name on mLab
};

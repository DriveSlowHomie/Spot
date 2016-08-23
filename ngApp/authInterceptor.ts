namespace app {
  angular.module('SpotApp').factory('AuthInterceptor', function($window){
    return {
      request: function(config) {
        config.header = config.header || {};
        if($window.localStorage.getItem('token')){
          config.headers.Authorization = 'Bearer' + $window.localStorage.getItem('token')
        }
        return config;
      }
    }
  })
}

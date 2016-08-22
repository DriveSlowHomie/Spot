var SpotApp;
(function (SpotApp) {
    var Services;
    (function (Services) {
        var GeolocationService = (function () {
            function GeolocationService($resource) {
                this.$resource = $resource;
                this.GeolocationResource = $resource('/api/route/addLocation');
            }
            GeolocationService.prototype.create = function (spot) {
                return this.GeolocationResource.save(spot).$promise;
            };
            GeolocationService.prototype.getAll = function () {
                return this.GeolocationResource.query();
            };
            return GeolocationService;
        }());
        Services.GeolocationService = GeolocationService;
        var UserService = (function () {
            function UserService($window, $resource) {
                this.$window = $window;
                this.$resource = $resource;
                this.status = {
                    _id: null,
                    email: null,
                    role: null
                };
                this.RegisterResource = $resource('/api/users/register');
                this.LoginResource = $resource('api/users/login');
            }
            UserService.prototype.register = function (user) {
                var _this = this;
                return this.RegisterResource.save(user).then(function (res) {
                    _this.setToken(res.data['token']);
                    _this.setUser();
                }).$promise;
            };
            UserService.prototype.login = function (user) {
                var _this = this;
                return this.LoginResource.save(user).then(function (res) {
                    _this.setToken(res.data['token']);
                    _this.setUser();
                }).$promise;
            };
            UserService.prototype.logout = function () {
                this.$window.localStorage.removeItem('token');
            };
            UserService.prototype.setUser = function () {
                var u = JSON.parse(this.urlBase64Decode(this.getToken().split('.')[1]));
                this.status._id = u._id;
                this.status.email = u.email;
                this.status.role = u.role;
            };
            ;
            UserService.prototype.getToken = function () {
                return this.$window.localStorage.getItem('token');
            };
            UserService.prototype.setToken = function (token) {
                this.$window.localStorage.setItem('token', token);
            };
            UserService.prototype.urlBase64Decode = function (str) {
                var output = str.replace(/-/g, '+').replace(/_/g, '/');
                switch (output.length % 4) {
                    case 0: {
                        break;
                    }
                    case 2: {
                        output += '==';
                        break;
                    }
                    case 3: {
                        output += '=';
                        break;
                    }
                    default: {
                        throw 'Illegal base64url string!';
                    }
                }
                return decodeURIComponent(encodeURIComponent(this.$window.atob(output)));
            };
            return UserService;
        }());
        Services.UserService = UserService;
        angular.module('SpotApp').service('geolocationService', GeolocationService);
        angular.module('SpotApp').service('userService', UserService);
    })(Services = SpotApp.Services || (SpotApp.Services = {}));
})(SpotApp || (SpotApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0E0RmhCO0FBNUZELFdBQVUsT0FBTztJQUFDLElBQUEsUUFBUSxDQTRGekI7SUE1RmlCLFdBQUEsUUFBUSxFQUFDLENBQUM7UUFHMUI7WUFJRSw0QkFDVSxTQUF1QztnQkFBdkMsY0FBUyxHQUFULFNBQVMsQ0FBOEI7Z0JBQzlDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtZQUNqRSxDQUFDO1lBRU0sbUNBQU0sR0FBYixVQUFjLElBQUk7Z0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN0RCxDQUFDO1lBRU0sbUNBQU0sR0FBYjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3pDLENBQUM7WUFDSCx5QkFBQztRQUFELENBQUMsQUFoQkQsSUFnQkM7UUFoQlksMkJBQWtCLHFCQWdCOUIsQ0FBQTtRQUlEO1lBV0UscUJBQ1UsT0FBMEIsRUFDMUIsU0FBdUM7Z0JBRHZDLFlBQU8sR0FBUCxPQUFPLENBQW1CO2dCQUMxQixjQUFTLEdBQVQsU0FBUyxDQUE4QjtnQkFUMUMsV0FBTSxHQUFHO29CQUNkLEdBQUcsRUFBRSxJQUFJO29CQUNULEtBQUssRUFBRSxJQUFJO29CQUNYLElBQUksRUFBRSxJQUFJO2lCQUNYLENBQUE7Z0JBTUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO2dCQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1lBQ25ELENBQUM7WUFFTSw4QkFBUSxHQUFmLFVBQWdCLElBQUk7Z0JBQXBCLGlCQUlDO2dCQUhD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
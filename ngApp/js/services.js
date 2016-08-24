var SpotApp;
(function (SpotApp) {
    var Services;
    (function (Services) {
        var GeolocationService = (function () {
            function GeolocationService($resource) {
                this.$resource = $resource;
                this.GeolocationResource = $resource('/api/route/routeLocation/:id');
            }
            GeolocationService.prototype.create = function (spot) {
                console.log("this is from services " + spot.description);
                return this.GeolocationResource.save(spot).$promise;
            };
            GeolocationService.prototype.getAll = function () {
                return this.GeolocationResource.query();
            };
            GeolocationService.prototype.remove = function (id) {
                console.log("this is id " + id);
                return this.GeolocationResource.remove({ id: id }).$promise;
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
                return this.RegisterResource.save(user).$promise;
            };
            UserService.prototype.login = function (user) {
                var _this = this;
                return this.LoginResource.save(user).$promise.then(function (res) {
                    _this.setToken(res['token']);
                    _this.setEmail(res['email']);
                    _this.setUser();
                });
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
            UserService.prototype.getEmail = function () {
                return this.$window.localStorage.getItem('email');
            };
            UserService.prototype.setEmail = function (email) {
                this.$window.localStorage.setItem('email', email);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0EwR2hCO0FBMUdELFdBQVUsT0FBTztJQUFDLElBQUEsUUFBUSxDQTBHekI7SUExR2lCLFdBQUEsUUFBUSxFQUFDLENBQUM7UUFHMUI7WUFJRSw0QkFDVSxTQUF1QztnQkFBdkMsY0FBUyxHQUFULFNBQVMsQ0FBOEI7Z0JBQzlDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsOEJBQThCLENBQUMsQ0FBQTtZQUN2RSxDQUFDO1lBRU0sbUNBQU0sR0FBYixVQUFjLElBQUk7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQXlCLElBQUksQ0FBQyxXQUFhLENBQUMsQ0FBQTtnQkFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3RELENBQUM7WUFFTSxtQ0FBTSxHQUFiO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDekMsQ0FBQztZQUVNLG1DQUFNLEdBQWIsVUFBYyxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWMsRUFBSSxDQUFDLENBQUE7Z0JBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzNELENBQUM7WUFDSCx5QkFBQztRQUFELENBQUMsQUF0QkQsSUFzQkM7UUF0QlksMkJBQWtCLHFCQXNCOUIsQ0FBQTtRQUlEO1lBV0UscUJBQ1UsT0FBMEIsRUFDMUIsU0FBdUM7Z0JBRHZDLFlBQU8sR0FBUCxPQUFPLENBQW1CO2dCQUMxQixjQUFTLEdBQVQsU0FBUyxDQUE4QjtnQkFUMUMsV0FBTSxHQUFHO29C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
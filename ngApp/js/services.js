var SpotApp;
(function (SpotApp) {
    var Services;
    (function (Services) {
        var GeolocationService = (function () {
            function GeolocationService($resource) {
                this.$resource = $resource;
                this.GeolocationResource = $resource('/api/route/routeLocation');
            }
            GeolocationService.prototype.create = function (spot) {
                console.log("this is from services " + spot.description);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0FpR2hCO0FBakdELFdBQVUsT0FBTztJQUFDLElBQUEsUUFBUSxDQWlHekI7SUFqR2lCLFdBQUEsUUFBUSxFQUFDLENBQUM7UUFHMUI7WUFJRSw0QkFDVSxTQUF1QztnQkFBdkMsY0FBUyxHQUFULFNBQVMsQ0FBOEI7Z0JBQzlDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtZQUNuRSxDQUFDO1lBRU0sbUNBQU0sR0FBYixVQUFjLElBQUk7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQXlCLElBQUksQ0FBQyxXQUFhLENBQUMsQ0FBQTtnQkFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3RELENBQUM7WUFFTSxtQ0FBTSxHQUFiO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDekMsQ0FBQztZQUNILHlCQUFDO1FBQUQsQ0FBQyxBQWpCRCxJQWlCQztRQWpCWSwyQkFBa0IscUJBaUI5QixDQUFBO1FBSUQ7WUFXRSxxQkFDVSxPQUEwQixFQUMxQixTQUF1QztnQkFEdkMsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7Z0JBQzFCLGNBQVMsR0FBVCxTQUFTLENBQThCO2dCQVQxQyxXQUFNLEdBQUc7b0JBQ2QsR0FBRyxFQUFFLElBQUk7b0JBQ1QsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQTtnQkFNQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUE7Z0JBQ3hELElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENB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
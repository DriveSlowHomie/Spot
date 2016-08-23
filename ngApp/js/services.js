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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0FvR2hCO0FBcEdELFdBQVUsT0FBTztJQUFDLElBQUEsUUFBUSxDQW9HekI7SUFwR2lCLFdBQUEsUUFBUSxFQUFDLENBQUM7UUFHMUI7WUFJRSw0QkFDVSxTQUF1QztnQkFBdkMsY0FBUyxHQUFULFNBQVMsQ0FBOEI7Z0JBQzlDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtZQUNuRSxDQUFDO1lBRU0sbUNBQU0sR0FBYixVQUFjLElBQUk7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQXlCLElBQUksQ0FBQyxXQUFhLENBQUMsQ0FBQTtnQkFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3RELENBQUM7WUFFTSxtQ0FBTSxHQUFiO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDekMsQ0FBQztZQUNILHlCQUFDO1FBQUQsQ0FBQyxBQWpCRCxJQWlCQztRQWpCWSwyQkFBa0IscUJBaUI5QixDQUFBO1FBSUQ7WUFXRSxxQkFDVSxPQUEwQixFQUMxQixTQUF1QztnQkFEdkMsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7Z0JBQzFCLGNBQVMsR0FBVCxTQUFTLENBQThCO2dCQVQxQyxXQUFNLEdBQUc7b0JBQ2QsR0FBRyxFQUFFLElBQUk7b0JBQ1QsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQTtnQkFNQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUE7Z0JBQ3hELElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENB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
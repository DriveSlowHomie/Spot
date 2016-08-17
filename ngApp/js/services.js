var SpotApp;
(function (SpotApp) {
    var Services;
    (function (Services) {
        var GeolocationService = (function () {
            function GeolocationService($resource) {
                this.$resource = $resource;
                this.GeolocationResource = $resource('/api/geolocation');
            }
            GeolocationService.prototype.create = function (coords) {
                return this.GeolocationResource.save(coords).$promise;
            };
            GeolocationService.prototype.getAll = function () {
                return this.GeolocationResource.query();
            };
            return GeolocationService;
        }());
        Services.GeolocationService = GeolocationService;
        var UserService = (function () {
            function UserService($resource) {
                this.$resource = $resource;
                this.UserResource = $resource('/api/users');
            }
            UserService.prototype.login = function (user) {
                return this.UserResource.save(user).$promise;
            };
            return UserService;
        }());
        Services.UserService = UserService;
        angular.module('SpotApp').service('geolocationService', GeolocationService);
        angular.module('SpotApp').service('userService', UserService);
    })(Services = SpotApp.Services || (SpotApp.Services = {}));
})(SpotApp || (SpotApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0F1Q2hCO0FBdkNELFdBQVUsT0FBTztJQUFDLElBQUEsUUFBUSxDQXVDekI7SUF2Q2lCLFdBQUEsUUFBUSxFQUFDLENBQUM7UUFHMUI7WUFHRSw0QkFDVSxTQUF1QztnQkFBdkMsY0FBUyxHQUFULFNBQVMsQ0FBOEI7Z0JBQy9DLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtZQUMxRCxDQUFDO1lBRU0sbUNBQU0sR0FBYixVQUFjLE1BQU07Z0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN4RCxDQUFDO1lBRU0sbUNBQU0sR0FBYjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3pDLENBQUM7WUFDSCx5QkFBQztRQUFELENBQUMsQUFmRCxJQWVDO1FBZlksMkJBQWtCLHFCQWU5QixDQUFBO1FBSUQ7WUFHRSxxQkFDVSxTQUF1QztnQkFBdkMsY0FBUyxHQUFULFNBQVMsQ0FBOEI7Z0JBQy9DLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQzdDLENBQUM7WUFFTSwyQkFBSyxHQUFaLFVBQWEsSUFBSTtnQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQy9DLENBQUM7WUFDSCxrQkFBQztRQUFELENBQUMsQUFYRCxJQVdDO1FBWFksb0JBQVcsY0FXdkIsQ0FBQTtRQUdELE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDNUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRWhFLENBQUMsRUF2Q2lCLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBdUN6QjtBQUFELENBQUMsRUF2Q1MsT0FBTyxLQUFQLE9BQU8sUUF1Q2hCIn0=
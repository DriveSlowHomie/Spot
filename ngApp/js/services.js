var SpotApp;
(function (SpotApp) {
    var Services;
    (function (Services) {
        var GeolocationService = (function () {
            function GeolocationService($resource) {
                this.$resource = $resource;
                this.GeolocationResource = $resource('/routes/route/:id');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0FtQ2hCO0FBbkNELFdBQVUsT0FBTztJQUFDLElBQUEsUUFBUSxDQW1DekI7SUFuQ2lCLFdBQUEsUUFBUSxFQUFDLENBQUM7UUFDMUI7WUFHRSw0QkFBcUIsU0FBdUM7Z0JBQXZDLGNBQVMsR0FBVCxTQUFTLENBQThCO2dCQUMxRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUE7WUFDM0QsQ0FBQztZQUVNLG1DQUFNLEdBQWIsVUFBYyxNQUFNO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDeEQsQ0FBQztZQUVNLG1DQUFNLEdBQWI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUN6QyxDQUFDO1lBQ0gseUJBQUM7UUFBRCxDQUFDLEFBZEQsSUFjQztRQWRZLDJCQUFrQixxQkFjOUIsQ0FBQTtRQUVEO1lBR0UscUJBQ1UsU0FBdUM7Z0JBQXZDLGNBQVMsR0FBVCxTQUFTLENBQThCO2dCQUUvQyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUM3QyxDQUFDO1lBRU0sMkJBQUssR0FBWixVQUFhLElBQUk7Z0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUMvQyxDQUFDO1lBQ0gsa0JBQUM7UUFBRCxDQUFDLEFBWkQsSUFZQztRQVpZLG9CQUFXLGNBWXZCLENBQUE7UUFHRCxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQzVFLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUVoRSxDQUFDLEVBbkNpQixRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQW1DekI7QUFBRCxDQUFDLEVBbkNTLE9BQU8sS0FBUCxPQUFPLFFBbUNoQiJ9
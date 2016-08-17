var SpotApp;
(function (SpotApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($uibModal, userService, $state) {
                this.$uibModal = $uibModal;
                this.userService = userService;
                this.$state = $state;
            }
            HomeController.prototype.showModal = function () {
                this.$uibModal.open({
                    templateUrl: '/templates/dialog.html',
                    controller: 'DialogController',
                    controllerAs: 'vm',
                    size: 'sm'
                });
            };
            ;
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('SpotApp').controller('HomeController', HomeController);
        var DialogController = (function () {
            function DialogController($uibModal, $uibModalInstance, userService, $state) {
                this.$uibModal = $uibModal;
                this.$uibModalInstance = $uibModalInstance;
                this.userService = userService;
                this.$state = $state;
            }
            DialogController.prototype.login = function () {
                var _this = this;
                this.userService.login(this.user).then(function (res) {
                    localStorage.setItem("id", res._id);
                    console.log(res);
                    _this.$state.go('Home');
                    _this.$uibModalInstance.close();
                });
            };
            return DialogController;
        }());
        angular.module('SpotApp').controller('DialogController', DialogController);
        var MarkPageController = (function () {
            function MarkPageController($geolocation, uiGmapIsReady, geolocationService, $state) {
                this.uiGmapIsReady = uiGmapIsReady;
                this.geolocationService = geolocationService;
                this.$state = $state;
                this.center = { latitude: 45.513913, longitude: -122.667031 };
                this.zoom = 14;
                $geolocation.getCurrentPosition({
                    timeout: 60000
                }).then(function (position) {
                    this.coords = {
                        lat: parseFloat(position.coords.latitude),
                        lng: parseFloat(position.coords.latitude)
                    };
                    this.center = { latitude: this.coords.lat, longitude: this.coords.lng };
                    this.zoom = 14;
                    console.log(this.coords);
                });
            }
            MarkPageController.prototype.myLocation = function () { };
            MarkPageController.prototype.add = function () {
                var params = {
                    geolocation: this.coords.coords
                };
                this.geolocationService.create(params).then(function (res) { });
            };
            MarkPageController.prototype.loadCoords = function (IsReady) {
                this.center = { latitude: this.coords.lat, longitude: this.coords.lng };
                this.zoom = 14;
                IsReady.promise.then();
            };
            ;
            return MarkPageController;
        }());
        Controllers.MarkPageController = MarkPageController;
        angular.module('SpotApp').controller('MarkPageController', MarkPageController);
        var ExplorePageController = (function () {
            function ExplorePageController() {
            }
            return ExplorePageController;
        }());
        Controllers.ExplorePageController = ExplorePageController;
        var HitPageController = (function () {
            function HitPageController() {
            }
            return HitPageController;
        }());
        Controllers.HitPageController = HitPageController;
    })(Controllers = SpotApp.Controllers || (SpotApp.Controllers = {}));
})(SpotApp || (SpotApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0FvSGhCO0FBcEhELFdBQVUsT0FBTztJQUFDLElBQUEsV0FBVyxDQW9INUI7SUFwSGlCLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFHN0I7WUFZRSx3QkFBb0IsU0FBNkMsRUFDN0MsV0FBeUMsRUFDekMsTUFBMkI7Z0JBRjNCLGNBQVMsR0FBVCxTQUFTLENBQW9DO2dCQUM3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBOEI7Z0JBQ3pDLFdBQU0sR0FBTixNQUFNLENBQXFCO1lBQzdDLENBQUM7WUFiSSxrQ0FBUyxHQUFoQjtnQkFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztvQkFDbEIsV0FBVyxFQUFFLHdCQUF3QjtvQkFDckMsVUFBVSxFQUFFLGtCQUFrQjtvQkFDOUIsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLElBQUksRUFBRSxJQUFJO2lCQUNYLENBQUMsQ0FBQztZQUNMLENBQUM7O1lBT0gscUJBQUM7UUFBRCxDQUFDLEFBaEJELElBZ0JDO1FBaEJZLDBCQUFjLGlCQWdCMUIsQ0FBQTtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBS3ZFO1lBZUUsMEJBQ2dCLFNBQTZDLEVBQzdDLGlCQUE2RCxFQUM3RCxXQUF5QyxFQUN6QyxNQUEyQjtnQkFIM0IsY0FBUyxHQUFULFNBQVMsQ0FBb0M7Z0JBQzdDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEM7Z0JBQzdELGdCQUFXLEdBQVgsV0FBVyxDQUE4QjtnQkFDekMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7WUFFM0MsQ0FBQztZQWZNLGdDQUFLLEdBQVo7Z0JBQUEsaUJBT0s7Z0JBTkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFB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
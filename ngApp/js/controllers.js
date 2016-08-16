var SpotApp;
(function (SpotApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(userService, $state) {
                this.userService = userService;
                this.$state = $state;
            }
            HomeController.prototype.login = function () {
                var _this = this;
                this.userService.login(this.user).then(function (res) {
                    localStorage.setItem("id", res._id);
                    console.log(res);
                    _this.$state.go('Home');
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('SpotApp').controller('HomeController', HomeController);
        var DialogController = (function () {
            function DialogController(dataFromHomeController, $uibModalInstance) {
                this.dataFromHomeController = dataFromHomeController;
                this.$uibModalInstance = $uibModalInstance;
            }
            DialogController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            return DialogController;
        }());
        angular.module('SpotApp').controller('DialogController', DialogController);
        var MarkPageController = (function () {
            function MarkPageController($geolocation, geolocationService, $state) {
                this.geolocationService = geolocationService;
                this.$state = $state;
                this.center = { latitude: 37.09024, longitude: -100.712891 };
                this.zoom = 4;
                $geolocation.getCurrentPosition({
                    timeout: 60000
                }).then(function (position) {
                    this.coords = {
                        lat: parseFloat(position.coords.latitude),
                        lng: parseFloat(position.coords.latitude)
                    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0FxR2hCO0FBckdELFdBQVUsT0FBTztJQUFDLElBQUEsV0FBVyxDQXFHNUI7SUFyR2lCLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFDN0I7WUF3QkUsd0JBQ29CLFdBQXlDLEVBQ3pDLE1BQTJCO2dCQUQzQixnQkFBVyxHQUFYLFdBQVcsQ0FBOEI7Z0JBQ3pDLFdBQU0sR0FBTixNQUFNLENBQXFCO1lBQzdDLENBQUM7WUFYSSw4QkFBSyxHQUFaO2dCQUFBLGlCQU1LO2dCQUxDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO29CQUN6QyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUN4QixDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUM7WUFNUCxxQkFBQztRQUFELENBQUMsQUE1QkQsSUE0QkM7UUE1QlksMEJBQWMsaUJBNEIxQixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFJdkU7WUFJRSwwQkFBbUIsc0JBQXNCLEVBQzlCLGlCQUE2RDtnQkFEckQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFBO2dCQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRDO1lBQ3hFLENBQUM7WUFMRCw2QkFBRSxHQUFGO2dCQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQyxDQUFDO1lBSUgsdUJBQUM7UUFBRCxDQUFDLEFBUEQsSUFPQztRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFJM0U7WUFrQkUsNEJBQ0UsWUFBWSxFQUNKLGtCQUF1RCxFQUN2RCxNQUEyQjtnQkFEM0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFxQztnQkFDdkQsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7Z0JBakI5QixXQUFNLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLFVBQVUsRUFBQyxDQUFDO2dCQUN2RCxTQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQWtCZCxZQUFZLENBQUMsa0JBQWtCLENBQUM7b0JBQzlCLE9BQU8sRUFBRSxLQUFLO2lCQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxRQUFRO29CQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHO3dCQUNaLEdBQUcsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7d0JBQ3pDLEdBQUcsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7cUJBQzFDLENBQUE7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFBO1lBRUosQ0FBQztZQS9CTSx1Q0FBVSxHQUFqQixjQUFvQixDQUFDO1lBS2QsZ0NBQUcsR0FBVjtnQkFDQSxJQUFJLE1BQU0sR0FBRztvQkFDWCxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2lCQUdoQyxDQUFDO2dCQUVGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxJQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pELENBQUM7WUFtQkgseUJBQUM7UUFBRCxDQUFDLEFBbENELElBa0NDO1FBbENZLDhCQUFrQixxQkFrQzlCLENBQUE7UUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBR2pGO1lBRUU7WUFFQSxDQUFDO1lBQ0gsNEJBQUM7UUFBRCxDQUFDLEFBTEQsSUFLQztRQUxZLGlDQUFxQix3QkFLakMsQ0FBQTtRQUVEO1lBR0U7WUFFQSxDQUFDO1lBQ0gsd0JBQUM7UUFBRCxDQUFDLEFBTkQsSUFNQztRQU5ZLDZCQUFpQixvQkFNN0IsQ0FBQTtJQUVILENBQUMsRUFyR2lCLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBcUc1QjtBQUFELENBQUMsRUFyR1MsT0FBTyxLQUFQLE9BQU8sUUFxR2hCIn0=
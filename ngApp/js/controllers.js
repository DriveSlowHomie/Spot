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
            function MarkPageController() {
                this.center = { latitude: 37.09024, longitude: -100.712891 };
                this.zoom = 4;
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0FxR2hCO0FBckdELFdBQVUsT0FBTztJQUFDLElBQUEsV0FBVyxDQXFHNUI7SUFyR2lCLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFDN0I7WUF3QkUsd0JBQ29CLFdBQXlDLEVBQ3pDLE1BQTJCO2dCQUQzQixnQkFBVyxHQUFYLFdBQVcsQ0FBOEI7Z0JBQ3pDLFdBQU0sR0FBTixNQUFNLENBQXFCO1lBQzdDLENBQUM7WUFYSSw4QkFBSyxHQUFaO2dCQUFBLGlCQU1LO2dCQUxDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO29CQUN6QyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUN4QixDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUM7WUFNUCxxQkFBQztRQUFELENBQUMsQUE1QkQsSUE0QkM7UUE1QlksMEJBQWMsaUJBNEIxQixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFJdkU7WUFJRSwwQkFBbUIsc0JBQXNCLEVBQzlCLGlCQUE2RDtnQkFEckQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFBO2dCQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRDO1lBQ3hFLENBQUM7WUFMRCw2QkFBRSxHQUFGO2dCQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQyxDQUFDO1lBSUgsdUJBQUM7UUFBRCxDQUFDLEFBUEQsSUFPQztRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFJM0U7WUFrQkU7Z0JBZE8sV0FBTSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUMsQ0FBQztnQkFDdkQsU0FBSSxHQUFHLENBQUMsQ0FBQztZQTRCaEIsQ0FBQztZQUNILHlCQUFDO1FBQUQsQ0FBQyxBQWxDRCxJQWtDQztRQWxDWSw4QkFBa0IscUJBa0M5QixDQUFBO1FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUdqRjtZQUVFO1lBRUEsQ0FBQztZQUNILDRCQUFDO1FBQUQsQ0FBQyxBQUxELElBS0M7UUFMWSxpQ0FBcUIsd0JBS2pDLENBQUE7UUFFRDtZQUdFO1lBRUEsQ0FBQztZQUNILHdCQUFDO1FBQUQsQ0FBQyxBQU5ELElBTUM7UUFOWSw2QkFBaUIsb0JBTTdCLENBQUE7SUFFSCxDQUFDLEVBckdpQixXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQXFHNUI7QUFBRCxDQUFDLEVBckdTLE9BQU8sS0FBUCxPQUFPLFFBcUdoQiJ9
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
            HomeController.prototype.login = function (user) {
                var _this = this;
                this.userService.login(this.user).then(function (res) {
                    console.log(res);
                    _this.$state.go('MarkPage');
                });
            };
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
            DialogController.prototype.register = function () {
                var _this = this;
                this.userService.register(this.user).then(function (res) {
                    console.log(res);
                    _this.$state.go('Home');
                    _this.$uibModalInstance.close();
                });
            };
            return DialogController;
        }());
        angular.module('SpotApp').controller('DialogController', DialogController);
        var MarkPageController = (function () {
            function MarkPageController($geolocation, uiGmapIsReady, geolocationService, $state, $window) {
                this.uiGmapIsReady = uiGmapIsReady;
                this.geolocationService = geolocationService;
                this.$state = $state;
                this.$window = $window;
                this.center = { latitude: 45.513913, longitude: -122.667031 };
                this.zoom = 14;
                $geolocation.getCurrentPosition({
                    timeout: 60000
                }).then(function (position) {
                    this.coords = {
                        lat: parseFloat(position.coords.latitude),
                        lng: parseFloat(position.coords.longitude)
                    };
                    this.center = { latitude: this.coords.lat, longitude: this.coords.lng };
                    this.zoom = 14;
                    console.log(this.coords);
                });
            }
            MarkPageController.prototype.add = function () {
                var params = {
                    geolocation: this.center
                };
                this.email = this.$window.localStorage.getItem('email');
                this.spot = {
                    name: this.name,
                    description: this.description,
                    discovered: this.discovered,
                    longitude: this.center.longitude,
                    latitude: this.center.latitude,
                    email: this.email
                };
                console.log(this.spot);
                this.geolocationService.create(this.spot).then(function (res) { });
            };
            MarkPageController.prototype.get = function () {
                this.databaseLocation = this.geolocationService.getAll();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0FxSmhCO0FBckpELFdBQVUsT0FBTztJQUFDLElBQUEsV0FBVyxDQXFKNUI7SUFySmlCLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFHN0I7WUFxQkUsd0JBQW9CLFNBQTZDLEVBQzdDLFdBQXlDLEVBQ3pDLE1BQTJCO2dCQUYzQixjQUFTLEdBQVQsU0FBUyxDQUFvQztnQkFDN0MsZ0JBQVcsR0FBWCxXQUFXLENBQThCO2dCQUN6QyxXQUFNLEdBQU4sTUFBTSxDQUFxQjtZQUM3QyxDQUFDO1lBckJJLGtDQUFTLEdBQWhCO2dCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO29CQUNsQixXQUFXLEVBQUUsd0JBQXdCO29CQUNyQyxVQUFVLEVBQUUsa0JBQWtCO29CQUM5QixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQyxDQUFDO1lBQ0wsQ0FBQzs7WUFFTSw4QkFBSyxHQUFaLFVBQWEsSUFBSTtnQkFBakIsaUJBTUs7Z0JBTEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2dCQUM1QixDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUM7WUFPUCxxQkFBQztRQUFELENBQUMsQUF6QkQsSUF5QkM7UUF6QlksMEJBQWMsaUJBeUIxQixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFLdkU7WUFl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
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
            MarkPageController.prototype.logout = function () {
                this.$window.localStorage.removeItem('token');
            };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0F5SmhCO0FBekpELFdBQVUsT0FBTztJQUFDLElBQUEsV0FBVyxDQXlKNUI7SUF6SmlCLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFHN0I7WUFxQkUsd0JBQW9CLFNBQTZDLEVBQzdDLFdBQXlDLEVBQ3pDLE1BQTJCO2dCQUYzQixjQUFTLEdBQVQsU0FBUyxDQUFvQztnQkFDN0MsZ0JBQVcsR0FBWCxXQUFXLENBQThCO2dCQUN6QyxXQUFNLEdBQU4sTUFBTSxDQUFxQjtZQUM3QyxDQUFDO1lBckJJLGtDQUFTLEdBQWhCO2dCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO29CQUNsQixXQUFXLEVBQUUsd0JBQXdCO29CQUNyQyxVQUFVLEVBQUUsa0JBQWtCO29CQUM5QixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQyxDQUFDO1lBQ0wsQ0FBQzs7WUFFTSw4QkFBSyxHQUFaLFVBQWEsSUFBSTtnQkFBakIsaUJBTUs7Z0JBTEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2dCQUM1QixDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUM7WUFPUCxxQkFBQztRQUFELENBQUMsQUF6QkQsSUF5QkM7UUF6QlksMEJBQWMsaUJBeUIxQixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFLdkU7WUFl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
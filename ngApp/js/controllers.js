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
                    localStorage.setItem("id", res._id);
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
                        lng: parseFloat(position.coords.longitude)
                    };
                    this.center = { latitude: this.coords.lat, longitude: this.coords.lng };
                    this.zoom = 14;
                    console.log(this.coords);
                });
            }
            MarkPageController.prototype.add = function () {
                "";
                var params = {
                    geolocation: this.center
                };
                this.spot = {
                    name: this.spot.name,
                    description: this.spot.description,
                    discovered: this.spot.discovered,
                    longitude: this.coords.lng,
                    latitude: this.coords.lat,
                };
                this.geolocationService.create(this.center).then(function (res) { });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0F1SmhCO0FBdkpELFdBQVUsT0FBTztJQUFDLElBQUEsV0FBVyxDQXVKNUI7SUF2SmlCLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFHN0I7WUFxQkUsd0JBQW9CLFNBQTZDLEVBQzdDLFdBQXlDLEVBQ3pDLE1BQTJCO2dCQUYzQixjQUFTLEdBQVQsU0FBUyxDQUFvQztnQkFDN0MsZ0JBQVcsR0FBWCxXQUFXLENBQThCO2dCQUN6QyxXQUFNLEdBQU4sTUFBTSxDQUFxQjtZQUM3QyxDQUFDO1lBckJJLGtDQUFTLEdBQWhCO2dCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO29CQUNsQixXQUFXLEVBQUUsd0JBQXdCO29CQUNyQyxVQUFVLEVBQUUsa0JBQWtCO29CQUM5QixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQyxDQUFDO1lBQ0wsQ0FBQzs7WUFFTSw4QkFBSyxHQUFaLFVBQWEsSUFBSTtnQkFBakIsaUJBTUs7Z0JBTEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzNDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7Z0JBQzVCLENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQU9QLHFCQUFDO1FBQUQsQ0FBQyxBQXpCRCxJQXlCQztRQXpCWSwwQkFBYyxpQkF5QjFCLENBQUE7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFD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
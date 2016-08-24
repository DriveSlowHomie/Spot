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
            function MarkPageController($geolocation, uiGmapIsReady, geolocationService, $state, $stateParams, $window) {
                this.uiGmapIsReady = uiGmapIsReady;
                this.geolocationService = geolocationService;
                this.$state = $state;
                this.$stateParams = $stateParams;
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
                this.email = this.$window.localStorage.getItem('email');
                console.log("this is " + this.email);
                this.id = this.$stateParams['id'];
                console.log("This is id: " + this.id);
                this.spot = {
                    _id: this.id,
                    name: this.name,
                    description: this.description,
                    discovered: this.discovered,
                    longitude: this.center.longitude,
                    latitude: this.center.latitude,
                    email: this.email
                };
                console.log(this.spot);
                this.geolocationService.create(this.spot).then(function (res) { });
                this.$state.go("MarkPage");
            };
            MarkPageController.prototype.get = function () {
                this.databaseLocation = this.geolocationService.getAll();
            };
            MarkPageController.prototype.remove = function () {
                var _this = this;
                this.id = this.$stateParams['id'];
                console.log("This is the id from controller: " + this.id);
                this.geolocationService.remove(this.id).then(function () {
                    _this.$state.go("MarkPage");
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0EyS2hCO0FBM0tELFdBQVUsT0FBTztJQUFDLElBQUEsV0FBVyxDQTJLNUI7SUEzS2lCLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFHN0I7WUFxQkUsd0JBQW9CLFNBQTZDLEVBQzdDLFdBQXlDLEVBQ3pDLE1BQTJCO2dCQUYzQixjQUFTLEdBQVQsU0FBUyxDQUFvQztnQkFDN0MsZ0JBQVcsR0FBWCxXQUFXLENBQThCO2dCQUN6QyxXQUFNLEdBQU4sTUFBTSxDQUFxQjtZQUM3QyxDQUFDO1lBckJJLGtDQUFTLEdBQWhCO2dCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO29CQUNsQixXQUFXLEVBQUUsd0JBQXdCO29CQUNyQyxVQUFVLEVBQUUsa0JBQWtCO29CQUM5QixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQyxDQUFDO1lBQ0wsQ0FBQzs7WUFFTSw4QkFBSyxHQUFaLFVBQWEsSUFBSTtnQkFBakIsaUJBTUs7Z0JBTEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2dCQUM1QixDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUM7WUFPUCxxQkFBQztRQUFELENBQUMsQUF6QkQsSUF5QkM7UUF6QlksMEJBQWMsaUJBeUIxQixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFLdkU7WUFl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
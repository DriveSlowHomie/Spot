'use strict';
var SpotApp;
(function (SpotApp) {
    angular.module('SpotApp', ['ui.router', 'ngResource', 'ui.bootstrap', 'uiGmapgoogle-maps', 'ngGeolocation'])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyAU-rA_HwaG5ZTXLE5D8ieJVumBFkWaxAk',
        });
        $stateProvider.state('Home', {
            url: '/',
            templateUrl: '/templates/home.html',
            controller: SpotApp.Controllers.HomeController,
            controllerAs: 'vm'
        }).state('MarkPage', {
            url: '/markPage',
            templateUrl: '/templates/markPage.html',
            controller: SpotApp.Controllers.MarkPageController,
            controllerAs: 'vm'
        }).state('ExplorePage', {
            url: '/explorePage',
            templateUrl: '/templates/explorePage.html',
            controller: SpotApp.Controllers.ExplorePageController,
            controllerAs: 'vm'
        }).state('HitPage', {
            url: '/hitPage',
            templateUrl: '/templates/hitPage.html',
            controller: SpotApp.Controllers.HitPageController,
            controllerAs: 'vm'
        }).state('UpdateSpot', {
            url: '/updateSpot/:id',
            templateUrl: '/templates/updateSpot.html',
            controller: SpotApp.Controllers.MarkPageController,
            controllerAs: 'vm'
        }).state('DeleteSpot', {
            url: '/deleteSpot/:id',
            templateUrl: '/templates/deleteSpot.html',
            controller: SpotApp.Controllers.MarkPageController,
            controllerAs: 'vm'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('AuthInterceptor');
    });
})(SpotApp || (SpotApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQVUsT0FBTyxDQWlEaEI7QUFqREQsV0FBVSxPQUFPLEVBQUMsQ0FBQztJQUNqQixPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQ3pHLE1BQU0sQ0FBQyxVQUNSLGNBQW9DLEVBQ3BDLGlCQUF1QyxFQUN2QyxrQkFBNkMsRUFDN0MsYUFBK0IsRUFDL0IsMEJBQStCO1FBRS9CLDBCQUEwQixDQUFDLFNBQVMsQ0FBQztZQUNuQyxHQUFHLEVBQUUseUNBQXlDO1NBQy9DLENBQUMsQ0FBQztRQUVILGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQzNCLEdBQUcsRUFBRSxHQUFHO1lBQ1IsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxjQUFjO1lBQzlDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQ25CLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsa0JBQWtCO1lBQ2xELFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQ3RCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMscUJBQXFCO1lBQ3JELFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ2xCLEdBQUcsRUFBRSxVQUFVO1lBQ2YsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxVQUFVLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUI7WUFDakQsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7WUFDckIsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFVBQVUsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLGtCQUFrQjtZQUNsRCxZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtZQUNyQixHQUFHLEVBQUUsaUJBQWlCO1lBQ3RCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsa0JBQWtCO1lBQ2xELFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQztRQUVILGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNyRCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsRUFqRFMsT0FBTyxLQUFQLE9BQU8sUUFpRGhCIn0=
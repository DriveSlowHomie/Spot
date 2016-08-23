namespace SpotApp.Controllers {

  //Home Controller: Modal and login logic
  export class HomeController {
    public user;

    public showModal(){
      this.$uibModal.open({
        templateUrl: '/templates/dialog.html',
        controller: 'DialogController',
        controllerAs: 'vm',
        size: 'sm'
      });
    };

    public login(user){
            this.userService.login(this.user).then((res) => {
            // localStorage.setItem("id", res._id)
            console.log(res);
            this.$state.go('MarkPage')
          })
        }


    constructor(private $uibModal: angular.ui.bootstrap.IModalService,
                private userService: SpotApp.Services.UserService,
                private $state: ng.ui.IStateService
    ){}
  }

  angular.module('SpotApp').controller('HomeController', HomeController);



  //DialogController: Sign up for account Modal
  class DialogController {
    public email;
    public user;



    public register(){
          this.userService.register(this.user).then((res) => {
            // localStorage.setItem("id", res._id)
            console.log(res);
            this.$state.go('Home')
            this.$uibModalInstance.close();
          })
        }

    constructor(
            private $uibModal: angular.ui.bootstrap.IModalService,
            private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance,
            private userService: SpotApp.Services.UserService,
            private $state: ng.ui.IStateService
        ){
    }
  }

  angular.module('SpotApp').controller('DialogController', DialogController);


  //MarkPageController: Geoloction functions, google maps focus
  export class MarkPageController {
    public coords;
    public spot;
    public name;
    public description;
    public discovered;
    public databaseLocation;
    public email;


    public center = { latitude: 45.513913, longitude: -122.667031};
    public zoom = 14;

    public add() {
      // this.geolocationService.create(this.coords).then((res) => {
      //   console.log(res);
      //   this.$state.go('MarkPage')
      // });

        let params = {
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
        }
        console.log(this.spot)

        this.geolocationService.create(this.spot).then((res) => {});
    }

    public get() {
        this.databaseLocation = this.geolocationService.getAll()
    }

    constructor(
      $geolocation,
      private uiGmapIsReady,
      private geolocationService: SpotApp.Services.GeolocationService,
      private $state: ng.ui.IStateService,
      private $window: ng.IWindowService
    ) {




      // Geoloction function
      $geolocation.getCurrentPosition({
        timeout: 60000
      }).then(function(position){
        this.coords = {
          lat: parseFloat(position.coords.latitude),
          lng: parseFloat(position.coords.longitude)
        }
        this.center = { latitude: this.coords.lat, longitude: this.coords.lng};
        this.zoom = 14;
        console.log(this.coords);
      })

    }
  }
    angular.module('SpotApp').controller('MarkPageController', MarkPageController);


  export class ExplorePageController {

    constructor() {

    }
  }

  export class HitPageController {


    constructor() {

    }
  }

}

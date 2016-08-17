namespace SpotApp.Controllers {

  //Home Controller: Modal and login logic
  export class HomeController {

    public showModal(){
      this.$uibModal.open({
        templateUrl: '/templates/dialog.html',
        controller: 'DialogController',
        controllerAs: 'vm',
        size: 'sm'
      });
    };


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



    public login(){
          this.userService.login(this.user).then((res) => {
            localStorage.setItem("id", res._id)
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
    public myLocation(){}

    public center = { latitude: 37.09024, longitude: -100.712891};
    public zoom = 4;

    public add() {
    let params = {
      geolocation: this.coords.coords
    };

    this.geolocationService.create(params).then((res) => {});
    }


    constructor(
      $geolocation,
      private geolocationService: SpotApp.Services.GeolocationService,
      private $state: ng.ui.IStateService
    ) {

      //Geoloction function
      $geolocation.getCurrentPosition({
        timeout: 60000
      }).then(function(position){
        this.coords = {
          lat: parseFloat(position.coords.latitude),
          lng: parseFloat(position.coords.latitude)
        }
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

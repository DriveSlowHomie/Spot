namespace SpotApp.Controllers {
  export class HomeController {
    public email;
    public user;

    // showModal(){
    //   this.$uibModal.open({
    //     templateUrl: '/templates/dialog.html',
    //     controller: 'DialogController',
    //     controllerAs: 'vm',
    //     resolve: {
    //       dataFromHomeController: () => this.email
    //     },
    //     size: 'sm'
    //   });
    // }

    public login(){
          this.userService.login(this.user).then((res) => {
            localStorage.setItem("id", res._id)
            console.log(res);
            this.$state.go('Home')
          })
        }

    constructor(/*private $uibModal: angular.ui.bootstrap.IModalService*/
                private userService: SpotApp.Services.UserService,
                private $state: ng.ui.IStateService
    ){}
  }

  angular.module('SpotApp').controller('HomeController', HomeController);



  class DialogController {
    ok(){
      this.$uibModalInstance.close();
    }
    constructor(public dataFromHomeController,
       private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance){
    }
  }

  angular.module('SpotApp').controller('DialogController', DialogController);



  export class MarkPageController {
    public coords;
    public myLocation(){}

    public center = { latitude: 37.09024, longitude: -100.712891};
    public zoom = 4;

    public add() {
    let params = {
      geolocation: this.coords.coords
     // title: this.movie.title,
     // genre: this.movie.genre
    };

    this.geolocationService.create(params).then((res) => {});
    }


    constructor(
      $geolocation,
      private geolocationService: SpotApp.Services.GeolocationService,
      private $state: ng.ui.IStateService
    ) {
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

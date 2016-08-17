namespace SpotApp.Services {

  //GeolocationService
  export class GeolocationService {
    public GeolocationResource;

    constructor(
      private $resource: ng.resource.IResourceService) {
      this.GeolocationResource = $resource('/api/geolocation')
    }

    public create(coords) {
      return this.GeolocationResource.save(coords).$promise;
    }

    public getAll(){
      return this.GeolocationResource.query()
    }
  }


  //UserService
  export class UserService {
    private UserResource;

    constructor(
      private $resource: ng.resource.IResourceService) {
      this.UserResource = $resource('/api/users')
    }

    public login(user){
      return this.UserResource.save(user).$promise;
    }
  }


  angular.module('SpotApp').service('geolocationService', GeolocationService);
  angular.module('SpotApp').service('userService', UserService);

}

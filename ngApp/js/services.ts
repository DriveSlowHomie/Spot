namespace SpotApp.Services {
  export class GeolocationService {
    public GeolocationResource;

    constructor( private $resource: ng.resource.IResourceService) {
      this.GeolocationResource = $resource('/routes/route/:id')
    }

    public create(coords) {
      return this.GeolocationResource.save(coords).$promise;
    }

    public getAll(){
      return this.GeolocationResource.query()
    }
  }

  export class UserService {
    private UserResource;

    constructor(
      private $resource: ng.resource.IResourceService
    ){
      this.UserResource = $resource('/api/users')
    }

    public login(user){
      return this.UserResource.save(user).$promise;
    }
  }


  angular.module('SpotApp').service('geolocationService', GeolocationService);
  angular.module('SpotApp').service('userService', UserService);

}

namespace SpotApp.Services {

  //GeolocationService
  export class GeolocationService {
    public GeolocationResource;


    constructor(
      private $resource: ng.resource.IResourceService) {
       this.GeolocationResource = $resource('/api/route/routeLocation')
    }

    public create(spot) {
      return this.GeolocationResource.save(spot).$promise;
    }

    public getAll(){
      return this.GeolocationResource.query()
    }
  }


  //UserService
  export class UserService {
    private RegisterResource;
    private LoginResource;

    public status = {
      _id: null,
      email: null,
      role: null
    }


    constructor(
      private $window: ng.IWindowService,
      private $resource: ng.resource.IResourceService) {
      this.RegisterResource = $resource('/api/users/register')
      this.LoginResource = $resource('api/users/login')
    }

    public register(user){
      return this.RegisterResource.save(user).$promise
      // .then((res) =>
      // {this.setToken(res.data['token']);
      //  this.setUser()});
    }

    public login(user){
      return this.LoginResource.save(user).$promise.then((res) =>
      {this.setToken(res['token']);
       this.setUser()});
    }

    public logout () {
      this.$window.localStorage.removeItem('token')
    }

    public setUser(){
      let u = JSON.parse(this.urlBase64Decode(this.getToken().split('.')[1]));
      this.status._id = u._id;
      this.status.email = u.email;
      this.status.role = u.role;
    };

    public getToken () {
      return this.$window.localStorage.getItem('token')
    }

    public setToken(token:string) {
      this.$window.localStorage.setItem('token', token)
    }

    private urlBase64Decode(str) {
      let output = str.replace(/-/g, '+').replace(/_/g, '/');
     switch (output.length % 4) {
       case 0: { break; }
       case 2: { output += '=='; break; }
       case 3: { output += '='; break; }
       default: {
         throw 'Illegal base64url string!';
       }
     }
     return decodeURIComponent(encodeURIComponent(this.$window.atob(output)));
    }


  }


  angular.module('SpotApp').service('geolocationService', GeolocationService);
  angular.module('SpotApp').service('userService', UserService);

}

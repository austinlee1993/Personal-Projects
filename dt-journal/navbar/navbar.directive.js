

  angular
    .module('myApp.navbar')
    .directive('journalNavbar', journalNavbar);

  function journalNavbar() {
    return {
      templateUrl: 'app/navbar/navbar.html',
      restrict: 'E',
      scope: {},
      controller: NavbarController,
      controllerAs: 'vm'
    };
  }

  NavbarController.$inject = ['$location', 'authService'];

  function NavbarController($location, authService) {
    
     console.log('NavbarController');
   

    
  };


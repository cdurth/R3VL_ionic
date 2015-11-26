angular.module('r3vl.controllers', [])

.controller('MainCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;
    

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        console.log(document.getElementsByTagName('ion-nav-bar')[0].style.display );
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('HomeCtrl', function($scope, $timeout, $stateParams) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionic.material.ink.displayEffect();
    
    //Trianglify Backgrounds
    var pattern = Trianglify({
        width: 400,
        height: 800,
        cell_size: Math.floor((Math.random() * 200) + 70),
        variance: (Math.random() * (0.20 - 0.70) + 0.70).toFixed(2),
        x_colors: ['#b61111','#7E4E4E','#D63333','#000000']
    });
    var tmpUri = pattern.png();
    $scope.randBackground = 'url('+ tmpUri+')';
})

.controller('JoinCtrl', function($scope, $stateParams, $timeout){

    $scope.$parent.showHeader();

    
    
    //Trianglify Backgrounds
    var pattern = Trianglify({
        width: 400,
        height: 800,
        cell_size: Math.floor((Math.random() * 200) + 70),
        variance: (Math.random() * (0.20 - 0.70) + 0.70).toFixed(2),
        x_colors: ['#b61111','#7E4E4E','#D63333','#000000']
    });
    var tmpUri = pattern.png();
    $scope.randBackground = 'url('+ tmpUri+')';
})

.controller('CreateCtrl', function($scope, $stateParams, $timeout){
        $scope.$parent.showHeader();
        
        
    //Trianglify Backgrounds
    var pattern = Trianglify({
        width: 400,
        height: 800,
        cell_size: Math.floor((Math.random() * 200) + 70),
        variance: (Math.random() * (0.20 - 0.70) + 0.70).toFixed(2),
        x_colors: ['#b61111','#7E4E4E','#D63333','#000000']
    });
    var tmpUri = pattern.png();
    $scope.randBackground = 'url('+ tmpUri+')';
})

.controller('AppCtrl', function($scope, $stateParams, $timeout, $ionicModal) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    
    // Add Song Modal
// $ionicModal.fromTemplateUrl('my-modal.html', {
//     scope: $scope,
//     animation: 'slide-in-up'
//   }).then(function(modal) {
//     $scope.modal = modal;
//   });

  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

    // Set Motion
    $timeout(function() {
        ionic.material.motion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionic.material.motion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionic.material.ink.displayEffect();

    //Trianglify Backgrounds
    var pattern = Trianglify({
        width: 400,
        height: 800,
        cell_size: Math.floor((Math.random() * 200) + 70),
        variance: (Math.random() * (0.20 - 0.70) + 0.70).toFixed(2),
        x_colors: ['#b61111','#7E4E4E','#D63333','#000000']
    });
    var tmpUri = pattern.png();
    $scope.randBackground = 'url('+ tmpUri+')';
})
;

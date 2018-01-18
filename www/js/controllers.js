angular.module('starter.controllers', [])
    .controller('ToDoListCtrl', function ($scope,$ionicModal) {


    $scope.toDoListItems = [];

    $ionicModal.fromTemplateUrl('modal.html', {
  	scope: $scope,
  	animation: 'slide-in-up'
	}).then(function (modal) {
  	$scope.modal = modal;
	});

	// function to open the modal
	$scope.openModal = function () {
	  $scope.modal.show();
	};


	// function to close the modal
	$scope.closeModal = function () {
	  $scope.modal.hide();
	};


	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function () {
	  $scope.modal.remove();
	});


	$scope.remove=function(index){
		 $scope.toDoListItems.splice(index, 1);
	};


		//function to add items to the existing list
		$scope.AddItem = function (data) {
		  $scope.toDoListItems.push({
		    task: data.newItem,
		    status: 'not done'
		  });
		  data.newItem = '';
		  $scope.closeModal();
		};

 		$scope.toDoListItems = [{
    		task: 'Scuba Diving',
   			 status: 'not done'
 		 }, {
   		 task: 'Climb Everest',
   		 status: 'not done'
		  }]


});
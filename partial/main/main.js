angular.module('untitled').controller('MainCtrl',function($scope){
    function genBrick() {
        var height = ~~(Math.random() * 500) + 100;
        var id = ~~(Math.random() * 10000);
        return {
            src: 'http://lorempixel.com/g/280/' + height + '/?' + id,
            title: 'hello-'+id,
            size: 'normal'
        };
    };

    $scope.bricks = [
        genBrick(),
        genBrick(),
        genBrick(),
        genBrick(),
        genBrick()
    ];

    $scope.add = function add() {
        $scope.bricks.push(genBrick());
    };

    $scope.remove = function remove() {
        $scope.bricks.splice(
            ~~(Math.random() * $scope.bricks.length),
            1
        )
    };
    $scope.resize = function(id, size){
        //alert($scope.toBeRepeated.indexOf(id))
        //alert($scope.toBeRepeated[id].isWide)
        $scope.bricks[id].size = $scope.bricks[id].size =='wide'?'normal':'wide'
        $scope.$broadcast('resize');
        //$scope.item[id].isWide = size =='wide'?'normal':'wide';
    };
    //$scope.alert = function alert(title) {
      //  console.log("clicked: "+ title);
        //masonry.layout();
    //}
});
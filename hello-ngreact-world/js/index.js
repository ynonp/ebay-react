import Indicator from './indicator';
import ReactDOM from 'react-dom';

var app = angular.module('myapp', ['react']);
app.controller('main', MainCtrl);

app.directive('indicator', function(reactDirective) {
  return reactDirective(Indicator);
});

function MainCtrl() {
  var vm = this;
  vm.text = 'Hello Angular';
  
  vm.clicks = 0;
  
  vm.clicked = function() {
    vm.clicks++;
  };
}

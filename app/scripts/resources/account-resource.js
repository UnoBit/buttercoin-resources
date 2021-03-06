'use strict';

angular.module('buttercoin.accounts', ['buttercoin.resource'])
.constant('AccountResourceName', 'accounts')
.factory('AccountsResource', function(AccountResourceName, ButtercoinResource) {
  return {
    get: function (id, success, error) {
      return ButtercoinResource.get(AccountResourceName, id, success, error);
    }
  };
});

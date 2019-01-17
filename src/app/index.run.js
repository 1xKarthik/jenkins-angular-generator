(function() {
  'use strict';

  angular
    .module('angularGenerator')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

import {createRunner} from 'atom-mocha-test-runner';

function optionalConfigurationFunction(mocha) {
  const path = require('path');
  const testPackagePath = path.join(__dirname, '..');
  const testPackageName = require(path.join(testPackagePath, 'package.json')).name;

  mocha.suite.beforeEach(() => {
    const originalResolveFunction = atom.packages.resolvePackagePath;
    atom.packages.resolvePackagePath = function (packageName) {
      if (packageName === testPackageName) {
        return originalResolveFunction.call(this, testPackagePath);
      } else {
        return originalResolveFunction.call(this, packageName);
      }
    };
  });
}

module.exports = createRunner({
  reporter: 'spec',
}, optionalConfigurationFunction);

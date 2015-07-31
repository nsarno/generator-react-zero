var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var shallowRender = function (component, props={}, ...children) {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(React.createElement(component, props, children));
  return shallowRenderer.getRenderOutput();
};

module.exports = shallowRender;

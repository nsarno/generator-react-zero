var test = require('tape');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var shallowRenderer = TestUtils.createRenderer();

var <%= name %> = require('../../app/scripts/components/<%= name %>');

shallowRenderer.render(React.createElement(<%= name %>));
const component = shallowRenderer.getRenderOutput();

test('<%= name %> component has a valid type', function (t) {
  t.plan(1);
  t.equal(component.type, 'div');
});

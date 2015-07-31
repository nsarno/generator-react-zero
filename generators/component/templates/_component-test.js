var test = require('tape');
var React = require('react/addons');
var shallowRender = require('../support/shallowRender');

var <%= name %> = require('../../app/scripts/components/<%= name %>');

const component = shallowRender(<%= name %>);

test('<%= name %> component has a valid type', function (t) {
  t.plan(1);
  t.equal(component.type, 'div');
});

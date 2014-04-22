###* @jsx React.DOM ###

App = require('../../app/jsx/app.jsx')

module.exports = () ->
  ReactTestUtils = Render = Simulate = null
  
  beforeEach () ->
    ReactTestUtils = React.addons.TestUtils
    Render = ReactTestUtils.renderIntoDocument
    Simulate = ReactTestUtils.Simulate

  it 'should create "phones" model with 3 phones', () ->
    app = `<App />`
    Render app

    expect(app.refs.phoneList).to.exist
    expect(app.refs.phoneList.getDOMNode().children.length).to.equal 3
  
  
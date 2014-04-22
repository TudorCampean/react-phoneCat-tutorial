/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

'use strict';
module.exports = React.createClass({
  getInitialState: function () {
    return {
      // initial static list of phones
      phones : [
        {'name': 'Nexus S',
         'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
         'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
         'snippet': 'The Next, Next Generation tablet.'}
      ]
    };
  },
    //
  // ### render
  // (* required)
  //
  // When called, it should examine this.props and this.state and return a single child component. 
  // This child component can be either a virtual representation of a native DOM component 
  // or another composite component that you've defined yourself.
  //
  render: function () {
    // tranform the list of phones to markup 
    var phones = this.state.phones.map(function (element, index) {
      return (
      /* jshint ignore:start */
        <div id={"phone"+index}>
          <h4>{element.name}</h4>
          <p>{element.snippet}</p>
        </div>
        /* jshint ignore:end */
      );
    });
	return (
      /* jshint ignore:start */
      <section className="container-fluid">
        <article className="col-md-3"></article>
        <article className="col-md-9" ref="phoneList">
          {phones}
        </article>
      </section>
      /* jshint ignore:end */
	);
  }
});


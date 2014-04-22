(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

'use strict';
module.exports = React.createClass({displayName: 'exports',
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
        React.DOM.div( {id:"phone"+index}, 
          React.DOM.h4(null, element.name),
          React.DOM.p(null, element.snippet)
        )
        /* jshint ignore:end */
      );
    });
	return (
      /* jshint ignore:start */
      React.DOM.section( {className:"container-fluid"}, 
        React.DOM.article( {className:"col-md-3"}),
        React.DOM.article( {className:"col-md-9", ref:"phoneList"}, 
          phones
        )
      )
      /* jshint ignore:end */
	);
  }
});


},{}],2:[function(require,module,exports){
/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */
'use strict';

var app = require('./app.jsx');

// add the component to the DOM
React.renderComponent(
  /* jshint ignore:start */
  app(null ),
  document.getElementById('app')
  /* jshint ignore:end */
);

},{"./app.jsx":1}]},{},[2]);
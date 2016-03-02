(function() {
'use strict';

require('cytoscape-navigator/dist/cytoscape-navigator.css');

var jquery = require('jquery');
var cytoscape = require('cytoscape');
var cytoscapeNavigator = require('cytoscape-navigator');

cytoscape.registerJquery(jquery);
cytoscapeNavigator(jquery, cytoscape);

var cy = cytoscape({
  container: jquery('#cy')[0],

  ready: function(){

  },

  style: [
    {
      selector: 'node',
      css: {
        'content': 'data(name)'
      }
    },

    {
      selector: 'edge',
      css: {
        'target-arrow-shape': 'triangle'
      }
    }
  ],

  elements: {
    nodes: [
      { data: { id: 'j', name: 'Jerry' } },
      { data: { id: 'e', name: 'Elaine' } },
      { data: { id: 'k', name: 'Kramer' } },
      { data: { id: 'g', name: 'George' } }
    ],
    edges: [
      { data: { source: 'j', target: 'e' } },
      { data: { source: 'j', target: 'k' } },
      { data: { source: 'j', target: 'g' } },
      { data: { source: 'e', target: 'j' } },
      { data: { source: 'e', target: 'k' } },
      { data: { source: 'k', target: 'j' } },
      { data: { source: 'k', target: 'e' } },
      { data: { source: 'k', target: 'g' } },
      { data: { source: 'g', target: 'j' } }
    ]
  },
});

cy.navigator({
  // options go here
});

})();

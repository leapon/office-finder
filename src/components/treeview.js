import React, { Component } from 'react';

/*
File layout:
Pass in name of level, and children if applicable
Ex:
[
    {
        "name": "Top Level",
        "children": [
            {
                "name": "Level 2: A",
                "children": [
                    {
                        "name": "Son of A"
                    },
                    {
                        "name": "Daughter of A"
                    }
                ]
            },
            {
                "name": "Level 2: B"
            },
            {
                "name": "Level 2: C",
                "children": [
                    {
                        "name": "Son of C"
                    }
                ]
            }
        ]
    }
]
Nodes:
[
    { display:'Top Level', level:1 },
    { display:'Level 2: A', level:2 },
    { display:'Son of A', level:3 },
    { display:'Daughter of A', level:3 },
    { display:'Level 2: B', level:2 },
    { display:'Level 2: C', level:2 },
    { display:'Son of C', level:3 }
]
*/

// Take into account the order of the elements
// Check if there is children
// Create ids relating to level and use ABC letters to track
// A for first node, AA for nested nodes, AAA, AAAA, etc.
class TreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      layout: props.layout
    }
  render() {
    var levels = []
    var nodeArr = []
    var lowestLevel = 0
    var numNodes = this.state.layout.length;
    for (object in this.state.layout) {
      var level = Object.keys(object)[1];
      levels.push(level)
    }
    for (x in this.state.layout) {
      if (x.level > lowestLevel) {
          var lowestLevel = x
      }
    }

    for(var i = 0; i < numNodes; i++) {
      let hasChildren
      let nodeId
      if ((this.state.layout[i]).level < lowestLevel) {
        hasChildren = true;
      }
      if (!((this.state.layout[i]).level in levels)) {
        nodeId = "A".repeat(this.state.layout[i].level)
      }
      nodeArr.push(
        <TreeNode
          level = (this.state.layout[i]).level
          display = (this.state.layout[i]).display
          hasChildren = hasChildren
          id = nodeId
        />
        )
      }
    }
  }
}
class TreeNode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      level: props.level,
      display: props.display,
      hasChildren: props.hasChildren,
      children: props.children,
      id: props.id
    }
  }
}

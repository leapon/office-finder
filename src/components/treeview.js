import React, { Component } from 'react';

/*
File layout:
Pass in name of level, and children if applicable

Nodes:
[
    { display:'Top Level A', levels: [1] },
    { display:'Level 2: A', levels: [1,1] },
    { display:'Son of A', levels: [1,1,1] },
    { display:'Daughter of A', levels: [1,1,2] },
    { display:'Level 2: B', levels: [1,2] },
    { display:'Level 2: C', levels: [1,3] },
    { display:'Son of C', levels: [1,3,1] },
    { display:'Top Level B', levels: [2] }
]

Make sure to give levels properly
*/


class TreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      layout: props.layout
    }
  }
  render() {
    var nodeArr = []
    var numNodes = this.state.layout.length;
    var nodeId = ""
    var text = ""

    for (node in layout) {
      var level = node.levels
      text = node.display

      for (x in levels) {
        nodeId += x.toString();
      }
      nodeArr.push(
        <TreeNode
          level = level
          text = text
          id = nodeId
          nodes = nodeArr
        />
      )
    }
  }
}
class TreeNode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      level: props.level,
      text: props.text,
      id: props.id,
    }
  }
  render() {
    var id = this.state.id;
    var text = this.state.text;
    var level = this.state.level;
    var label = "";

    function remove(array, element) {

    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
      }
    }

    if (level.length === 1) {
      label = "parent"
    }
    // TODO: more ordering stuff down below
    for (l in levels) {
      if ()
    }
  }
}

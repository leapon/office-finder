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
class Treeview extends React.Component {

}

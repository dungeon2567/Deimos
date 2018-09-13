import React from 'react';
import ReactDOM from 'react-dom';
import { Collapse, Button } from "@blueprintjs/core";
import Tag from "./Tag.js"
import './orcamento.css'

const tags = [
    {
        tid: '2132',
        epc: '999',
        antena: 1,
        rssi: 2
    },
    {
        tid: '1321312111',
        epc: '999',
        antena: 1,
        rssi: 48
    },
    {
        tid: '1113213121',
        epc: '999',
        antena: 1,
        rssi: 33
    },
    {
        tid: '113213211',
        epc: '999',
        antena: 1,
        rssi: 1
    }
]

export default class VisualizadorDeLeitura extends React.Component {
    constructor(props) {
        super(props);
    };

    state = {
        tags: tags
    };

    reportTag(stateTags, tag) {
        var index = stateTags.findIndex((item) => item.tid === tag.tid);

        if (index) {
            stateTags[index] = tag;
        }
        else {
            stateTags.push(tag);
        }
    }

    reportTags(tags){
        this.setState((state, props) => {
            var stateTags = state.tags;

            tags.forEach(tag => {
                this.reportTag(stateTags, tag);
            });

            return {tags: stateTags};
        });
    }



    render() {
        return <div style={{ width: "800px" }}>
            <div className="orcamento header">
                <div className="row">
                    <div className="cell">
                        TID
                        </div>
                    <div className="cell">
                        EPC
                        </div>
                    <div className="cell">
                        RSSI
                         </div>
                    <div className="cell">
                        Atena
                         </div>
                </div>
            </div>
            <div className="orcamento body">
                {this.state.tags.map(tag => (
                    <Tag tag={tag} key={tag.tid} />
                ))}
            </div>
        </div >
        }
}
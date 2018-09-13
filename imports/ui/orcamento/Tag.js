import React from 'react';
import ReactDOM from 'react-dom';
import { Popover, Position, PopoverInteractionKind } from "@blueprintjs/core";
import { Pie } from '@nivo/pie'

const chartData = [
    {
        "id": "rust",
        "label": "rust",
        "value": 124,
        "color": "hsl(177, 70%, 50%)"
    },
    {
        "id": "javascript",
        "label": "javascript",
        "value": 301,
        "color": "hsl(37, 70%, 50%)"
    },
    {
        "id": "ruby",
        "label": "ruby",
        "value": 178,
        "color": "hsl(139, 70%, 50%)"
    },
    {
        "id": "stylus",
        "label": "stylus",
        "value": 64,
        "color": "hsl(113, 70%, 50%)"
    },
    {
        "id": "go",
        "label": "go",
        "value": 536,
        "color": "hsl(68, 70%, 50%)"
    }
];

function saturate(value) {
    //value from 0 to 1
    var hue = ((1 - value) * 120).toString(10);
    return ["hsl(", hue, ", 100%, 50%)"].join("");
}

export default class Tag extends React.Component {
    constructor(props) {
        super(props);
    };

    state = {
        isOpen: false
    };

    handleClick = (e) => {
        this.setState((state, props) => {
            return { isOpen: !state.isOpen }
        });
    }

    render() {
        const color = saturate(this.props.tag.rssi / 50);

        return <Popover interactionKind={PopoverInteractionKind.HOVER}
            popoverClassName="bp3-popover-content-sizing"
            position={Position.RIGHT_BOTTOM}>
            <div className="row" style={{ cursor: "pointer" }} onMouseDown={this.handleClick}>
                <div className="cell">
                    {this.props.tag.tid}
                </div>
                <div className="cell">
                    {this.props.tag.epc}
                </div>
                <div className="cell">
                    {this.props.tag.rssi}
                </div>
                <div className="cell">
                    {this.props.tag.antena}
                </div>
            </div>
            <div>
                <div style={{ textAlign: "center", fontSize: 24, fontWeight:"bold" }}>{this.props.tag.epc}</div>
                <Pie
                    data={chartData}
                    width={250}
                    height={200}
                    margin={{
                        "top": 40,
                        "right": 40,
                        "bottom": 40,
                        "left": 40
                    }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors="nivo"
                    colorBy="id"
                    borderWidth={1}
                    borderColor="inherit:darker(0.2)"
                    radialLabelsSkipAngle={10}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor="inherit"
                    slicesLabelsSkipAngle={10}
                    slicesLabelsTextColor="#333333"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    defs={[
                        {
                            "id": "dots",
                            "type": "patternDots",
                            "background": "inherit",
                            "color": "rgba(255, 255, 255, 0.3)",
                            "size": 4,
                            "padding": 1,
                            "stagger": true
                        },
                        {
                            "id": "lines",
                            "type": "patternLines",
                            "background": "inherit",
                            "color": "rgba(255, 255, 255, 0.3)",
                            "rotation": -45,
                            "lineWidth": 6,
                            "spacing": 10
                        }
                    ]}
                    fill={[
                        {
                            "match": {
                                "id": "ruby"
                            },
                            "id": "dots"
                        },
                        {
                            "match": {
                                "id": "c"
                            },
                            "id": "dots"
                        },
                    ]}
                />
            </div>
        </Popover >
    }
}

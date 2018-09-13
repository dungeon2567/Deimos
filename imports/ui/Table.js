import React from 'react';
import ReactDOM from 'react-dom';
import Lazy from "lazy.js";
import { Button, AnchorButton, ButtonGroup, Icon } from "@blueprintjs/core";

class Table extends React.PureComponent {
    render() {
        const columnsTemplate = {
            gridTemplateColumns: `repeat(${this.props.columns.length}, auto)`
        };

        const footerStyle = {
            gridColumn: `1 / span ${this.props.columns.length}`
        };

        const pageButtons = [

        ];

        if (this.props.pageCount > 0) {
            pageButtons.push(<Button
                icon="double-chevron-left"
                key="first"
                onClick={() => this.props.setCurrentPage(1)}
                disabled={this.props.currentPage === 1} />);

            pageButtons.push(<Button
                onClick={() => this.props.setCurrentPage(this.props.currentPage - 1)}
                icon="chevron-left"
                key="previous"
                disabled={this.props.currentPage === 1} />);

            if (this.props.pageCount > 7) {
                if (this.props.currentPage > 5) {
                    pageButtons.push(<Button
                        icon="more"
                        key="more-left"
                        disabled />);
                }
                else {
                    pageButtons.push(<Button
                        onClick={() => this.props.setCurrentPage(1)}
                        key={"1"}
                        intent={this.props.currentPage === 1 ? "primary" : "none"}>{1}</Button>);
                }

                const start = Math.max(2, Math.min(this.props.currentPage - 2, this.props.pageCount - 5));

                for (var i = start; i < start + 5 && i < this.props.pageCount; ++i) {
                    const j = i;

                    pageButtons.push(<Button
                        key={j.toString()}
                        onClick={() => this.props.setCurrentPage(j)}
                        intent={this.props.currentPage === i ? "primary" : "none"}>{j}</Button>);
                }

                if ((this.props.pageCount - 3) > this.props.currentPage) {
                    pageButtons.push(<Button icon="more"
                        key="more-right"
                        disabled />);
                }
                else {
                    pageButtons.push(<Button
                        key={this.props.pageCount.toString()}
                        onClick={() => this.props.setCurrentPage(this.props.pageCount)}
                        intent={this.props.currentPage === this.props.pageCount ? "primary" : "none"}>{this.props.pageCount}</Button>);
                }
            }
            else {
                for (var i = 2; i < this.props.pageCount; ++i) {
                    const j = i;

                    pageButtons.push(<Button
                        key={j.toString()}
                        onClick={() => this.props.setCurrentPage(j)}
                        intent={this.props.currentPage === i ? "primary" : "none"}>{j}</Button>);
                }
            }

            pageButtons.push(<Button
                key="next"
                onClick={() => this.props.setCurrentPage(this.props.currentPage + 1)}
                icon="chevron-right"
                disabled={this.props.currentPage === this.props.pageCount} />);

            pageButtons.push(<Button
                key="last"
                onClick={() => this.props.setCurrentPage(this.props.pageCount)}
                icon="double-chevron-right"
                disabled={this.props.currentPage === this.props.pageCount} />);
        }

        return <div className="data-table" style={columnsTemplate}>
            <div className="header">
                <div className="row">
                    {this.props.columns.map(c => {
                        return <div key={c.key} onClick={(event) => {
                            event.preventDefault();

                            if (this.props.orderBy === c.key) {
                                if (!this.props.descending) {
                                    this.props.setDescending(true);
                                }
                                else {
                                    this.props.setOrderBy(null);
                                }
                            }
                            else {
                                if (this.props.descending) {
                                    this.props.setDescending(false);
                                }
                                this.props.setOrderBy(c.key);
                            }
                        }}>
                            <span>{c.label}</span>
                            {this.props.orderBy === c.key ?
                                <Icon className="arrow" icon={this.props.descending ? "sort-desc" : "sort-asc"} /> :
                                <Icon className="arrow hidden" icon="sort" />}
                        </div>
                    })}
                </div>
            </div>
            <div className="body">
                {this.props.items.map(item => <div key={this.props.getKey(item)} className="row">
                    {this.props.columns.map(c => {
                        return <div key={c.key}>{c.renderCell(item)}</div>
                    })}
                </div>)}
            </div>
            <div className="footer" style={footerStyle}>
                <ButtonGroup minimal>
                    {pageButtons}
                </ButtonGroup>
            </div>
        </div>
    }
}

export default Table;
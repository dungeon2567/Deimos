import React from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { Button, Navbar, Popover, Alignment, Menu, Position, ButtonGroup, AnchorButton, MenuItem } from "@blueprintjs/core";
import { MultiSelect } from "@blueprintjs/select";
import { Pessoas, paginatePessoas } from '../api/Pessoas.js';
import VisualizadorDeLeitura from './orcamento/VisualizadorDeLeitura.js';
import Lazy from "lazy.js"

import { Meteor } from 'meteor/meteor';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div><Navbar key="navbar" fixedToTop>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Deimos</Navbar.Heading>
        <Navbar.Divider />
        <ButtonGroup minimal={true}>
          <Popover position={Position.BOTTOM} content={
            <Menu>
              <MenuItem text="Submenu" >
                <MenuItem text="Child one" active />
                <MenuItem text="Child two" />
                <MenuItem text="Child three" />
              </MenuItem>
            </Menu>}>
            <AnchorButton rightIcon="caret-down">Visão Geral</AnchorButton>
          </Popover>
        </ButtonGroup>
      </Navbar.Group>
    </Navbar>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <VisualizadorDeLeitura />
      </div>
    </div>
  }
}

export default Main;
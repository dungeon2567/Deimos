import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import 'normalize.css/normalize.css';
import Main from '../imports/ui/Main.js';
 
Meteor.startup(() => {
  render(<Main/>, document.getElementById('main'));
});
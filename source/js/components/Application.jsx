import React from 'react';
import Checkbox from './Checkbox.jsx';

const items = [
  'One',
  'Two',
  'Three'
];

let Application = React.createClass({

  handleFormSubmit: function (formSubmitEvent) {
    formSubmitEvent.preventDefault();

    for (let checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  },

  toggelCheckbox: function (label) {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  },

  componentWillMount: function () {
    this.selectedCheckboxes = new Set();
  },

  createCheckbox: function (label) {
    return <Checkbox 
              label={label} 
              handleCheckboxChange={this.toggelCheckbox}
              key={label} />;
  },

  createCheckboxes: function () {
    return items.map(this.createCheckbox);
  },

  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <button className="btn btn-default" type="submit">Save</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
});

export default Application;
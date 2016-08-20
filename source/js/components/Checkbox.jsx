import React from 'react';

let Checkbox = React.createClass({
  getInitialState: function () {
    return {
      isChecked: false
    };
  },

  toggleCheckbox: function () {
    this.setState({
      isChecked: ! this.state.isChecked
    });

    this.props.handleCheckboxChange(this.props.label);
  },

  render: function () {
    return (
      <div className="checkbox">
        <label>
          <input type="checkbox" 
                  value={this.props.label} 
                  checked={this.state.isChecked} 
                  onChange={this.toggleCheckbox} />

          {this.props.label}
        </label>
      </div>
    );
  }
});

export default Checkbox;
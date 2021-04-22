import React, { Component } from "react";
require('./form-field.css');

import TextField from '../text-field/text-field';
import SelectField from '../select-field/select-field';

export default class FormField extends Component {
  onChangeHandler = value => {
    if (!this.props.onChange) return;

    this.props.onChange(value, event);
  }
  
  render() {
    return (
      <div
        className={`form-field${this.props.type === 'checkbox' ? ' form-field_type_checkbox' : ''}`}
      >
        <label htmlFor={this.props.id} className="form-field__label">
          {this.props.label}
        </label>

        {this.props.type === 'select' && (
          <SelectField
            mix="form-field__control"
            options={this.props.options}
            id={this.props.id}
            name={name}
            onChange={this.onChangeHandler}
            value={this.props.value}
          />
        )}
        {this.props.type === 'checkbox' && (
          <input
            className="form-field__control"
            type="checkbox"
            id={this.props.id}
            name={this.props.name}
            onChange={e => this.onChangeHandler(e.target.checked)}
            checked={this.props.value}
          />
        )}
        {this.props.type !== 'checkbox' && this.props.type !== 'select' && (
          <TextField
            mix="form-field__control"
            type={this.props.type}
            id={this.props.id}
            name={this.props.name}
            onChange={this.onChangeHandler}
            value={this.props.value}
          />
        )}
      </div>
    );
  }
}

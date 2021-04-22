import React, { Component } from "react";
require('./select-field.css');

export default class SelectField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value || '',
    };
  }

  componentDidUpdate() {
    if (this.props.value !== this.state.value) {
      this.setState({
        value: this.props.value,
      });
    }
  }

  onChange = event => {
    this.setState({
      value: event.target.value,
    }, () => {
      this.props.onChange(this.state.value, event);
    });
  }

  render() {
    const params = {
      id: this.props.id,
      name: this.props.name,
    };

    return (
      <select
        className={['select-field', this.props.mix].join(' ')}
        onChange={this.onChange}
        value={this.state.value}
        {...params}
      >
        {this.props.options.map(option => {
          return (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    );
  }
}

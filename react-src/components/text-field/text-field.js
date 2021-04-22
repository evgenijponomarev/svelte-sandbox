import React, { Component } from "react";
require('./text-field.css');

export default class TextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
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
    const props = {
      id: this.props.id,
      name: this.props.name,
      type: this.props.type,
    };

    return (
      <input
        className={['text-field', this.props.mix].join(' ')}
        onChange={this.onChange}
        value={this.state.value}
        {...props}
      />
    );
  }
}

TextField.defaultProps = {
  value: '',
};

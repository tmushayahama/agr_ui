/* eslint-disable react/no-set-state */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { List } from 'immutable';

class DropdownCheckboxFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: props.defaultFilter || List()};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  fireCallbacks() {
    this.props.onFilter(this.state.value);
  }

  handleChange(event) {
    let { value } = this.state;
    if (event.target.checked) {
      value = value.push(event.target.value);
    } else {
      value = value.delete(value.indexOf(event.target.value));
    }
    this.setState({value}, () => this.fireCallbacks());
  }

  handleClick(event) {
    event.preventDefault();
    this.fireCallbacks();
  }

  handleClear(event) {
    event.preventDefault();
    this.setState({value: List()}, () => this.fireCallbacks());
  }

  render() {
    return (
      <Form onSubmit={this.handleClick}>
        <FormGroup>
          {this.props.options.map(option => (
            <FormGroup check key={option}>
              <Label check>
                <Input
                  checked={this.state.value.indexOf(option) > -1}
                  onChange={this.handleChange}
                  type='checkbox'
                  value={option}
                /> {option}
              </Label>
            </FormGroup>
          ))}
        </FormGroup>
        <FormGroup className='d-flex justify-content-between'>
          <Button onClick={this.handleClear} outline>Clear</Button>
        </FormGroup>
      </Form>
    );
  }
}

DropdownCheckboxFilter.propTypes = {
  column: PropTypes.object,
  defaultFilter: PropTypes.instanceOf(List),
  onFilter: PropTypes.func,
  options: PropTypes.array,
};

export default DropdownCheckboxFilter;

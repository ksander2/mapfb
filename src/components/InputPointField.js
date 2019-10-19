import React from 'react';

import './InputPointField.css';

class InputPointField extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.maxLengthInput = 25;
    this.placeholderText = 'Введите название точки';
    this.id = 0;
    this.text = '';
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      if (this.props.text !== '') {
        this.inputRef.current.value = '';
        this.props.addPointAction({
          name: this.text,
          id: this.id++,
          coordinate: this.props.centerMap,
        });
      }
    }
  };

  handeIputTextChange = event => {
    this.text = event.target.value;
  };

  render() {
    return (
      <input
        id={'input-point'}
        placeholder={this.placeholderText}
        className={'input-point-name'}
        ref={this.inputRef}
        onChange={this.handeIputTextChange}
        onKeyPress={this.handleKeyPress}
        maxLength={this.maxLengthInput}
      />
    );
  }
}

export default InputPointField;

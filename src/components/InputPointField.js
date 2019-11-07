import React from "react";
import PropTypes from "prop-types";

import "./InputPointField.css";

class InputPointField extends React.Component {
  constructor(props) {
    super(props);
    this.id = 0;
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      if (event.target.value !== "") {
        this.props.addPointAction({
          name: event.target.value,
          id: this.id++,
          coordinate: this.props.centerMap
        });
        event.target.value = "";
      }
    }
  };

  render() {
    return (
      <input
        id={"input-point"}
        placeholder={this.placeholderText}
        className={"input-point-name"}
        placeholderText="Введите название точки"
        onKeyPress={this.handleKeyPress}
        maxLength="30"
      />
    );
  }
}

InputPointField.propTypes = {
  text: PropTypes.string,
  centerMap: PropTypes.array.isRequired
};

export default InputPointField;

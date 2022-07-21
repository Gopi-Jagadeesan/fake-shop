import React from "react";
import { BeatLoader } from "react-spinners";

const override = `
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
`;

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    const { spinnerStyle } = this.props;
    return (
      <div className="sweet-loading">
        <BeatLoader
          css={spinnerStyle || override}
          size={18}
          margin={2}
          color="#BDBDC0"
          loading
        />
      </div>
    );
  }
}

export default Spinner;

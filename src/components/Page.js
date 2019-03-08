import React from "react";

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollable: false;
    }
  }

  render = () =>
    <div className="page">
      { this.props.children }
    </div>;
}

export default Page;

import React from 'react';
interface Props {
}

interface State {
  message: string;
}

class TitleChanger extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      message: 'Interface rendering'
    };
  }
  changeMessage = () => {
    this.setState({ message: 'Interface updated' });
  }

  render() {
    return (
      <div>
        <p>Message: {this.state.message}</p>
        <button onClick={this.changeMessage}>Change props</button>
      </div>
    );
  }
}

export default TitleChanger;

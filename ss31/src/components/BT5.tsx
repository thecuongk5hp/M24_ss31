import React from 'react';
interface Props {
}
interface State {
  slogan: string;
}
class Exercise01 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      slogan: 'Học code để đi làm'
    };
  }
  changeSlogan = () => {
    this.setState({ slogan: 'Học code sẽ thành công. Cố lên!!!' });
  }
  render() {
    return (
      <div>
        <p>Slogan: {this.state.slogan}</p>
        <button onClick={this.changeSlogan}>Change State</button>
      </div>
    );
  }
}

export default Exercise01;

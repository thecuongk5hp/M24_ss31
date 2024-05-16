import React from 'react';
interface Props {
}
interface State {
  company: string;
}
class Exercise01 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      company: 'Rikkei Academy'
    };
  }
  handleChangeState = () => {
    this.setState({ company: 'RikkeiSoft' });
  }
  render() {
    return (
      <div>
        <h1>Company: {this.state.company}</h1>
        <button onClick={this.handleChangeState}>Change State</button>
      </div>
    );
  }
}
export default Exercise01;

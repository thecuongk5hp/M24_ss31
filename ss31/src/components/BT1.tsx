import React from 'react';
interface Props {}
interface State {
  userName: string;
}
class Exercise01 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // Khởi tạo state
    this.state = {
      userName: 'Nguyễn Thế Cường'
    };
  }
  render() {
    return (
      <div>
        <h1>Xin chào, {this.state.userName}!</h1>
      </div>
    );
  }
}
export default Exercise01;

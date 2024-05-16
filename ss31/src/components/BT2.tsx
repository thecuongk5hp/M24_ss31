import React from 'react';
interface Props {}
class Notification extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("Component đã được mount!");
  }
  render() {
    return (
      <div>
        <p>Notification Component</p>
      </div>
    );
  }
}
export default Notification;

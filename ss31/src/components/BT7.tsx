import React from 'react';

class MyComponent extends React.Component {
  componentDidMount() {
    document.title = 'Tiêu đề mới';
  }

  render() {
    return (
      <div>
        Nội dung của component
      </div>
    );
  }
}

export default MyComponent;

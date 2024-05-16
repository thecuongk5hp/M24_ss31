import React, { Component } from 'react'
interface Props{

}

interface State{
    name:string,
    age:number,
    loading:boolean,
    count:number
}
export default class classcomponent extends Component <Props,State> {
    constructor(props:Props){
        super(props)
        this.state = {
            name:"hoa",
            age:25,
            count:0,
            loading:true,
    }
}
    componentDidMount(): void {
        console.log("chạy sau khi constructor được rainer lần đầu");
        // phương thức componentDidMount được chạy sau khi component render
    }
    // dùng cấc phương thức mặc định React cung cấp
componentWillMount(): void {
    console.log("chạy sau khi constructor khởi tạo xong giá trị state");
    /*
        trong phương thức componentwillMount có thể tính toán lại state
        nhưng lưu ý cái thời gian chuyển từ phương thức componentwillMount đến phương thức render rất nhanh
     */
}
    handleClick=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
        console.log("component đc re-reder : render lại");
        
        /*
        this.setState({
            name:"hồng",
        })
    */
        
        console.log("component được render lần đầu");

    return (
      <div>classcomponent
        <p> Xin chào {this.state.name} </p>
        <button onClick={this.handleClick}>Thay đổi State</button>
      </div>
    )
  }
}
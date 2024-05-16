// import React from 'react'
import ClassComponent from './components/classcomponent'
import BT1 from './components/BT1'
import BT2 from './components/BT2'
import BT3 from './components/BT3'
import BT4 from './components/BT4'
import BT5 from './components/BT5'
import BT6 from './components/BT6'
import BT7 from './components/BT7'
import BT8 from './components/BT8'
export default function App() {
  return (
    <div>
      {/* App
      lifecycle: vòng đời của classComponent
      functionalComponet không có vòng đời
      VD: 1 con người có vòng đời:
      Sinh ra => trưởng thành => lập nghiệp => già => chết
      class componet cũng có vòng đời riêng cảu nó
      4 giai đoạn : 
      1, khởi tạo (initial)
      2, mounting (gắn vào UI)
      3, updating (cập nhật)
      4, unmounting (gỡ khỏi UI)
      */
        <ClassComponent></ClassComponent>
      }
      <BT1></BT1>
      <BT2></BT2>
      <BT3></BT3>
      <BT4></BT4>
      <BT5></BT5>
      <BT6></BT6>
      <BT7></BT7>
      <BT8></BT8>
    </div>
  )
}
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
//导入react
import React from 'react'
//定义组件
class App extends React.Component{

  render(){
    const boss='李云龙';
    return(
     <div>
        <h2>独立团,团长{boss}</h2>
        <Yiying></Yiying>
     </div>
    )
    
  }

}
//另一个组件
class Yiying extends React.Component{
  //构造函数
  constructor(props){
    super(props)
    //数据
    this.state={
      solders:['虎子','柱子','王根生']

    }
    //将onclick的事件里面的this作用域绑定到下面
    this.addSolder=this.addSolder.bind(this)
  }
  addSolder(){
    //改变state里面的数据
    this.setState({
      //复制之前的数据   并将生成的新数组赋值
      solders:[...this.state.solders,'新兵蛋子'+Math.random()]
    })
  }
  render(){
    const boss="张大喵"
    return(
      <div> 
         <h2>一营营长，{boss}</h2>
         <button onClick={this.addSolder}>新兵</button>
         {/* 渲染列表 */}
         <ul>
           {this.state.solders.map(v=>{
             return <li key={v}> {v} </li>
           })}
         </ul>
      </div>
    )
  }
}

//导出组件
export default App;

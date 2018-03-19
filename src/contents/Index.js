//导入react
import React from 'react'
import {connect} from 'react-redux'
//导入组件
import List from '../components/List'
import Input from '../components/Input'
// 导入redux
import {add,del,edit,search} from '../redux/list'
// 导入路由
import {Link} from 'react-router-dom'


//定义组件
class Index extends React.Component {
  //构造函数
  constructor(props) {
    super(props)
    //数据
    this.state = {
      list: []
    }
  }
  
// 删除数值方法声明
deleteValue(value){
  // let nList=this.state.list;
  // nList.splice(value,1);
  // this.setState({
  // list: nList
  // })
  this.props.del(value)
}
  render() {
    return (
      <div className="index">
        <h1 className="index-title clearfix">我的文章列表页<button> <Link to={{pathname: "/add"}}> 添加 </Link></button></h1>
        <List listValue={this.props.list} 
        deleteValue={this.deleteValue.bind(this)}></List>
      </div>
    )

  }

}

//将传回来state转成props.list
const mapStatetoProps = (state)=>{
  return {list:state}
}
//用的action集合
const actionCreators = {add,del,edit,search}
//连接
Index = connect(mapStatetoProps, actionCreators)(Index)
//导出组件
export default Index;

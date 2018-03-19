//导入react
import React from 'react'
import {connect} from 'react-redux'
import {add,del,edit,search} from '../redux/list'
import {Link, Redirect} from 'react-router-dom'
import Input from '../components/Input'

//定义组件
class Add extends React.Component {
  //构造函数
  constructor(props) {
    super(props)
    var _id = this.props.match.params.id
    // console.log(_id)
    if(_id){
      this.props.search(_id)
    }
    this.state = {
      id : _id,
      is_add:false
    }
  }
  //增加数值方法声明
  getValue(value) {
    // console.log(value,this.state.id)
    if(this.state.id){
      this.props.edit(Number(this.state.id),value)
    }else{
      this.props.add(value)
    }
    this.setState({
      is_add:true
    })
  }





  render() {
    // 编辑或添加之后页面重定向
    if(this.state.is_add) {
      return (
       <Redirect to="/"/>
      )
     }
    return (
      <div className="add">
            <h1 className="clearfix">添加/编辑页面<button><Link to="/">返回</Link></button></h1>
            <Input getValue={this.getValue.bind(this)} value={this.props.list[this.state.id]}></Input>
      </div>
    )

  }

}



const mapStatetoProps = (state)=>{
    return {list:state}
  }
  const actionCreators = {add,del,edit,search}
  
  Add = connect(mapStatetoProps, actionCreators)(Add)

//导出组件
export default Add;

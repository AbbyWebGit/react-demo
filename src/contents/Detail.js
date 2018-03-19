//导入react
import React from 'react'
import {connect} from 'react-redux'

import {search} from '../redux/list'
import {Link} from 'react-router-dom'

//定义组件
class Detail extends React.Component {
  //构造函数
  constructor(props) {
    super(props)
    //match里面含有所有router信息，params是参数
    // console.log(this.props.match)
    //初始化调用search方法,将redux里面数据都返回到组件中
    this.props.search(this.props.match.params.id)
  }
  render() {
    
    return (
      <div className="detail">
        <h1>{this.props.list[this.props.match.params.id].title}<button> <Link to={{pathname: "/add/"+this.props.match.params.id}}> 编辑 </Link></button> </h1>
        <div className="content">{this.props.list[this.props.match.params.id].content}</div>
      </div>
    )

  }

}



//redux初始化
const mapStatetoProps = (state)=>{
  return {list:state}
}
const actionCreators = {search}

Detail = connect(mapStatetoProps, actionCreators)(Detail)
//导出组件
export default Detail;

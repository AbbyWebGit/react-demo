//导入react
import React from 'react'
import {Link} from 'react-router-dom'

//定义组件
class List extends React.Component {
  //构造函数
  constructor(props) {
    super(props)
    //数据
    this.state = {
      list: []
    }
  }
  deleteFun(e) {
    this.props.deleteValue(e.target.getAttribute('index'));
  }

  render() {

    return (
      <div className="list">
        {/* 渲染列表 */}
        <ul >
          {this.props.listValue.map((v, index) => {
              return <li key={index} className="clearfix">
                <Link to={{
                  pathname: "/detail/"+index
                }}> {v.title}  </Link>
                <button index={index}  onClick={this.deleteFun.bind(this)}>删除</button>
              </li>
            })}
        </ul>

      </div>
    )

  }

}
//导出组件
export default List;

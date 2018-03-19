//导入react
import React from 'react'

//定义组件
class List extends React.Component {
    //构造函数
    constructor(props) {
        super(props)
        //数据
        var _title='';
        var _content='';
        var _btn_txt = "添加"
        if(this.props.value){
            _title=this.props.value.title;
            _content=this.props.value.content;
            _btn_txt = "修改"
        }
        this.state = {
            title:_title,
            content:_content,
            btn_txt:_btn_txt
        }
    }
  
    //添加按钮事件
    getButton(event) {
        this.props.getValue({
            title:this.state.title,
            content:this.state.content
        })
    }
    // 表单受控组件，为了将input组件中value变成可读可写的
    handleChange(event) {
        this.setState({title: event.target.value});
    }
     // 表单受控组件，为了将textarea组件中value变成可读可写的
    taHandleChange(event) {
        this.setState({content: event.target.value});
    }
    render() {
        return (
            <div className="add-index">
                <div className="add-title">
                    <label>文章标题：</label>
                    <input type="text" value={this.state.title} onChange={this.handleChange.bind(this)} />
                    
                </div>
                <div className="add-content">
                    <label>文章内容：</label>
                     <textarea rows="3" value={this.state.content} onChange={this.taHandleChange.bind(this)}>
                     </textarea>
                </div>
                {/* 按钮事件 */}
                <button style={{ "border": "1px solid #333" }}  onClick={this.getButton.bind(this)}> {this.state.btn_txt}</button>
            </div>
        )

    }

}
//导出组件
export default List;

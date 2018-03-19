import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//引入页面
import Index from './contents/Index'
import Detail from './contents/Detail'
import Add from './contents/Add'
//引入配置文件
import registerServiceWorker from './registerServiceWorker';

//引入router
import {BrowserRouter, Route} from 'react-router-dom'

// 引入redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// 异步请求
import thunk from 'redux-thunk'
//引入redux文件
import { list} from './redux/list'


// 通过createStore生成store，添加异步请求中间件

const store = createStore(list,applyMiddleware(thunk))

ReactDOM.render(
// <Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store
    (<Provider store={store}>
      <BrowserRouter>
    <div>    
    
        {/* exact是将"/"做唯一匹配，否则"/"和"/xxx"都会匹配到path为"/"的路由 */}
        <Route exact path="/" component={Index}/>
        <Route path="/detail/:id" component={Detail}/>       
        <Route path="/add/:id" component={Add}/>     
        <Route exact path="/add" component={Add}/>
    </div>

</BrowserRouter>
</Provider>)

, document.getElementById('root'));

registerServiceWorker();

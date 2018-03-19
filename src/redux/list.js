let list= [
    {title:"春天来了",
    content:"小鸟是啁啾风儿是柔和了软软的阳光里小草也悄悄的绿了但是天气暖了还冷厚重的外套里 "
    },
    {title:"夏天来了",
    content:"小鸟是啁啾风儿是柔和了软软的阳光里小草也悄悄的绿了但是天气暖了还冷厚重的外套里 "
    },
    {title:"秋天来了",
    content:"小鸟是啁啾风儿是柔和了软软的阳光里小草也悄悄的绿了但是天气暖了还冷厚重的外套里 "
    },
    {title:"冬天来了",
    content:"小鸟是啁啾风儿是柔和了软软的阳光里小草也悄悄的绿了但是天气暖了还冷厚重的外套里 "
    }
]

// reducer
export function list(store =list, action) {
    // switch语句 判断传进来的方法是哪个
    let newStore = [...store];
    switch (action.type) {
        case 'ADD':
            // 解构赋值
            return [...store, action.value]
        case 'DEL':
            //删除指定元素，返回新数组
            newStore.splice(action.index, 1);
            return newStore
        case 'EDIT':
            //删除数组元素并替换
            newStore.splice(action.index, 1, action.value);
            console.log(newStore)
            return newStore;
        case 'SEARCH':
            return store
        default:
            return store
    }
}

//action

//增加
export function add(value) {
    return {
        type: 'ADD',
        value
    }

}
//删除
export function del(index) {
    return {
        type: 'DEL',
        index
    }

}
//修改
export function edit(index, value) {
    return {
        type: 'EDIT',
        index,
        value
    }

}
//查询
export function search(index) {
    // console.log(index)
    return {
        type: 'SEARCH',
        index
    }
}
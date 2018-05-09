import React from 'react'
import List from '../../components/List/index'
import Input from '../../components/Input/index'

class Todo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: []
        }
    }

    /**
     * 智能组件接受数据,定义规则
     * @param data
     */
    onSubMit() {
        return (data) => {
            var id = this.state.todos.length;
            // concat() 方法用于连接两个或多个数组。
            // 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
            //智能组件将数据组织好之后传给木偶组件进行展示
            this.setState({
                todos: this.state.todos.concat(
                    {
                        id: id,
                        value: data
                    }
                )
            })
        }
    }

    /**
     * 接到木偶组件的回传进行数据的更改
     * @returns {function(*=)}
     */
    delData() {
        return (id) => {
            this.setState({
                todos: this.state.todos.filter((item) => {
                    return (
                        item.id != id
                    )
                })
            })
        }
    }

    render() {
        return (
            <div>
                <Input
                    onSubMit={this.onSubMit()}
                />
                <List
                    todos={this.state.todos}
                    delData={this.delData()}
                />
            </div>
        )
    }
}

export default Todo


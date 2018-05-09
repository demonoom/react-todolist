import React from 'react'

class List extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    /**
     * li标签点击删除的方法
     * @param id
     * @returns {function()}
     */
    delLi(id) {
        return () => {
            //拿到要删除的id,回传给智能组件,让智能组件进行数据的更改
            this.props.delData(id)
        }
    }

    render() {
        var todos = this.props.todos;
        return (
            <ul>
                {todos.map((v) => {
                    return (<li
                        key={v.id}
                        onClick={this.delLi(v.id)}
                        style={{listStyle: 'none', cursor: 'pointer'}}
                    >{v.value}</li>)
                })}
            </ul>
        )
    }
}

export default List
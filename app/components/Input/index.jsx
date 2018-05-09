import React from 'react'

class Input extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            value: ''
        }
    }

    /**
     * input输入框改变的回调
     * @returns {function(*)}
     */
    inputOnchange() {
        return (e) => {
            this.setState({value: e.target.value})
        }
    }

    /**
     * 提交的回调
     * @returns {function()}
     */
    inputonSubmit() {
        return (e) => {
            var value = this.state.value;
            if (e.keyCode === 13 && value.trim()) {
                //木偶组件通过事件获取的数据传递给智能组件,自己这边对数据以及功能都不做处理
                this.props.onSubMit(value);
                this.setState({value: ''});
            }
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.value}
                    style={{width: '100%', height: '30px'}}
                    onChange={this.inputOnchange()}
                    onKeyUp={this.inputonSubmit()}
                />
            </div>
        )
    }
}

export default Input
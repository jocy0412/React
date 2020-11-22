import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        username: '',
        message: '',
    }
    // property initializer syntax를 사용해서 화살표 함수 형태로 메서드를 정의하면 this를 binding이 필요X
    // constructor(props) {
    //     super(props);
    //     this.handleChage = this.handleChage.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleChage = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username : '',
            message : ''
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChage}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChage}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;
import React, { Component } from 'react';

class Counter extends Component {
    // constructor를 통해 state를 만들 경우
    // constructor(props) {
    //     super(props);
    //     //state 초기 값 설정하기
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0
    //     };
    // }

    // counstructor에서 state를 꺼내는 경우
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const {number, fixedNumber} = this.state; // state를 조회할 때는 this.state로 조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    // onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
                    onClick = {() =>{
                        // this.setState를 두번 실행이 안되는 경우
                        // this.setState({ number: number + 1});
                        // this.setState({ number: this.state.number + 1});

                        // this.setState를 두번 실행이 되는 경우
                        // (A 코드)
                        // this.setState(prevState => {
                        //     return {
                        //         number: prevState.number + 1
                        //     };
                        // });

                        // (B 코드) - 화살표 함수에서 값을 바로 반환하고 싶을 때 블록{}을 생략함
                        // this.setState(prevState => ({
                        //     number: prevState.number + 1
                        // }));
                        // A 코드와 B코드는 완전히 똑같은 기능을 합니다.
                        // B 코드는 함수에서 바로 객체를 반환한다는 의미 입니다.

                        // this.setState가 끝난 후 특정 작업 실행하기
                        // setState의 두번째 파라미터로 콜백 함수를 등록하여 작업을 처리가능
                        this.setState(
                            {
                                number : number +1
                            },
                            () => {
                                console.log('방금 setState가 호출되었습니다.');
                                console.log(this.state);
                            }
                        )
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
import React, { Component } from 'react';

// MyComponent 예제 코드
// import MyComponent from './MyComponent';

// const App = () => {
//     return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>;
// };

// 클래스형 state, Counter 예제코드
// import Counter from './Counter'
// const App = () => {
    // return <Counter />
// }

// 함수형 state, Say 예제코드
// import Say from './Say'
// const App = () => {
//     return <Say />
// }

// 이벤트 연습 예제코드
// import EventPractice from './EventPractice'
// const App = () => {
//     return <EventPractice />
// }

// ValidationSample 예제코드
// import ValidationSample from './ValidationSample'
// class App extends Component{
//     render() {
//         return (
//             <ValidationSample />
//         );
//     }
// }

// ScrollBox 예제코드
// import ScrollBox from './ScrollBox';
// class App extends Component{
//     render() {
//         return (
//             <div>
//                 <ScrollBox ref={(ref) => this.scrollBox=ref}/>
//                 <button onClick={() => this.scrollBox.scrollToBottom()}>
//                     맨밑으로
//                 </button>
//             </div>
//         );
//     }
// }

// import IterationSample from './IterationSample';
// class App extends Component{
//     render() {
//         return (
//             <div>
//                 <IterationSample/>
//             </div>
//         );
//     }
// }

import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component{

    state = {
        color: '#000000'
    }

    handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤색상</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color} />
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;

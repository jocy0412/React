import React from 'react';
import PropTypes from 'prop-types';

// 함수형 컴포넌트1 - function 키워드 사용
// function MyComponent() {
//     return (
//         <div>나의 새롭고 멋진 컴포넌트!</div>
//     )
// }

// 함수형 컴포넌트2 - 화살표 문법
const MyComponent = ({name, favoriteNumber, children}) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name} 입니다. <br />
            children 값은 {children}
            입니다.
            <br />
            제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
    )
};

MyComponent.defaultProps = {
    name: '기본이름'
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

// 이 코드는 다른 파일에서 이 파일을 import할 때, 위에서 선언한 MyComponent 클래스를 불러오도록 설정
export default MyComponent;

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// 클래스형
class MyComponent extends Component {
    // defaultProps와 propTypes를 class 내부에서 설정할 때
    // defaultProps와 propTypes를 사용하면 컴포넌트마다 필요한 props를 쉽게 파악하여 개발 능률 향상
    static defaultProps = {
        name: '기본이름'
    };
    static proTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };
    render() {
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>
                안녕하세요, 제 이름은 {name} 입니다. <br />
                children 값은 {children}
                입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        );
    }
}

// 이 코드는 다른 파일에서 이 파일을 import할 때, 위에서 선언한 MyComponent 클래스를 불러오도록 설정
export default MyComponent;

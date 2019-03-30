import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.scss';


class Modal extends Component {

    componentDidMount() {
        document.addEventListener('mousedown', this.clickOutsideHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.clickOutsideHandler);
    }

    clickOutsideHandler = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            if (typeof this.props.clickAwayHandler === 'function') {
                this.props.clickAwayHandler();
            }
        }
    };

    buttonClickHandler = () => {
        if (typeof this.props.clickAwayHandler === 'function') {
            this.props.clickAwayHandler();
        }
    };

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    };

    render() {

        const { children } = this.props;

        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, { modalCloseHandler: this.props.clickAwayHandler }));

        return (
            <aside className={styles.Modal__overlay}>
                <div className={styles.Modal + " z-depth-2"} ref={this.setWrapperRef}>

                    <button type="button"
                            className={styles.Modal__closeButton + " btn-floating waves-effect waves-light red"}
                            onClick={this.buttonClickHandler}>
                        <i className="material-icons">close</i>
                    </button>

                    {childrenWithProps}
                </div>
            </aside>
        );
    }
}

Modal.propTypes = {
    children: PropTypes.element,
    clickAwayHandler: PropTypes.func,
};

export default Modal;

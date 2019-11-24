import React from 'react';
import styles from './DisplayStart.module.css';

class DisplayStart extends React.Component {
    render = () => {
        let classRed = ''
        if (this.props.state.maxValue === this.props.state.currentValue || this.props.state.currentValue === this.props.state.displayStartMenu.secondMenu ) {
            classRed = styles.active
        }else if (this.props.state.currentValue === this.props.state.displayStartMenu.firstMenu){
            classRed=styles.firstMenu
        }
        return (
            <div className={styles.displayStart}>
                <h1 className={classRed}>
                    {this.props.state.currentValue}
                </h1>
            </div>
        )
    }
}


export default DisplayStart;

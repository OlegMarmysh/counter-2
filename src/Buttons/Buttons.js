import React from 'react';
import styles from './Buttons.module.css';


class Buttons extends React.Component {
    render = () => {
        let DisabledInc = this.props.state.currentValue === this.props.state.maxValue || this.props.isDisabled === true
        let DisabledSettings =this.props.isDisabled ? ((this.props.state.startValue >= this.props.state.maxValue) || this.props.state.startValue<0) : true
        let DisabledReset = !!this.props.isDisabled
        return (
            <div className={styles.container}>
                <div className={styles.buttons}>
                    <button disabled={DisabledSettings} className={styles.button} onClick={this.props.onSetSettings}>set</button>
                </div>
                <div className={styles.buttons}>
                    <button disabled={DisabledInc} className={styles.button} onClick={this.props.onPlusValue}>inc</button>
                    <button disabled={DisabledReset} className={styles.button} onClick={this.props.onReset}>reset</button>
                </div>
            </div>
        )
    }
}

export default Buttons;

import React from 'react';
import styles from './DisplaySettings.module.css';

class DisplaySettings extends React.Component {
    onMaxValueTitleChange = (e) => {
        this.props.onMaxValueChange(+e.currentTarget.value)
    }
    onStartValueTitleChange = (e) => {
        this.props.onStartValueChange(+e.currentTarget.value)
    }
    render = () => {
        let classForRed = this.props.state.startValue >= this.props.state.maxValue ? styles.border : ''
        let classForRedTwo = this.props.state.startValue < 0 ? styles.border : ''
        return (
            <div className={styles.displaySettings}>
                <div className={styles.displayInput}>
                    <div>
                    <span>
                        max value: <input className={classForRed}
                                          type='number'
                                          value={this.props.state.maxValue}
                                          onChange={this.onMaxValueTitleChange}
                                          onClick={this.props.onClickInput}
                                          onFocus={this.props.changeIsDisabled}

                    />
                    </span>
                    </div>
                    <div>
                    <span>
                        start value: <input className={`${classForRed}${classForRedTwo}`}
                                            type='number'
                                            value={this.props.state.startValue}
                                            onChange={this.onStartValueTitleChange}
                                            onClick={this.props.onClickInput}
                                            onFocus={this.props.changeIsDisabled}
                    />
                    </span>
                    </div>
                </div>
            </div>
        )
    }
}


export default DisplaySettings;

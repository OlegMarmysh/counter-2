import React from 'react';
import styles from './Display.module.css';
import DisplayStart from "./DisplayStart";
import DisplaySettings from "./DisplaySettings";


class Display extends React.Component {
    render = () => {
        return (
            <div className={styles.display}>
                <div>
                    <DisplaySettings state={this.props.state}
                                     onMaxValueChange={this.props.onMaxValueChange}
                                     onStartValueChange={this.props.onStartValueChange}
                                     onClickInput={this.props.onClickInput}
                                     changeIsDisabled={this.props.changeIsDisabled}
                    />
                </div>
                <div>
                    <DisplayStart state={this.props.state}/>
                </div>
            </div>
        )
    }
}


export default Display;

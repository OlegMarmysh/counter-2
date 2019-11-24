import React from 'react';
import styles from './App.module.css';
import Display from "./Displays/Display";
import Buttons from "./Buttons/Buttons";

class App extends React.Component {

    state = {
        startValue: 0,
        maxValue: 3,
        currentValue: 0,
        isDisabled: false,
        displayStartMenu: {
            firstMenu: 'enter values and press `set`',
            secondMenu: 'incorrect values'
        }
    }
    changeIsDisabled = () => {
        this.setState({
            isDisabled: true
        })
    }
    onPlusValue = () => {
        if (this.state.currentValue < this.state.maxValue) {
            this.setState(
                {currentValue: this.state.currentValue + 1},
                ()=>{this.saveState()}
            )
        }
    }
    onReset = () => {
        this.setState(
            {currentValue: this.state.startValue},
            ()=>{this.saveState()}
        )
    }
    onSetSettings = () => {
        this.setState(
            {
                currentValue: this.state.startValue,
                /*maxValue: this.state.maxValue,*/
                isDisabled: false
            },
            ()=>{this.saveState()}
        )
    }
    onMaxValueChange = (number) => {
        this.setState(
            {maxValue: number},
            ()=>{this.saveState()}
        )
    }
    onStartValueChange = (number) => {
        this.setState(
            {startValue: number},
            ()=>{this.saveState()}
        )
    }
    onClickInput = () => {
        if(this.state.startValue>=this.state.maxValue||this.state.startValue<0 ){
            this.setState(
                {currentValue: this.state.displayStartMenu.secondMenu},
                ()=>{this.saveState()}
            )}
        else{this.setState({
            currentValue: this.state.displayStartMenu.firstMenu
        },
            ()=>{this.saveState()})}
    }
    componentDidMount() {
        this.restoreState()
    }

    restoreState = () => {
        let state = {
            startValue: 0,
            maxValue: 3,
            currentValue: 0,
            displayStartMenu: {
                firstMenu: 'enter values and press `set`',
                secondMenu: 'incorrect values'
            }
        }
        let stateAsString = localStorage.getItem('our-state');
        if (stateAsString != null) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state)
    }
    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('our-state', stateAsString)
    }
    render = () => {
        return (
            <div className={styles.app}>
                <Display state={this.state}
                         onMaxValueChange={this.onMaxValueChange}
                         onStartValueChange={this.onStartValueChange}
                         onClickInput={this.onClickInput}
                         changeIsDisabled={this.changeIsDisabled}
                />
                <Buttons onPlusValue={this.onPlusValue}
                         state={this.state}
                         onReset={this.onReset}
                         onSetSettings={this.onSetSettings}
                         isDisabled={this.state.isDisabled}

                />
            </div>
        )
    }
}


export default App;

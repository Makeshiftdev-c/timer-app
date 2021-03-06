import React from 'react';
import './App.css';
import helpers from './helpers.js';
import uuid from 'uuid';
import UIfx from 'uifx';
import startAudio from './my-sounds/pauseon.mp3';
import stopAudio from './my-sounds/pauseoff.mp3';

const start = new UIfx(startAudio);
const stop = new UIfx(stopAudio);

class TimersDashboard extends React.Component {
    state = {
        timers: [
            {
                title: "Timer",
                project: "Project",
                id: uuid.v4(),
                elapsed: 0,
                runningSince: null,
                position: 0,
                numberOfTimers: 0,
            },
        ],
    };
    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    };
    handleEditFormSubmit = (attrs) => {
        this.updateTimer(attrs);
    };
    handleTrashClick = (timerId, timerPosition) => {
        this.deleteTimer(timerId, timerPosition);
    };
    handleStartClick = (timerId) => {
        this.startTimer(timerId);
    };
    handleStopClick = (timerId) => {
        this.stopTimer(timerId);
    };
    handleUpClick = (timerId, timerPosition) => {
        this.moveTimerUp(timerId, timerPosition);
    };
    handleDownClick = (timerId, timerPosition) => {
        this.moveTimerDown(timerId, timerPosition);
    };
    createTimer = (timer) => {
        const t = helpers.newTimer(timer);
        t.position = this.state.timers.length;
        t.numberOfTimers = 0;
        this.setState({
            timers: this.state.timers.concat(t).map((timer) => {
                return Object.assign({}, timer, {
                    numberOfTimers: this.state.timers.length,
                });
            }),
        });
    };
    updateTimer = (attrs) => {
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project,
                    });
                }
                else {
                    return timer;
                }
            }),
        });
    };
    deleteTimer = (timerId, timerPosition) => {
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.position >= timerPosition) {
                    console.log(this.state.timers.length);
                        return Object.assign({}, timer, {
                        position: timer.position - 1,
                    });
                }
                else {
                    return timer;
                }
            }).filter(t => t.id !== timerId).map((timer) => {
                return Object.assign({}, timer, {
                    numberOfTimers: timer.numberOfTimers - 1,
                });
            }),
        });
    };
    startTimer = (timerId) => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    return Object.assign({}, timer, {
                        runningSince: now,
                    });
                }
                else {
                    return timer;
                }
            }),
        });
    };
    stopTimer = (timerId) => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    return Object.assign({}, timer, {
                        elapsed: timer.elapsed + lastElapsed,
                        runningSince: null,
                    });
                }
                else {
                    return timer;
                }
            }),
        });
    };
    moveTimerUp = (timerId, timerPosition) => {
        this.setState({
            timers: [...this.state.timers].map((timer) => {
                if (timer.id === timerId && timerPosition > 0) {
                    return Object.assign({}, timer, {
                        position: timer.position - 1,
                    });
                }
                else if (timer.id !== timerId && timer.position === timerPosition - 1) {
                    return Object.assign({}, timer, {
                        position: timer.position + 1,
                    });
                }
                else {
                    return timer;
                }
            }),
        });
    };
    moveTimerDown = (timerId, timerPosition) => {
        this.setState({
            timers: [...this.state.timers].map((timer) => {
                if (timer.id === timerId && timerPosition < this.state.timers.length - 1) {
                    return Object.assign({}, timer, {
                        position: timer.position + 1,
                    });
                }
                else if (timer.id !== timerId && timer.position === timerPosition + 1) {
                    return Object.assign({}, timer, {
                        position: timer.position - 1,
                    });
                }
                else {
                    return timer;
                }
            }),
        });
    };
    render () {
        const timers = this.state.timers.sort((a, b) => (
            a.position - b.position
        ));
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList
                        timers={ this.state.timers }
                        onFormSubmit={ this.handleEditFormSubmit }
                        onTrashClick={ this.handleTrashClick }
                        onStartClick={ this.handleStartClick }
                        onStopClick={ this.handleStopClick }
                        onUpClick={ this.handleUpClick }
                        onDownClick={ this.handleDownClick }
                    />
                    <ToggleableTimerForm
                        onFormSubmit={ this.handleCreateFormSubmit }
                    />
                </div>
            </div>
        );
    }
}

class EditableTimerList extends React.Component {
    render () {
        const timers = this.props.timers.map((timer) => (
            <EditableTimer
                key={ timer.id }
                id={ timer.id }
                title={ timer.title }
                project={ timer.project }
                elapsed={ timer.elapsed }
                position={ timer.position }
                numberOfTimers={ timer.numberOfTimers }
                runningSince={ timer.runningSince }
                onFormSubmit={ this.props.onFormSubmit }
                onTrashClick={ this.props.onTrashClick }
                onStartClick={ this.props.onStartClick }
                onStopClick={ this.props.onStopClick }
                onUpClick={ this.props.onUpClick }
                onDownClick={ this.props.onDownClick }
            />
        ));
        return (
            <div id="timers">
                { timers }
            </div>
        );
    }
}

class EditableTimer extends React.Component {
    state = {
        editFormOpen: false,
    };
    handleEditClick = () => {
        this.openForm();
    };
    handleFormClose = () => {
        this.closeForm();
    };
    handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.closeForm();
    };
    closeForm = () => {
        this.setState({ editFormOpen: false });
    };
    openForm = () => {
        this.setState({ editFormOpen: true });
    };
    render () {
        if (this.state.editFormOpen) {
            return (
                <TimerForm
                    id={ this.props.id }
                    title={ this.props.title }
                    project={ this.props.project }
                    onFormSubmit={ this.handleSubmit }
                    onFormClose={ this.handleFormClose }
                />
            ); 
        }
        else {
            return (
                <Timer
                    id={ this.props.id }
                    title={ this.props.title }
                    project={ this.props.project }
                    elapsed={ this.props.elapsed }
                    position={ this.props.position }
                    numberOfTimers={ this.props.numberOfTimers }
                    runningSince={ this.props.runningSince }
                    onEditClick={ this.handleEditClick }
                    onTrashClick={ this.props.onTrashClick }
                    onStartClick={ this.props.onStartClick }
                    onStopClick={ this.props.onStopClick }
                    onUpClick={ this.props.onUpClick }
                    onDownClick={ this.props.onDownClick}
                />
            );
        }
    }
}

class TimerForm extends React.Component {
    state = {
        title: this.props.title || '',
        project: this.props.project || '',
    };
    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    };
    handleProjectChange = (e) => {
        this.setState({ project: e.target.value });
    };
    handleSubmit = () => {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.state.title,
            project: this.state.project,
        });
    }
    render () {
        const submitText = this.state.id ? 'Update' : 'Create';
        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="ui form white">
                        <div className="field">
                            <label>Title</label>
                            <input type="text" value={ this.state.title } onChange={ this.handleTitleChange } />
                        </div>
                        <div className="field">
                            <label>Project</label>
                            <input type="text" value={ this.state.project } onChange={ this.handleProjectChange } />
                        </div>
                        <div className="ui two bottom attached buttons">
                            <button className="ui basic blue button" onClick={ this.handleSubmit }>
                                { submitText }
                            </button>
                            <button className="ui basic red button" onClick={ this.props.onFormClose }>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class ToggleableTimerForm extends React.Component {
    state = {
        isOpen: false,
    };
    handleFormOpen = () => {
        this.setState({ isOpen: true });
    };
    handleFormClose = () => {
        this.setState({ isOpen: false });
    };
    handleFormSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.setState({ isOpen: false });
    };
    render () {
        if (this.state.isOpen) {
            return (
                <TimerForm
                    onFormSubmit={ this.handleFormSubmit }
                    onFormClose={ this.handleFormClose }
                />
            );
        }
        else {
            return (
                <div className="ui basic content center aligned segment">
                    <button className="ui yellow basic button icon" onClick={ this.handleFormOpen }>
                        <i className="plus icon" />
                    </button>
                </div>
            );
        }
    }
}

class Timer extends React.Component {
    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
    }
    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }
    handleStartClick = () => {
        start.play();
        this.props.onStartClick(this.props.id);
    };
    handleStopClick = () => {
        stop.play();
        this.props.onStopClick(this.props.id);
    };
    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id, this.props.position);  
    };
    handleUpClick = () => {
        this.props.onUpClick(this.props.id, this.props.position);
    };
    handleDownClick = () => {
        this.props.onDownClick(this.props.id, this.props.position);
    };
    render () {
        const elapsedString = helpers.renderElapsedString(
            this.props.elapsed, this.props.runningSince
        );
        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="header">
                        { this.props.title }
                    </div>
                    <div className="meta">
                        { this.props.project }
                    </div>
                    <div className="center aligned description">
                        <h2>
                            { elapsedString }
                        </h2>
                    </div>
                    <div className="extra content">
                        <span className="right floated edit icon" onClick={ this.props.onEditClick }>
                            <i className="large edit icon" />
                        </span>
                        <span className="right floated trash icon" onClick={ this.handleTrashClick }>
                            <i className="large trash icon" />
                        </span>
                        { this.props.position !== 0 &&
                            <span className="left floated up icon" onClick={ this.handleUpClick }>
                                <i className="large arrow circle up icon" />
                            </span>
                        }
                        { this.props.position !== this.props.numberOfTimers &&
                            <span className="left floated down icon" onClick={this.handleDownClick }>
                                <i className="large arrow circle down icon" />
                            </span>
                        }
                    </div>
                </div>
                <TimerActionButton
                    timerIsRunning={ !!this.props.runningSince }
                    onStartClick={ this.handleStartClick }
                    onStopClick={ this.handleStopClick }
                />
            </div>
        );
    }
}

class TimerActionButton extends React.Component {
    render() {
        if (this.props.timerIsRunning) {
            return (
                <div
                    className="ui bottom attached red basic button"
                    onClick={ this.props.onStopClick }
                >
                    Stop
                </div>
            );
        }
        else {
            return (
                <div
                    className="ui bottom attached blue basic button"
                    onClick={ this.props.onStartClick}
                >
                    Start
                </div>
            );
        }
    }
}

function App() {
  return (
      <TimersDashboard />
  );
}

export default App;

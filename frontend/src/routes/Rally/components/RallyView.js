import React, { Component, PropTypes } from 'react'
import TaskList from 'components/TaskList'

class RallyView extends Component {
  render () {
    let { name, tasks, onClickTaskHeader } = this.props
    console.log(tasks);
    return (
      <div>
        <h4>{name} Rally Page</h4>
        <TaskList tasks={tasks} onClickTaskHeader={onClickTaskHeader} />
      </div>
    )
  }
}

RallyView.propTypes = {
  name: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired
}

export default RallyView

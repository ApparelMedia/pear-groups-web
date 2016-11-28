import React, { Component, PropTypes } from 'react'
import Task from '../Task'
import FacebookLike from 'components/tasks/FacebookLike'
import WatchYoutube from 'components/tasks/WatchYoutube'
import styles from './TaskList.scss'

class TaskList extends Component {
  render () {
    let { tasks, onClickTaskHeader } = this.props;
    return (
      <div className={styles.base}>
        <ol>
          { tasks.map((task, index) => {
            if (task.type === 'facebook') {
              return <Task {...task} onClickTaskHeader={onClickTaskHeader} index={index} key={index}>
                <FacebookLike instructionText={task.instructionText} />
              </Task>
            }
            if (task.type === 'youtube') {
              return <Task {...task} onClickTaskHeader={onClickTaskHeader} index={index} key={index}>
                <WatchYoutube instructionText={task.instructionText} />
              </Task>
            }
          }) }
        </ol>
      </div>
    )
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onClickTaskHeader: PropTypes.func.isRequired
}

export default TaskList

import { connect } from 'react-redux'
import RallyView from '../components/RallyView'
import { openTask } from  'actions/rally'

const mapStateToProps = (state) => ({
  name: state.group.name,
  tasks: state.tasks
})

const mapDispatchToProps = {
  onClickTaskHeader: (event) => (dispatch) => {
    const taskIndex = parseInt(event.currentTarget.querySelector('span').innerText);
    dispatch(openTask(taskIndex));
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RallyView)

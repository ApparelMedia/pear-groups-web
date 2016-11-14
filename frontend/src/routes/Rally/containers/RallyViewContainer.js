import { connect } from 'react-redux'

import RallyView from '../components/RallyView'

const mapStateToProps = (state) => ({
  name: state.group.name,
  tasks: state.tasks
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(RallyView)

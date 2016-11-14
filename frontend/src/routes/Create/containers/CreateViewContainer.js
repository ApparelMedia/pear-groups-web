import { connect } from 'react-redux'

import CreateView from '../components/CreateView'

const mapStateToProps = (state) => ({
  title: 'Create a Group',
  currentStep: state.createGroup.currentStep.index
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateView)

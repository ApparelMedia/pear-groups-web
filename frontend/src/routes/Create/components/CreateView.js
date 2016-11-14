import React, { PropTypes } from 'react'
import { Steps } from 'antd'
import CreationSteps from 'constants/GroupCreationSteps'
import CityStateForm from '../containers/CityStateForm'
import GroupNameForm from '../containers/GroupNameForm'
import GroupTypeForm from '../containers/GroupTypeForm'

let { Step } = Steps

const CreateView = ({ title, currentStep }) => {
  return (<div>
    <h1> {title} </h1>
    <br />
    <Steps current={currentStep} direction='vertical'>
      {CreationSteps.map((step) => (
        <Step title={step.label} key={step.value} />
      ))}
    </Steps>
    <br /><br />
    <GroupNameForm />
    <CityStateForm />
    <GroupTypeForm />
  </div>)
}

CreateView.propTypes = {
  title: PropTypes.string.isRequired,
  currentStep: PropTypes.number.isRequired
}

export default CreateView

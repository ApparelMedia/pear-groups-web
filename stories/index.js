import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import initialFetched from './scenarios/existingGroup'
import Home from '../frontend/src/routes/Home/components/HomeView'
import Header from '../frontend/src/components/Header'
import PeopleList from '../frontend/src/components/PeopleList'
import PersonListItem from '../frontend/src/components/PersonListItem'
import AboutPanel from '../frontend/src/components/AboutPanel'
import Task from '../frontend/src/components/Task'
import TaskList from '../frontend/src/components/TaskList'
import WatchYoutube from '../frontend/src/components/tasks/WatchYoutube'
import FacebookLike from '../frontend/src/components/tasks/FacebookLike'
import CityState from '../frontend/src/components/forms/CityState'
import GroupType from '../frontend/src/components/forms/GroupType' 
import GroupStory from '../frontend/src/components/forms/GroupStory' 
import GroupPhoto from '../frontend/src/components/forms/GroupPhoto' 
import TopNav from '../frontend/src/components/TopNav' 
// Import Stops Here

storiesOf('Home', module)
  .add('Default', () => (
    <Home name={initialFetched.group.name} />
  ))

storiesOf('Header', module)
  .add('Default', () => (
    <Header name={initialFetched.group.name} />
  ))

storiesOf('PeopleList', module)
  .add('Default', () => {
    const people = initialFetched.members
    return <PeopleList people={people} title="Member List" />
  })

storiesOf('PersonListItem', module)
  .add('Default', () => {
    const person = initialFetched.members[ 0 ]
    return <PersonListItem {...person} />
  })

storiesOf('AboutPanel', module)
  .add('Default', () => (
    <AboutPanel />
  ))

storiesOf('Task', module)
  .add('Default', () => (
    <Task>a</Task>
  ))

storiesOf('TaskList', module)
  .add('Default', () => {
      const tasks = initialFetched.tasks;
      return <TaskList tasks={tasks}></TaskList>
    }
  )

storiesOf('FacebookLike', module)
  .add('Default', () => (
    <Task index={0} name="Facebook Like" completed={true}>
      <FacebookLike instructionText="Like us on Facebook"></FacebookLike>
    </Task>
  ))
  .add('Open', () => (
    <Task index={0} open={true} name="Facebook Like" completed={true}>
      <FacebookLike instructionText="Like us on Facebook"></FacebookLike>
    </Task>
  ))

storiesOf('WatchYoutube', module)
  .add('Default', () => (
    <WatchYoutube></WatchYoutube>
  ))

storiesOf('CityState', module)
  .add('Default', () => (
    <CityState></CityState>
  ))

storiesOf('GroupType', module)
  .add('Default', () => (
    <GroupType></GroupType>
  ))

storiesOf('GroupStory', module)
  .add('Default', () => (
    <GroupStory></GroupStory>
  ))

storiesOf('GroupPhoto', module)
  .add('Default', () => (
    <GroupPhoto></GroupPhoto>
  ))

storiesOf('TopNav', module)
  .add('Default', () => (
    <TopNav></TopNav>
  ))

// Stories Stop Here
















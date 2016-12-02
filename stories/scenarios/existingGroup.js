export default {
  user: {
    name: 'Vincent Chavez'
  },
  group: {
    name: "Vince's New Soccer Team",
    city: "Chicago",
    state: "IL",
    started: "4/5/2016",
    story: "My group's story",
  },
  members: [
    {id: 1, firstName: 'Jane', lastName: 'Smith', photoUrl: '//randomuser.me/api/portraits/women/60.jpg'},
    {id: 2, firstName: 'Tom', lastName: 'Cruise', photoUrl: '//randomuser.me/api/portraits/men/1.jpg'}
  ],
  supporters: [

  ],
  pears: [
    'test',
    'another'
  ],
  tasks: [
    {
      type: 'facebook',
      name: 'Facebook Connect',
      instructionText: 'Connect with us on Facebook now',
      open: false,
      completed: false
    },
    {
      type: 'youtube',
      name: 'Watch this Video',
      instructionText: 'Please watch this Video',
      open: true,
      completed: false
    }
  ]
}

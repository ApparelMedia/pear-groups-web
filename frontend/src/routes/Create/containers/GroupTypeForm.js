import { connect } from 'react-redux'
import { changeNameFieldValue, goToNextStep } from 'actions/create'
import GroupType from 'components/forms/GroupType'
const types = [
  {
    'value': 64,
    'label': 'Sports',
    'children': [ { 'value': 72, 'label': 'Baseball & Softball' },
      { 'value': 73, 'label': 'Basketball' },
      { 'value': 74, 'label': 'Cheerleading' },
      { 'value': 75, 'label': 'Crew' },
      { 'value': 76, 'label': 'Cycling' },
      { 'value': 77, 'label': 'Dodgeball' },
      { 'value': 78, 'label': 'Fan club' },
      { 'value': 79, 'label': 'Field Hockey' },
      { 'value': 80, 'label': 'Football' },
      { 'value': 81, 'label': 'Golf' },
      { 'value': 82, 'label': 'Gymnastics' },
      { 'value': 83, 'label': 'Hockey' },
      { 'value': 84, 'label': 'Kickball' },
      { 'value': 85, 'label': 'Lacrosse' },
      { 'value': 86, 'label': 'Mud Run' },
      { 'value': 87, 'label': 'Powderpuff' },
      { 'value': 88, 'label': 'Rugby' },
      { 'value': 89, 'label': 'Skiing & Snowboarding' },
      { 'value': 90, 'label': 'Soccer/F\u00fatbol' },
      { 'value': 92, 'label': 'Swimming' },
      { 'value': 93, 'label': 'Tennis' },
      { 'value': 94, 'label': 'Track/Running' },
      { 'value': 95, 'label': 'Ultimate Frisbee' },
      { 'value': 96, 'label': 'Volleyball' },
      { 'value': 97, 'label': 'Water Polo' },
      { 'value': 98, 'label': 'Wrestling' },
      { 'value': 99, 'label': 'Other' },
      { 'value': 299, 'label': 'Martial Arts' },
      { 'value': 300, 'label': 'Dance' }
    ]
  },
  {
    'value': 65,
    'label': 'School',
    'children': [
      { 'value': 91, 'label': 'Spirit/Step/Dance' },
      { 'value': 100, 'label': 'Academic' },
      { 'value': 101, 'label': 'Band/Orchestra' },
      { 'value': 102, 'label': 'Booster Club' },
      { 'value': 103, 'label': 'Class/Graduation Year' },
      { 'value': 104, 'label': 'Community Service' },
      { 'value': 105, 'label': 'Dorm/Residence Hall' },
      { 'value': 106, 'label': 'Drama/Theater' },
      { 'value': 107, 'label': 'Environmental/Green club' },
      { 'value': 108, 'label': 'Faculty/Administration' },
      { 'value': 109, 'label': 'Fraternity' },
      { 'value': 110, 'label': 'Homecoming/Prom/Senior Night' },
      { 'value': 111, 'label': 'Language Club' },
      { 'value': 112, 'label': 'Math/Science' },
      {
        'value': 113,
        'label': 'Parent Teacher Association/Organization'
      }, { 'value': 114, 'label': 'Professional Organization' },
      { 'value': 115, 'label': 'Sorority' },
      {
        'value': 116,
        'label': 'Spring Break'
      }, { 'value': 117, 'label': 'Student Government/Council' }, {
        'value': 118,
        'label': 'Summer Camp'
      }, { 'value': 119, 'label': 'Tech/Robotics' }, { 'value': 120, 'label': 'Yearbook' }, {
        'value': 121,
        'label': 'Other school/college group or event'
      }, { 'value': 296, 'label': 'Arts' }, { 'value': 297, 'label': 'Computers' }, {
        'value': 298,
        'label': 'Engineering'
      } ]
  }, {
    'value': 66,
    'label': 'Non-profit',
    'children': [ { 'value': 138, 'label': 'Animal Rescue' }, {
      'value': 139,
      'label': 'Addiction/Drugs'
    }, { 'value': 140, 'label': 'ALS' }, { 'value': 141, 'label': 'Anti-Bullying' }, {
      'value': 142,
      'label': 'Arts and Culture'
    }, { 'value': 143, 'label': 'Autism' }, { 'value': 144, 'label': 'Cancer' }, {
      'value': 145,
      'label': 'Children\'s Health'
    }, { 'value': 146, 'label': 'Clean Water /Energy' }, { 'value': 147, 'label': 'Clothing' }, {
      'value': 148,
      'label': 'Diabetes'
    }, { 'value': 149, 'label': 'Disaster Relief' }, { 'value': 150, 'label': 'Drunk Driving' }, {
      'value': 151,
      'label': 'Education'
    }, { 'value': 152, 'label': 'Environment' }, { 'value': 153, 'label': 'Health & Fitness' }, {
      'value': 154,
      'label': 'Heart Disease'
    }, { 'value': 155, 'label': 'Homelessness' }, { 'value': 156, 'label': 'Housing' }, {
      'value': 157,
      'label': 'Human Rights'
    }, { 'value': 158, 'label': 'Mental Health' }, { 'value': 159, 'label': 'Parkinson\'s Disease' }, {
      'value': 160,
      'label': 'Veterans'
    }, { 'value': 161, 'label': 'Other Charity' }, { 'value': 295, 'label': 'Camps' } ]
  }, {
    'value': 67,
    'label': 'Friends & Family',
    'children': [ { 'value': 162, 'label': 'Anniversary' }, {
      'value': 163,
      'label': 'Alumni Club/Association'
    }, { 'value': 164, 'label': 'Bachelorette/Bachelor Party' }, {
      'value': 165,
      'label': 'Baby Shower/New Baby'
    }, { 'value': 166, 'label': 'Bar/Bat Mitzvah' }, { 'value': 167, 'label': 'Bar/Pub Crawl' }, {
      'value': 168,
      'label': 'Birthday Party'
    }, { 'value': 169, 'label': 'Book Club' }, { 'value': 170, 'label': 'Summer Camp' }, {
      'value': 171,
      'label': 'Class Reunion'
    }, { 'value': 172, 'label': 'Cook-off/festival' }, { 'value': 173, 'label': 'Dance' }, {
      'value': 174,
      'label': 'Drama/Theater club'
    }, { 'value': 175, 'label': 'Family Reunion' }, { 'value': 176, 'label': 'Fantasy Sports' }, {
      'value': 177,
      'label': 'Fourth of July'
    }, { 'value': 178, 'label': 'Graduation Party' }, { 'value': 179, 'label': 'Holiday Party' }, {
      'value': 180,
      'label': 'Memorial/Remembrance'
    }, { 'value': 181, 'label': 'Musical/band performance' }, {
      'value': 182,
      'label': 'St Patrick\'s Day'
    }, { 'value': 183, 'label': 'Vacation' }, { 'value': 184, 'label': 'Wedding' }, {
      'value': 185,
      'label': 'Other Social/Friends and Family'
    } ]
  }, {
    'value': 68,
    'label': 'Military',
    'children': [ { 'value': 186, 'label': 'Domestic base/troops' }, {
      'value': 187,
      'label': 'Overseas base/troops'
    }, { 'value': 188, 'label': 'Family Support' }, { 'value': 189, 'label': 'ROTC/JROTC' }, {
      'value': 190,
      'label': 'Other Military/Armed Services'
    } ]
  }, {
    'value': 69,
    'label': 'Professional',
    'children': [ { 'value': 191, 'label': 'Company Outing' }, { 'value': 192, 'label': 'Association' }, {
      'value': 193,
      'label': 'Conference/Trade Show'
    }, { 'value': 194, 'label': 'Networking' }, { 'value': 195, 'label': 'Other Professional' } ]
  }, {
    'value': 70,
    'label': 'Religious',
    'children': [ { 'value': 196, 'label': 'Retreat/Camp' }, { 'value': 197, 'label': 'Mission Trip' }, {
      'value': 198,
      'label': 'Sports'
    }, { 'value': 199, 'label': 'Sunday school/Bible study' }, {
      'value': 200,
      'label': 'Church/Temple/Schul/Mosque'
    }, { 'value': 201, 'label': 'Youth Ministry' }, { 'value': 202, 'label': 'Other Religious' } ]
  } ]

const mapStateToProps = (state) => ({
  groupTypes: types,
  hidden: state.createGroup.currentStep.value !== 'type'
})

const mapDispatchToProps = {
  onValueChange: (event) => (dispatch) => {
    const changedInfo = {
      value: event.target.value
    }
    dispatch(changeNameFieldValue(changedInfo))
  },
  onFormSubmit: (event) => (dispatch) => {
    event.preventDefault()
    dispatch(goToNextStep())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupType)

import { CREATE_USER } from 'actions/user'
import Faker from 'Faker'

export default (prevState = [], action) => {
	if (action.type === CREATE_USER) {
		var newState = prevState.concat({id:(prevState.length+1), firstName:Faker.name.firstName(), lastName: Faker.name.lastName(), photo_url: Faker.image.imageUrl()})

		return newState;
	}

	return [...prevState]
}
import { TODO } from '../actions'

export default (state = 0, action) => {
    switch (action.type) {
        case TODO:
            return 'case 1'
        default:
            return 'default'
    }
}
import _ from 'lodash'
import { CREATE_EVENT,READ_EVENTS,DELETE_EVENT,GET_EVENT,UPDATE_EVENT } from '../actions'


export default (events = {}, action) => {
  switch (action.type){
    case READ_EVENTS:
 
      return _.mapKeys(action.response.data,'id')

    // 更新でも使う
    case CREATE_EVENT:
    case UPDATE_EVENT:
    case GET_EVENT:
      // トップページからの遷移ならば events がある
      // 直接URLをたたくと {} となる
      console.log(events)
      const data = action.response.data
      console.log({...events,[data.id]:data})
      return {...events,[data.id]:data}
    
    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }
    default:
      // CREATE_EVENT
      return events
  }
}
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

const messagesReducer = (state, action) => {
  switch(action.type) {
    case SEND_MESSAGE:
      let newMessage = state.newMessageText;
      state.messagesData.push({ id: 4, message: newMessage });
      state.newMessageText ='';
      break;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      break;
    default:
      return state;
  }
  return state;
}

export let sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export let updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT, 
  newText: text});

export default messagesReducer;
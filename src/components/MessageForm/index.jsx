import MessageInput from "../MessageInput"
import SendMessageButton from "../SendMessageButton"
import UserAvatar from "../UserAvatar"
import './styles.scss'

const MessageForm = () => {
  return (
    <form className="form">
      <UserAvatar />
      <MessageInput />
      <SendMessageButton />
    </form>
  )
}

export default MessageForm
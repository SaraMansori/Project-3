import { MessageContainerEnd, MessageContainerStart, PurpleMessage, LightMessage, AdminMessage } from "../../components/styledComponents/ChatStyle"
import ReactEmoji from 'react-emoji'
import UserContext from '../../UserContext'
import { useContext } from "react"

const Message = ({ message, otherUser }) => {

  const { loggedUser } = useContext(UserContext)

  return (
    <div>
      {message.owner === loggedUser._id &&

        <MessageContainerEnd>
          <LightMessage className="mb-4" text={message.text}>
            <p className="messageText colorWhite">{ReactEmoji.emojify(message.text)}</p>
          </LightMessage>
        </MessageContainerEnd>

      }
      {message.owner === otherUser._id &&

        <MessageContainerStart>
          <PurpleMessage className="mb-4">
            <p className="sentText colorDark pl-10 mb-4">{ReactEmoji.emojify(message.text)}</p>
          </PurpleMessage>
        </MessageContainerStart>

      }

      {message.owner !== loggedUser._id && message.owner !== otherUser._id &&
        <AdminMessage className="mb-4" text={message.text}>
          <p className="messageText colorWhite">{ReactEmoji.emojify(message.text)}</p>
        </AdminMessage>
      }
    </div>


    /* currentMessage.user === 'currentUser' ?

      (
        <div>
          <MessageContainerEnd>
            <LightMessage className="mb-4" text={currentMessage.text}>
              <p className="messageText colorWhite">{ReactEmoji.emojify(currentMessage.text)}</p>
            </LightMessage>
          </MessageContainerEnd>
        </div>
      )

      :

      (currentMessage.user === 'admin' ?

        (
          <div >
            <AdminMessage className="mb-4" text={currentMessage.text}>
              <p className="messageText colorWhite">{ReactEmoji.emojify(currentMessage.text)}</p>
            </AdminMessage>
          </div>
        )

        :

        (
          <div>
            <MessageContainerStart>
              <PurpleMessage className="mb-4">
                <p className="sentText colorDark pl-10 mb-4">{ReactEmoji.emojify(currentMessage.text)}</p>
              </PurpleMessage>
            </MessageContainerStart>
          </div>
        )
      ) */
  )

}


export default Message

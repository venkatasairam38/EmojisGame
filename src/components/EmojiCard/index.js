// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {listEmoji, clickEmoji} = props
  const {id, emojiName, emojiUrl} = listEmoji
  const emojiClicked = () => {
    clickEmoji(id)
  }

  return (
    <li className="emojiList">
      <button type="button" className="button" onClick={emojiClicked}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard

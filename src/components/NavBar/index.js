// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props
  return (
    <div className="navbar">
      <div className="nav-items">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="nav-items">
          <p className="score">Score: {currentScore}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}
export default NavBar

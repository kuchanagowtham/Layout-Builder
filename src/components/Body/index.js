// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left">
              <h1 className="body-header-text">Left Navbar Menu</h1>
              <ul className="ul-container">
                <li className="item">Item1</li>
                <li className="item">Item2</li>
                <li className="item">Item3</li>
                <li className="item">Item4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="middle">
              <h1 className="body-header-text">Content</h1>
              <p className="content-text">
                Lorem ipsum dolor sit amet,consectetur adpiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                emim ad minim veniam
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right">
              <h1 className="body-header-text">Right Navbar Menu</h1>
              <div className="ad1">
                <p className="ad-box">Ad 1</p>
                <p className="ad-box">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body

// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const getContent = event => {
        onToggleShowContent(event.target.checked)
      }
      const getLeft = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const getRight = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="layout-container">
          <div className="responsive">
            <h1 className="layout-heading">Layouts</h1>
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={showContent}
                  onChange={getContent}
                  id="content"
                />
                <label className="label-text" htmlFor="content">
                  Content
                </label>
              </div>

              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={showLeftNavbar}
                  onChange={getLeft}
                  id="left"
                />
                <label className="label-text" htmlFor="left">
                  Left Navbar
                </label>
              </div>

              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={showRightNavbar}
                  onChange={getRight}
                  id="right"
                />
                <label className="label-text" htmlFor="right">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

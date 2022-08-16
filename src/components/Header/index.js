import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoIosClose} from 'react-icons/io'

import ThemeContext from '../../context'
import './index.css'

class Header extends Component {
  state = {
    menuIcon: false,
  }

  onClickMenuIcon = () => {
    this.setState({menuIcon: true})
  }

  onClickCloseBtn = () => {
    this.setState({menuIcon: false})
  }

  displayMenuIcons = () => (
    <div className="sm-nav-links-list-responsive-container">
      <ul className="sm-nav-links-unordered-list">
        <li>
          <Link to="/">
            <button type="button" className="sm-nav-links-btn">
              Home
            </button>
          </Link>
        </li>
        <li>
          <Link to="/vaccination">
            <button type="button" className="sm-nav-links-btn">
              Vaccination
            </button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button type="button" className="sm-nav-links-btn">
              About
            </button>
          </Link>
        </li>
      </ul>
      <div>
        <button
          type="button"
          className="close-icon-btn"
          onClick={this.onClickCloseBtn}
        >
          <IoIosClose fontSize="30" color="#161625" fontWeight="500" />
        </button>
      </div>
    </div>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeSectionId, changeActiveSection} = value
          const {menuIcon} = this.state

          const sectionIdConstants = {
            home: 'HOME',
            vaccination: 'VACCINATION',
            about: 'ABOUT',
          }

          const changeToHome = () =>
            changeActiveSection(sectionIdConstants.home)

          const changeToVaccine = () =>
            changeActiveSection(sectionIdConstants.vaccination)

          const changeToAbout = () =>
            changeActiveSection(sectionIdConstants.about)

          const homeClass =
            activeSectionId === sectionIdConstants.home
              ? 'lg-nav-list-item-btn selected'
              : 'lg-nav-list-item-btn'
          const vacClass =
            activeSectionId === sectionIdConstants.vaccination
              ? 'lg-nav-list-item-btn selected'
              : 'lg-nav-list-item-btn'
          const aboutClass =
            activeSectionId === sectionIdConstants.about
              ? 'lg-nav-list-item-btn selected'
              : 'lg-nav-list-item-btn'

          return (
            <>
              <nav className="nav-bg-container">
                <div className="nav-responsive-container">
                  <Link to="/" className="nav-link" onClick={changeToHome}>
                    <h1 className="nav-heading">
                      COVID19<span className="nav-heading-span">INDIA</span>
                    </h1>
                  </Link>
                  <button
                    type="button"
                    className="sm-nav-icons-list-btn"
                    onClick={this.onClickMenuIcon}
                  >
                    <img
                      src="https://res.cloudinary.com/dvzwomefi/image/upload/v1638084726/add-to-queue_1_wj72ht.svg"
                      alt="options icon"
                    />
                  </button>
                  <div className="lg-nav-links-list-container">
                    <ul className="lg-nav-links-unordered-list">
                      <li>
                        <Link to="/" className="nav-link">
                          <button
                            type="button"
                            className={homeClass}
                            onClick={changeToHome}
                          >
                            Home
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to="/vaccination" className="nav-link">
                          <button
                            type="button"
                            className={vacClass}
                            onClick={changeToVaccine}
                          >
                            Vaccination
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" className="nav-link">
                          <button
                            type="button"
                            className={aboutClass}
                            onClick={changeToAbout}
                          >
                            About
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="sm-nav-links-list-container">
                {menuIcon && (
                  <div className="sm-nav-links-list-responsive-container">
                    <ul className="sm-nav-links-unordered-list">
                      <li>
                        <Link to="/">
                          <button
                            type="button"
                            className={homeClass}
                            onClick={changeToHome}
                          >
                            Home
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to="/vaccination">
                          <button
                            type="button"
                            className={vacClass}
                            onClick={changeToVaccine}
                          >
                            Vaccination
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <button
                            type="button"
                            className={aboutClass}
                            onClick={changeToAbout}
                          >
                            About
                          </button>
                        </Link>
                      </li>
                    </ul>
                    <div>
                      <button
                        type="button"
                        className="close-icon-btn"
                        onClick={this.onClickCloseBtn}
                      >
                        <IoIosClose
                          fontSize="30"
                          color="#161625"
                          fontWeight="500"
                        />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Header

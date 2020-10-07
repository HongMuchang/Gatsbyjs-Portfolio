import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-cubes"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Hong Muchan</h1>
        <br />
        <h2 className="header_title">Welcome to my portfolio</h2>
        <ul className="icons">
          <li className="blue">
            <a
              target="blank"
              href="https://twitter.com/HongMuchan"
              className="icon fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://qiita.com/HongMuchan"
              className="icon fa-search"
            >
              <span className="label">Qiita</span>
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://github.com/HongMuchang"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li className="skyblue">
            <a
              target="blank"
              href="https://note.com/muchang0824"
              className="icon fa-clipboard"
            >
              <span className="label">note</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

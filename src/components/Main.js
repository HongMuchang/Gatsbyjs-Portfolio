import PropTypes from 'prop-types'
import React from 'react'
import muchan from '../images/muchan.png'
import web from '../images/web.png'
import book from '../images/book.png'
import tenki from '../images/tenki.png'
import blog from '../images/blog.png'
import Trello from '../images/Trello.png'
import API from '../images/unsplashAPI.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          {/* -------------------------------------- */}
          <h3 className="work_title_github">
            <span>
              <a
                target="blank"
                href="https://github.com/HongMuchang/Unsplash-image-search-app"
                className="icon"
              >
                [画像検索アプリ]
                <a
                  target="blank"
                  href="https://github.com/HongMuchang"
                  className="icon fa-github-square githubs"
                ></a>
              </a>
            </span>
          </h3>
          <div className="content">
            <p className="work_p">(　React　/　axios　/　UnsplashAPI　)</p>
            <p className="work_img">
              <img src={API} alt="" className="box" />
            </p>
          </div>
          {/* -------------------------------------- */}
          <h3 className="work_title_github">
            <span>
              <a
                target="blank"
                href="https://muchan-trello.netlify.app/"
                className="icon fa-link blue"
              >
                [Trello風todoリスト]
                <a
                  target="blank"
                  href="https://github.com/HongMuchang/Vue-Trello"
                  className="icon fa-github-square githubs"
                ></a>
              </a>
            </span>
          </h3>
          <div className="content">
            <p className="work_p">
              (　Vue　/　Vuex　/　Vuetify　/　draggable　)
            </p>
            <p className="work_img">
              <img src={Trello} alt="" className="box" />
            </p>
          </div>
          {/* -------------------------------------- */}
          <h3 className="work_title_github">
            <span>[掲示板付きWebサイト]</span>
          </h3>
          <div className="content">
            <p className="work_p">
              (　HTML　/　CSS　/　JS　/　PHP　/　MYSQL　/　GoogleMapAPI　)
            </p>
            <p className="work_img imgs">
              <img src={web} alt="" className="box" />
            </p>
          </div>
          {/* -------------------------------------- */}
          <h3 className="work_title_github">
            <span>
              {' '}
              [Laravelでブログ(CRUD)]
              <a
                target="blank"
                href="https://github.com/HongMuchang/Laravel-Blog"
                className="icon fa-github-square githubs"
              ></a>
            </span>
          </h3>
          <div className="content">
            <p className="work_p">(　HTML　/　CSS　/　PHP　/　Laravel　)</p>
            <p className="work_img">
              <img src={blog} alt="" className="box" />
            </p>
          </div>
          {/* -------------------------------------- */}
          <h3 className="work_title_github">
            <span>
              [図書管理システム]
              <a
                target="blank"
                href="https://github.com/HongMuchang/Book-management-system"
                className="icon fa-github-square githubs"
              ></a>
            </span>
          </h3>
          <div className="content">
            <p className="work_p">(　HTML　/　CSS　/　PHP　/　MYSQL　)</p>
            <p className="work_img">
              <img src={book} alt="" className="box" />
            </p>
          </div>
          {/* -------------------------------------- */}
          <h3 className="work_title_github">
            <span>
              [天気APIで世界天気を取得]
              <a
                target="blank"
                href="https://github.com/HongMuchang/Weather-API"
                className="icon fa-github-square githubs"
              ></a>
            </span>
          </h3>
          <div className="content">
            <p className="work_p">
              (　HTML　/　CSS　/　JS　/　OpenWeatherMapAPI　)
            </p>
            <p className="work_img">
              <img src={tenki} alt="" className="box" />
            </p>
          </div>
          {/* -------------------------------------- */}
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <div className="contents_all">
            <span className="muchan main">
              <img src={muchan} alt="" className="im" />
            </span>
            <div className="contents">
              <h3 className="content_title">Profile</h3>
              <p className="border">
                <strong>HongMuchan</strong>（むちゃん）
                <br />
                関西出身のバイリンガル専門学生。
                <br />
                現在はフロントエンドエンジニアを目指してます！！
              </p>

              <h3 className="content_title">SKILLS</h3>
              <p className="border">
                言語:HTML、CSS、PHP、MySQL、Javascript
                <br />
                最近はクラウド周りの勉強をしつつ、
                <br />
                ReactやVue、Laravelを独学で勉強中です。
              </p>
              <h3 className="content_title">Award</h3>

              <p className="border">
                ・3校合同コンテスト 銀賞　(2019.10.31)
                <br />
                ・HAL EVENT WEEK　 金賞　(2020.03.05)
              </p>
            </div>
          </div>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact(Email)</h2>
          <form name="contact" method="POST" data-netlify="true">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>

          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

import React from "react"
import "./home.css"
import girl from "./images/download.png"
import aim from "./images/IMG_0077.JPG"
import objectives from "./images/IMG_20160607_103105.jpg"
import logo from "./images/download.jpeg"

import { NavLink } from "react-router-dom"

import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Home() {
  return (
    <div className="container">
      <div className="nav">
        <div className="w3-bar w3-black w3-hide-small">
          <a
            href="https://www.instagram.com/kenyamusiciansunion/"
            className="w3-bar-item w3-button"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://twitter.com/kenya_union"
            className="w3-bar-item w3-button"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://web.facebook.com/musicianskemu"
            className="w3-bar-item w3-button"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w3-bar-item w3-button"
          />
        </div>
        <div>
          <FontAwesomeIcon icon={faSearch} className="search nav-right" />
          <NavLink to="/login" className="btn-login nav-right">
            Login
          </NavLink>
        </div>
      </div>
      <div className="header">
        <h1 className="w3-xxxlarge">
          <b>KENYA MUSICIANS UNION</b>
        </h1>
        <h6>
          Welcome to <span className="w3-tag">KeMU</span>
        </h6>
      </div>
      <div className="routes">
        <header>
          <ul className="routes-ul">
            <li className="routes-li">
              <a href="/" className="routes-li">
                Home
              </a>
            </li>
            <li className="routes-li">
              <a href="KeMU.html" className="routes-li">
                About KeMU
              </a>
            </li>
            <li className="routes-li">
              <a href="KeMU.html" className="routes-li">
                Resources
              </a>
            </li>
            <li className="routes-li">
              <a href="user.html" className="routes-li">
                Membership
              </a>
            </li>
          </ul>
        </header>
      </div>

      <div className="body">
        <div className="left">
          <div className="aboutus">
            <h3>ABOUT US</h3>
            <img
              src={girl}
              alt="Girl Hat"
              className="w3-padding-106 w3-margin-left-100"
            />

            <p>
              <strong>KeMU!</strong> The Kenya Musicians Union – KeMU is Kenya’s
              body for all Kenyan musicians. KeMU was founded in 2007. It began
              its operations as the Kenya Musicians Alliance - KeMA. In 2008,
              KeMA led by its founding fathers – Mr. Tabu Osusa - a respected
              Kenyan music producer and Mr. John Katana a renowned Kenyan
              musician, agreed to transform the Association into a musicians
              Union. This gave birth to the present day Kenya Musicians Union.
              KeMU has close to 4 10 members and is steadily growing its
              membership. The Union has a National Executive Council which is
              the supreme governing body and it has three established branches
              countrywide. The designation of the national officers are; the
              Chairman, Vice Chairman, General Secretary, Assistant General
              Secretary, Finance /Treasurer, Assistant Finance/ Treasurer,
              Publicity Secretary and the Assistant Publicity Secretary. Each of
              the Union’s branches are run by three officials respectively.
            </p>
          </div>
          <div className="aims">
            <h3>AIMS</h3>

            <img src={aim} alt="Two girls writing" className="w3-padding-10" />
            <p>
              <strong>Aims!</strong> Kenya Music Union aspires to;
            </p>
            <p>
              • To safeguard and promote the socio-economic welfare of its
              members.
            </p>
            <p>
              {" "}
              • To afford a forum for discussions of music problems, especially
              those affecting Kenyan musicians directly, and to make the results
              of such discussions and subsequent proposals adopted by the Union
              and thereafter to approach the appropriate authorities either in
              writing or sending a delegation to make such, well understood.
            </p>
            <p>
              {" "}
              • To promote better understanding among members of the Union and
              members of other trade unions and Music Organisations and
              endeavour to bring cooperation among such members and / or
              organisations.
            </p>
            <p>
              {" "}
              • To regulate and improve relationships between employees (or
              self-employed musicians) and employers.{" "}
            </p>
          </div>
          <div className="w3-container w3-white w3-margin w3-padding-large">
            <div className="w3-center">
              <h3>OBJECTIVES</h3>
            </div>

            <div className="w3-justify">
              <img src={objectives} alt="Runway" className="w3-padding-16" />
              <p>
                • KeMU offers its members basic legal services, standard music
                performance contracts and also has a gender desk which
                specifically caters for or deals with female member matters.
                Full membership of the Union is open to all active musicians in
                Kenya upon application and registration of membership. Union
                membership is also open to Kenyan musicians working outside
                Kenya and non-Kenyan musicians working in Kenya.
              </p>
              <p>
                {" "}
                • The Union has three branches around the country namely the
                Nyanza branch which serves the entire western part of Kenya, the
                Eastern branch which serves eastern Kenya, and the Coast branch
                serves the coastal areas of the country. The head office is
                located in Kenya’s capital city Nairobi and it serves the
                Central, Rift Valley and Nairobi arrears.
              </p>
              <p>
                • KeMU is affiliated to the International Music Council – IMC,
                through the African Music Council - AMC, has a twinning
                agreement with the British Musicians Union and is a member of
                the International Federation of Musicians - FIM. Through the AMC
                and FIM, KeMU has a cordial work relationship with close to 20
                musicians Unions in Africa as well as with other Unions in
                Europe, Asia and the Americas. KeMU has a cordial work
                relationship with Union to Union of Sweden as well as the
                Swedish Musicians Federation. • In conjunction with the
                above-mentioned affiliates and partners, KeMU has held
                workshops, conferences and seminars in the regions it operates
                in which culminated in the training of the Union officials and
                dissemination of information to its steadily growing membership.{" "}
              </p>
              <p>
                {" "}
                • KeMU regularly organizes campaigns or speaks up in relation to
                musical issues that affect Kenyan musicians.
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="w3-white w3-margin">
            <img src={logo} alt="Jane" className="w3-grayscale" />
            <div className="w3-container w3-black">
              <h4>KeMU</h4>
              <p>
                The Kenya Musicians Unions' main objective is to protect and
                represent the economic and social interests of all Kenyan
                musicians and to promote the welfare of its members. There has
                been a protracted battle between a group of musicians and the
                Registrar of Trade Unions, since the first application for the
                registration of what was originally called the Kenya Musicians
                Association was made in 2007. After a conference by the
                International Federation of Musicians in Nairobi, Kenya in 2012
                artists in Kenya have been working towards the formation of the
                Union. Katana, the bandleader of Them Mushrooms, is the interim
                General Secretary of the unregistered union and has been at the
                forefront of the struggle to legalise the body..
              </p>
            </div>
          </div>
          <div className="w3-white w3-margin">
            <div className="w3-container w3-padding w3-black">
              <h4>Popular Events</h4>
            </div>
            <ul className="w3-ul w3-hoverable w3-white">
              <li className="w3-padding-16">
                <img
                  src="images/IMG-20170703-WA0043.jpg"
                  alt="popular events"
                  className="w3-left w3-margin-right"
                />
                <span className="w3-large">Happening Now</span>
                <br />
                <span>Upcoming Women's Desk</span>
              </li>
              <li className="w3-padding-16">
                <img
                  src="images/18 KeMU workshop pics.jpg"
                  alt="happening noe"
                  className="w3-left w3-margin-right"
                />
                <span className="w3-large">Workshop</span>
                <br />
                <span>Capacity Building</span>
              </li>
              <li className="w3-padding-16">
                <img
                  src="images/20180906_110548.jpg"
                  alt="workshop"
                  className="w3-left w3-margin-right"
                />
                <span className="w3-large">Press</span>
                <br />
                <span>KeMU and FIM Workshop</span>
              </li>
              <li className="w3-padding-16">
                <img
                  src="images/6.jpeg"
                  alt="FIM"
                  className="w3-left w3-margin-right w3-sepia"
                />
                <span className="w3-large">Trends</span>
                <br />
                <span>Swedish Musicians Federation</span>
              </li>
            </ul>
          </div>
          <div className="w3-white w3-margin">
            <div className="w3-container w3-padding w3-black">
              <h4>MEMBERSHIP</h4>
            </div>
            <div className="w3-container w3-white">
              <div className="w3-container w3-display-container w3-light-grey w3-section">
                <button>Kenyan Musicians Working Outside</button>
                <button>Non-Kenyan Musicians Working In Kenya</button>
                <button>Kenyan Musicians</button>
              </div>
            </div>
          </div>
          <div className="w3-white w3-margin">
            <div className="w3-container w3-padding w3-black">
              <h4>Tags</h4>
            </div>
            <div className="w3-container w3-white">
              <p>
                <span className="w3-tag w3-black w3-margin-bottom">Music</span>{" "}
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  Kenya
                </span>{" "}
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  Women
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  Instrument
                </span>{" "}
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  FIM
                </span>{" "}
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  Campaigns
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  AMC
                </span>{" "}
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  IMC
                </span>{" "}
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  Legal
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  SMF
                </span>{" "}
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  Concerts
                </span>{" "}
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  Partnerships
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  BMU
                </span>{" "}
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  Trends
                </span>
              </p>
            </div>
          </div>
          <div className="w3-white w3-margin">
            <div className="w3-container w3-padding w3-black">
              <h4>Gallery</h4>
            </div>
            <div className="w3-row-padding w3-white">
              <div className="w3-col s6">
                <p>
                  <img
                    src="images/CONFERENECE BANNER - Copy - Copy.JPG"
                    alt="Jeans"
                  />
                </p>
                <p>
                  <img src="images/WP_20150720_14_26_22_Pro.jpg" alt="Jeans" />
                </p>
              </div>
              <div className="w3-col s6">
                <p>
                  <img
                    src="images/DSC02117 - Copy (2).JPG"
                    alt="Men in Hats"
                    className="w3-grayscale"
                  />
                </p>
                <p>
                  <img src="images/IMG_0007.JPG" alt="Jeans" />
                </p>
              </div>
            </div>
          </div>
          <div className="w3-white w3-margin">
            <div className="w3-container w3-padding w3-black">
              <h4>Follow Us</h4>
            </div>
            <div className="w3-container w3-xlarge w3-padding">
              <i className="fa fa-facebook-official w3-hover-opacity"></i>
              <i className="fa fa-instagram w3-hover-opacity"></i>
              <i className="fa fa-snapchat w3-hover-opacity"></i>
              <i className="fa fa-pinterest-p w3-hover-opacity"></i>
              <i className="fa fa-twitter w3-hover-opacity"></i>
              <i className="fa fa-linkedin w3-hover-opacity"></i>
            </div>
          </div>
          <div className="w3-white w3-margin">
            <div className="w3-container w3-padding w3-black">
              <h4>Subscribe</h4>
            </div>
            <div className="w3-container w3-white">
              <p>
                Enter your e-mail below and get notified on the latest blog
                posts.
              </p>
              <p>
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Enter e-mail"
                />
              </p>
              <p>
                <button type="button" className="w3-button w3-block w3-red">
                  Subscribe
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="w3-container w3-dark-grey">
        <p>
          {" "}
          Kenya Musicians Union – (KeMU), PO BOX 18081 - 00100, GPO, NAIROBI{" "}
        </p>
        <p> Cell: +254 (0)720 708319/ +254 (0)721 745002/ +254 (0)722 757553</p>
        <p>
          <strong>Location</strong>2 nd Floor - Uganda House, Kenyatta Avenue –
          Nairobi, Kenya
        </p>
        <p>
          <strong>E -mail:</strong> kenyamusiciansu@gmail.com
          <a href="kenyamusiciansu@gmail.com" target="_blank"></a>
        </p>
      </footer>
    </div>
  )
}

export default Home

import React from "react"

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
    <div className="w3-light-grey">
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
          <a href="https://web.facebook.com/musicianskemu">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <div>
          <FontAwesomeIcon icon={faSearch} />
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
      <div className="header">
        <h1 class="w3-xxxlarge">
          <b>KENYA MUSICIANS UNION</b>
        </h1>
        <h6>
          Welcome to <span className="w3-tag">KeMU</span>
        </h6>
      </div>
      <div className="routes">
        <header>
          <ul>
            <li>
              <a href="KeMU.html">Home</a>
            </li>
            <li>
              <a href="KeMU.html">About KeMU</a>
            </li>
            <li>
              <a href="KeMU.html">Resources</a>
            </li>
            <li>
              <a href="user.html">Membership</a>
            </li>
          </ul>
        </header>
      </div>

      <div className="body">
        <div className="left">
          <div className="aboutus">
            <h3>ABOUT US</h3>
            <img
              src="images/download.png"
              alt="Girl Hat"
              class="w3-padding-106 w3-margin-left-100"
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

            <img
              src="images/IMG_0077.JPG"
              alt="Two girls writing"
              class="w3-padding-10"
            />
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
          <div class="w3-container w3-white w3-margin w3-padding-large">
            <div class="w3-center">
              <h3>OBJECTIVES</h3>
            </div>

            <div class="w3-justify">
              <img
                src="images/IMG_20160607_103105.jpg"
                alt="Runway"
                class="w3-padding-16"
              />
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

              <div id="demo3">
                <hr />
                <div class="w3-row w3-margin-bottom">
                  <div class="w3-col l2 m3">
                    <img src="/w3images/girl_mountain.jpg" alt="" />
                  </div>
                  <div class="w3-col l10 m9">
                    <h4>
                      Jane{" "}
                      <span class="w3-opacity w3-medium">
                        April 10, 2015, 7:22 PM
                      </span>
                    </h4>
                    <p>That was a great runway show! Thanks for everything.</p>
                  </div>
                </div>
                <div class="w3-row w3-margin-bottom">
                  <div class="w3-col l2 m3">
                    <img src="/w3images/boy.jpg" alt="" />
                  </div>
                  <div class="w3-col l10 m9">
                    <h4>
                      John{" "}
                      <span class="w3-opacity w3-medium">
                        April 8, 2015, 10:32 PM
                      </span>
                    </h4>
                    <p>
                      Keep up the GREAT work! I am cheering for you!! Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
                <div class="w3-row w3-margin-bottom">
                  <div class="w3-col l2 m3">
                    <img src="/w3images/girl_hood.jpg" alt="" />
                  </div>
                  <div class="w3-col l10 m9">
                    <h4>
                      Anja{" "}
                      <span class="w3-opacity w3-medium">
                        April 7, 2015, 9:12 PM
                      </span>
                    </h4>
                    <p>Cant wait for the runway to start!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

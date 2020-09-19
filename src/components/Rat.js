import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMars,
  faVenus,
  faWheelchair,
} from "@fortawesome/free-solid-svg-icons";
import Login from "./Login";
import ArenaStats from "./ArenaStats";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

function cleanString(string, optionalSuffix) {
  optionalSuffix = optionalSuffix || "";
  return string.replace(/\s/g, "").toLowerCase() + optionalSuffix;
}

function Rat({
  rname,
  server,
  slug,
  character,
  gender,
  charClass,
  race,
  level,
  ilevel,
  pvp,
  avatar_url,
  bust_url,
  render_url,
  name,
  last_login,
}) {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <div className={`rat-container ${cleanString(charClass)}`}>
            <img
              src={avatar_url}
              className="avatar"
              alt="character avatar"
            ></img>
            <div className="rat-inner">
              <div className="name">{character}</div>
              <div className="server">{server}</div>
              <div>
                Level: <span className="level">{level}</span>
              </div>
              <div className="tag">
                {rname === "Brian" ? (
                  <span>
                    <FontAwesomeIcon icon={faWheelchair} />
                  </span>
                ) : gender === "Male" ? (
                  <span>
                    <FontAwesomeIcon icon={faMars} />
                  </span>
                ) : (
                  <span>
                    <FontAwesomeIcon icon={faVenus} />
                  </span>
                )}{" "}
                {race} {charClass}
              </div>
            </div>
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="info-wrapper">
              <Table bordered hover size="sm">
                <thead>
                  <tr>
                    <th colSpan="2">Average Item Level:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2" className="tableResult">
                      {ilevel}
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th colSpan="2">2v2</th>
                  </tr>
                </thead>
                <ArenaStats data={pvp ? pvp.a2 : 0} />
                <thead>
                  <tr>
                    <th colSpan="2">3v3</th>
                  </tr>
                </thead>
                <ArenaStats data={pvp ? pvp.a3 : 0} />
              </Table>
              <Login milliseconds={last_login} />
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

    // <div className="rat-container" key={character}>
    //   <div className={`rat-name ${cleanString(charClass)}`}>
    //     <a
    //       href={`https://worldofwarcraft.com/en-us/character/us/${slug}/${character.toLowerCase()}`}
    //     >
    //       {character}
    //     </a>
    //   </div>
  );
}

export default Rat;

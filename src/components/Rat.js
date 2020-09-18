import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMars,
  faVenus,
  faWheelchair,
} from "@fortawesome/free-solid-svg-icons";
import LastLogin from "./Login";
import ArenaStats from "./ArenaStats";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Popover } from "react-bootstrap";

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
            <div className="rat-ilevel">Average Item Level: {ilevel}</div>
            <ArenaStats bracket="2v2" rating={0} />
            {console.log(character, pvp)}
            <ArenaStats bracket="3v3" rating={0} />
            <LastLogin milliseconds={last_login} />
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

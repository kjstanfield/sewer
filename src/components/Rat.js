import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMars,
  faVenus,
  faWheelchair,
} from "@fortawesome/free-solid-svg-icons";

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
}) {
  return (
    <div className="rat-container" key={character}>
      <div className={`rat-name ${cleanString(charClass)}`}>
        <a
          href={`https://worldofwarcraft.com/en-us/character/us/${slug}/${character.toLowerCase()}`}
        >
          {character}
        </a>
      </div>
      <div className="rat-avatar">
        <img src={avatar_url} alt="character avatar"></img>
      </div>
      <div className="rat-server">{server}</div>
      <div className="rat-character">{name}</div>
      <div className={`rat-gender ${gender}`}>
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
        )}
      </div>
      <img
        src={`https://wow.zamimg.com/images/wow/icons/small/classicon_${cleanString(
          charClass,
          ".jpg"
        )}`}
        alt={charClass}
      />

      <div className="rat-race">{race}</div>
      <div className="rat-level">Level: {level}</div>
      <div className="rat-ilevel">Average Item Level: {ilevel}</div>

      {pvp === null ? (
        <div>2v2: 0</div>
      ) : (
        <div className="rat-twos">
          2v2: <span className="twos-rating">{pvp.a2.rating}</span>
        </div>
      )}

      {pvp === null ? (
        <div>3v3: 0</div>
      ) : (
        <div className="rat-threes">
          3v3: <span className="threes-rating">{pvp.a3.rating}</span>
        </div>
      )}
      <div className="api-container"></div>

      {/* <a
        href="https://www.wowhead.com/item=19019/thunderfury-blessed-blade-of-the-windseeker"
        data-wowhead="item=19019"
      >
        <img
          src="https://wow.zamimg.com/images/wow/icons/large/inv_sword_39.jpg"
          alt="Thunderfury"
        ></img>
      </a> */}
    </div>
  );
}

export default Rat;

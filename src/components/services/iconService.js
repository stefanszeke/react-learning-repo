import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faMoon, faSun  } from '@fortawesome/free-solid-svg-icons'


// export default function iconsService() {
//   const play = <FontAwesomeIcon icon={faPlay} />
//   const pause = <FontAwesomeIcon icon={faPause} />

//   return {play, pause}

// }

export default class iconsService {

  static get play() { return <FontAwesomeIcon icon={faPlay} /> }
  static get pause() { return <FontAwesomeIcon icon={faPause} /> }

  static get moon() { return <FontAwesomeIcon icon={faMoon} /> }
  static get sun() { return <FontAwesomeIcon icon={faSun} /> }
}
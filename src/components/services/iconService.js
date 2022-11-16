import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faMoon, faSun  } from '@fortawesome/free-solid-svg-icons'


export default class iconsService {

  static get play() { return <FontAwesomeIcon icon={faPlay} /> }
  static get pause() { return <FontAwesomeIcon icon={faPause} /> }

  static get sun() { return <FontAwesomeIcon icon={faSun} /> }
  static get moon() { return <FontAwesomeIcon icon={faMoon} /> }

}
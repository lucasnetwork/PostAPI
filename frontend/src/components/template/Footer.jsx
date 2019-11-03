import React,{Component} from 'react'
import '../../sass/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <FontAwesomeIcon icon={faCopyright}/>
                <p>Copyright. Todos os direitos Reservados.</p>
            </footer>
        )
    }
}

export default Footer
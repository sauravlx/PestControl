import react from 'react';
import { faPhone } from '@awesome/free-solid-svg-icons';


const Header2: React.FC = () => {
  return (
    <div className = "top-line">
        <div className= "container">
            <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12 pull-lift text-center ">
              <p> <span> <i className="fa fa-map-marker" aria-hidden="true"> Saket, New Delhi </i>&nbsp; </span> 
            <span> <span className="fa fa-phone">Mobile No.   
            </span>+91-9015203201</span> <span><span className="fa fa-envelope"></span>+91-8810436335</span> </p>


            </div>
            </div>
        </div>
    </div>
  )
}

export default Header2; 

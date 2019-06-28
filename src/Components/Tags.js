import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default class Tag extends React.Component {
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }
     render(){ 
    return ( 
        <div >
            <h1 data-aos='fade-up' style = {
                {
                    paddingTop: "1.3in",
                    paddingLeft:"0",
                    color: "snow",
                    fontFamily: "sanserif",
                    fontSize: "50px"
                }
            } > Your Food, <br/> Our Delivery</h1> 
            </div>
        )
    }
};
import { Component } from "react";

export class firmInfo extends Component{

    render(){
        let imgurl = "https://www.cybermeru.com/wp-content/uploads/2019/09/Image--e1568100532994.jpg";
        let mycss = {backgroundImage: `url(${imgurl})`, textAlign:"left", padding:'10px', minHeight: '200px',display: 'flex',alignItems: 'center',position: 'relative'};
        let overlayStyle = {position: 'absolute',top: 0,left: 0,width: '100%',height: '100%',backgroundColor: 'black',opacity: 0.5,};
        return(
            <>
                <div style={mycss}>
                    <div style={overlayStyle}></div>
                    <h1 style={{color: 'white',position: 'relative', zIndex: 2}}>About Us</h1>
                </div>
                <div style={{textAlign:"left", margin:'10px' ,padding:'20 10 20 10'}}>
                    <p>
                    CyberMeru Technologies is an IT consulting and services company founded in 2019 having expertise in ERP and focus on emerging technologies like RPA, AI/ML, IOT, Data Science etc.

Our core competency is in implementation, upgrade, rollout, support and customizations in the standard Oracle E-Business suite (On Premise and Cloud). Our strong ERP skills combined with domain knowledge helps in effective implementation of Automation projects using RPA technology. With these distinctive capabilities, we are the obvious choice of customers for driving their Digital Transformation initiatives as well.

Not just large Enterprise level customers, we also cater to the IT needs of mid and small level organizations who cannot afford to implement and maintain the standard ERP systems due to the limited budget. These organizations need systems/applications developed as per their specific requirements within reasonable costs. We engage with these customers, understand their requirements and provide them custom solutions using stand-alone apps, web apps or mobile apps.
                    </p>
                   
                    <p>
                    We are working closely as reliable IT partners with MNCs, Academia and Core Industries (Manufacturing, Automotive, Banking, Media, Energy & Utilities, Pharmaceutical, Retail etc.) in this exciting journey of exploring unlimited possibilities & opportunities in today’s Cyber World!
                    </p>
                </div>
            </>
        );
    }

}
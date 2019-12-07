import React, { Component } from 'react'
import './teamComponent.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

class TeamComponent extends Component {
    render() {
        return (
            <div className="teamView">
                <h1 className="heading">OUR TEAM</h1>
                <section className="team">
                <div className="container">
                
                    {/* <h1> our team</h1> */}
                    <div className="row">
                        <div className="col-md-3 profile text-center">
                            <div className="img-box">
                                <img src="https://avatars0.githubusercontent.com/u/40663687?s=460&v=4" style={{ width: '250px' }} alt="" className="img-responsive" />
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/amar-singh-tanwar-5483a8111/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                    <li><a href="https://www.facebook.com/amartanwarsingh"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a href="https://github.com/amartanwar42"><FontAwesomeIcon icon={faGithub} /></a></li>
                                </ul>
                            </div>
                            <h2>Amar Singh Tanwar</h2>
                            <h3>Developer & Creator Of<br/>qaHUB</h3>
                            <p>Quality Analyst at <br/>ThoughtWorks</p>

                        </div>
                        <div className="col-md-3 profile text-center">
                            <div className="img-box">
                                <img src="https://avatars3.githubusercontent.com/u/4985886?s=460&v=4" style={{ width: '250px' }} alt="" className="img-responsive" />
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/vinayakamayura/?originalSubdomain=in"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                    <li><a href="https://www.facebook.com/vinayakamayura"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a href="https://github.com/VinayakaMayura"><FontAwesomeIcon icon={faGithub} /></a></li>
                                </ul>
                            </div>
                            <h2>Vinayaka Mayura</h2>
                            <h3>Content Management & Event Organiser</h3>
                            <p>Sr. Quality Analyst at ThoughtWorks</p>
                        </div>
                        <div className="col-md-3 profile text-center">
                            <div className="img-box">
                                <img src="https://media.licdn.com/dms/image/C5103AQHlfe9tHpRDuw/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=BvGix0oB8-_rT8gyLmXTslZMihhu16Sh__7UNLO3x1c" style={{ width: '250px' }} alt="" className="img-responsive" />
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/lipika-dugar-9568b071/?originalSubdomain=in"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                    <li><a href="https://www.facebook.com/lipika.dugar"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a href="https://github.com/lipikadugar"><FontAwesomeIcon icon={faGithub} /></a></li>
                                </ul>
                            </div>
                            <h2>Lipika Dugar</h2>
                            <h3>Content Management & Event Organiser</h3>
                            <p>Sr. Quality Analyst at ThoughtWorks</p>
                        </div>
                    </div>
                </div>
                {/* <h1 className="heading" style={{ marginTop: '32%' }}>Our Team</h1> */}
            </section>
            </div>
        )
    }
}

export default TeamComponent

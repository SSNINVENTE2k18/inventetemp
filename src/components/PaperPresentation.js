import React,{Component} from 'react';
import {NavLink ,Route,Redirect } from 'react-router-dom';
import './PaperPresentation.css';
import DataParser from './DataParser';
class PaperPresentation extends Component{
            render(){
                console.log(this.props);
                const { match }=this.props;
                console.log(match);
                return (
                    <div id="pp-main-bg">
                      <div id="pp-main">
                          <div id="pp-content" className="flex-box-row">
                               <div className="flex-hover" id="event-01"><NavLink className="link"  style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-IT`}><img  alt="it-imag" src={require('../assests/it.png')}/><div id="it-id">IT</div></NavLink></div>
                               <div className="flex-hover" id="event-02"><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-ECE`}><img alt="it-image2" src={require('../assests/ece.png')} /><div id="ece-id">ECE</div></NavLink></div>
                               <div className="flex-hover" id="event-03"><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-CSE`}><img alt="it-image3" src={require('../assests/cse.png')} /><div id="cse-id">CSE</div></NavLink></div>
                               <div className="flex-hover" id="event-04"><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-CIVIL`}><img alt="it-image4" src={require('../assests/civil.png')} /><div id="civil-id">CIVIL</div></NavLink></div>
                               <div className="flex-hover" id="event-05"><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-MECH`}><img alt="it-image5" src={require('../assests/mech.png')} /><div id="mech-id">MECH</div></NavLink></div>
                               <div className="flex-hover" id="event-06"><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-BIO`}><img alt="it-image6" src={require('../assests/bme.png')} /><div id="bme-id">BME</div></NavLink></div>
                               <div className="flex-hover" id="event-07"><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-EEE`}><img alt="it-image7" src={require('../assests/eee.png')} /><div id="eee-id">EEE</div></NavLink></div>
                               <div className="flex-hover" id="event-08"><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-CHEM`}><img alt="it-imag8e" src={require('../assests/chem.png')} /><div id="chem-id">CHEM</div></NavLink></div>
                            </div>
                            <div className="flex-box-row2" id="flex-box-row1">
                                <div><NavLink className="link"  style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-IT`}>IT</NavLink></div>
                                <div><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-ECE`}>ECE</NavLink></div>
                                <div><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-CSE`}>CSE</NavLink></div>
                                <div><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-CIVIL`}>CIVIL</NavLink></div>
                                <div><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-MECH`}>MECH</NavLink></div>
                                <div><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-BIO`}>BME</NavLink></div>
                                <div><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-EEE`}>EEE</NavLink></div>
                                <div><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-CHEM`}>CHEM</NavLink></div>
                            </div>
                       </div>
                       <div id="home-page-redirect" ><NavLink to={{pathname:'/'}}  style={{ textDecoration: 'none', color:'white' }}>Click <strong>here!</strong> to go back to the Homepage</NavLink></div>
                       <Route path={`${match.url}/:name`} component={DataParser} />
                    </div>
                )
            }
}
export default PaperPresentation

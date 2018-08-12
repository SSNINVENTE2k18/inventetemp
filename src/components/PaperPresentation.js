import React,{Component} from 'react';
import {NavLink ,Route} from 'react-router-dom';
import './PaperPresentation.css';
import DataParser from './DataParser';
class PaperPresentation extends Component{
            render(){
                const { match }=this.props;
                console.log(match);
                return (
                    <div id="pp-main-bg">
                      <div id="pp-main">
                          <div id="pp-content" className="flex-box-row">
                               <div className="flex-hover"><NavLink className="link"  style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-IT`}><img  alt="it-imag" src={require('../assests/it.png')}/></NavLink></div>
                               <div className="flex-hover"><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-ECE`}><img alt="it-image2" src={require('../assests/ece.png')} /></NavLink></div>
                               <div className="flex-hover"><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-CSE`}><img alt="it-image3" src={require('../assests/cse.png')} /></NavLink></div>
                               <div className="flex-hover"><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-CIVIL`}><img alt="it-image4" src={require('../assests/civil.png')} /></NavLink></div>
                               <div className="flex-hover"><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-MECH`}><img alt="it-image5" src={require('../assests/mech.png')} /></NavLink></div>
                               <div className="flex-hover"><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-BIO`}><img alt="it-image6" src={require('../assests/bme.png')} /></NavLink></div>
                               <div className="flex-hover"><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-EEE`}><img alt="it-image7" src={require('../assests/eee.png')} /></NavLink></div>
                               <div className="flex-hover"><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-CHEM`}><img alt="it-imag8e" src={require('../assests/chem.png')} /></NavLink></div>
                            </div>
                            <div className="flex-box-row2" id="flex-box-row1">
                                <div><NavLink className="link"  style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-IT`}>IT</NavLink></div>
                                <div><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-ECE`}>ECE</NavLink></div>
                                <div><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-CSE`}>CSE</NavLink></div>
                                <div><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-CIVIL`}>CIVIL</NavLink></div>
                                <div><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-MECH`}>MECH</NavLink></div>
                                <div><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-BIO`}>BIO</NavLink></div>
                                <div><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-EEE`}>EEE</NavLink></div>
                                <div><NavLink className="link" style={{ textDecoration: 'none', color:'white' }} to={`${match.url}/events-CHEM`}>CHEM</NavLink></div>
                            </div>
                       </div>
                       <Route path={`${match.url}/:name`} component={DataParser} />
                    </div>
                )
            }
}
export default PaperPresentation

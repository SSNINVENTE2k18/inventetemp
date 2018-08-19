import React, { Component } from 'react'
import './DataParser'
class DataParser extends Component{
  render(){
      let data=require('./data.json');
      const { match } = this.props;
      let newparser=match.params.name!=null?match.params.name:'events-IT';
      const rawdata=data[newparser];
      const title=rawdata["title"];
      const desc=rawdata["description"];
       const rule=rawdata["rules"];
       const head=rawdata["heads"];
       const ven=rawdata["venue"];
       const time=rawdata["timings"];
       const items=rule.map((datas,index)=> <li key={index} dangerouslySetInnerHTML={{__html:datas}}></li> );
       const times=time.map((item,index)=><p key={index}>{item}</p>)
       const heads=head.map((header,index)=><div key={index}>{subdiv(header)}</div>)

      function createdes(){
          return{ __html : desc };
      }
      function subdiv(header){
                const data=<p>{header.name}-{header.contacts}</p>;
                return data;
      }
       return (<div id="pp-event-display">
       <div id="pp-event-outer">
           <div id="pp-event-area">
              <h1>{title}</h1>
             <p><strong>Description:</strong></p><p dangerouslySetInnerHTML={createdes()}></p>
             <ul>{items}</ul>
            <p><strong>Venue:</strong></p><p>{ven}</p>
            <p><strong>Timings:</strong></p><h4>{times}</h4>
           <p><strong>Event-Heads:</strong></p><div>{heads}</div>
       </div>
       </div>
       </div>);
  }

}
export default DataParser;
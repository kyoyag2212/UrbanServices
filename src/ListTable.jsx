import React from 'react';
import { Router, Link, Route, useHistory } from "react-router-dom";


export default class ListTable extends React.Component {
    
    constructor(props){
      super(props);
      this.getHeader = this.getHeader.bind(this);
      this.getRowsData = this.getRowsData.bind(this);
      this.getKeys = this.getKeys.bind(this);
    }
    
    getKeys = function(){
      return Object.keys(this.props.data[0])
    }
    
    getHeader = function(){
      var keys = this.getKeys();
      return keys.map((key, index)=>{
        if (key === "username") 
        {
          return <th key={key}>{"NAME"}</th>

        }
        if (key === "u_phoneno") 
        {
          return <th key={key}>{"CONTACT"}</th>

        }
        if (key === "avg(`r`.`rating`)") 
        {
          return <th key={key}>{"RATING"}</th>

        }


         
        return <th key={key}>{key.toUpperCase()}</th>
      })
    }
    
    getRowsData = function(){
      var items = this.props.data;
      var keys = this.getKeys();
      return items.map((row, index)=>{
        return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
      })
    }
    
    render() {
        return (
          <div>
            <table>
            <thead>
              <tr>{this.getHeader()} </tr>
            </thead>
            <tbody>
              {this.getRowsData()}
            </tbody>
            </table>
          </div>
          
        );
    }
}

const RenderRow = (props) =>{
    const histroy=useHistory();
  return props.keys.map((key, index)=>{
    return <td onClick={() => { 
        localStorage.setItem('rname',props.data['username'])
        console.log(props.data['username'])
        histroy.push('/rateandcomment')} }key={props.data[key]}>{props.data[key]} </td>
  })
}
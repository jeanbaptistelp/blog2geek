import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {

 


    render(){
        return(
            <div className="ui secondary pointing menu" >

              <ul>
                <li> <Link to='/actus'  >Actus</Link></li>
                <li> <Link to='/code' >Code</Link></li>
                <li> <Link to='/cine' >Cine</Link></li>
                <li> <Link to='/series' >Series</Link></li>
                <li> <Link to='/films' >Films</Link></li>
                <li> <Link to='/blabla'>Bla Bla</Link></li>
             </ul>         
            </div>
        )
    }
}

export default Header
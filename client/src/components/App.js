import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Header from '../components/navigation/Header';
import Blabla from '../components/navigation/Blabla';
import Actus from '../components/navigation/Actus';
import Code from '../components/navigation/Code';
import Films from '../components/navigation/Films';
import Series from '../components/navigation/Series';
import Cine from '../components/navigation/Cine';







class App extends Component {

  render(){
      return(
          <div>
              
              <BrowserRouter>
                  <div>
                      <Header />
                      <Route path='/actus' exact component={Actus} />
                      <Route path='/code' exact component={Code} />
                      <Route path='/cine' exact component={Cine} />
                      <Route path='/series' exact component={Series} />
                      <Route path='/films' exact component={Films} />
                      <Route path='/blabla' exact component={Blabla} />
                  </div>
              
              </BrowserRouter>
          </div>
      )
  }
}

export default App;

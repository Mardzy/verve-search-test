import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';



import './scss/style.scss';

import MainNav from './components/common/MainNav';
import ChildElement from './components/common/ContentElement';

class App extends React.Component {
  state = {
    information: [],
    selectedContent: ''

  }
  componentDidMount(){
    //Allow-Control-Allow-Origin: * google extension
    Axios.get('http://localhost:8001/data.json')
      .then(res => this.setState({information: res.data}/*, console.log('information set in state', res.data)*/))
      .catch(err => console.log(err));
  }

  handleClick (content){
    console.log('handleClick', content);
    this.setState({
      selectedContent: content
    });
  }

  render() {
    // console.log('logging inside render', this.state.information);
    return (
      <main>
        <header>
          <img src="http://www.vervesearch.com/wp-content/themes/twentytwelve/css/images/vervesearch-logo.png" alt="Verve Search Logo"/>
          <nav>
            {this.state.information && this.state.information.map(info=>
              <MainNav
                handleClick={this.handleClick.bind(this)}
                key={info.key} info={info}/>)}
          </nav>
        </header>
        <ChildElement content={this.state.selectedContent} />
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

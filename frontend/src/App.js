import React from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import AuthorList from './components/Author';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      'authors': []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/authors')
      .then(response => {
        const authors = response.data
        this.setState(
          {
            'authors': authors
          } 
        )
      }).catch(error => console.log(error))
  }

  render() {
    console.log(<AuthorList authors={this.state.authors} />)
    return(
      <div>
        <AuthorList authors={this.state.authors} />
      </div>
    )
  }
}

export default App;

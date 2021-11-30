import React from 'react'
import axios from 'axios'
import Searchbar from './Searchbar'

class App extends React.Component {
  onSearchSubmit = (term) => {
    //fetch data
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID bD1jNDFbYPIgU68UNzzFupY6DWshUwsjo9SSpbVvq6k',
      },
    })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App

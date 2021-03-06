import React from 'react'

class Searchbar extends React.Component {
  state = {
    term: '',
  }

  onFormSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Input Search</label>
            <input
              value={this.state.term}
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    )
  }
}

export default Searchbar

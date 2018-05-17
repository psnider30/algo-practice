import React, { Component } from 'react';

class Dictionary extends Component {
  constructor(props) {

    this.state = {
      wordInput: '',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // Call method to action if using redux, or to api to get all attributes on word
    // put word into props

  }

  render() {
    const { word }= this.props.word;

    return (
      <div className='dicitonary-main'>
        <form
          className="word-form"
          onSubmit={(event) => this.handleSubmit(event)}>
            <label htmlFor='wordInput'</label>
            <input type='text'
              id='word-input'
              name='wordInput'
              placeholder = 'search'
              onChange={(event) => this.handleChange(event)}
              value={this.state.wordInput} />
            <button className='submit' type='submit'>Search</button>
          </form>

          <div className='word-display'>
            <WordCard word={word} />
          </div>
      </div>
    );
  }
}

import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu'
import Hotels from './components/Hotels/Hotels';
import React, { Component } from 'react';

class App extends Component {
  hotels = [
    {
      id: 1,
      name: 'Pod akacjami',
      city: 'Warszawa',
      rating: 8.4,
      opinionsNumber: '233',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra aliquet. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Cum sociis natoque penatibus et magnis. Dignissim enim sit amet venenatis urna. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh.',
      image: ''
    },
    {
      id: 2,
      name: 'Dzikie wino',
      city: 'Limanowa',
      rating: 9.6,
      opinionsNumber: '1365',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra aliquet. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Cum sociis natoque penatibus et magnis. Dignissim enim sit amet venenatis urna. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh.',
      image: ''
    }
  ];
  state = {
    hotels: this.hotels
  };
  
  searchHandler(term){
    console.log('szukaj z app', term)
    const hotels = [...this.hotels]
                    .filter(x => x.name.toLowerCase().includes(term.toLowerCase()))
    this.setState({ hotels })
  }


  render(){
    return (
      <div className="App">
        <Header onSearch={(term) => this.searchHandler(term)}/>
        <Menu />
        <Hotels hotels={this.state.hotels}/>
      </div>
    );
  }
}

export default App;

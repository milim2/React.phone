import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: 'HuniYun',
        phone: '478-921-7878'
      },
      {
        id: 1,
        name: 'Kyle Bolton',
        phone: '987-556-4551'
      }
    ],
    keyword: ''
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState ({
      information: information.map(
        info => id === info.id
        ? { ...info, ...data} // create a new object -> overwrapping transferred data on the value
        : info // rendering the original value
      )
    })
  }


  render() {

    const {information, keyword} = this.state;
    const filterList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );

    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <p>
          <label>Search : </label>
          <input
              placeholder = "Search"
              onChange = {this.handleChange}
              value = {keyword}
          />
        </p>
        <hr />
        <PhoneInfoList data = {filterList}
                       onRemove = {this.handleRemove}
                       onUpdate = {this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
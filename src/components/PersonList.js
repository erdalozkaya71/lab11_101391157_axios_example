import React, { Component } from 'react';
import axios from 'axios';
import './PersonList.css'; // Import the CSS file

class PersonList extends Component {
  // Define state default values
  state = {
    persons: []
  };

  // Component Lifecycle Callback
  componentDidMount() {
    axios
      .get(`https://randomuser.me/api/?results=10`)
      .then((res) => {
        console.log(res.data.results);
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <div className="container mt-5">
        <h2 className="line mb-4">User List</h2>
        {this.state.persons.map((person) => (
          <div key={person.login.uuid} className="card mb-3">
            <div className="picture-column">
              <img src={person.picture.large} className="card-img-top" alt="Person" />
            </div>
            <div className="info-column">
              <h5 className="card-title">{`${person.name.title} ${person.name.first} ${person.name.last}`}</h5>
              <p className="card-text">{`Gender: ${person.gender}`}</p>
              <p className="card-text">{`Time Zone Description: ${person.location.timezone.description}`}</p>
              <p className="card-text">{`Address: ${person.location.street.number} ${person.location.street.name}, ${person.location.city}, 
                    ${person.location.state}, ${person.location.country}, ${person.location.postcode}`}</p>
              <p className="card-text">{`Email: ${person.email}`}</p>
              <p className="card-text">{`Birth date and Age: ${new Date(person.dob.date).toLocaleDateString()} (${person.dob.age})`}</p>
              <p className="card-text">{`Register Date: ${person.registered.date}`}</p>
              <p className="card-text">{`Phone: ${person.phone}`}</p>
              <p className="card-text">{`Cell: ${person.cell}`}</p>
              {/* Add more fields as needed */}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PersonList;
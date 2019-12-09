import React from 'react';
import './App.css'; 
import PropTypes from 'prop-types';

class AssignmentUsingClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },     
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.address.zipcode}
            </li>
          ))}
        </ul>
      );
    }
  }

  static propTypes = {
    error: PropTypes.any,
    isLoaded: PropTypes.bool,
    items: PropTypes.array,
    result: PropTypes.array,
    message: PropTypes.any,
    name: PropTypes.string,
    address: PropTypes.object,
    zipcode: PropTypes.number
  }

}

export default AssignmentUsingClassComponent;

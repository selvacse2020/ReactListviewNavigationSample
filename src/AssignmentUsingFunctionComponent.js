import React, { useState, useEffect } from "react";
import "./App.css";
import PropTypes from 'prop-types';

function AssignmentUsingFunctionComponent() {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `http://jsonplaceholder.typicode.com/users`,
      {
        method: "GET"
      }
    )
      .then(res => res.json())
      .then(response => {
        setResponse(response);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  });

  return (
    <div>     
      {isLoading && <p>Wait I'm Loading</p>}      
      {response.map((c, index) => (
        <div key={index}>
          {c.name && (
            <>
              <div>
                <h2 style={{ textDecoration: "Underline" }}>
                  {c.name}
                </h2>
                <p>{c.address.zipcode}</p>
              </div>
              <hr />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

AssignmentUsingFunctionComponent.propTypes = {
  response: PropTypes.array,
  isLoading: PropTypes.bool,
  name: PropTypes.string,
  zipcode: PropTypes.number  
}

export default AssignmentUsingFunctionComponent;

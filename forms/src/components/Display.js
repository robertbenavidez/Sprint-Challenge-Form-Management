import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../axiosWithAuth';

function Display() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/restricted/data")
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
   
        
  return (
    <div>
      {data.map((menu,key) => {
        return (
          <div key={key}>
            <h2>{menu.name}</h2>
            <h3>{menu.course}</h3>
            <h3>{menu.technique}</h3>
            {menu.ingredients.map(ingredient => {
              return <h3>{ingredient}</h3>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Display;
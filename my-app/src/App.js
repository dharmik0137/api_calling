import logo from './logo.svg';
import './App.css';
import mycs from './mycs.module.css';
import { useEffect, useState } from "react";
import { Container,Row,Col } from 'react-bootstrap'; 
const axios = require('axios');


function App() {

  // const [char,setChar] = useState([
  //   {image:logo,name:"cdmi",gender:"male",location:"location",last_seen:"Rick and Morty"},
  //   {image:logo,name:"cdmi",gender:"male",location:"location",last_seen:"Rick and Morty"},
  //   {image:logo,name:"cdmi",gender:"male",location:"location",last_seen:"Rick and Morty"},
  // ])

  const [char,setChar] = useState([])

  useEffect(()=>{
    console.log("OK");
    axios.get('https://rickandmortyapi.com/api/character')
    .then(function (res) {
      // handle success
      setChar(res.data.results);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
  })

  },[])

  return (
    <div className="App">
      {
        char.map((item,i)=>{
          return<div className={mycs.first} key={"character"+i}>
            <Container>
              <Row>
                <Col sm={4} className={mycs.p1}>
                  <img src={item.image} className={mycs.img} width="125px"></img>
                </Col>
                <Col sm={8} className={mycs.p2}>
                  <p className={mycs.txt}>{item.name}</p>
                  <p className={mycs.txt}>{item.gender}</p>
                  <p className={mycs.txt}>{item.species}</p>
                  <p className={mycs.txt}>Last known location:{item.location.name}</p>
                  <p className={mycs.txt}>First seen in:{item.status}</p>
                </Col>
              </Row>
            </Container>
          </div>
        })
      }
    </div>
  );
}

export default App;

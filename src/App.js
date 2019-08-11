import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomeList from './Components/Home/HomeList';
import People from './Components/Peoples/Peoples';
import { Switch, Route } from 'react-router-dom';
import {Container, Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

function App() {
  return (
      <Container>
          <Row>
              <Col md={4}>
                  <HomeList/>
              </Col>
              <Col md={4}>
                  <Switch>
                      <Route exact path='/:homename' component={People}/>

                  </Switch>
              </Col>
          </Row>


      </Container>
  );
}

export default App;

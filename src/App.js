import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layout";
import Search from "./search";
import Details from "./details";
import React from "react";
import Home from "./home";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import pokemonReducer from "./reducers/pokemon-reducer";
import monReducer from "./reducers/mon-reducer";
const store = configureStore({reducer: {pokemon: pokemonReducer, mon: monReducer}});

function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
              <div className="container">
                  <Routes>
                      <Route path="/"
                             element={<Layout/>}>
                          <Route index
                                 element={<Home/>}/>
                          <Route path="/pokemon"
                                 element={<Search/>}/>
                          <Route path="/pokemon/:name"
                                 element={<Details/>}/>
                          <Route path="/*"
                                 element={<App/>}/>
                      </Route>
                  </Routes>
              </div>
          </Provider>
      </BrowserRouter>
  );
}

export default App;

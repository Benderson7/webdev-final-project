import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layout";
import Search from "./search";
import Details from "./details";
import React from "react";
import Home from "./home";
import Login from "./login"
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import pokemonReducer from "./reducers/pokemon-reducer";
import monReducer from "./reducers/mon-reducer";
import Register from "./register";
import usersReducer from "./reducers/users-reducer";
import Profile from "./profile";
import EditProfile from "./profile/EditProfile";
const store = configureStore({reducer: {pokemon: pokemonReducer, mon: monReducer, users: usersReducer}});

function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
              <div className="container">
                  <Layout/>
                  <Routes>
                      <Route index
                             element={<Home/>}/>
                      <Route path="/login"
                             element={<Login/>}/>
                      <Route path="/register"
                             element={<Register/>}/>
                      <Route path="/pokemon"
                             element={<Search/>}/>
                      <Route path="/pokemon/:name"
                             element={<Details/>}/>
                      <Route path="/profile"
                             element={<Profile/>}/>
                      <Route path="/edit-profile"
                             element={<EditProfile/>}/>
                  </Routes>
              </div>
          </Provider>
      </BrowserRouter>
  );
}

export default App;

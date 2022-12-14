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
import CurrentUser from "./profile/current-user";
import LoggedOutRoute from "./profile/logged-out-route";
import LoggedInRoute from "./profile/logged-in-route";
import ViewProfile from "./profile/view-profile";
import teamReducer from "./reducers/team-reducer";
const store = configureStore({reducer: {
        pokemon: pokemonReducer,
        mon: monReducer,
        users: usersReducer,
        team: teamReducer}});

function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
              <div className="container">
                  <CurrentUser>
                      <Layout/>
                      <Routes>
                          <Route index element={<Home/>}/>
                          <Route path={"/home"} element={<Home/>}/>
                          <Route path="/login" element={<LoggedInRoute><Login/></LoggedInRoute>}/>
                          <Route path="/register" element={<LoggedInRoute><Register/></LoggedInRoute>}/>
                          <Route path="/search/*" element={<Search/>}/>
                          <Route path="/details/:id" element={<Details/>}/>
                          <Route path="/profile" element={<LoggedOutRoute><Profile/></LoggedOutRoute>}/>
                          <Route path="/edit-profile" element={<LoggedOutRoute><EditProfile/></LoggedOutRoute>}/>
                          <Route path={"/profile/:uid"} element={<ViewProfile/>}/>
                      </Routes>
                  </CurrentUser>
              </div>
          </Provider>
      </BrowserRouter>
  );
}

export default App;

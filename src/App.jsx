// src/App.jsx
import React from "react";
import Wrapper from "./components/Wrapper";
import ProfileCard from "./components/ProfileCard";
import ControlledInput from "./components/ControlledInput";
import UncontrolledInput from "./components/UncontrolledInput";

const App = () => (
  <Wrapper>
    <h1 className="text-2xl font-bold text-center mb-6">Profile Page</h1>
    <ProfileCard name="Yeswanth" bio="Week-4 lab" />
    <ControlledInput />
    <UncontrolledInput />
  </Wrapper>
);

export default App;
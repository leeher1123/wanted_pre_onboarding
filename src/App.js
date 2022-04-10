import React from "react";
import styled from "styled-components";
import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Slider from "./components/Slider";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";

const App = () => {
  return (
    <Container>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown />
    </Container>
  );
};

const Container = styled.div``;

export default App;

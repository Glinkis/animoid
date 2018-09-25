import React from "react"
import { hot } from "react-hot-loader"
import "./App.scss"
import { Menu } from "./Menu"
import { Title } from "./Title"

export const App = () => (
  <React.Fragment>
    <Title />
    <Menu />
  </React.Fragment>
)

export default hot(module)(App)

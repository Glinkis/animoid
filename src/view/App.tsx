import React from "react"
import { hot } from "react-hot-loader"
import "./App.scss"
import { Title } from "./Title"

export const App = () => (
  <React.Fragment>
    <Title />
  </React.Fragment>
)

export default hot(module)(App)

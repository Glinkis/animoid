import React from "react"
import { hot } from "react-hot-loader"
import "./App.scss"
import { Button } from "./Button"
import { Title } from "./Title"

export const App = () => (
  <React.Fragment>
    <Title />
    <Button data-cy="create-project-btn" text="Create Project" />
  </React.Fragment>
)

export default hot(module)(App)

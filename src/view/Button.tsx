import React from "react"
import "./Button.scss"

export const Button = props => {
  const { text, ...restProps } = props
  return (
    <button className="button" {...restProps}>
      {text}
    </button>
  )
}

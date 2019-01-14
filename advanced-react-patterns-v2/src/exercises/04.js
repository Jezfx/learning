// render props

import React from 'react'
import {Switch} from '../switch'

const renderUI = ({on, toggle}) => {
  return (
    // We want to give rendering flexibility, so we'll be making
    // a change to our render prop component here.
    // You'll notice the children prop in the Usage component
    // is a function. 🐨 So you can replace this with a call this.props.children()
    // But you'll need to pass it an object with `on` and `toggle`.
    <Switch on={on} onClick={toggle} />
  )
}

// we're back to basics here. Rather than compound components,
// let's use a render prop!
class Toggle extends React.Component {
  static defaultRender = {renderUI}
  state = {on: false}
  toggle = () => {
    this.setState(
      ({on}) => ({on: !on}),
      () => {
        this.props.onToggle(this.state.on)
      },
    )
  }

  render() {
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle,
    })
  }
}

function CommonToggle(props) {
  return (
    <Toggle {...props}>
      {({on, toggle}) => <Switch on={on} onClick={toggle} />}
    </Toggle>
  )
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the Toggle component.
function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return (
    <div>
      <Toggle onToggle={onToggle}>
        {({on, toggle}) => (
          <div>
            {on ? 'The button is on' : 'The button is off'}
            <Switch on={on} onClick={toggle} />
            <hr />
            <button aria-label="custom-button" onClick={toggle}>
              {on ? 'on' : 'off'}
            </button>
          </div>
        )}
      </Toggle>
      <CommonToggle />
    </div>
  )
}
Usage.title = 'Render Props'

export {Toggle, Usage as default}

import React from 'react'

const AnotherComponent: React.FunctionComponent = () => {
  return null
}

const Component: React.FunctionComponent = () => {
  return (
    <div className="my-class">
      <div />
      <AnotherComponent />
    </div>
  )
}

export default Component

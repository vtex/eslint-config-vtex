import React, { FC } from 'react'

const AnotherComponent: FC = () => {
  return null
}

export default () => {
  return (
    <div className="my-class">
      <div />
      <AnotherComponent />
    </div>
  )
}

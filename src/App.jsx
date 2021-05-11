import * as React from 'react'
import Button from './Button'
import Pagination from './Pagination'
import Header from './Header'

export default () => {
  return (
    <div>
      <Header text="Das ist die Überschrift" />
      <Pagination isLeftDisabled text="1/34" />
      <Pagination text="2/34" />
      <Pagination isRightDisabled text="34/34" />
      <Button isActive={true}>Active</Button>
      <Button isActive={false}>Not active</Button>
    </div>
  )
}

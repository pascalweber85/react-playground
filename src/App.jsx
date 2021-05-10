import * as React from 'react'

import Pagination from './Pagination'
import Cards from './Cards'

export default () => {
  return (
    <div>
      <Cards />
      <Cards isActive />
      <Pagination isLeftDisabled text="1/34" />
    </div>
  )
}

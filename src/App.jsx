import * as React from 'react'

import Pagination from './Pagination'
import Cards from './Cards'

export default () => {
  return (
    <div>
      <Cards title="Frage" text="Du oder ich ?" />
      <Cards title="Frage" text="Meins oder Deins?" isBookmarked />
      <Pagination isLeftDisabled text="1/34" />
    </div>
  )
}

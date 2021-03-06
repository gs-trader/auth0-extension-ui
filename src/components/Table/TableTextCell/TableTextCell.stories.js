import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import TableTextCell from './';

storiesOf('TableTextCell', module)
  .add('default view', () => (
    <TableTextCell>
      This is the TableTextCell children.
    </TableTextCell>
  ))
  .add('with link', () => (
    <TableTextCell onClick={action('onClick')}>
      This is the TableTextCell children.
    </TableTextCell>
  ));

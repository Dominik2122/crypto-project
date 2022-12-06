import TableCell from '@mui/material/TableCell';
import * as React from 'react';
import { Typography } from '@mui/material';

const PercentageChange = ({ change }: { change: number }) =>
  change >= 0 ? (
    <TableCell align="right">
      <Typography noWrap variant="body2" sx={{ color: 'success.main', fontWeight: 'bold' }}>
        {`${change} %`}
      </Typography>
    </TableCell>
  ) : (
    <TableCell align="right">
      <Typography noWrap variant="body2" sx={{ color: 'error.main', fontWeight: 'bold' }}>
        {`${change} %`}
      </Typography>
    </TableCell>
  );

export default PercentageChange;

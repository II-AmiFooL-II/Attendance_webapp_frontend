import Backdrop from '@mui/material/Backdrop';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export const Spinner = (props)=>{
    return(
        <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={!props["isAvailable"]}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
    );
}
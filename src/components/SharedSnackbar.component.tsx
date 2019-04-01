import { IconButton, Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import { SharedSnackbarConsumer } from './SharedSnackbar.context';

export const SharedSnackbar: React.FC = () => (
    <SharedSnackbarConsumer>
        {({ snackbarIsOpen, message, closeSnackbar }) => (
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={snackbarIsOpen}
                autoHideDuration={1000}
                onClose={closeSnackbar}
                message={message}
                action={[
                    <IconButton key="close" color="inherit" onClick={closeSnackbar}>
                        <Close />
                    </IconButton>,
                ]}
            />
        )}
    </SharedSnackbarConsumer>
);

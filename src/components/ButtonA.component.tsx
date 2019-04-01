import { Button } from '@material-ui/core';
import React from 'react';
import { SharedSnackbarConsumer } from './SharedSnackbar.context';

const styles = {
    button: {
        margin: 8,
    },
};

export const ButtonA: React.FC = () => (
    <SharedSnackbarConsumer>
        {({ openSnackbar }) => (
            <Button
                style={styles.button}
                variant="raised"
                color="primary"
                onClick={() => openSnackbar('You clicked Button A!')}
            >
                Button A 
            </Button>
        )}
    </SharedSnackbarConsumer>
);

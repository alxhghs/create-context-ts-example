import React, { Component } from 'react';
import { SharedSnackbarProvider } from './components/SharedSnackbar.context';
import { Buttons } from "./components/Buttons";
import { Count } from "./components/Count";

const styles = {
    app: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
};

class App extends Component {
    render() {
        return (
            <div style={styles.app}>
                <SharedSnackbarProvider>
                    <Count />
                    <Buttons />
                </SharedSnackbarProvider>
            </div>
        );
    }
}

export default App;
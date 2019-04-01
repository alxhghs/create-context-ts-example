import React, { Component } from 'react';
import { SharedSnackbar } from "./SharedSnackbar.component";

export type ContextProps = {
    openSnackbar: (message: string) => void;
    closeSnackbar: () => void;
    snackbarIsOpen: boolean;
    message: string;
    count: number;
}
const SharedSnackbarContext = React.createContext<ContextProps>(null!);

type Props = {
}
type State = {
    isOpen: boolean;
    message: string;
    count: number;
}
export class SharedSnackbarProvider extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isOpen: false,
            message: '',
            count: 0
        };
    }

    openSnackbar = ( message: string ) => {
        this.setState({
            message,
            isOpen: true,
            count: this.state.count + 1
        });
    };

    closeSnackbar = () => {
        this.setState({
            message: '',
            isOpen: false,
        });
    };

    render() {
        const { children } = this.props;

        return (
            <>
                <SharedSnackbarContext.Provider
                    value={{
                        openSnackbar: this.openSnackbar,
                        closeSnackbar: this.closeSnackbar,
                        snackbarIsOpen: this.state.isOpen,
                        message: this.state.message,
                        count: this.state.count
                    }}
                >
                    <SharedSnackbar />

                    {children}
                </SharedSnackbarContext.Provider>
            </>
        );
    }
}

export const SharedSnackbarConsumer = SharedSnackbarContext.Consumer;
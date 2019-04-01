import React from "react";
import { SharedSnackbarConsumer } from "./SharedSnackbar.context"

export const Count: React.FC = () => (
    <SharedSnackbarConsumer>
        {({ count }) => (
            <div>
                You clicked { count } times
            </div>
        )}
    </SharedSnackbarConsumer>
);
import React, {Component} from 'react';
import {
    FormControl,
    InputLabel,
    Button,
    Container,
    OutlinedInput,
    InputAdornment,
    Divider,
    IconButton
} from '@mui/material';


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <>
                <Container maxWidth="sm">
                    <FormControl>
                        <InputLabel>Username</InputLabel>
                        <OutlinedInput
                            defaultValue=""
                            label="Password"
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Username</InputLabel>
                        <OutlinedInput
                            defaultValue=""
                            label="Password"
                        />
                    </FormControl>
                    <Button>Login</Button>
                </Container>

            </>
        );
    }
}
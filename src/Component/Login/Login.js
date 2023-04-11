import React, {Component} from 'react';
import {
    FormControl,
    InputLabel,
    Button,
    Container,
    OutlinedInput,
} from '@mui/material';
import service from "../API/Service";
import { connect } from 'react-redux';
import {actLogin, actSaveInfo} from "../../ActionService/Action";


export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            accessToken: "",
        };
    }

    async componentDidMount() {

    }

    onLoginComplete = async (user) => {
        await this.props.onSaveInfo(user);
        this.props.loginProp({ username: user })
    }

    login = async () => {
        let loginResult = {token: undefined}
        if (this.state.username && this.state.password) {
            try {
                console.log(this.state.username + "------" + this.state.password)
                loginResult = await service.login({
                    username: this.state.username,
                    password: this.state.password,
                })
                this.props.onLogin({
                    accessToken: loginResult.token
                });
                let userResult = await service.currentUser()
                console.log(userResult)
                const { username, avatar, fullName, email, active } = userResult;
                await this.onLoginComplete({username, avatar, fullName, email, active});
                window.location.href = "/location";
            } catch (error) {
                alert(error)
            }
        }
    }

    handleUserName = e => {
        this.setState({ username: e.target.value })
    }

    handlePassWord = e => {
        this.setState({ password: e.target.value })
    }

    render() {
        return (
            <>
                <Container maxWidth="sm">
                    <FormControl>
                        <InputLabel>Username</InputLabel>
                        <OutlinedInput
                            label="Username"
                            value={this.state.username}
                            onChange={(e) => this.handleUserName(e)}
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput
                            label="Password"
                            value={this.state.password}
                            onChange={(e) => this.handlePassWord(e)}
                        />
                    </FormControl>
                    <Button
                        onClick={() => this.login()}
                    >
                        Login</Button>
                </Container>

            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (data) => {
            dispatch(actLogin(data))
        },
        onSaveInfo: (data) => {
            dispatch(actSaveInfo(data))
        },
    }
}

export default connect(null, mapDispatchToProps)(Login)

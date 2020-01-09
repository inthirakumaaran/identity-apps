import React, {Component} from "react";
import {Button, Checkbox, Divider, Form, Grid, Header, Message, Portal, Segment} from "semantic-ui-react";


interface ODICformProps {
    cancelView?: any;
}

class ODICform extends Component<ODICformProps>  {
    public state = {open: true};

    public options = [
        { key: "j", text: "JWT", value: "jwt" },
        { key: "o", text: "Opaque", value: "opaque" },
    ];
    public algorithms = [
        { key: "a", text: "RSA-OAEP", value: "RSA-OAEP" },
    ];
    public method = [
        { key: "a", text: "A128CBC+HS256", value: "A128CBC+HS256" },
    ];

    public handleClose = () => this.setState({open: false});
    public handleOpen = () => this.setState({open: true});

    public render() {

        return (
            <div>
                <Form className="main-content-inner" style={{marginLeft: "10%", marginBottom: "5%"}}>
                    <Grid>
                        <Grid.Row columns={1}>
                            <Grid.Column mobile={16} tablet={16} computer={14}>
                                <Form.Input
                                    id="CallbackURL"
                                    label="CallbackURL"
                                    placeholder={"Enter the CallbackURL"}
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column mobile={16} tablet={16} computer={9}>
                                <Form.Group grouped className="oidc">
                                    <label >Allowed Grant Types</label>
                                    <Form.Radio
                                        label="OAuth Code"
                                        value="code"
                                    />
                                    <Form.Radio
                                        label="Password"
                                        value="password"
                                    />
                                    <Form.Radio
                                        label="Client credential"
                                        value="clientcredential"
                                    />
                                    <Form.Radio
                                        label="Implicit"
                                        value="implicit"
                                    />
                                </Form.Group>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column mobile={16} tablet={16} computer={14}>
                                <Form.Field>
                                    <Checkbox label="Support Public Clients" />
                                    {/*<Message*/}
                                    {/*    info*/}
                                    {/*    content=" Doesn't check for client secret"*/}
                                    {/*/>*/}
                                </Form.Field>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column mobile={16} tablet={16} computer={14}>
                                <Form.Group grouped className="oidc">
                                    <label className="subtitle">PKCE</label>
                                    <Form.Field label="PKCE mandatory" control="input" type="checkbox" />
                                    <Form.Field label="Support PKCE 'Plain' Transform Algorithm" control="input" type="checkbox" />
                                </Form.Group>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            <Grid.Column mobile={16} tablet={16} computer={7}>
                                <Form.Group grouped className="oidc">
                                    <label className="subtitle">Access Token</label>
                                    <Form.Select options={this.options} placeholder="Type"   label="Type"/>
                                </Form.Group>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={16} computer={7}>
                                <Divider hidden/>
                                <Form.Input
                                    id="userAccessTokenExpiryInSeconds"
                                    label="User Access Token Expiry Time"
                                    value="3600"
                                />
                                <Form.Input
                                    id="applicationAccessTokenExpiryInSeconds"
                                    label="Application Access Token Expiry Time"
                                    value="3600"
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column mobile={16} tablet={16} computer={7}>
                                <Form.Group grouped className="oidc">
                                    <label className="subtitle">Refereh Token</label>
                                    <Form.Field label="Renew Refresh Token" control="input" type="checkbox" />
                                </Form.Group>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={16} computer={7}>
                                <Divider hidden/>
                                <Form.Input
                                    id="expiryInSeconds"
                                    label="Refresh Token Expiry Time"
                                    value="86400"
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column mobile={16} tablet={16} computer={7}>
                                <Form.Group grouped className="oidc">
                                    <label className="subtitle">ID Token</label>
                                    <Form.TextArea label="Audience" placeholder="add some audience" />
                                    <Form.Group grouped className="oidcsub">
                                        <label className="oidcsubtitle">Encryption</label>
                                        <Form.Field label="Enable" control="input" type="checkbox" />
                                        <Form.Select options={this.algorithms}  label="Algorithm"/>
                                        <Form.Select options={this.method}  label="Method"/>
                                    </Form.Group>
                                </Form.Group>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={16} computer={7}>
                                <Divider hidden/>
                                <Form.Input
                                    id="idExpiryInSeconds"
                                    label="Id Token Expiry Time"
                                    value="3600"
                                />
                                <Divider hidden/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column mobile={16} tablet={16} computer={14}>
                                <Form.Group grouped className="oidc">
                                    <label className="subtitle">Logout</label>
                                <Form.Input
                                    id="backChannelLogoutUrl"
                                    label="Backchannel Logout Url"
                                    placeholder="Enter Url .."
                                />
                                <Form.Input
                                    id="frontChannelLogoutUrl"
                                    label="Frontchannel Logout Url"
                                    placeholder="Enter Url .."
                                />
                                </Form.Group>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column mobile={16} tablet={16} computer={14}>
                                <Form.Field label="Enable Request Object Signature Validation" control="input" type="checkbox" />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column mobile={16} tablet={16} computer={14}>
                                <Form.Group grouped className="oidc">
                                    <label className="subtitle">Scope Validators</label>
                                    {/* tslint:disable-next-line:max-line-length */}
                                    <Form.Field label="Role based scope validator" control="input" type="checkbox" />
                                    <Form.Field label="XACML Scope Validator" control="input" type="checkbox" />
                                </Form.Group>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Divider hidden />
                    <Button primary type="submit" size="small">
                        submit
                    </Button>
                    <Button
                        className="link-button"
                        onClick={this.props.cancelView}
                        size="small"
                    >
                        cancel
                    </Button>
                </Form>
            </div>
        );
    }
}

export default ODICform;

import React, {Component} from "react";
import {Button, Checkbox, Divider, Dropdown, Form, Grid, Header, Message, Portal, Segment} from "semantic-ui-react";
import AddURL from "./addURLcomponent";

interface SAMLformProps {
    cancelView?: any;
}

class SAMLform extends Component<SAMLformProps>  {
    public state = { open: true, binding: "sso" };

    public defaultConsumerUrls = [
        { key: "j", text: "default", value: "https://google.com"},
    ];
    public encryptionAlgorithms = [
        { key: "a", text: "RSA-OAEP", value: "RSA-OAEP" },
    ];
    public alias = [
        { key: "a", text: "wso2", value: "WSO2" },
    ];
    public responseSigningAlgorithm = [
        { key: "a", text: "RSA-OAEP", value: "RSA-OAEP" },
    ];
    public responseDigestAlgorithm = [
        { key: "a", text: "RSA-OAEP", value: "RSA-OAEP" },
    ];
    public singleLogoutMethod = [
        { key: "a", text: "Back-channel", value: "back-channel" },
        { key: "b", text: "Front-channel Http Redirect", value: "frontchannel_http_redirect" },
        { key: "c", text: "Front-channel Http Post", value: "frontchannel_http_post" },
    ];

    public handleClose = () => this.setState({open: false});
    public handleOpen = () => this.setState({open: true});

    public  handleBindingChange = (e, { value }) => this.setState({ binding: value });

    public render() {

        return (
            <div>
                {/* tslint:disable-next-line:max-line-length */}
                <Form className="main-content-inner" style={{marginLeft: "10%", marginBottom: "5%"}} onSubmit={ (value) => {console.log(value)}}>
                    <Grid>
                        <Grid.Row columns={1}>
                            <Grid.Column mobile={16} tablet={16} computer={14}>
                                <Form.Input
                                    id="issuer"
                                    name="issuer"
                                    label="issuer"
                                    placeholder={"Enter the issuer"}
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column mobile={16} tablet={16} computer={14}>
                                <Form.Input
                                    id="applicationQualifier"
                                    name="applicationQualifier"
                                    label="Application Qualifier"
                                    placeholder={"Enter the Application Qualifier"}
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column mobile={16} tablet={16} computer={9}>
                                <Form.TextArea label="Assertion ConsumerUrls" placeholder="add some consumerUrls" />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column mobile={16} tablet={16} computer={14}>
                                <label>Default Assertion Consumer URL</label>
                                <Dropdown
                                    placeholder=" defaultAssertionConsumerUrl"
                                    fluid
                                    selection
                                    options={this.defaultConsumerUrls}
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column mobile={16} tablet={16} computer={14}>
                                <Form.Input
                                    id="idpEntityIdAlias"
                                    label="Idp EntityId Alias"
                                    placeholder={ "Enter Alias" }
                                />
                            </Grid.Column>
                        </Grid.Row>

                        { /* single signOn */ }
                        <Form.Group grouped className="subGroup">
                            <label className="subGroupTitle">Single SignOn Profile</label>
                            <Grid.Row columns={ 1 }>
                                <Grid.Column mobile={ 16 } tablet={ 16 } computer={ 9 }>
                                        <label className="subGroupSubTitle">Bindings</label>
                                        <Form.Radio
                                            className="subGroupSubElements"
                                            label="Http Post"
                                            value="HTTP_POST"
                                            checked={ this.state.binding === "HTTP_POST" }
                                            onChange={ this.handleBindingChange }
                                        />
                                        <Form.Radio
                                            className="subGroupSubElements"
                                            label="Http Redirect"
                                            value="HTTP_REDIRECT"
                                            checked={ this.state.binding === "HTTP_REDIRECT" }
                                            onChange={ this.handleBindingChange }
                                        />
                                        <Form.Radio
                                            className="subGroupSubElements"
                                            label="Artifact"
                                            value="ARTIFACT"
                                            checked={ this.state.binding === "ARTIFACT" }
                                            onChange={ this.handleBindingChange }
                                        />
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row columns={1}>
                                <Grid.Column mobile={16} tablet={16} computer={14}>
                                    {/* tslint:disable-next-line:max-line-length */}
                                    <Form.Field className="subGroupElements" label="Enable Signature Validation in ArtifactBinding" control="input" type="checkbox" />
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row columns={1}>
                                <Grid.Column mobile={16} tablet={16} computer={14}>
                                    <Form.Input
                                        className="subGroupElements"
                                        id="attributeConsumingServiceIndex"
                                        label="Attribute Consuming ServiceIndex"
                                        value={ "Read Only" }
                                    />
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row columns={1}>
                                <Grid.Column mobile={16} tablet={16} computer={14}>
                                    <Form.Field className="subGroupElements" label="Enable IdP Initiated SSO" control="input" type="checkbox" />
                                </Grid.Column>
                            </Grid.Row>

                            {/* Assertion*/}
                            <Form.Group grouped>
                                <label className="subGroupSubTitle">Assertion</label>
                                <Grid.Row columns={1}>
                                    <Grid.Column mobile={16} tablet={16} computer={14}>
                                        <Form.Input
                                            className="subGroupSubElements"
                                            id="nameIdFormat"
                                            label="NameID format"
                                            placeholder={"Enter the issuer"}
                                            value="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={1}>
                                    <Grid.Column mobile={16} tablet={16} computer={9}>
                                        <Form.Group grouped className="subGroupSubElements">
                                            {/* tslint:disable-next-line:max-line-length */}
                                            <Form.TextArea label="Audiences" placeholder="add some Urls" />
                                        </Form.Group>
                                    </Grid.Column>
                                </Grid.Row>
                                <AddURL classes={"subGroupSubElements"} label="Recipients" id="Recipients" placeholder="add some Urls"/>
                                <Grid.Row>
                                    <Grid.Column mobile={16} tablet={16} computer={14}>
                                        <Form.Group grouped className="subGroupSubElements">
                                            <label>Response Digest Algorithm</label>
                                            <Dropdown
                                                fluid
                                                selection
                                                defaultValue={this.responseDigestAlgorithm[0].value}
                                                options={this.responseDigestAlgorithm}
                                            />
                                        </Form.Group>
                                    </Grid.Column>
                                </Grid.Row>
                                <Form.Group grouped>
                                    <label className="subGroupChildTitle">Encryption</label>
                                    <Grid.Row columns={1}>
                                        <Grid.Column mobile={16} tablet={16} computer={14}>
                                            {/* tslint:disable-next-line:max-line-length */}
                                            <Form.Field className="subGroupChildElement" label="Enable Assertion Encryption" control="input" type="checkbox" />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={1}>
                                        <Grid.Column mobile={16} tablet={16} computer={14}>
                                            <Form.Group className="subGroupChildElement">
                                                <label>AssertionEncryption Algorithm</label>
                                                <Dropdown
                                                    placeholder=" Encryption Algorithm"
                                                    fluid
                                                    selection
                                                    options={this.encryptionAlgorithms}
                                                />
                                            </Form.Group>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={1}>
                                        <Grid.Column mobile={16} tablet={16} computer={14}>
                                            <Form.Group className="subGroupChildElement">
                                                <label>KeyEncryption Algorithm</label>
                                                <Dropdown
                                                    placeholder=" Encryption Algorithm"
                                                    fluid
                                                    selection
                                                    options={this.encryptionAlgorithms}
                                                />
                                            </Form.Group>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Form.Group>
                            </Form.Group>
                        </Form.Group>

                        { /* attribute Profile */ }
                        <Form.Group grouped className="subGroup">
                            <label className="subGroupTitle">Attribute Profile</label>
                            <Grid.Row columns={1}>
                                <Grid.Column mobile={16} tablet={16} computer={14}>
                                    {/* tslint:disable-next-line:max-line-length */}
                                    <Form.Field label="Enable" control="input" type="checkbox" />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={1}>
                                <Grid.Column mobile={16} tablet={16} computer={14}>
                                    {/* tslint:disable-next-line:max-line-length */}
                                    <Form.Field label="Always Include Attributes in the Response" control="input" type="checkbox" />
                                </Grid.Column>
                            </Grid.Row>
                        </Form.Group>


                        { /* single Logout Profile */ }
                        <Form.Group grouped className="subGroup">
                            <label className="subGroupTitle">Single Logout Profile</label>
                            <Grid.Row columns={1}>
                                <Grid.Column mobile={16} tablet={16} computer={14}>
                                    {/* tslint:disable-next-line:max-line-length */}
                                    <Form.Field label="Enable" control="input" type="checkbox" />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={1}>
                                <Grid.Column mobile={16} tablet={16} computer={9}>
                                    <Form.Group grouped className="subGroupElements">
                                        <Form.TextArea label="Single Logout Response Url" placeholder="add some Urls" />
                                    </Form.Group>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={1}>
                                <Grid.Column mobile={16} tablet={16} computer={9}>
                                    <Form.Group grouped className="subGroupElements">
                                        <Form.TextArea label="Single Logout Request Url" placeholder="add some Urls" />
                                    </Form.Group>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column mobile={16} tablet={16} computer={14}>
                                    <label className="subGroupElements">Single Logout Method</label>
                                    <Dropdown
                                        className="subGroupElements"
                                        fluid
                                        selection
                                        defaultValue={this.singleLogoutMethod[0].value}
                                        options={this.singleLogoutMethod}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Form.Group grouped className="subGroup">
                                <label className="subGroupTitle">Idp Initiated SingleLogout</label>
                                <Grid.Row columns={1}>
                                    <Grid.Column mobile={16} tablet={16} computer={14}>
                                        {/* tslint:disable-next-line:max-line-length */}
                                        <Form.Field label="Enable" control="input" type="checkbox" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={1}>
                                    <Grid.Column mobile={16} tablet={16} computer={9}>
                                        <Form.Group grouped className="oidc">
                                            {/* tslint:disable-next-line:max-line-length */}
                                            <Form.TextArea label="Return to URLS " placeholder="add some Urls" />
                                        </Form.Group>
                                    </Grid.Column>
                                </Grid.Row>
                            </Form.Group>
                        </Form.Group>


                        { /* Request Validation */ }
                        <Form.Group grouped className="subGroup">
                            <label className="subGroupTitle">Request Validation</label>
                            <Grid.Row columns={1}>
                                <Grid.Column mobile={16} tablet={16} computer={14}>
                                    {/* tslint:disable-next-line:max-line-length */}
                                    <Form.Field label="Enable Request Signature Validation" control="input" type="checkbox" />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={ 1 }>
                                <Grid.Column mobile={ 16 } tablet={ 16 } computer={ 14 }>
                                    <label className="subGroupElements">Request Validation Certificate Alias</label>
                                    <Dropdown
                                        className="subGroupElements"
                                        fluid
                                        selection
                                        defaultValue={ 0 }
                                        options={ this.alias }
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Form.Group>


                        { /* Response Validation */ }
                        <Form.Group grouped className="subGroup">
                            <label className="subGroupTitle">Response Signing</label>
                            <Grid.Row columns={1}>
                                <Grid.Column mobile={16} tablet={16} computer={14}>
                                    {/* tslint:disable-next-line:max-line-length */}
                                    <Form.Field label="Enable" control="input" type="checkbox" />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={1}>
                                <Grid.Column mobile={16} tablet={16} computer={14}>
                                    <label >Response Signing Algorithm</label>
                                    <Dropdown
                                        fluid
                                        selection
                                        defaultValue={0}
                                        options={this.responseSigningAlgorithm}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Form.Group>

                        { /* Assertion Query Profile */ }
                        <Grid.Row columns={1}>
                            <Grid.Column mobile={16} tablet={16} computer={14}>
                                {/* tslint:disable-next-line:max-line-length */}
                                <Form.Field label="Enable Assertion Query Profile" control="input" type="checkbox" />
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

export default SAMLform;

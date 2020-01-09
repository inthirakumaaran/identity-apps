import React, { Component } from "react";
import { Button, Divider, Form, Grid, Header, Portal, Segment } from "semantic-ui-react";
import { SettingsSection } from "./settings-section";

class AddAdvanceSetting extends Component {
    public state = { open: true };

    public handleClose = () => this.setState({ open: false });
    public handleOpen = () => this.setState({ open: true });

    public render() {
        const { open } = this.state;

        return (
            <div>
                <SettingsSection
                    header="OAuth /OpenId"
                >
                    <Form className="main-content-inner" style={ { marginLeft: "10%", marginBottom: "5%" } }>
                        <Grid>
                            <Grid.Row columns={ 1 }>
                                <Grid.Column mobile={ 16 } tablet={ 16 } computer={ 9 }>
                                    <Form.Input
                                        id="CallbackURL"
                                        label="CallbackURL"
                                        placeholder={ "Enter the CallbackURL" }
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={ 1 }>
                                <Grid.Column mobile={ 16 } tablet={ 16 } computer={ 9 }>
                                    <Form.Input
                                        id="TokenExpirytime"
                                        label="Token ExpiryTime "
                                        placeholder={ "Enter the token expiry time in Sec" }
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form>
                </SettingsSection>
                <SettingsSection
                    header="SAML"
                    description="set saml"
                />
            </div>
        );
    }
}

export default AddAdvanceSetting;

import React, {Component, FunctionComponent} from "react";
import {Button, Card, Divider, Form, Grid, Header, Portal, Segment} from "semantic-ui-react";

export const Endpoints = (): JSX.Element => {
    const endpointList = {
        Authorization_Endpoint_URL: "https://localhost:9443/oauth2/authorize",
        Token_Endpoint_URL:	"https://localhost:9443/oauth2/token",
        Token_Revocation_Endpoint_URL:	"https://localhost:9443/oauth2/revoke",
        Token_Introspection_Endpoint_URL: "https://localhost:9443/oauth2/introspect",
        User_Info_Endpoint_URL:	"https://localhost:9443/oauth2/userinfo",
        Session_IFrame_Endpoint_URL: "https://localhost:9443/oidc/checksession",
        Logout_Endpoint_URL: "https://localhost:9443/oidc/logout",
        Web_finger_Endpoint_URL:	"https://localhost:9443/.well-known/webfinger",
        Discovery_Endpoint_URL:	"https://localhost:9443/oauth2/oidcdiscovery",
        JWKS_Endpoint_URL: "https://localhost:9443/oauth2/jwks"
    }

    // tslint:disable-next-line:no-shadowed-variable
    const createEndpointElement = (endpointList) => {
        // tslint:disable-next-line:prefer-const
        let endpoint = Object.keys(endpointList).map((end) => {
            return (
                <Grid.Row columns={ 2 } key={ end } className="endpoint-row">
                    <Grid.Column width={ 6 }>
                        { end.replace(/_/g, " ") }
                    </Grid.Column>
                    <Grid.Column width={ 10 }>
                        { endpointList[end] }
                    </Grid.Column>
                </Grid.Row>
            );
        });
        return endpoint;
    };

    return (
            <Card className="advance-settings-card" fluid padded="very">
                <Card.Content>
                    <Grid className="advance-settings">
                        <Grid.Row  columns={ 1 }>
                            <Grid.Column>
                                <Header as="h3" className={ "arrange" }>Endpoint Details</Header>
                            </Grid.Column>
                        </Grid.Row>
                        { createEndpointElement(endpointList) }
                    </Grid>
                </Card.Content>
            </Card>
        );
};

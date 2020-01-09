import React, {Component, FunctionComponent, useState} from "react";
import {Button, Divider, Form, Grid, Header, Portal, Segment} from "semantic-ui-react";

interface AdvanceDetailsProps {
    clientID: string;
    secret: string;
    responseType: string;
    grantType: string;
    callbackURL: string;
}
const AdvanceDetails: FunctionComponent<AdvanceDetailsProps> = (props): JSX.Element => {
    return (
        <div>
            <Form>
                <Grid className="details-grid">
                    <Grid.Row columns={1} className="details-row">
                        <Grid.Column mobile={16} tablet={16} computer={3} className="details-column">
                            <label className="tag">Basics</label>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1} className="details-advance-row">
                        <Grid.Column mobile={16} tablet={16} computer={2}>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={5} className="details-column">
                            <label className="tag">CLIENT ID</label>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={4}>
                            <label className="value">{props.clientID}</label>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1} className="details-advance-row">
                        <Grid.Column mobile={16} tablet={16} computer={2}>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={5} className="details-column">
                            <label className="tag">CLIENT SECRET</label>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={4}>
                            <label className="value">{props.secret}</label>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1} className="details-advance-row">
                        <Grid.Column mobile={16} tablet={16} computer={2}>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={5} className="details-column">
                            <label className="tag">RESPONSE TYPE</label>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={4}>
                            <label className="value">{props.responseType}</label>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1} className="details-advance-row">
                        <Grid.Column mobile={16} tablet={16} computer={2}>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={5} className="details-column">
                            <label className="tag">ALLOWED GRANT TYPES</label>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={5}>
                            <label className="value">{props.grantType}</label>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1} className="details-advance-row">
                        <Grid.Column mobile={16} tablet={16} computer={2}>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={5} className="details-column">
                            <label className="tag">CALLBACK URL</label>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={4}>
                            <label className="value">{props.callbackURL}</label>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1} className="details-row">
                        <Grid.Column mobile={16} tablet={16} computer={5} className="details-column">
                            <label className="tag">End Points</label>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider hidden/>
            </Form>
        </div>
    );

};

export default AdvanceDetails;

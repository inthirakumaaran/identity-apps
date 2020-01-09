import React, {Component, FunctionComponent, useState} from "react";
import {Button, Divider, Form, Grid, Header, Portal, Segment} from "semantic-ui-react";

interface GeneralDetailsProps {
    name: string;
    description: string;
}
const GeneralDetails: FunctionComponent<GeneralDetailsProps> = (props): JSX.Element => {
    return (
        <div>
            <Form>
                <Grid className="details-grid">
                    <Grid.Row columns={1} className="details-row">
                        <Grid.Column mobile={16} tablet={16} computer={2}>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={3} className="details-column">
                            <label className="tag">Name</label>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={4}>
                            <label className="value">{props.name}</label>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1} className="details-row">
                        <Grid.Column mobile={16} tablet={16} computer={2}>
                        </Grid.Column>
                            <Grid.Column mobile={16} tablet={16} computer={3} className="details-column">
                                <label className="tag">Description</label>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={16} computer={4}>
                                <label className="value">{props.description}</label>
                            </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider hidden/>
            </Form>
        </div>
    );

};

export default GeneralDetails;

/**
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, {FunctionComponent, MouseEvent} from "react";
import {Button, Checkbox, Divider, Form, Grid} from "semantic-ui-react";

interface GeneralSettingsProps {
    name: string;
    description: string;
    logo: string;
}
const GeneralSettings: FunctionComponent<GeneralSettingsProps> = (props): JSX.Element => {
    const {
        name,
        description,
        logo
    } = props;

    return (
        <div>
            <Form>
                <Grid>
                    <Grid.Row columns={1}>
                        <Grid.Column mobile={16} tablet={16} computer={14}>
                            <Form.Input
                                id="appDescription"
                                label="Name"
                                value={name}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                        <Grid.Column mobile={16} tablet={16} computer={14}>
                            <Form.Input
                                id="appDescription"
                                label="Description "
                                value={description}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                        <Grid.Column mobile={16} tablet={16} computer={14}>
                            <Form.Input
                                id="JWKSURI"
                                label="JWKS URI"
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                        <Grid.Column mobile={16} tablet={16} computer={14}>
                            <Checkbox label='Discoverable Application' />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                        <Grid.Column mobile={16} tablet={16} computer={14}>
                            <Form.Input
                                id="AccessURL"
                                label="Access URL"
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider hidden/>
            </Form>
        </div>
    );

};

export default GeneralSettings;

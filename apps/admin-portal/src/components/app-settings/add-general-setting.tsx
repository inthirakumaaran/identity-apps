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

import React, {FunctionComponent, MouseEvent, useState} from "react";
import {Button, Divider, Form, Grid, Segment} from "semantic-ui-react";
import AdvanceSetting from "./add-advance-setting";
import Appsteps from "./app-steps";

const addGeneralSettings = (props): JSX.Element => {

    const [viewNext, setNext] = useState({
        visible: false
    });
    const {
        name,
        description,
        logo
    } = props;

    const showNext = () => {
        setNext(
            {visible: true}
        );
    };

    return (
        <div style={{margin: "auto"}}>
            <Form className={"addGeneral main-content-inner"}>
                <Grid>
                    <Grid.Row columns={1}>
                        <Grid.Column mobile={16} tablet={16} computer={16} >
                            <Form.Input
                                id="appDescription"
                                label="Name"
                                placeholder={"Enter the name"}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                        <Grid.Column mobile={16} tablet={16} computer={16}>
                            <Form.TextArea label="Description" placeholder="Enter the description" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                        <Grid.Column mobile={16} tablet={16} computer={16}>
                            <Form.Input
                                id="appDescription"
                                label="Upload Logo "
                                placeholder={"Upload the app logo"}
                                type="file"
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider hidden/>
                {/*<Button primary size="small" onClick={showNext}>*/}
                {/*    Next*/}
                {/*</Button>*/}
                {/*{viewNext.visible ? <AdvanceSetting/> : null}*/}
                {/*<Divider hidden/>*/}
                {/*<div style={{marginBottom: "10px"}}>*/}
                {/*    <Appsteps step={"General Settings"}/>*/}
                {/*</div>*/}
            </Form>
        </div>
    );

};

export default addGeneralSettings;

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
import {Button, Divider, Form, Grid, Image, Tab} from "semantic-ui-react";
import {SampleApp} from "../../configs/ui";
import history from "../../helpers/history";
import AdvanceSettings from "./advance-setting";
import AttributeMapping from "./claim-mapping";
import {Dummy} from "./dummy-app-builder";
import GeneralSettings from "./general-settings";

// // tslint:disable-next-line:no-empty-interface
// interface ApplicationBuilderProps {
//     // name: string;
//     // description: string;
// }

const navigate = (): void => {
    history.push("/application");
};

const getAppName = (): string => {
    const path = history.location.pathname.split("/");
    const appName = path[path.length - 1];
    return appName;
};

const panes = [
    {
        menuItem: "Profile",
        render: () => <Tab.Pane attached={false}>{<GeneralSettings name={getAppName()} description={"trial"}
                                                                   logo={"dfa"}/>}</Tab.Pane>,
    },
    {
        menuItem: "Settings",
        render: () => <Tab.Pane attached={false}>{<AdvanceSettings name={"kumar"} description={"trial"}/>}</Tab.Pane>,
    },
    {
        menuItem: "Attribute Mapping",
        render: () => <Tab.Pane attached={false}><Dummy/></Tab.Pane>,
    },
    {
        menuItem: "Connections",
        render: () => <Tab.Pane attached={false}>connections</Tab.Pane>,
    },
];

export const AppBuilder: FunctionComponent<{}> = (props): JSX.Element => {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Image src={ SampleApp } size="small" circular />
                    </Grid.Column>
                    <Grid.Column width={7} >
                        <h1 style={{fontVariant: "small-caps"}}>{getAppName()}</h1>
                        <p>This is for reference</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Tab menu={{secondary: true, pointing: true}} panes={panes}/>
                        <Divider hidden/>
                        <Button primary type="submit" size="small">
                            Update
                        </Button>
                        <Button type="submit" size="small" onClick={navigate}>
                            Cancel
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

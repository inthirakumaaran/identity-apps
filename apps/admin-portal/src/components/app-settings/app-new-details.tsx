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
import GeneralDetails from "./app-details-general";
import AdvanceDetails from "./app-details-advance";

// // tslint:disable-next-line:no-empty-interface
// interface ApplicationBuilderProps {
//     // name: string;
//     // description: string;
// }

interface AppDetailsProps {
    appName?: string;
}

const panes = (props) => {

    return [
        {
            menuItem: "Profile",
            render: () => <Tab.Pane attached={false}><GeneralDetails name={props.appName}
                                                                     description={"show the demo"}/></Tab.Pane>,
        },
        {
            menuItem: "Settings",

            render: () => <Tab.Pane attached={false}>
                <AdvanceDetails callbackURL="https://wso2.com" clientID="admin-portal" grantType="Authorization code"
                                responseType="code" secret={"dakfakjd"}/></Tab.Pane>,
        },
        {
            menuItem: "Attributes",
            render: () => <Tab.Pane attached={false}>mapping</Tab.Pane>,
        },
        {
            menuItem: "Connections",
            render: () => <Tab.Pane attached={false}>connections</Tab.Pane>,
        },
    ];
};

export const AppDetails: FunctionComponent<AppDetailsProps> = (props): JSX.Element => {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Tab menu={{secondary: true, pointing: true}} panes={panes(props)}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

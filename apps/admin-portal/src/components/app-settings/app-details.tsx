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
import {BrowserRouter, Link, Route} from "react-router-dom";
import {Button, Divider, Form, Input, Menu, Segment, Tab} from "semantic-ui-react";
import history from "../../helpers/history";
// import {FunctionComponent} from "react";
import AdvanceSettings from "./advance-setting";
import GeneralSettings from "./general-settings";
import GeneralDetails from "./app-details-general";
import AdvanceDetails from "./app-details-advance";

// // tslint:disable-next-line:no-empty-interface
// interface ApplicationBuilderProps {
//     // name: string;
//     // description: string;
// }

// const navigate = (): void => {
//     history.goBack();
// };
//
// const getAppName = (): string => {
//     const path = history.location.pathname.split("/");
//     const appName = path[path.length - 1];
//     return appName;
// };
//
// const panes = [
//     {
//         menuItem: "General Settings",
//         render: () => <Tab.Pane attached={false}>{<GeneralSettings name={"kumar"} description={"trial"}
//                                                                    logo={"dfa"}/>}</Tab.Pane>,
//     },
//     {
//         menuItem: "Advance Settings",
// tslint:disable-next-line:max-line-length
//         render: () => <Tab.Pane attached={false}>{<AdvanceSettings name={"kumar"} description={"trial"}/>}</Tab.Pane>,
//     },
//     {
//         menuItem: "Attributes",
//         render: () => <Tab.Pane attached={false}>claim mapping</Tab.Pane>,
//     },
//     {
//         menuItem: "Connections",
//         render: () => <Tab.Pane attached={false}>connections</Tab.Pane>,
//     },
// ];

const panes = (props): JSX.Element => {

    const [viewDetails, setView] = useState({
        activeItem: "Profile"
    });

    const handleItemClick = (e, {name}) => setView({activeItem: name});

    return (
        <div>
            <Menu attached="top" tabular>
                <Menu.Item
                    name="Profile"
                    active={viewDetails.activeItem === "Profile"}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name="Settings"
                    active={viewDetails.activeItem === "Settings"}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name="Attribute Mapping"
                    active={viewDetails.activeItem === "Attribute Mapping"}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name="Connections"
                    active={viewDetails.activeItem === "Connections"}
                    onClick={handleItemClick}
                />
                {/*<Menu.Menu position="right">*/}
                {/*    <Menu.Item>*/}
                {/*        <Input*/}
                {/*            transparent*/}
                {/*            icon={{name: "search", link: true}}*/}
                {/*            placeholder="Search users..."*/}
                {/*        />*/}
                {/*    </Menu.Item>*/}
                {/*</Menu.Menu>*/}
            </Menu>
            <Segment attached="bottom" style={{minHeight: "200px"}}>
                {/* tslint:disable-next-line:max-line-length */}
                {viewDetails.activeItem === "Profile" && <GeneralDetails name={props.appName} description={"show the demo"}/>}
                {/* tslint:disable-next-line:max-line-length */}
                {viewDetails.activeItem === "Settings" &&
                // tslint:disable-next-line:max-line-length
                <AdvanceDetails callbackURL="https://wso2.com" clientID="admin-portal" grantType="Authorization code" responseType="code" secret={"dakfakjd"}/>}
                {viewDetails.activeItem === "Attribute Mapping" ? <p> Claim mapping </p> : null}
                {viewDetails.activeItem === "Connections" ? <p> Connections </p> : null}
            </Segment>
        </div>
    );
};

// const AppDetails = (): JSX.Element => {
//     return ({panes});
// };
export default panes;

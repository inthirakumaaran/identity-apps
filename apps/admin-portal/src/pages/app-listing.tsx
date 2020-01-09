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

import {
    AuthenticateSessionUtil,
    AuthenticateUserKeys
} from "@wso2is/authentication";
import * as React from "react";
import {useTranslation} from "react-i18next";
import {BrowserRouter, Link, Route} from "react-router-dom";
import {Divider, Grid, Image, List} from "semantic-ui-react";
import { AppBuilder } from "../components";
import ListExampleFloated from "../components/app-settings/application-list";
import history from "../helpers/history";
import {InnerPageLayout} from "../layouts";

/**
 * Overview page.
 *
 * @return {JSX.Element}
 */
const getAppName = (): string => {
    const path = history.location.pathname.split("/");
    const appName = path[path.length - 1];
    return appName;
};

export const ApplistingPage = (): JSX.Element => {

    return (
        <InnerPageLayout pageTitle={" "}>
            {/*<div>*/}
            {/*    <Image src={ UserImageDummy } size="small" circular />*/}
            {/*    <h1>{getAppName()}</h1>*/}
            {/*    <AppBuilder/>*/}
            {/*</div>*/}
            {/*<Grid>*/}
            {/*    <Grid.Row>*/}
            {/*        <Grid.Column width={5}>*/}
            {/*            <Image src={ UserImageDummy } size="small" circular />*/}
            {/*        </Grid.Column>*/}
            {/*        <Grid.Column width={4} >*/}
            {/*            <h1 style={{fontVariant: "small-caps"}}>{getAppName()}</h1>*/}
            {/*        </Grid.Column>*/}
            {/*    </Grid.Row>*/}
            {/*    <Grid.Row>*/}
            {/*        <Grid.Column md="auto">*/}
            {/*            <AppBuilder/>*/}
            {/*        </Grid.Column>*/}
            {/*    </Grid.Row>*/}
            {/*</Grid>*/}
            <AppBuilder />
        </InnerPageLayout>
    );
};

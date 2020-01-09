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
import { useTranslation } from "react-i18next";
import { Divider } from "semantic-ui-react";
import ListExampleFloated from "../components/app-settings/application-list";
import { InnerPageLayout } from "../layouts";

/**
 * Overview page.
 *
 * @return {JSX.Element}
 */
export const ApplicationPage = (): JSX.Element => {
    const {t} = useTranslation();
    return (
        <InnerPageLayout
            pageTitle={t(
                "views:applicationPage.title",
                {firstName: AuthenticateSessionUtil.getSessionParameter(AuthenticateUserKeys.DISPLAY_NAME)}
            )}
            pageDescription={t("views:applicationPage.subTitle")}
            pageTitleTextAlign="left"
        >
            <Divider hidden/>
            {/*<GeneralSettings name={"First app"} description={"normal"} logo={"ha ha"}/>*/}
            {/*<AppBuilder name={"First app"} description={"normal"}/>*/}
            {/*<AppBuilder name={"sample"} description={"mockUp"}/>*/}
            <ListExampleFloated/>
            {/*<ApplistingPage/>*/}
        </InnerPageLayout>
    );
};

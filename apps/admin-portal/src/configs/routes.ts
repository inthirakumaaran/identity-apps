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
    AddAppPage,
    ApplicationPage,
    ApplistingPage,
    HomePage,
    PageNotFound,
    SelectAppPage
} from "../pages";

/**
 * Interface to handle route types.
 */
interface Route {
    exact: any;
    component: any;
    icon?: string;
    name: string;
    path: string;
    protected: boolean;
    showOnSidePanel: boolean;
}

/**
 * Routes array.
 */
const ROUTES: Route[] = [
    {
        component: HomePage,
        icon: "overview",
        name: "Overview",
        path: "/overview",
        protected: true,
        exact: false,
        showOnSidePanel: true,
    },
    {
        component: ApplicationPage,
        icon: "account",
        name: "Applications",
        path: "/application",
        protected: true,
        exact: true,
        showOnSidePanel: true,
    },
    {
        component: ApplistingPage,
        icon: "account",
        name: "Application-listing",
        path: "/application/:id",
        protected: true,
        exact: true,
        showOnSidePanel: false,
    },
    {
        component: SelectAppPage,
        icon: "account",
        name: "Select New App type",
        path: "/application/new/template",
        protected: true,
        exact: true,
        showOnSidePanel: false,
    },
    {
        component: AddAppPage,
        icon: "account",
        name: "Register New app",
        path: "/application/new/:id",
        protected: true,
        exact: true,
        showOnSidePanel: false,
    },
    {
        component: PageNotFound,
        name: "404",
        path: null,
        protected: true,
        exact: false,
        showOnSidePanel: false,
    },
];

export const routes = ROUTES;

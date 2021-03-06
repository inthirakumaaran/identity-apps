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

import * as React from "react";
import { Header as AppHeader, PageHeader, SidePanelWrapper } from "../components";

/**
 * Inner page layout component Prop types.
 */
interface InnerPageLayoutProps {
    children?: React.ReactNode;
    pageTitle: string;
    pageDescription?: string;
    pageTitleTextAlign?: "left" | "center" | "right" | "justified";
}

/**
 * Default header height to be used in state initialisations
 * @type {string}
 */
const DEFAULT_HEADER_HEIGHT = 59;

/**
 * Inner page layout.
 *
 * @param {InnerPageLayoutProps} props - Props injected to the inner page layout
 * @return {JSX.Element}
 */
export const InnerPageLayout: React.FunctionComponent<InnerPageLayoutProps> = (
    props: InnerPageLayoutProps
): JSX.Element => {
    const { children, pageTitle, pageDescription, pageTitleTextAlign } = props;

    const [ mobileSidePanelVisibility, setMobileSidePanelVisibility ] = React.useState(false);
    const [ headerHeight, setHeaderHeight ] = React.useState(DEFAULT_HEADER_HEIGHT);

    React.useEffect(() => {
        if (headerHeight === document.getElementById("app-header").offsetHeight) {
            return;
        }
        setHeaderHeight(document.getElementById("app-header").offsetHeight);
    });

    const handleSidePanelToggleClick = () => {
        setMobileSidePanelVisibility(!mobileSidePanelVisibility);
    };

    const handleSidePanelPusherClick = () => {
        setMobileSidePanelVisibility(false);
    };

    const handleSidePanelItemClick = () => {
        setMobileSidePanelVisibility(false);
    };

    return (
        <>
            <AppHeader onSidePanelToggleClick={ handleSidePanelToggleClick }/>
            <div style={ { paddingTop: `${headerHeight}px` } }>
                <SidePanelWrapper
                    mobileSidePanelVisibility={ mobileSidePanelVisibility }
                    onSidePanelItemClick={ handleSidePanelItemClick }
                    onSidePanelPusherClick={ handleSidePanelPusherClick }
                >
                    <PageHeader
                        title={ pageTitle }
                        description={ pageDescription }
                        titleTextAlign={ pageTitleTextAlign }
                    />
                    { children }
                </SidePanelWrapper>
            </div>
        </>
    );
};

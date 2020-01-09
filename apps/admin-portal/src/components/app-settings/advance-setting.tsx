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

import React, { FunctionComponent, MouseEvent, useState } from "react";
import {Button, Card, Divider, Form, Grid, Header} from "semantic-ui-react";
import OIDCform from "./oidcform";
import SAMLform from "./samlform";
import { SettingsSection } from "./settings-section";
import { Endpoints } from "./endpoint";

interface AdvanceSettingsProps {
    name: string;
    description: string;
}

const AdvanceSettings: FunctionComponent<AdvanceSettingsProps> = (props): JSX.Element => {
    const {
        name,
        description,
    } = props;

    const [ enableProtocol, setProtocol ] = useState({
        protocols : {
            OIDC : false,
            SAML : true,
        }
    });

    const toggleHandler = (id) => {
        const oldProtocol = { ...enableProtocol.protocols };
        for (const key in oldProtocol) {
            if (key === id) {
                // oldProtocol[key] = !oldProtocol[key];
                oldProtocol[key] = true;
            } else {
                oldProtocol[key] = false;
            }
        }
        setProtocol (
            { protocols: oldProtocol }
        );
    };

    const protocolStatus = (id): boolean => {
        const oldProtocol = { ...enableProtocol.protocols };
        return (oldProtocol[id] !== null) ?  oldProtocol[id] : false ;
    };

    const [ editOIDCForm, setEditOIDCForm ] = useState({
        OIDCview: false
    });

    const [ editSAMLForm, setEditSAMLForm ] = useState({
        SAMLview: false
    });

    const renderODIC = (): void => {
        setEditOIDCForm(
            { OIDCview: true }
        );
    };

    const closeOIDC = () => {
        setEditOIDCForm(
            { OIDCview: false }
        );
    };

    const renderSAML = (): void => {
        setEditSAMLForm(
            { SAMLview: true }
        );
    };

    const closeSAML = () => {
        setEditSAMLForm(
            { SAMLview: false }
        );
    };

    return (
        <div>
            <Endpoints/>
            <SettingsSection
                header="OAuth /OpenId"
                description="set OIDC settings"
                primaryAction="update"
                onPrimaryActionClick={ renderODIC }
                showActionBar={ !editOIDCForm.OIDCview }
                onToggle={ () => toggleHandler("OIDC") }
                toggle={ true }
                toggleValue={ protocolStatus("OIDC") }
            >
                { editOIDCForm.OIDCview && <OIDCform cancelView={ closeOIDC }/> }
            </SettingsSection>
            <SettingsSection
                header="SAML"
                description="set saml"
                primaryAction="update"
                onPrimaryActionClick={ renderSAML }
                showActionBar={ !editSAMLForm.SAMLview }
                onToggle={ () => toggleHandler("SAML") }
                toggle={ true }
                toggleValue={ protocolStatus("SAML") }
            >
                { editSAMLForm.SAMLview && <SAMLform cancelView={ closeSAML }/> }
            </SettingsSection>
        </div>
    );

};

export default AdvanceSettings;

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

import React, { Fragment, FunctionComponent, MouseEvent } from "react";
import { Card, Grid, Header, Icon, List, Message, Radio, Responsive, SemanticICONS } from "semantic-ui-react";
import { ThemeIcon, ThemeIconSizes } from "./icon";

/**
 * Proptypes for the settings section component.
 */
interface SettingsSectionProps {
    contentPadding?: boolean;
    description?: string;
    header: string;
    icon?: any;
    iconMini?: any;
    iconFloated?: "left" | "right";
    iconStyle?: "twoTone" | "default" | "colored";
    iconSize?: ThemeIconSizes;
    onPrimaryActionClick?: (e: MouseEvent<HTMLElement>) => void;
    onSecondaryActionClick?: (e: MouseEvent<HTMLElement>) => void;
    placeholder?: string;
    primaryAction?: any;
    primaryActionDisabled?: boolean;
    primaryActionIcon?: SemanticICONS;
    secondaryAction?: any;
    secondaryActionDisabled?: boolean;
    secondaryActionIcon?: SemanticICONS;
    showActionBar?: boolean;
    onToggle?: any;
    toggle?: boolean;
    toggleValue?: boolean;
}

/**
 * Settings section component.
 *
 * @param {PropsWithChildren<any>} props
 * @return {any}
 */
export const SettingsSection: FunctionComponent<SettingsSectionProps> = (props): JSX.Element => {
    const {
        contentPadding,
        description,
        header,
        icon,
        iconMini,
        iconFloated,
        iconStyle,
        iconSize,
        onPrimaryActionClick,
        onSecondaryActionClick,
        placeholder,
        primaryAction,
        primaryActionDisabled,
        primaryActionIcon,
        secondaryAction,
        secondaryActionDisabled,
        secondaryActionIcon,
        showActionBar,
        toggle,
        onToggle,
        toggleValue,
    } = props;

    /**
     * Construct the action element.
     *
     * @param action - action which is passed in.
     * @param {SemanticICONS} actionIcon - Icon for the action.
     * @param {boolean} actionDisabled - Flag to determine if the action should be disabled.
     * @param actionOnClick - On Click handler of the action.
     * @param {"primary" | "secondary"} actionType - Type of the action.
     * @return Constructed element.
     */
    const constructAction = (
        action: any,
        actionIcon: SemanticICONS,
        actionDisabled: boolean,
        actionOnClick: any,
        actionType: "primary" | "secondary"
    ) => {
        // if passed in action is a react component
        if (typeof action === "function" || typeof action === "object") {
            return (
                <List.Content
                    className={ actionDisabled ? "disabled" : "" }
                    floated={ actionType === "secondary" ? "right" : "left" }
                >
                    { action }
                </List.Content>
            );
        }

        // if passed in action is of type `string`.
        if (typeof action === "string") {
            return (
                <List.Content
                    className={ actionDisabled ? "disabled" : "" }
                    floated={ actionType === "secondary" ? "right" : "left" }
                >
                    <List.Header className="action-button-text" onClick={ actionOnClick }>
                        {
                            actionIcon
                                ? (<><Icon name={ actionIcon }/>{ " " }</>)
                                : null
                        }
                        { action }
                    </List.Header>
                </List.Content>
            );
        }

        return null;
    };

    return (
        <Card className="settings-card" fluid padded="very">
            <Card.Content>
                <Grid>
                    <Grid.Row className="header-section" columns={ 2 }>
                        <Grid.Column width={ toggle ? 14 : 16 } className="no-padding">
                            <Header as="h2">{ header }</Header>
                            <Card.Meta>{ description }</Card.Meta>
                        </Grid.Column>
                        <Grid.Column width={ 2 } className="no-padding">
                            <Responsive as={ Fragment } { ...Responsive.onlyComputer }>
                                {
                                    // tslint:disable-next-line:max-line-length
                                    toggle && <Radio toggle checked={ toggleValue } onClick={ onToggle }/>
                                }
                            </Responsive>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className={ `main-content ${ contentPadding ? "" : "no-padding" }` } columns={ 1 }>
                        <Grid.Column className="no-padding" width={ 16 }>
                            { props.children }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card.Content>
            {
                toggleValue && (primaryAction || secondaryAction || placeholder) && showActionBar ? (
                        <Card.Content className="extra-content" extra>
                            <List selection={ !secondaryAction } verticalAlign="middle">
                                <List.Item
                                    className="action-button"
                                    disabled={ !!placeholder }
                                    // if both `primaryAction` & `secondaryAction` are passed in,
                                    // disable list item `onClick`.
                                    onClick={ !(primaryAction && secondaryAction)
                                        ? onSecondaryActionClick || onPrimaryActionClick
                                        : null
                                    }
                                >
                                    {
                                        placeholder
                                            ? (
                                                <List.Header className="action-button-text">
                                                    <Message info>
                                                        <Icon name="info circle" />{ placeholder }
                                                    </Message>
                                                </List.Header>
                                            )
                                            : (
                                                <>
                                                    {
                                                        primaryAction
                                                            ? constructAction(
                                                            primaryAction,
                                                            primaryActionIcon,
                                                            primaryActionDisabled,
                                                            (primaryAction && secondaryAction)
                                                                ? onPrimaryActionClick
                                                                : null,
                                                            "primary"
                                                            )
                                                            : null
                                                    }
                                                    {
                                                        secondaryAction
                                                            ? constructAction(
                                                            secondaryAction,
                                                            secondaryActionIcon,
                                                            secondaryActionDisabled,
                                                            (primaryAction && secondaryAction)
                                                                ? onSecondaryActionClick
                                                                : null,
                                                            "secondary"
                                                            )
                                                            : null
                                                    }
                                                </>
                                            )
                                    }
                                </List.Item>
                            </List>
                        </Card.Content>
                    )
                    : null
            }
        </Card>
    );
};

/**
 * Default proptypes for the settings section component.
 */
SettingsSection.defaultProps = {
    contentPadding: false,
    description: "",
    header: "",
    iconFloated: "right",
    iconStyle: "colored",
    primaryAction: "",
    primaryActionDisabled: false,
    showActionBar: true
};

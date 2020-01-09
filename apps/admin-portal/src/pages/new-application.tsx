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
import {useState} from "react";
import * as React from "react";
import {useTranslation} from "react-i18next";
import {BrowserRouter, Link, Route} from "react-router-dom";
import {Button, Divider, Grid, Image, List} from "semantic-ui-react";
import AdvanceSettings from "../components/app-settings/add-advance-setting";
import GeneralSettings from "../components/app-settings/add-general-setting";
import appRegister from "../components/app-settings/app-steps";
import RegisterApp from "../components/app-settings/app-steps";
import RegisterRound from "../components/app-settings/app-steps-round";
import ListExampleFloated from "../components/app-settings/application-list";
import history from "../helpers/history";
import {DefaultPageLayout, InnerPageLayout} from "../layouts";
import {renderIntoDocument} from "react-dom/test-utils";
import {AttributeMapping} from "../components/app-settings";

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

export const AddAppPage = (): JSX.Element => {

    const [viewStep, setStep] = useState({
        step: "Profile",
        // tslint:disable-next-line:object-literal-sort-keys
        forwardButton: "true"
    });

    const steps = ["exit", "Profile", "Setting", "Advance Settings"];

    const stepForward = () => {
        const currentStep = viewStep.step;
        const currentIndex = steps.indexOf(currentStep);
        if ((currentIndex + 1) < steps.length) {
            const newstep = steps[currentIndex + 1];
            setStep(
                {
                    step: newstep,
                    // tslint:disable-next-line:object-literal-sort-keys
                    forwardButton: "true"
                }
            );
        } else {
            // setStep(
            //     {
            //         step: currentStep,
            //         // tslint:disable-next-line:object-literal-sort-keys
            //         forwardButton: "false"
            //     }
            // );
            history.push("/application/new");
        }
    };

    const stepBackword = () => {
        const currentStep = viewStep.step;
        const currentIndex = steps.indexOf(currentStep);
        if ((currentIndex - 1) > 0) {
            const newstep = steps[currentIndex - 1];
            setStep(
                {
                    step: newstep,
                    // tslint:disable-next-line:object-literal-sort-keys
                    forwardButton: "true"
                }
            );
        } else {
            history.push("/application");
        }
    };
 // todo    change this logic
    const register = () => history.push("/application");

    // @ts-ignore
    return (
          <DefaultPageLayout
            pageTitle={"Register application"}
            pageDescription={""}
            pageTitleTextAlign={"center"}>
            {/* tslint:disable-next-line:max-line-length */}
                        {viewStep.step === "Profile" ?
                            <Grid>
                            <Grid.Row>
                                <Grid.Column> <RegisterRound step={"Profile"}
                                         list={steps.slice(1, steps.length)}
                                         next={stepForward}
                                         enableForward={viewStep.forwardButton}
                                         back={stepBackword}>
                                <GeneralSettings/></RegisterRound>
                                </Grid.Column></Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={11}/>
                                <Grid.Column width={3} className="last-column">
                                        <Button primary type="submit" size="small" onClick={stepForward}>
                                            Next
                                        </Button>
                                </Grid.Column>
                            </Grid.Row>
                            </Grid> : null}
                        {viewStep.step === "Setting" ?
                            <Grid>
                            <Grid.Row>
                                <Grid.Column >
                                    <RegisterRound step={"Setting"}
                                         list={steps.slice(1, steps.length)}
                                         next={stepForward}
                                         enableForward={viewStep.forwardButton}
                                         back={stepBackword}>
                                        <AdvanceSettings/>
                                    </RegisterRound>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={12}/>
                                <Grid.Column width={3} className="last-column">
                                    <Button primary type="submit" size="small" onClick={stepForward}>
                                        Next
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                            </Grid> : null}
                        {viewStep.step === "Advance Settings" &&
                            <Grid>
                            <Grid.Row>
                                <Grid.Column><RegisterRound step={"Advance Settings"}
                                         list={steps.slice(1, steps.length)}
                                         next={stepForward}
                                         enableForward={viewStep.forwardButton}
                                         back={stepBackword}>
                                    <AttributeMapping/></RegisterRound>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={10}/>
                                <Grid.Column width={5} className="last-column">
                                    <Button type="submit" size="small" onClick={stepForward}>
                                        Advance Settings
                                    </Button>
                                    <Button primary type="submit" size="small" onClick={register}>
                                        Finish
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                            </Grid>}
          </DefaultPageLayout>
    );
};

export default AddAppPage;

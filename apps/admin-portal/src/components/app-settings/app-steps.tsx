import React from "react";

// tslint:disable-next-line:no-submodule-imports
import {Simulate} from "react-dom/test-utils";
import {Button, Form, Grid, Icon, Step} from "semantic-ui-react";
import transitionEnd = Simulate.transitionEnd;
import AdvanceSettings from "./advance-setting";
import {SidePanelWrapper} from "../side-panel";
import {InnerPageLayout} from "../../layouts";
import history from "../../helpers/history";

const createSteps = (list, active) => {
    const TotalList = [...list];
    return TotalList.map((item) => {
        const index = list.indexOf(active);
        const bool = list.indexOf(item) < index;
        // tslint:disable-next-line:no-console
        return (<Step  active={item === active} key={item} completed={bool}>
            {/*<Icon/>*/}
            <Step.Content>
                <Step.Title>{item}</Step.Title>
                {/*<Step.Description>Choose your shipping options</Step.Description>*/}
            </Step.Content>
        </Step>);
    });
};

const appRegister = (props) => {
    const totalSteps = props.list;
    const navigate = (): void => {
        history.push("/application");
    };
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={15}>
                    <Icon
                        link
                        size="large"
                        onClick={props.back}
                        color="grey"
                        name="arrow left"
                    />
                </Grid.Column>
                {/*<Grid.Column width={1} className="last-column">*/}
                {/*    {props.enableForward ?*/}
                {/*        <Icon*/}
                {/*            link*/}
                {/*            size="large"*/}
                {/*            onClick={props.next}*/}
                {/*            color="grey"*/}
                {/*            name="arrow right"*/}
                {/*        /> : null}*/}
                {/*</Grid.Column>*/}
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={3}/>
                <Grid.Column width={10} style={{margin: "auto"}}>
                    {props.children}
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <div className="wizard-steps">
                        <li> settings</li>
                        <li className="active">2</li>
                        <li>3</li>
                    </div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{bottom: "0", width: "100%", position: "fixed", marginLeft: "20%"}}>
                <Grid.Column width={16}>
                    <Step.Group ordered>
                        {createSteps(totalSteps, props.step)}
                    </Step.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default appRegister;

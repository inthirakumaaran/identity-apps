import React from "react";

// tslint:disable-next-line:no-submodule-imports
import {Simulate} from "react-dom/test-utils";
import {Button, Form, Grid, Icon, Step} from "semantic-ui-react";
import history from "../../helpers/history";
import {InnerPageLayout} from "../../layouts";
import {SidePanelWrapper} from "../side-panel";
import transitionEnd = Simulate.transitionEnd;
import AdvanceSettings from "./advance-setting";

const createSteps = (list, active) => {
    const TotalList = [...list];
    return TotalList.map((item) => {
        const index = list.indexOf(active);
        const currentIndex = list.indexOf(item);
        const bool = list.indexOf(item) < index;
        // tslint:disable-next-line:no-console
        if (item === active) {
            return (<li  key={currentIndex} className="active"> {list.indexOf(item) + 1} </li>);
        } else {
            return (<li key={currentIndex} > {list.indexOf(item) + 1} </li>);
        }
    });
};

const appRegisterRound = (props) => {
    const totalSteps = props.list;
    const navigate = (): void => {
        history.push("/application");
    };
    return (
        <Grid className={"register-progress"}>
            <Grid.Row >
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
                <Grid.Column width={2}/>
                <Grid.Column width={10} style={{margin: "auto"}}>
                    {props.children}
                </Grid.Column>
            </Grid.Row>
            <Grid.Row  className={"register-progress-row"}
                       style={{bottom: "0", width: "100%", position: "fixed", marginLeft: "20%"}}>
                <Grid.Column width={16}>
                    <div className="wizard-steps">
                        {createSteps(totalSteps, props.step)}
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default appRegisterRound;

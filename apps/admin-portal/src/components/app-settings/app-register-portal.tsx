import React, {Component} from "react";
import {Button, Grid, Header, Portal, Segment} from "semantic-ui-react";
import Appsteps from "./app-steps";
import AddGeneralSetting from "./add-general-setting";

class PortalExampleControlled extends Component {
    public state = {open: false};

    public handleClose = () => this.setState({open: false});
    public handleOpen = () => this.setState({open: true});

    public render() {
        const {open} = this.state;

        return (
            <Grid columns={2}>
                <Grid.Column>
                    <Button
                        circular
                        content="Register"
                        disabled={open}
                        positive={false}
                        onClick={this.handleOpen}
                    />
                    <Portal onClose={this.handleClose} open={open}>
                        <Segment
                            style={{
                                width: "60%",
                                // tslint:disable-next-line:object-literal-sort-keys
                                height: "60%",
                                left: "30%",
                                top: "10%",
                                position: "fixed",
                                zIndex: 1000,
                            }}
                        >
                            {/*<Header>This is a controlled portal</Header>*/}
                            {/*<p>Portals have tons of great callback functions to hook into.</p>*/}
                            {/*<p>To close, simply click the close button or click away</p>*/}
                            <AddGeneralSetting/>
                        </Segment>
                    </Portal>
                </Grid.Column>
            </Grid>
        );
    }
}

export default PortalExampleControlled;

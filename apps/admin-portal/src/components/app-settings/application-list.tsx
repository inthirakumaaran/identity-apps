import React, {useState} from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import {Button, Divider, Dropdown, Grid, Icon, Image, Input, List, Radio, Search} from "semantic-ui-react";
import {GenericAppIcon, UserImage} from "../../configs/ui";
import {SampleApp} from "../../configs/ui";
import history from "../../helpers/history";
import {UserImageDummy} from "../ui";
import {AppDetails} from "./app-new-details";
// import AppDetails from "./app-details";
import PortalExampleControlled from "./app-register-portal";
import {getLocalClaims} from "../../api/application";

const createView = (name, onChecked) => {

    const [viewDetails, setView] = useState({
        visible: false
    });

    const addDetailsHandler = () => {
        const currentvisible = viewDetails.visible;
        setView(
            {visible: !currentvisible}
        );
    };
    const appPath = "/" + name;
    const navigate = (id: string): void => {
        history.push(`application/${id}`);
    };

    const capitalizeFirstLetter = (appName) => {
        return  appName[0].toUpperCase() + appName.slice(1);
    };

    // @ts-ignore
    return (
        <List.Item key={name} className="application-list-item">
            <Grid>
                <Grid.Row className={"app-list-row"}>
                    <Grid.Column width={13} className={"app-content"}>
                        <Image avatar src={SampleApp}/>
                        {/* tslint:disable-next-line:max-line-length */}
                        <List.Content style={{display: "inline-block", paddingLeft: "3%"}} onClick={() => navigate(name)}>{capitalizeFirstLetter(name)}<p style={{fontSize: "10px"}}>type</p></List.Content>
                    </Grid.Column>
                    <Grid.Column width={2} className={"app-toggle"}>
                                <List.Content className="action-bar" floated="right">
                                    <Radio toggle defaultChecked={true} className="enable-toggle" onClick={onChecked}/>
                                </List.Content>
                    </Grid.Column>
                    <Grid.Column width={1} className={"app-actions"}>
                        {viewDetails.visible ?
                            <List.Content className="action-bar" floated="right">
                                <Icon
                                    link
                                    className=""
                                    size="large"
                                    onClick={addDetailsHandler}
                                    color="grey"
                                    name="arrow alternate circle up outline"
                                />
                            </List.Content> : <List.Content className="action-bar" floated="right">
                                <Icon
                                    link
                                    className=""
                                    size="large"
                                    onClick={addDetailsHandler}
                                    color="grey"
                                    name="arrow alternate circle down outline"
                                />
                            </List.Content>
                        }
                    </Grid.Column>
                </Grid.Row>
                {/* tslint:disable-next-line:max-line-length */}
                {viewDetails.visible ? <Grid.Row  className={"app-details"}>
                    <Grid.Column width={15}><AppDetails appName={name}/> </Grid.Column>
                    <Grid.Column width={1} className={"app-actions"}>
                        <List.Content className="delete-icon" floated="right">
                            <Icon
                                link
                                className=""
                                size="large"
                                onClick= {" "}
                                color="grey"
                                name="trash alternate outline"
                            />
                        </List.Content>
                    </Grid.Column>
                </Grid.Row> : null}
            {/*<Route path={"/application/" + name}*/}
            {/*       component={() => <AppBuilder name={name} description={"sample"}/>}/>*/}
            </Grid>
        </List.Item>
    );
};

const ListExampleFloated = (props) => {

    const [viewActive, setActive] = useState({
        active: 0
    });

    const addActive = () => {
      const currentActive = viewActive.active;
      setActive(
          {active: currentActive + 1}
      );
    };
    const applications = ["playground", "travelocity", "pickUp", "delivery"];
    const list = applications.map((apps) => {
        return createView(apps, addActive);
    });
    const navigateNew = () => {
        history.push("/application/new/template");
    };
    const sort = [
        {
            key: "Alphabet",
            text: "Alphabet",
            value: "Alphabet",
        },
        {
            key: "Usage",
            text: "Usage",
            value: "Usage",
        },
    ];

    const getClaims = (): void => {
        // tslint:disable-next-line:no-console
        getLocalClaims()
            .then((response) => {
                if (response.status === 200) {
                    // tslint:disable-next-line:no-console
                    console.log(response);
                }
            })
            .catch((error) => {
                // tslint:disable-next-line:no-console
                console.log("error", error);
            });
    };
    return (
        // <BrowserRouter>
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={12}>
                        <Input style={{width: "100%"}} icon="search" placeholder="Search Application ..."/>
                    </Grid.Column>
                    <Grid.Column width={4} className="last-column" >
                        <Button onClick={navigateNew}> + APPLICATION </Button>
                        {/*<PortalExampleControlled/>*/}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row  divided style={{color: "#686f77"}}>
                    <Grid.Column width={4} className={"divided"}>
                        <span>Sort By <Divider vertical hidden />
                        <Dropdown
                            inline
                            options={sort}
                            defaultValue={sort[0].value}
                        />
                        </span>
                    </Grid.Column >
                    <Grid.Column width={4}>
                        <span> Total Applications  4 </span>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Divider hidden/>
                        <List divided verticalAlign="middle" className="application-list">
                            {list}
                            {/*{console.log(props)}*/}
                            {getClaims()}
                        </List>
                        {/*{viewDetails.visible ? <AppBuilder/> : null}*/}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );

};
export default ListExampleFloated;

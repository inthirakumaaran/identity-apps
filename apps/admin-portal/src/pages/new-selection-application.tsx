import * as React from "react";
import {Grid, Icon, Input} from "semantic-ui-react";
import Template from "../components/app-settings/app-template";
import {DefaultPageLayout, InnerPageLayout} from "../layouts";
import history from "../helpers/history";

export const SelectAppPage = () => {
    const templateList = {
        details: ["Front end applications which uses API. ", "Regular web applications thats use redirections inside browsers"
            , "Mobile applications that can directly call the API"],
        name: ["Single Page", "Web App", "Mobile"],
        type: ["eg ReactJs, Nodejs apps", "eg JAVA, .Net apps", "eg Android,IOS"]
    };

    // const buildTemplate = () => {
    //     const num = templateList.name.length;
    //     const temp = templateList.name.map((element) => {
    //         const index = templateList.name.indexOf(element);
    //         return (
    //             <Grid.Column width={4}>
    //                 <Template name={templateList.name[index]}
    //                           details={templateList.details[index]}
    //                           type={templateList.type[index]}
    //                 />
    //             </Grid.Column>);
    //     }).reduce((arr, el) => {
    //         return arr.concat(el);
    //     }, []);
    //     // for (let i = 0; i < num; i++) {
    //     //     return (
    //     //     <Grid.Column width={4}>
    //     //      <Template name={templateList.name[i]}
    //     //                      details={templateList.details[i]}
    //     //                      type={templateList.type[i]}
    //     //      />
    //     //     </Grid.Column>);
    //     // }
    // }
    const temp = templateList.name.map((element) => {
        const index = templateList.name.indexOf(element);
        if (element == "Web App") {
            return (
                <Grid.Column width={6} key={element}>
                    <Template name={element}
                              details={templateList.details[index]}
                              type={templateList.type[index]}
                              show="true"
                    />
                </Grid.Column>);
        } else {
            return (
                <Grid.Column width={6} key={element}>
                    <Template name={element}
                              details={templateList.details[index]}
                              type={templateList.type[index]}
                              show="false"
                    />
                </Grid.Column>);
        }
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    const navigate = (): void => {
        history.push("/application");
    };
    return (
            <DefaultPageLayout
                pageTitle={"Select Application Type"}
                pageDescription={" Please choose one the types to build your application "}
                pageTitleTextAlign={"center"}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Icon
                                link
                                size="large"
                                onClick={navigate}
                                color="grey"
                                name="arrow left"
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Input style={ {width: "100%" }} icon="search" placeholder="Search Template..."/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        { temp }
                    </Grid.Row>
                </Grid>
            </DefaultPageLayout>
    );
};

export default SelectAppPage;

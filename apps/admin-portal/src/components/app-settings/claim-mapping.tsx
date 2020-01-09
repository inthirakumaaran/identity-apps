import React, {useEffect, useState} from "react";
import {Button, Divider, Dropdown, Grid, Icon, Image, Input, List, Radio, Search} from "semantic-ui-react";
import {SampleApp} from "../../configs";
import history from "../../helpers/history";
import { getLocalClaims, getClaimDialect, getExternalClaims } from "../../api/application";
import {Claim, ClaimDialect } from "../../models";
import {Application} from "../../../../user-portal/src/models";
import {element} from "prop-types";
import {ExternalClaim} from "../../models/claim";

interface Options {
    key: string;
    text: string;
    value: string;
}

const createView = (Scope: string , onClick: any, select: boolean,
                    id: string, displayName: string, mappedURI: string, claimURI: string) => {

    const capitalizeFirstLetter = (appName) => {
        return  appName[0].toUpperCase() + appName.slice(1);
    };

    const findSelected  = () => {
        if (select) {
            return "claim-list-item dark";
        } else {
            return "claim-list-item";
        }
    };

    // tslint:disable-next-line:no-shadowed-variable
    const getClaimName = (claimURI: string): string => {
        if (typeof claimURI === "string") {
            const claimArray = claimURI.split("/");
            if (claimArray.length > 1) {
                return claimArray[claimArray.length - 1];
            } else {
                return claimArray[0];
            }
        }
        return claimURI;
    };

    return (
        <List.Item key={ id } className={ findSelected() }>
            <Grid>
                <Grid.Row className={ "app-list-row" }>
                    <Grid.Column width={ 14 } className={ "app-content" }>
                        <List.Content className="claim-list-content">
                            <div className={ "main-content" }>{ capitalizeFirstLetter(displayName) }</div>
                            <div className="sub-content">{ getClaimName(mappedURI) }</div>
                        </List.Content>
                    </Grid.Column>
                    <Grid.Column width={ 2 } className={ "app-actions" }>
                            <List.Content className="action-bar">
                                { select ?
                                    <Icon
                                        link
                                        className="claim-icon"
                                        size="small"
                                        color="grey"
                                        name="minus"
                                        onClick={() => onClick(claimURI)}
                                    /> :
                                    <Icon
                                        link
                                        className="claim-icon"
                                        size="small"
                                        color="grey"
                                        name="plus"
                                        onClick={ () => onClick(claimURI) }
                                    />
                                }
                            </List.Content>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </List.Item>
    );
}

export const AttributeMapping = (props) => {

    const getClaims = () => {
        getLocalClaims()
            .then((response) => {
                   // tslint:disable-next-line:no-console
                   // claims = response.slice(0, 10);
                    setClaims(response.slice(0, 10));
            })
            .catch((error) => {
                // tslint:disable-next-line:no-console
                console.log("error", error);
            });
    };

    const getDialects = () => {
        getClaimDialect()
                .then((response) => {
                    setDialect(response);
                })
                .catch((error) => {
                    // tslint:disable-next-line:no-console
                    console.log("error", error);
                });
    };

    const getMappedClaims = (newClaimId) => {
        if (newClaimId !== null && newClaimId !== selectedDialect.id) {
            getExternalClaims(newClaimId)
                .then((response) => {
                    setExternalClaims(response.slice(0, 10));
                })
                .catch((error) => {
                    // tslint:disable-next-line:no-console
                    console.log("error", error);
                });
        }
    };

    const [viewActive, setActive] = useState({
        active: 0
    });

    const [ dialectOptions, setDialectOptions ] = useState<Options[]>([]);

    const [ selectedDialect, setSelectedDialect ] = useState({
        dialectURI: "http://wso2.org/claims",
        id: "",
        localDialect: true
    });

    const [ dialect, setDialect ] = useState<ClaimDialect[]>([]);
    const [ claims, setClaims ] = useState<Claim[]>([]);
    const [ externalClaims, setExternalClaims] = useState<ExternalClaim[]>([]);
    const [ selectedClaims, setSelectedClaims ] = useState<Claim[]>([]);
    const [ selectedExternalClaims, setSelectedExternalClaims ] = useState<ExternalClaim[]>([]);

    const addActive = () => {
        const currentActive = viewActive.active;
        setActive(
            { active: currentActive + 1 }
        );
    };
    const attributes = ["username", "email", "mobile", "address"];

    const selectAttribute = (claimURI) => {
        const allAttributes = [...claims];
        const oldAttributes = [...selectedClaims];
        let currentClaim: Claim = null;
        let sliceIndex = -1;
        allAttributes.map((claim, index)  => {
            if (claim.claimURI === claimURI) {
                sliceIndex = index;
                currentClaim = claim;
            }
        });

        if (sliceIndex > -1) {
            allAttributes.splice(sliceIndex, 1);
        }
        if (currentClaim !== null) {
            oldAttributes.push(currentClaim);
        }
        setSelectedClaims(oldAttributes);
        setClaims(allAttributes);
    };

    const removeAttribute = (claimURI) => {
        const allAttributes = [...claims];
        const oldAttributes = [...selectedClaims];

        let sliceIndex = -1;
        let currentClaim: Claim = null;
        // tslint:disable-next-line:no-shadowed-variable
        oldAttributes.map((claim, index)  => {
            if (claim.claimURI === claimURI) {
                sliceIndex = index;
                currentClaim = claim;
            }
        });

        if (sliceIndex > -1) {
            oldAttributes.splice(sliceIndex, 1);
        }
        if (currentClaim !== null) {
            allAttributes.push(currentClaim);
        }
        setSelectedClaims(oldAttributes);
        setClaims(allAttributes);
    };

    const selectExternalAttribute = (claimURI) => {
        const allAttributes = [...externalClaims];
        const oldAttributes = [...selectedExternalClaims];
        let currentClaim: ExternalClaim = null;
        let sliceIndex = -1;
        allAttributes.map((claim, index)  => {
            if (claim.claimURI === claimURI) {
                sliceIndex = index;
                currentClaim = claim;
            }
        });

        if (sliceIndex > -1) {
            allAttributes.splice(sliceIndex, 1);
        }
        if (currentClaim !== null) {
            oldAttributes.push(currentClaim);
        }
        setSelectedExternalClaims(oldAttributes);
        setExternalClaims(allAttributes);
    };

    const removeExternalAttribute = (claimURI) => {
        const allAttributes = [...externalClaims];
        const oldAttributes = [...selectedExternalClaims];
        let currentClaim: ExternalClaim = null;
        let sliceIndex = -1;
        // tslint:disable-next-line:no-shadowed-variable
        oldAttributes.map((claim, index)  => {
            if (claim.claimURI === claimURI) {
                sliceIndex = index;
                currentClaim = claim;
            }
        });

        if (sliceIndex > -1) {
            oldAttributes.splice(sliceIndex, 1);
        }
        if (currentClaim !== null) {
            allAttributes.push(currentClaim);
        }
        setSelectedExternalClaims(oldAttributes);
        setExternalClaims(allAttributes);
    };

    const addAll = (): void => {
        if (selectedDialect.localDialect) {
            const allAttributes = [...claims];
            const oldAttributes = [...selectedClaims];
            const newAttributes = oldAttributes.concat(allAttributes);
            setSelectedClaims(newAttributes);
            setClaims([]);
        } else {
            const allAttributes = [...externalClaims];
            const oldAttributes = [...selectedExternalClaims];
            const newAttributes = oldAttributes.concat(allAttributes);
            setSelectedExternalClaims(newAttributes);
            setExternalClaims([]);
        }
    };

    const removeAll = (): void => {
        if (selectedDialect.localDialect) {
            const allAttributes = [...claims];
            const oldAttributes = [...selectedClaims];
            const newAttributes = allAttributes.concat(oldAttributes);
            setSelectedClaims([]);
            setClaims(newAttributes);
        } else {
            const allAttributes = [...externalClaims];
            const oldAttributes = [...selectedExternalClaims];
            const newAttributes = allAttributes.concat(oldAttributes);
            setSelectedExternalClaims([]);
            setExternalClaims(newAttributes);
        }
    };

    const createOptions = () => {
        const newDialectOptions: Options[] = [];
        if (dialectOptions !== null) {
            // tslint:disable-next-line:no-shadowed-variable
            dialect.map((element: ClaimDialect) => {
                const option: Options = {
                    key: element.id,
                    text: element.dialectURI,
                    value: element.dialectURI,
                };
                newDialectOptions.push(option);
            });
            // if (newDialectOptions !== dialectOptions) {
            //     setDialectOptions(dialectOptions);
            // }
        }
        return newDialectOptions;
    }

    const navigateNew = () => {
        history.push("/application/new/template");
    };
    const filter = "Select Dialect: ";

    useEffect(() => {
        getClaims();
        getDialects();
    }, []);

    // useEffect(() => {
    //     getMappedClaims();
    // }, []);
    const selectDialect = (e, { name, value }) => {
       if (value !== null && selectedDialect.dialectURI !== value) {
         const selectedId = findClaimID(value);
         let isLocalDialect = selectedDialect.localDialect;
         if (value !== "http://wso2.org/claims") {
             isLocalDialect = false;
         } else {
             isLocalDialect = true;
         }
         setSelectedDialect({
               dialectURI: value,
               id: selectedId,
               localDialect: isLocalDialect
           });
         setSelectedExternalClaims([]);
         setSelectedClaims([]);
         getMappedClaims(selectedId);
         // tslint:disable-next-line:no-console
       }
    };

    const findClaimID = (value) => {
        let id: string = "";
        // tslint:disable-next-line:no-shadowed-variable
        dialect.map((element: ClaimDialect) => {
            if (element.dialectURI === value) {
                id = element.id;
            }
        });
        return id;
    };

    const findLocalClaimDialect = () => {
        let localIndex = 0 ;
        dialect.map((element: ClaimDialect, index) => {
            if (element.dialectURI === "http://wso2.org/claims") {
                localIndex = index ;
            }
        });
        return localIndex;
    }

    return (
        <div>
            <Grid className="claim-mapping" >
                <Grid.Row>
                    <Grid.Column width={ 2 }/>
                    <Grid.Column width={ 12 }>
                        <Input style={ { width: "100%" } } icon="search" placeholder="Search Attributes"/>
                    </Grid.Column>
                    <Grid.Column width={ 2 }/>
                </Grid.Row>
                <Grid.Row  divided style={ { color: "#686f77" } }>
                    <Grid.Column width={ 9 } className={ "divided" }>
                        <label>{ filter }</label>
                        <Dropdown
                            selection
                            deburr
                            fluid
                            search
                            // inline
                            options={ createOptions() }
                            onChange={ selectDialect }
                            defaultValue="http://wso2.org/claims"
                        />
                    </Grid.Column >
                </Grid.Row>
                <Grid.Row className="claim-list-row">
                    <Grid.Column width={ 8 } className="claim-list-column" id="style-1">
                          Available
                        { selectedDialect.localDialect ?
                            <List verticalAlign="middle" className="claim-list">
                                { claims.map((claim) => {
                                    return createView("Local", selectAttribute, false,
                                        claim.id, claim.displayName, claim.claimURI, claim.claimURI);
                                }) }
                            </List> :
                            <List verticalAlign="middle" className="claim-list">
                                {externalClaims.map((claim) => {
                                    return createView("Local", selectExternalAttribute, false,
                                        claim.id, claim.claimURI, claim.mappedLocalClaimURI, claim.claimURI);
                                })}
                            </List>
                        }
                    </Grid.Column>
                    <Grid.Column width={ 8 } className="claim-list-column" id="style-1">
                          Selected
                        { selectedDialect.localDialect ?
                            <List verticalAlign="middle" className="claim-list">
                            { selectedClaims.map((claim) => {
                                return createView("Local", removeAttribute, true,
                                    claim.id, claim.displayName, claim.claimURI, claim.claimURI);
                            }) }
                            </List> :
                            <List verticalAlign="middle" className="claim-list">
                                { selectedExternalClaims.map((claim) => {
                                    return createView("Local", removeExternalAttribute, true,
                                        claim.id, claim.claimURI, claim.mappedLocalClaimURI, claim.claimURI);
                                }) }
                            </List>
                        }
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className="claim-list-button-row">
                    <Grid.Column width={ 5 } className="claim-list-column"/>
                    <Grid.Column width={ 3 } className="claim-list-column">
                        <Button
                            className="link-button"
                            size="small"
                            onClick={ addAll }
                        >
                            Add All
                        </Button>
                    </Grid.Column>
                    <Grid.Column width={ 5 } className="claim-list-column"/>
                    <Grid.Column width={ 3 } className="claim-list-column">
                        <Button
                            className="link-button"
                            size="small"
                            onClick={ removeAll }
                        >
                            Remove All
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );

};
export default AttributeMapping;

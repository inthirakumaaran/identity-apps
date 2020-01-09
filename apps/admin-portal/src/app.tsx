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

import React, { useContext } from "react";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { Dimmer, Loader } from "semantic-ui-react";
import ProtectedRoute from "./components/protected-route";
import { routes } from "./configs";
import { AuthContext } from "./contexts/auth";
import { i18n } from "./helpers";
import history from "./helpers/history";
import configureStore from "./helpers/store";

const store = configureStore();

const App = () =>  {
    const { signIn, signOut } = useContext(AuthContext);

    return (
        <Router history={history}>
            <div className="container-fluid">
                <I18nextProvider i18n={i18n}>
                    <Provider store={store}>
                        {/* TODO: Need to re-enable with app context */}
                        {/* {(!state.isAuth) &&
                            <Dimmer active inverted>
                                <Loader>Loading</Loader>
                            </Dimmer>
                        } */}
                        <Switch>
                            <Redirect exact path="/" to={APP_LOGIN_PATH} />
                            {/* tslint:disable-next-line:jsx-alignment */}
                            <Route path={APP_LOGIN_PATH} render={() => {
                                signIn();
                                return null;
                                // tslint:disable-next-line:jsx-alignment
                            } } />
                            <Route path="/logout" render={() => {
                                signOut();
                                return null;
                                // tslint:disable-next-line:jsx-alignment
                            } } />
                            {
                                routes.map((route, index) => {
                                    return (
                                        route.protected ?
                                            (
                                                <ProtectedRoute
                                                    component={ route.component }
                                                    exact={ route.exact }
                                                    path={ route.path }
                                                    key={ index }
                                                />
                                            )
                                            :
                                            (
                                                <Route
                                                    path={ route.path }
                                                    render={ (props) =>
                                                        (<route.component { ...props } />)
                                                    }
                                                    key={ index }
                                                />
                                            )
                                    );
                                })
                            }
                        </Switch>
                    </Provider>
                </I18nextProvider>
            </div>
        </Router>
    );
};

export default App;

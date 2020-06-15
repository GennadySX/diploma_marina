/**
 * Created by GennadySX on @2020
 */
import {IonReactRouter} from '@ionic/react-router';
import {IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from "@ionic/react";
import {Redirect, Route, BrowserRouter as Router, useLocation, withRouter} from "react-router-dom";
import CoursePage from "../pages/Course";
import LikedPage from "../pages/Liked";
import ProfilePage from "../pages/Profile";
import AuthPage from "../pages/Auth";
import React from "react";
import {heartCircleOutline, libraryOutline, personCircleOutline} from "ionicons/icons";
import {Storage} from "../helpers/Storage";

 class Dashboard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            location: "/auth",
        }

    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <IonReactRouter>
                        <IonTabs>
                            <IonRouterOutlet>
                                <Route path="/course" component={CoursePage} exact={true}/>
                                <Route path="/liked" component={LikedPage} exact={true}/>
                                <Route path="/profile" component={ProfilePage}/>
                            </IonRouterOutlet>
                            <IonTabBar slot="bottom">
                                <IonTabButton tab="course" href="/course">
                                    <IonIcon icon={libraryOutline}/>
                                    <IonLabel>Курсы</IonLabel>
                                </IonTabButton>
                                <IonTabButton tab="liked" href="/liked">
                                    <IonIcon icon={heartCircleOutline}/>
                                    <IonLabel>Избранные</IonLabel>
                                </IonTabButton>
                                <IonTabButton tab="profile" href="/profile">
                                    <IonIcon icon={personCircleOutline}/>
                                    <IonLabel>Профиль</IonLabel>
                                </IonTabButton>
                            </IonTabBar>
                        </IonTabs>
            </IonReactRouter>
        );
    }
}


export default Dashboard
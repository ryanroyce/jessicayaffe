import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import RelationshipCoach from "./RelationshipCoach";
import Speaking from "./Speaking";
import TrainingWorkshops from "./TrainingWorkshops";
import About from "./About";
import RelationshipsBlog from "./RelationshipsBlog";
import Contact from "./Contact";


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Jessica Yaffe, LLC.</h1>
                    <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/relationship-coach">Relationship Coaching</NavLink></li>
                        <li><NavLink to="/inspirational-speaking">Speaking</NavLink></li>
                        <li><NavLink to="/trainings-&-workshops">Trainings & Workshops</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/healthy-relationships-blog">Relationship Blog</NavLink></li>
                        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/relationship-coach" component={RelationshipCoach} />
                        <Route path="/inspirational-speaking" component={Speaking} />
                        <Route path="/trainings-&-workshops" component={TrainingWorkshops} />
                        <Route path="/about" component={About} />
                        <Route path="/healthy-relationships-blog" component={RelationshipsBlog} />
                        <Route path="/contact-us" component={Contact} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
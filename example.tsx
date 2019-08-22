import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import IconDemo from "./lib/icon/icon.demo";
import ButtonDemo from "./lib/button/button.demo";
import InputDemo from "./lib/input/input.demo";
import DialogDemo from "./lib/dialog/dialog.demo";
import FormDemo from "./lib/form/form.demo";
import LayoutDemo from "./lib/layout/layout.demo";
import { Layout, Header, Main, Footer, Aside } from "./lib/layout/layout";
import "./example.scss";

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img className="logo-img" src="./hhwUI-logo.png" alt="" />
          hhwUI
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/input">Input</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
          </ul>
        </Aside>
        <Main className="site-main">
          <Route path="/icon" component={IconDemo} />
          <Route path="/button" component={ButtonDemo} />
          <Route path="/dialog" component={DialogDemo} />
          <Route path="/layout" component={LayoutDemo} />
          <Route path="/form" component={FormDemo} />
          <Route path="/input" component={InputDemo} />
        </Main>
      </Layout>
      <Footer className="site-footer">&copy; 王欢</Footer>
    </Layout>
  </Router>,
  document.querySelector("#root")
);

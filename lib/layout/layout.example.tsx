import React from "react";
import Layout from "./layout";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Aside from "./aside";
import "./layout.example.scss";

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
      <h3>第一个例子</h3>
      <Layout style={{ height: 500, width: 500 }}>
        <Header className="header">header</Header>
        <Main className="main">main</Main>
        <Footer className="footer">footer</Footer>
      </Layout>

      <h3>第二个例子</h3>
      <Layout style={{ height: 500, width: 500 }}>
        <Header className="header">header</Header>
        <Layout>
          <Aside className="aside">aside</Aside>
          <Main className="main">main</Main>
        </Layout>
        <Footer className="footer">footer</Footer>
      </Layout>

      <h3>第三个例子</h3>
      <Layout style={{ height: 500, width: 500 }}>
        <Header className="header">header</Header>
        <Layout>
          <Main className="main">main</Main>
          <Aside className="aside">aside</Aside>
        </Layout>
        <Footer className="footer">footer</Footer>
      </Layout>

      <h3>第四个例子</h3>
      <Layout style={{ height: 500, width: 500 }}>
        <Aside className="aside">aside</Aside>
        <Layout>
          <Header className="header">header</Header>
          <Main className="main">main</Main>
          <Footer className="footer">footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutExample;

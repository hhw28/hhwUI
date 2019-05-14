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
      <h3>第四个例子</h3>
      <Layout>
        <Aside className="ex-aside">aside</Aside>
        <Layout>
          <Header className="ex-header">header</Header>
          <Main className="ex-main">main</Main>
          <Footer className="ex-footer">footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutExample;

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
      <h3>第二个例子</h3>
      <Layout>
        <Header className="ex-header">header</Header>
        <Layout>
          <Aside className="ex-aside">aside</Aside>
          <Main className="ex-main">main</Main>
        </Layout>
        <Footer className="ex-footer">footer</Footer>
      </Layout>
    </div>
  );
};

export default LayoutExample;

import React from "react";
import Layout from "./layout";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import "./layout.example.scss";

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
      <h3>第一个例子</h3>
      <Layout>
        <Header className="ex-header">header</Header>
        <Main className="ex-main">main</Main>
        <Footer className="ex-footer">footer</Footer>
      </Layout>
    </div>
  );
};

export default LayoutExample;

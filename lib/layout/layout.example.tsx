import React from "react";
import Layout from "./layout";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Aside from "./aside";

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
      <h3>第一个例子</h3>
      <Layout style={{ height: 500 }} className="hi">
        <Header>header</Header>
        <Main>main</Main>
        <Footer>footer</Footer>
      </Layout>

      <h3>第二个例子</h3>
      <Layout style={{ height: 500 }} className="hi">
        <Header>header</Header>
        <Layout>
          <Aside>aside</Aside>
          <Main>main</Main>
        </Layout>
        <Footer>footer</Footer>
      </Layout>

      <h3>第三个例子</h3>
      <Layout style={{ height: 500 }} className="hi">
        <Header>header</Header>
        <Layout>
          <Main>main</Main>
          <Aside>aside</Aside>
        </Layout>
        <Footer>footer</Footer>
      </Layout>

      <h3>第四个例子</h3>
      <Layout style={{ height: 500 }} className="hi">
        <Aside>aside</Aside>
        <Layout>
          <Header>header</Header>
          <Main>main</Main>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutExample;

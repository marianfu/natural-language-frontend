import React from 'react';
import { Layout } from 'antd';
import Nav from '../components/Nav';
import './styles.scss';
import Request from 'js/services/request';
const { Header, Content, Footer } = Layout;

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const req = new Request();
    req.doGet('/lessons', {level: 'Inicial'})
      .then(function({ data }) {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {

    return (
      <Layout className="layout">
        <Header className="header">
          <Nav/>
        </Header>
        <Content className="content">
          { this.props.children }
        </Content>
        <Footer className="footer">
          <div className="inner">
            <span>
              <a href="https://github.com/marianfu/natural-language-frontend" target="_blank">Text</a> ©2017
            </span>
            <span>
              Crafted by <a href="https://github.com/gabrielprc" target="_blank">@gabrielprc</a> and <a href="https://github.com/marianfu" target="_blank">@marianfu</a>
            </span>
          </div>
        </Footer>
      </Layout>
    );
  }
}

export default App;


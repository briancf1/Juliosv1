import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
    <div style={{
        width: '100%',
        textAlign: 'center'
    }}>
    <h1>La Pagina Futura de Julio's</h1>
        <div><img src={require('./logo.png')} style={{ width: '100%' }}></img></div>
  </div>
);

export default connect()(Home);
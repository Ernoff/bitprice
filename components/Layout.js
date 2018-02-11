import Head from 'next/head'
import Navbar from './Navbar'


const Layout = (props) => (
  <div>
    <Head>
      <title>BitPrice</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.3/cerulean/bootstrap.min.css" />
    </Head>
    <Navbar />
    <div className="container">
    {props.children}
    </div>
  </div>
);

export default Layout;
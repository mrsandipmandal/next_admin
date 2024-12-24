import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
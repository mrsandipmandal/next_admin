import Header from '@/../app/components/Header';
import Footer from '@/../app/components/Footer';
import Navbar from '@/../app/components/Navbar';

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
//In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App;
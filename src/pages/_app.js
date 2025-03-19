// src/pages/_app.js
import '../styles/globals.css';  // Global styles for your application

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

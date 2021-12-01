/**
 * App Component
 * -----------------------------------------------------------------------------
 * Top level component that contains the page layout component.
 */
import Page from '../components/Page';

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

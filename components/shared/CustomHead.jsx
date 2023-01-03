import Head from "next/head";

const CustomHead = ({ pageTitle }) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content="Expertly brewed coffee and the finest beans at Coffee Roasters. In-house roasting and skilled baristas serve up the perfect cup. Pastries and sandwiches also available." />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="favicons/site.webmanifest" />

      <title>{ pageTitle }</title>
    </Head>
  );
};

export default CustomHead;

import Head from 'next/head';

const pageTitle = 'Dronehub Ghana';
const description = 'Drones for everyday needs';
const coverImageUrl =
  'https://res.cloudinary.com/djmx11b6s/image/upload/v1691422048/donehub-assets/dronehub_nt1tgy.png';

const Meta = () => {
  return (
    <Head>
      <title>{pageTitle} </title>
      <meta name="title" content={`${pageTitle}`} />
      <meta name="description" content={description} />
      <link rel="icon" href="/logo-white.svg" />
      <meta
        name="keywords"
        content="Drone Education, Drone Consulting, Drone Repair, Drone Rental, Drone Maintenance, Drone Detection Solution, Custom Solutions, Drone Applied Research"
      />
      <meta name="author" content="Dronehub Ghana" />

      {/* Open Graph / Facebook  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dronehubgh.com/" />
      <meta property="og:title" content={`${pageTitle}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={coverImageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://dronehubgh.com/" />
      <meta property="twitter:title" content={`${pageTitle}`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={coverImageUrl} />
    </Head>
  );
};

export default Meta;

const themeConfig = {
  head: (
    <>
      <meta
        property="og:description"
        content="Platform for web hosting that supports various technologies with the maximum speed can a host reach with less efforts."
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta
        property="og:image"
        content="https://docs.vinixhost.com/opengraph-image.jpg"
      />
    </>
  ),
  logo: <strong>Vinix Host</strong>,
  project: {
    link: "https://github.com/vinixhost/docs",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Vinix Host",
    };
  },
  footer: {
    text: "Copyright Vinix Host 2024",
  },
  chat: {
    link: "https://discord.gg/QCDh3MK26K",
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
};

export default themeConfig;

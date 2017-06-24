const backgroundImageForPicture = (url) => {
  const picture = url === '' ? 'noimage.png' : url;
  return {
    backgroundImage: `url('/images/${picture}')`,
  };
};

export default backgroundImageForPicture;

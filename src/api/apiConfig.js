const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "dee7f6ea3018c3c897225f3b05fa6aad",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;

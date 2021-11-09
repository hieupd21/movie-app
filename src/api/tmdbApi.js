import axiosClient from "./axiosClient";

const category = {
  movie: "movie",
  tv: "tv",
};

const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const tmdbApi = {
  // Danh sách phim
  getMoviesList: (type, params) => {
    const url = `movie/${movieType[type]}`;
    return axiosClient.get(url, params);
  },

  // Danh sách TV show
  getTvList: (type, params) => {
    const url = `tv/${tvType[type]}`;
    return axiosClient.get(url, params);
  },

  // Video theo phim hoặc TV show
  getMovieVideos: (cate, id) => {
    const url = `${category[cate]}/${id}/videos`;
    // return axiosClient.get(url, { params: {} });
    return axiosClient.get(url);
  },

  search: (cate, params) => {
    const url = `search/${category[cate]}`;
    return axiosClient.get(url, params);
  },

  detail: (cate, id, params) => {
    const url = `${category[cate]}/${id}`;
    return axiosClient.get(url, params);
  },

  credits: (cate, id) => {
    const url = `${category[cate]}/${id}/credits`;
    return axiosClient.get(url);
  },

  similar: (cate, id) => {
    const url = `${category[cate]}/${id}/similar`;
    return axiosClient.get(url);
  },
};

export default tmdbApi;
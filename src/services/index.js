const BASE_URL = "https://api.themoviedb.org/3";

export const getPlaying = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );
    return await response.json();
  } catch (err) {
    throw err;
  }
};

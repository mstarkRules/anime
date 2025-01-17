import React, { useCallback, useContext, useEffect, useState } from "react";
import SearchAnime from "../components/SearchAnimes";

const url = "https://api.aniapi.com/v1/anime?title=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [animes, setAnimes] = useState([]);
  const [searchAnime, setSearchAnime] = useState('a');
  const [loading, setLoading] = useState(true);

  const fetchAnimes = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchAnime}`);
      const dataAnime = await response.json();
      const { data } = dataAnime;
      const { documents } = data;

      if (documents) {
        const newAnimes = documents.map((item) => {
          const { anilist_id, cover_image, titles, id, genres } = item;
          return {
            id: anilist_id,
            image: cover_image,
            titles: titles,
            idanime: id,
            genres: genres,
          }
        })
        setLoading(false);
        setAnimes(newAnimes);
      } else {
        setAnimes([]);
      }
     
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchAnime]);

  useEffect(() => {
    fetchAnimes();
  }, [searchAnime, fetchAnimes]);

  return (
    <AppContext.Provider
      value={{
        loading,
        animes,
        setSearchAnime,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
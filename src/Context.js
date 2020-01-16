import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allAlbums, setAllAlbums] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/albums/";

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setAllAlbums(data.slice(0, 6)));
  }, []);

  const deleteAlbum = id => {
    fetch(url + id, {
      method: "DELETE"
    });
    setAllAlbums(allAlbums.filter(item => item.id !== id));
  };

  const editAlbum = (title, id) => {
    fetch(url + id, {
      method: "PATCH",
      body: JSON.stringify({
        title: title
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    setAllAlbums(
      allAlbums.map(obj => (obj.id === id ? { ...obj, title: title } : obj))
    );
  };

  const createNewAlbum = title => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const newAlbum = { title, userId: 1, id: allAlbums.length + 1 };

    setAllAlbums(prevAlbums => [...prevAlbums, newAlbum]);
  };

  return (
    <Context.Provider
      value={{ allAlbums, deleteAlbum, editAlbum, createNewAlbum }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

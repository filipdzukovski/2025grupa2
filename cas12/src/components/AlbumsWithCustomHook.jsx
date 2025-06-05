import React,{useState} from "react";
import useFetch from "./../utils/FetchHook";
import { api } from "./../config/properties";
import {createPortal} from 'react-dom';

export const AlbumsWithCustomHook = () => {
  const [data] = useFetch(`${api.root}/albums`);
  const [portalUse,setPortalUse] = useState(false);

    const container = document.getElementById('albums-header');
  return (
    <div id="albums-hook">
      <div id='albums-header'>

      </div>

      {portalUse && createPortal(<p>This is portal Code</p>,container)}
      <button onClick={()=>{setPortalUse(!portalUse)}}>Portal</button>
      {data &&
        data.map((album) => {
          return <p key={album.id}>{album.title}</p>;
        })}
    </div>
  );
};

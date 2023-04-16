"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";

const GetTracks = () => {
  const { setData, data, user } = useAuth();
  const [artists, setArtists] = useState([])

  const getTracks = async e  => {
    e.preventDefault()
    var trackParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.accessToken,
      },
    };

    await fetch(
      `https://api.spotify.com/v1/me/top/tracks`,
      trackParams
    )
      .then((resp) => resp.json())
      .then((res) => {
        const songs  = res.items.map(item => item.artists[0].id )
        setArtists(songs)
      });
  }

  useEffect( () => {
    if(artists) {
      artists.map(async id => {
        var trackParams = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.accessToken,
          },
        }

        await fetch(
          `https://api.spotify.com/v1/artists/${id}`,
          trackParams
        )
          .then((resp) => resp.json())
          .then((res) => {
            console.log(res.genres);
          });
      })
    }
  }, [artists])

  return (
    <div>
      <button onClick={getTracks} className="bg-[#61FF53] px-7 py-4 rounded-md mt-14 font-[600] text-xl">Get tracks</button>
    </div>
  );
};
export default GetTracks;

"use client";
import { useAuth } from "../AuthContext";

const GetTracks = () => {
  const { setData, data, user } = useAuth();

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
      .then((res) => console.log(res.items));
  };

  return (
    <div>
      <button onClick={getTracks} className="bg-[#61FF53] px-7 py-4 rounded-md mt-14 font-[600] text-xl">Get tracks</button>
    </div>
  );
};
export default GetTracks;

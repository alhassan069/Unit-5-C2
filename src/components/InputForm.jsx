import { useState } from "react";
import "./Inpput.css";
function InputForm() {
  const [game, setGame] = useState(null);
  //itle, ingredients, time to cook, an image and instructions.
  const handleChange = (e) => {
    let { name, value } = e.target;
    setGame({ ...game, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://fake-server-app88.herokuapp.com/games", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(game),
    });
    document.getElementById("addgame").reset();
  };
  return (
    <div id="inputcont">
      <form id="addgame" onSubmit={handleSubmit}>
        {/* <label>Name of Game</label> */}
        <input
          onChange={handleChange}
          type="text"
          name="gamename"
          placeholder="name"
        />
        {/* <br /> */}
        {/* <label>Name of author</label> */}
        <input
          onChange={handleChange}
          type="text"
          name="gameauthor"
          placeholder="author"
        />
        {/* <br /> */}
        {/* <label>Price</label> */}
        <input
          onChange={handleChange}
          type="number"
          name="gameprice"
          placeholder="price"
        />
        {/* <br /> */}
        {/* <label>Tags</label> */}
        <input
          onChange={handleChange}
          type="text"
          name="gametags"
          placeholder="tags"
        />
        {/* <br /> */}

        <input
          onChange={handleChange}
          type="checkbox"
          id="forkids"
          name="forkids"
          value={true}
        />

        {/* <br />
        <label>Description</label> */}
        <textarea
          onChange={handleChange}
          type="text"
          name="gamedesc"
          placeholder="description"
        />
        {/* <br /> */}
        {/* <label>Ratings</label> */}
        <select onChange={handleChange} name="gamerating">
          <option name="gamerating" value="1">
            1
          </option>
          <option name="gamerating" value="2">
            2
          </option>
          <option name="gamerating" value="3">
            3
          </option>
          <option name="gamerating" value="4">
            4
          </option>
          <option name="gamerating" value="5">
            5
          </option>
        </select>
        {/* <br /> */}
        <input onChange={handleChange} type="submit" />
      </form>
    </div>
  );
}
export default InputForm;

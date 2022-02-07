import { useEffect, useState } from "react";
import "./Table.css";
function Tablei() {
  const [data, setData] = useState([]);
  const [sortedn, setSortedn] = useState("asc");
  const [sortedr, setSortedr] = useState("asc");
  const [sortedp, setSortedp] = useState("asc");
  useEffect(() => {
    fetch(`https://fake-server-app88.herokuapp.com/games`)
      .then((d) => d.json())
      .then((d) => setData(d));
  }, []);
  const sortByName = () => {
    fetch(
      `https://fake-server-app88.herokuapp.com/games?_sort=gamename&_order=${sortedn}`
    )
      .then((d) => d.json())
      .then((d) => setData(d));
    if (sortedn === "asc") {
      setSortedn("desc");
    } else setSortedn("asc");
  };
  const sortByPrice = () => {
    fetch(
      `https://fake-server-app88.herokuapp.com/games?_sort=gameprice&_order=${sortedp}`
    )
      .then((d) => d.json())
      .then((d) => setData(d));
    if (sortedp === "asc") {
      setSortedp("desc");
    } else setSortedp("asc");
  };
  const sortByRating = () => {
    fetch(
      `https://fake-server-app88.herokuapp.com/games?_sort=gamerating&_order=${sortedr}`
    )
      .then((d) => d.json())
      .then((d) => setData(d));
    if (sortedr === "asc") {
      setSortedr("desc");
    } else setSortedr("asc");
  };
  const searchChange = (e) => {
    let { name, value } = e.target;
    fetch(`https://fake-server-app88.herokuapp.com/games?q=${value}`)
      .then((d) => d.json())
      .then((d) => setData(d));
  };
  return (
    <div id="tablecont">
      <input
        onChange={searchChange}
        type="text"
        id="searchbox"
        placeholder="search"
      />
      <table id="table">
        <thead className="tablehead">
          <tr>
            <th>
              game name{" "}
              <button id="sortbyname" onClick={sortByName}>
                Sort
              </button>
            </th>
            <th>game author</th>
            <th>game tags</th>
            <th>
              game price{" "}
              <button id="sortbyprice" onClick={sortByPrice}>
                Sort
              </button>
            </th>
            <th>is for kids</th>
            <th>
              rating{" "}
              <button id="sortbyrating" onClick={sortByRating}>
                Sort
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.id} className="gamerow">
              <td className="gamename">{el.gamename}</td>
              <td>{el.gameauthor}</td>
              <td>{el.gametags}</td>
              <td className="gameprice">{el.gameprice}</td>
              <td>{el.forkids}</td>
              <td className="gamerating">{el.gamerating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Tablei;

function GetSortOrder(prop) {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  };
}

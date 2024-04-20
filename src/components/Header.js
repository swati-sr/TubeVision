import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSideMenu } from "../utils/sideMenuSlice";
import { SEARCH_LIST_YOUTUBE_API } from "../utils/constants";
import { cachedResults } from "../utils/searchSlice";
import { USER_IMG } from "../utils/helper";

const Header = () => {
  const [search, setSearch] = useState("");
  const [showSearchText, setShowSearchText] = useState(false);
  const [itemList, setItemList] = useState([]);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(openSideMenu());
  };
  const listItemFromStore = useSelector((store) => store.searching);

  useEffect(() => {
    //debouncing technique for enhancing performance
    const timer = setTimeout(() => {
      //searching if searched item is present in the store or not
      if (listItemFromStore[search]) {
        setItemList(listItemFromStore[search]);
      } else {
        getItemFromSearch();
      }
    }, 200);

    //componentWillUnmounting - cleanup
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const getItemFromSearch = async () => {
    const data = await fetch(SEARCH_LIST_YOUTUBE_API + search);
    const json = await data.json();
    setItemList(json[1]);
    dispatch(
      cachedResults({
        [search]: json[1],
      })
    );
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value !== "") {
      setShowSearchText(true);
    }
  };

  return (
    <div className="flex py-2 shadow-lg justify-between px-2 top-0 sticky z-0 bg-white">
      <div className="flex">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-10 px-2 pb-3 mt-3"
          alt="hamburger-icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <a href="/">
          <img
            className="h-5 mt-4"
            alt="app-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="mt-3">
        <div className="flex">
          <input
            type="text"
            name="Search"
            className="border rounded-l-full w-96 px-4 py-2"
            onFocus={() => setShowSearchText(true)}
            onBlur={() => setShowSearchText(false)}
            onChange={(e) => handleInputChange(e)}
            value={search}
            placeholder="Search"
          />
          <button className="border px-6 bg-gray-50 rounded-r-full">
            &#x1F50E;&#xFE0E;
          </button>
        </div>
        {showSearchText && (
          <ul className="shadow-lg rounded-lg mt-1 border w-96 ml-1">
            {itemList.map((e, index) => {
              return (
                <li
                  className="px-2 py-1 hover:bg-gray-200 hover:cursor-auto"
                  key={index}
                >
                  {" "}
                  &#x1F50E;&#xFE0E; {e}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <img
        className="h-10 my-3 hover:cursor-pointer"
        alt="user"
        src={USER_IMG}
      />
    </div>
  );
};

export default Header;

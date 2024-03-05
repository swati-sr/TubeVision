import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSideMenuOpen = useSelector((store) => store.sideMenu.isSideMenuOpen);

  //Early return
  // if (!isSideMenuOpen) return null;

  const topMenu = [
    {
      title: "Home",
      id: "op",
    },
    {
      title: "Shorts",
      id: "qr",
    },
    {
      title: "Subscriptions",
      id: "st",
    },
  ];

  const exploreList = [
    {
      name: "Trending",
      id: "ab",
    },
    {
      name: "Shopping",
      id: "cd",
    },
    {
      name: "Music",
      id: "ef",
    },
    {
      name: "Films",
      id: "gh",
    },
    {
      name: "Live",
      id: "ij",
    },
    {
      name: "Gaming",
      id: "kl",
    },
    {
      name: "News",
      id: "mn",
    },
  ];
  return !isSideMenuOpen ? null : (
    <div className="w-40 border shadow-xl h-screen p-2 py-4 px-5">
      <ul>
        {topMenu.map((li) => {
          return (
            <li className="font-medium py-2" key={li.id}>
              {li.title}
            </li>
          );
        })}
      </ul>
      <div className="my-4 py-2">
        <span className="font-bold">Explore</span>
        <ul>
          {exploreList.map((e) => {
            return (
              <li className="py-1" key={e.id}>
                {e.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

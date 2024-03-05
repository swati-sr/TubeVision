import Button from "./Button";
import VideoContainer from "./VideoContainer";

const MainConatiner = () => {
  const buttonList = [
    {
      name: "All",
      id: "all",
    },
    {
      name: "Gaming",
      id: "gaming",
    },
    {
      name: "Mixes",
      id: "mixes",
    },
    {
      name: "Music",
      id: "music",
    },
    {
      name: "Stocks",
      id: "stocks",
    },
    {
      name: "Podcasts",
      id: "podcasts",
    },
    {
      name: "Live",
      id: "live",
    },
    {
      name: "History",
      id: "history",
    },
  ];

  return (
    <div>
      <div className="pl-2">
        {buttonList.map((e) => {
          return <Button key={e.id} name={e.name} />;
        })}
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainConatiner;

import type { NextPage } from "next";
import { MouseEvent, MouseEventHandler } from "react";
import Dialog from "../components/Dialog";
import Hello from "../components/Hello";

const user = {
  name: "Mike",
  age: 30,
};

const dialogData = {
  title: "블라블라",
  description: "안녕하세요",
  onClickSubmit: (value: string) => null,
};

const Home: NextPage = () => {
  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e);
  };
  return (
    <div>
      <Hello user={user} />
      <Dialog {...dialogData} onClickClose={handleOnClick} />
    </div>
  );
};

export default Home;

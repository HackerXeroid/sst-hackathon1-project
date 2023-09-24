import uniqid from "uniqid";
import { useState, useEffect } from "react";
import Header from "./Header";
import GameStart from "./GameStart";
import GamePlay from "./GamePlay";

export default function (props) {
  if (!sessionStorage.getItem("loggedIn"))
    sessionStorage.setItem("loggedIn", "false");

  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(sessionStorage.getItem("loggedIn"))
  );

  useEffect(() => {
    sessionStorage.setItem("loggedIn", `${loggedIn}`);
  }, [loggedIn]);
  const [currentUserChoice, setCurrentUserChoice] = useState("");
  const [currentUserScore, setCurrentUserScore] = useState(0);
  let gameMode = "start";

  if (currentUserChoice) {
    gameMode = "play";
  }

  const currUser = {
    name: "",
    id: uniqid(),
    score: currentUserScore,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users"));
    currUser.name = document.getElementById("text").value;
    if (!users) {
      users = [];
    }
    users.push(currUser);
    localStorage.setItem("users", JSON.stringify(users));
    setLoggedIn(true);
  };

  return (
    <>
      {!loggedIn && (
        <div className="h-screen w-full bg-blue-500">
          <div className="max-w-sm mx-auto pt-10">
            <form onSubmit={submitHandler}>
              <div className="mb-6">
                <input
                  type="text"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Enter
              </button>
            </form>
          </div>
        </div>
      )}
      {loggedIn && (
        <div className="text-white w-full bg-gradient-to-r from-[#1f3756] to-[#141539] h-screen">
          <div className="flex flex-col gap-52">
            <Header score={currUser.score} />
            <div className="flex items-center justify-center">
              {gameMode === "start" && (
                <GameStart setCurrentUserChoice={setCurrentUserChoice} />
              )}
              {gameMode === "play" && (
                <GamePlay
                  currentUserChoice={currentUserChoice}
                  currentUser={currUser.name}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

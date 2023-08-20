import { useState } from "react";
import CodeEditorWindow from "./components/CodeEditorWindow";
import LanguagesDropdown from "./components/LanguageDropdown";

function App() {
  const [user, setUser] = useState({ language: "" });
  const [opponent, setOpponent] = useState({ language: "c" });

  const handleLanguageChange = (user, value) => {
    if (user == "user") {
      setUser({ language: value });
    } else {
      setOpponent({ language: value });
    }
  };
  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-full gap-4 items-center">
        <LanguagesDropdown onSelectChange={handleLanguageChange} />
        <CodeEditorWindow theme={"cobalt"} language={user.language} />
      </div>

      <div className="flex flex-col w-full gap-4 items-center">
        <LanguagesDropdown />
        <CodeEditorWindow theme={"cobalt"} language={opponent.language} />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
  });

  return (
    <div className="DiaryEditor">
      <h2>Today's Diary</h2>
      <div>
        <input
          value={state.author}
          onChange={(e) => {
            setState({
              author: e.target.value,
              content: state.content,
            });
          }}
        />
      </div>
      <div>
        <textarea
          value={state.content}
          onChange={(e) => {
            setState({
              content: e.target.value,
              author: state.author,
            });
          }}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;

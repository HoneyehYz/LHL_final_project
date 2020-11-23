import React from "react";

export default function Empty() {
  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="/add.png"
        alt="Add"
        onClick={console.log("add")}
      />
    </main>
  );
}
import React from "react";
import { Link } from "react-router-dom";

const ChatList = () => {
  let people = new Array(10).fill("Fortune", 1);
  return (
    <section>
      <div
        className="list-group"
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {people.map((eachChat, index) => (
          <p className="list-group-item mb-0" key={index}>
            <Link
              style={{
                display: "block",
                margin: "1rem 0",
                textDecoration: "none",
                color: "green",
              }}
              to={`/people/${index}`}
            >
              {eachChat}
            </Link>
          </p>
        ))}
      </div>
    </section>
  );
};

export default ChatList;

import { useState } from "react";
import data from "./data.js";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function singleclick(getCId) {
    setSelected(getCId);
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div onClick={() => singleclick(item.id)} className="title">
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selected === item.id ? (
                <div className="content">{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data presant</div>
        )}
      </div>
    </div>
  );
}

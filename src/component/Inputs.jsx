import React, { useState } from "react";
import styled from "./enter.module.css";
import { DeleteOutlined } from "@ant-design/icons";

function Inputs({ ticket, setTicket }) {
  const [count, setCount] = useState(1);
  const [arr, setArr] = useState([]);
  const deleteInputOne = () => {
    setArr(arr.slice(0, arr.length - 1));
  };
  const deleteInputAll = () => {
    setArr([]);
  };

  return (
    <div style={{ width: "200px", margin: "auto" }}>
      <div style={{ display: "flex" }}>
        <div className={styled.container}>
          <div className={styled.sow_number}>
            <h5>{arr}</h5>
            <div>Enter 6 Digits</div>
          </div>
          <div className={styled.btn}>
            <div
              onClick={() =>
                arr.length < 6
                  ? setArr([...arr, 7])
                  : alert("Ticket Limit Reached")
              }
            >
              7
            </div>
            <div
              onClick={() =>
                arr.length < 6
                  ? setArr([...arr, 8])
                  : alert("Ticket Limit Reached")
              }
            >
              8
            </div>
            <div
              onClick={() =>
                arr.length < 6
                  ? setArr([...arr, 9])
                  : alert("Ticket Limit Reached")
              }
            >
              9
            </div>
          </div>
          <div className={styled.btn}>
            <div
              onClick={() =>
                arr.length < 6
                  ? setArr([...arr, 4])
                  : alert("Ticket Limit Reached")
              }
            >
              4
            </div>
            <div
              onClick={() =>
                arr.length < 6
                  ? setArr([...arr, 5])
                  : alert("Ticket Limit Reached")
              }
            >
              5
            </div>
            <div
              onClick={() =>
                arr.length < 6
                  ? setArr([...arr, 6])
                  : alert("Ticket Limit Reached")
              }
            >
              6
            </div>
          </div>
          <div className={styled.btn}>
            <div
              onClick={() =>
                arr.length < 6
                  ? setArr([...arr, 1])
                  : alert("Ticket Limit Reached")
              }
            >
              1
            </div>
            <div
              onClick={() =>
                arr.length < 6
                  ? setArr([...arr, 2])
                  : alert("Ticket Limit Reached")
              }
            >
              2
            </div>
            <div
              onClick={() =>
                arr.length < 6
                  ? setArr([...arr, 3])
                  : alert("Ticket Limit Reached")
              }
            >
              3
            </div>
          </div>
          <div className={styled.btn}>
            <div onClick={() => deleteInputOne()}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABUUlEQVRoge2YQUrDQBRAH0q3egCFrkQX7cozeAHvojfRhUcQcefGA7gvCN6gMYKLiOBK4qITqXVMf5o/9Tv+Bx9C8jP8B5OfmQHHcRzHcf4v28A9UBuIF+Aa2O8qMQBuDQgsxjOw20XkwkDRP8WlVOLEQLFtUUkkjoF3A8Uui1YOgVcDRfYSGQKPBgrsJbIFTAwU10tEq82eA6Ugrwy56iIabfYsjDVaIlOGHMI7aiKnChI18ASMw5gHwFSQU2iJaLfZNhltiU+RVG02JpNCooZZm9UaLBbz38Fo4VrSDMQi61jNzsukkKg3yIhsphas72MvIvdirXllEUjffouWZxoyX0j1Q4xNXW2Zb2SxRIGMFo2QyTK+IYuNVUMWW92GP3H4sCkQeQDegCOJ9S9RSUQA7oAdZlPNIjddki0fme51Nbd0iF0BV6tIOI7jOI5jnQ95n2BIM2SdUAAAAABJRU5ErkJggg=="
                style={{ width: "20px" }}
                alt="backSpace"
              />
            </div>
            <div
              onClick={() =>
                arr.length < 6
                  ? setArr([...arr, 0])
                  : alert("Ticket Limit Reached")
              }
            >
              0
            </div>
            <div onClick={deleteInputAll}>
              <DeleteOutlined style={{ color: "red" }} />
            </div>
          </div>
          <div
            style={{ background: "#F8F9FA" }}
            onClick={() => {
              console.log(typeof ticket);
              console.log(ticket);
              let con = false;
              ticket.forEach((element) => {
                if (element.arr.join("") === arr.join("")) {
                  con = true;
                }
              });
              if (con === true) {
                alert("Ticket is already book");
                return;
              }
              if (100000 > +arr.join("") || +arr.join("") > 999999) {
                setArr([]);
                return;
              }
              setTicket([
                ...ticket,
                {
                  arr,
                  id: count
                }
              ]);
              setArr([]);
              setCount(count + 1);
            }}
          >
            + ADD TICKET
          </div>
        </div>
      </div>
    </div>
  );
}
export default Inputs;

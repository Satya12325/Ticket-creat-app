import React from "react";
import styled from "./enter.module.css";
import { DeleteOutlined } from "@ant-design/icons";
function Cards({ ticket, deleteItem }) {
  console.log(ticket.arr);
  var no = ticket.arr.toString().split(",");
  console.log(no, "no");
  return (
    <div>
      <h3> Your selected Tickets : </h3>
      <div className={styled.bg_box}>
        <div className={styled.display_button_1}>
          <p className={styled.ticket_id}>Ticket #{ticket.id}</p>
          <div className={styled.deletBtn} onClick={() => deleteItem(ticket)}>
            <DeleteOutlined />
          </div>
        </div>
        <p className={styled.ticketNoShow}>{ticket.arr}</p>
      </div>
    </div>
  );
}

export default Cards;
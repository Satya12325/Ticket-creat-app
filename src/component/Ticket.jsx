import React, { useState } from "react";
import Inputs from "./Inputs";
import Cards from "./Cards";
import styled from "./enter.module.css";
function Ticket() {
  const [ticket, setTicket] = useState([]);
  const deleteItem = (item) => {
    const dele = ticket.filter((e) => e.id !== item.id);
    setTicket(dele);
  };
  return (
    <div className={styled.allItem}>
      <div className={styled.inputContainer}>
        <Inputs ticket={ticket} setTicket={setTicket} />
      </div>
      <ul>
        {ticket.map((e) => (
          <Cards key={e.id} ticket={e} deleteItem={deleteItem} />
        ))}
      </ul>
    </div>
  );
}
export default Ticket;

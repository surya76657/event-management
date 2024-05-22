import React, { useState } from "react";
const seats = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

const previouslyBookedSeat = [5, 12];

export default function SeatSelection() {
  const [claimedSeat, setClaimedSeat] = useState(previouslyBookedSeat);

  const [selectedSeat, setSelectedSeat] = useState(false);

  function onSeatSelection(id) {
    if (selectedSeat) {
      setClaimedSeat((seat) => {
        return seat.filter((s) => s !== id);
      });
    } else {
      setClaimedSeat((seat) => {
        return [...seat, id];
      });
    }
	setSelectedSeat((seat) => !seat);
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      {seats.map((row, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "20px",
              flexDirection: "row",
            }}
          >
            {row.map((col) => {
              return (
                <div
                  disabled={claimedSeat.includes(col)}
                  className={`seat ${
                    claimedSeat.includes(col) ? "booked-seat" : ""
                  }`}
                  style={{
                    border: "1px solid",
                    padding: "20px",
                    background: claimedSeat.includes(col) ? "red" : "",
                    cursor: "pointer",
                  }}
                  onClick={() => onSeatSelection(col)}
                >
                  {col}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

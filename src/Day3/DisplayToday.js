import React, { useState } from "react";

export default function DisplayToday() {
  let [selectedFormat, setSelectedFormat] = useState("dd-mm-yyyy");

  let handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  let getFormattedDate = () => {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let formattedDate;
    switch (selectedFormat) {
      case "dd-mm-yyyy":
        formattedDate = `${day}-${month}-${year}`;
        break;
      case "dd/mm/yyyy":
        formattedDate = `${day}/${month}/${year}`;
        break;
      case "dd-MON-yyyy":
        const monthNames = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        formattedDate = `${day}-${monthNames[month - 1]}-${year}`;
        break;
      case "mm-dd-yyyy":
        formattedDate = `${month}-${day}-${year}`;
        break;
      default:
        formattedDate = "";
    }

    return formattedDate;
  };

  return (
    <div>
        <h2>Todays Date</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="radio"
          name="date-format"
          value="dd-mm-yyyy"
          checked={selectedFormat === "dd-mm-yyyy"}
          onChange={handleFormatChange}
        />
        dd-mm-yyyy
        <input
          type="radio"
          name="date-format"
          value="dd/mm/yyyy"
          checked={selectedFormat === "dd/mm/yyyy"}
          onChange={handleFormatChange}
        />
        dd/mm/yyyy
        <input
          type="radio"
          name="date-format"
          value="dd-MON-yyyy"
          checked={selectedFormat === "dd-MON-yyyy"}
          onChange={handleFormatChange}
        />
        dd-MON-yyyy
        <input
          type="radio"
          name="date-format"
          value="mm-dd-yyyy"
          checked={selectedFormat === "mm-dd-yyyy"}
          onChange={handleFormatChange}
        />
        mm-dd-yyyy
      </div>
      <div style={{ backgroundColor: "#eaf6ff", padding: "10px" }}>
        Today's date: {getFormattedDate()}
      </div>
    </div>
  );
}

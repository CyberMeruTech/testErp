import React from "react";
import "./input.css"

export default function Input() {
  return (
    <div>
      <div className="item-type-form">
        <h1 className="form-heading">Item Type</h1>

        <form>
          <div className="form-group">
            <label htmlFor="itemTypeId">Item Type ID</label>

            <input type="text" id="itemTypeId" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="itemType">Item Type</label>

            <input type="text" id="itemType" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>

            <input type="text" id="startDate" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="endDate">End Date</label>

            <input type="text" id="endDate" className="form-control" />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

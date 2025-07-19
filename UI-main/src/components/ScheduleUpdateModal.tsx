import React, { useState } from "react";

const ScheduleUpdateModal = ({ open, onClose, onSubmit }) => {
  const [content, setContent] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [mode, setMode] = useState("append");

  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Schedule Update</h2>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Enter new content"
        />
        <input
          type="datetime-local"
          value={scheduledTime}
          onChange={e => setScheduledTime(e.target.value)}
        />
        <select value={mode} onChange={e => setMode(e.target.value)}>
          <option value="append">Append</option>
          <option value="overwrite">Overwrite</option>
          <option value="replace_section">Replace Section</option>
        </select>
        <button onClick={() => onSubmit({ content, scheduledTime, mode })}>
          Schedule
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ScheduleUpdateModal;

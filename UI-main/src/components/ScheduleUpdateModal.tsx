import React, { useState } from "react";

interface ScheduleUpdateModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { content: string; scheduledTime: string; mode: 'append' | 'overwrite' | 'replace_section' }) => void;
}

const ScheduleUpdateModal: React.FC<ScheduleUpdateModalProps> = ({ open, onClose, onSubmit }) => {
  const [content, setContent] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [mode, setMode] = useState<'append' | 'overwrite' | 'replace_section'>("append");

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
        <select value={mode} onChange={e => setMode(e.target.value as 'append' | 'overwrite' | 'replace_section')}>
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

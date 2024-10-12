import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./SelfCareReminders.css";

const SelfCareReminders = () => {
  const [reminders, setReminders] = useState([]);
  const [reminderText, setReminderText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/reminders/getReminders");
        setReminders(response.data.data);
      } catch (error) {
        console.error("Erro ao buscar lembretes:", error);
      }
    };
    fetchReminders();
  }, []);
  

  const saveReminder = async () => {
    if (reminderText.trim()) {
      if (isEditing) {
        try {
          const response = await axios.put(`http://localhost:3000/api/reminders/editReminder/${editId}`, {
            text: reminderText,
          });
          setReminders(
            reminders.map((reminder) =>
              reminder.id === editId ? { ...reminder, text: response.data.text } : reminder
            )
          );
          setIsEditing(false);
          setEditId(null);
        } catch (error) {
          console.error("Erro ao editar lembrete:", error);
        }
      } else {
        try {
          const response = await axios.post("http://localhost:3000/api/reminders/addReminder", {
            text: reminderText,
          });
          setReminders([...reminders, response.data]);
        } catch (error) {
          console.error("Erro ao adicionar lembrete:", error);
        }
      }
      setReminderText("");
      setIsModalOpen(false);
    }
  };
  

  const openEditModal = (id, text) => {
    setReminderText(text);
    setIsEditing(true);
    setEditId(id);
    setIsModalOpen(true);
  };

  const deleteReminder = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/reminders/deleteReminder/${id}`);
      setReminders(reminders.filter((reminder) => reminder.id !== id));
    } catch (error) {
      console.error("Erro ao deletar lembrete:", error);
    }
  };

  return (
    <div className="self-care-container">
    <div className="add-button-container">
      <button className="add-reminder-button" onClick={() => setIsModalOpen(true)}>
        Adicionar +
      </button>
    </div>

    {isModalOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h3>{isEditing ? "Editar Lembrete" : "Adicionar Lembrete:"}</h3>
          <input
            type="text"
            value={reminderText}
            onChange={(e) => setReminderText(e.target.value)}
            placeholder="Digite o lembrete"
          />
          <button onClick={saveReminder}>{isEditing ? "Salvar" : "Adicionar"}</button>
          <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
        </div>
      </div>
    )}

    <div className="reminders-grid">
      {reminders.map((reminder) => (
        <div key={reminder.id} className="reminder-card">
          <p>{reminder.text}</p>
          <div className="icons">
            <span onClick={() => openEditModal(reminder.id, reminder.text)}>✏️</span>
            <span onClick={() => deleteReminder(reminder.id)}>🗑️</span>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default SelfCareReminders;

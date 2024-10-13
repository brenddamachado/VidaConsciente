import React, { useState, useEffect } from "react";
import axios from 'axios';
import { 
  AddReminderButton, 
  SelfCareContainer, 
  RemindersGrid, 
  ReminderCard, 
  Icons, 
  Icon, 
  ModalOverlay, 
  ModalContent, 
  Input, 
  Button 
} from "./SelfCareReminders.style.js";

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
    <SelfCareContainer>
      <AddReminderButton onClick={() => setIsModalOpen(true)}>
        Adicionar +
      </AddReminderButton>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h3>{isEditing ? "Editar Lembrete" : "Adicionar Lembrete:"}</h3>
            <Input
              type="text"
              value={reminderText}
              onChange={(e) => setReminderText(e.target.value)}
              placeholder="Digite o lembrete"
            />
            <Button onClick={saveReminder}>{isEditing ? "Salvar" : "Adicionar"}</Button>
            <Button onClick={() => setIsModalOpen(false)}>Cancelar</Button>
          </ModalContent>
        </ModalOverlay>
      )}

      <RemindersGrid>
        {reminders.map((reminder) => (
          <ReminderCard key={reminder.id}>
            <p>{reminder.text}</p>
            <Icons>
              <Icon onClick={() => openEditModal(reminder.id, reminder.text)}>✏️</Icon>
              <Icon onClick={() => deleteReminder(reminder.id)}>🗑️</Icon>
            </Icons>
          </ReminderCard>
        ))}
      </RemindersGrid>
    </SelfCareContainer>
  );
};

export default SelfCareReminders;

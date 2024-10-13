import styled from "styled-components";

export const AddReminderButton = styled.button`
  padding: 8px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.2s all ease-in;
  border: 0.5px solid #cccccc4d;
  background-color: #f0f0f0;
  margin-right: 20px;

  &:hover {
    background-color: #e6e6e6;
  }
`;

export const SelfCareContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.3rem;
  position: relative;
`;

export const RemindersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
`;

export const ReminderCard = styled.div`
  background-color: #f7f7f7;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const Icon = styled.span`
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 8px 15px;
  border-radius: 5px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e6e6e6;
  }
`;

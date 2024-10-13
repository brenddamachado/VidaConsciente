import styled from 'styled-components';

export const DiseaseCarouselContainer = styled.div`
  padding: 20px;
  width: 90%;
  margin: 0 auto;
`;


export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitle = styled.h2`
  margin-top: 0;
  font-size: 24px;
  color: #333;
`;

export const CardText = styled.p`
  margin: 10px 0;
  font-size: 16px;
  color: #555;
  flex-grow: 1;
  overflow: hidden;
`;

export const CardIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const OverlayBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 9998;
`;

export const CustomSlickStyles = styled.div`
  .slick-slide {
    padding: 0 10px;
  }

  .slick-prev:before, .slick-next:before {
    color: #333;
  }

  .slick-dots li button:before {
    color: #333;
  }

  .slick-dots li.slick-active button:before {
    color: #000;
  }
`;
export const modalStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1001,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    backdropFilter: 'blur(5px)', 
    zIndex: 1000,
  },
};

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px; 
  
  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  button {
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 4px;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
    
    &:hover {
      background-color: #45a049;
    }
  }
`;

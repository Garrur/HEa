import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color:#cbd5e1;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ChatContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 95vh;
  max-height: 800vh;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #cbd5e1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;

  @media (max-width: 768px) {
    height: 90vh;
    margin: 10px;
  }

  @media (max-width: 480px) {
    width: 95%;
    height: 95vh;
    margin: 5px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ccc;
  background-color: #007bff;
  color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 1.2em;

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 1em;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  margin-right: 15px;

  &:hover {
    color: #ccc;
  }

  &:focus {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
  margin-right: 15px;
  position: relative;

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 18px;
  }
`;

export const OnlineStatus = styled.div`
  width: 12px;
  height: 12px;
  background-color: #28a745;
  border-radius: 50%;
  position: absolute;
  bottom: 2px;
  right: 2px;
  border: 2px solid #fff;

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
`;

export const MessagesContainer = styled.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  border-bottom: 1px solid #ccc;
  background-color: #f8f9fa;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const MessageInputContainer = styled.div`
  display: flex;
  padding: 15px;
  border-top: 1px solid #ccc;
  background-color: #f8f9fa;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Button = styled.button`
  margin-left: 15px;
  padding: 12px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: 2px solid #0056b3;
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    padding: 10px 15px;
    font-size: 0.9em;
  }
`;

export const MessageBubble = styled.div`
  max-width: 75%;
  margin-bottom: 15px;
  padding: 12px;
  border-radius: 15px;
  background-color: ${props => (props.isDoctor ? '#007bff' : '#e9ecef')};
  color: ${props => (props.isDoctor ? '#fff' : '#000')};
  align-self: ${props => (props.isDoctor ? 'flex-end' : 'flex-start')};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    max-width: 80%;
    padding: 10px;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

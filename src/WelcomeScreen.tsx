import { useNavigate } from "react-router-dom";

export function WelcomeScreen() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/chat");

  return <button onClick={handleClick}>Chat now</button>;
}

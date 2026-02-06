import { useNavigate } from 'react-router-dom';

const InfoCard = ({ title, description, id, urlkey }) => {
  const navigate = useNavigate();

  const toInfo = () => {
    navigate(`/${urlkey}/${id}`);
  };

  return (
    <div className="bg-[#9fa7ab] w-70 h-40 mt-10 ml-13">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={toInfo}>Learn more</button>
    </div>
  );
};

export default InfoCard;
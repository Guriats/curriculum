import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <div>
    <div>
      {experience.map((item) => (
        <div className="ex" key={JSON.stringify(item)}>
          <p>🧳{item.name}</p>
          <p>{item.date}</p>
          <p>{item.where}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Experience;

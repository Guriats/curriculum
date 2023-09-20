import "./More.css";

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div>

      <div className="languageTwo">
      <h2 className="language">Languages</h2>
      <p>{languages.language}</p>
      <p>{languages.wrlevel}</p>
      <p>{languages.splevel}</p>
      </div>

<div>
      <ul className="habilities">
        {habilities.map((hability) => (
          <li key={hability}>{hability}</li>
        ))}
      </ul>
      </div>

      <div className="volunteerTwo">
      <h2 className="volunteer">Volunteer</h2>
      {volunteer.map((item) => (
        <div key={JSON.stringify(item)}>
          <p>{item.where}</p>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default More;

import "./About.css";

const About = ({ hero }) => {
  return (
    <div className="aboutMe">
      {hero.aboutMe.map((item) => (
        <p key={item.info}>{item.info}</p>
      ))}
    </div>
  );
};

export default About;

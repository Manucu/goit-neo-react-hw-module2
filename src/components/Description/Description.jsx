import css from "./Description.module.css";

const Description = ({ title, description }) => {
  return (
    <>
      <h1 className={css.title}>{title}</h1>
      <p>{description}</p>
    </>
  );
};

export default Description;

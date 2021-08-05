import "./Loader.scss";

const Loader = (props) => {
  const { type } = props;

  if (type === "spinner") {
    return <div className={type}></div>;
  }
};

export default Loader;

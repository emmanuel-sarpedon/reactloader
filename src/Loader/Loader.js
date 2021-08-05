import "./Loader.scss";

const Loader = (props) => {
  const { type, size, borderWidth, color, animationDuration } = props;

  const loaderType = type || "spinner";

  // SPINNER
  if (loaderType === "spinner") {
    return (
      <div
        className={loaderType}
        style={{
          height: `${size && size}`,
          width: `${size && size}`,
          color: `${color && color}`,
          animationDuration: `${animationDuration && animationDuration}`,
          borderWidth: `${borderWidth && borderWidth}`,
        }}
      ></div>
    );
  }
};

export default Loader;

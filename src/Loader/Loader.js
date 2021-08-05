import "./Loader.scss";

const Loader = (props) => {
  const { type, size, borderWidth, color, animationDuration, bar } = props;

  const loaderType = type || "spinner";

  // SPINNER
  if (loaderType === "spinner") {
    return (
      <div
        className={loaderType}
        style={{
          animationDuration: `${animationDuration && animationDuration}`,
          borderWidth: `${borderWidth && borderWidth}`,
          color: `${color && color}`,
          height: `${size && size}`,
          width: `${size && size}`,
        }}
      ></div>
    );
  }

  // AUDIO WAVE
  if (loaderType === "audio-wave") {
    const barDiv = [];
    const numberOfBar = Math.max(bar, 5) || 5;

    for (let i = 0; i < numberOfBar; i++) {
      barDiv.push(
        <div
          className="bar"
          style={{
            animationDuration: `${animationDuration && animationDuration}`,
            backgroundColor: `${color && color}`,
            height: `${size && size}`,
          }}
        ></div>
      );
    }
    return (
      <div className={loaderType} style={{}}>
        {barDiv}
      </div>
    );
  }
};

export default Loader;

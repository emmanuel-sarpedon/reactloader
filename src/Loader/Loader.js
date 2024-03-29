import "./Loader.scss";

const Loader = (props) => {
  const {
    type,
    size,
    borderWidth,
    color,
    animationDuration,
    numberOfItems,
    text,
    reverse,
  } = props;

  const loaderType = type || "spinner";

  // SPINNER
  if (loaderType === "spinner") {
    return (
      <div
        className={
          reverse ? `${loaderType} ${loaderType}--reverse` : loaderType
        }
        style={{
          animationDuration: `${animationDuration && animationDuration}`,
          borderWidth: `${borderWidth && borderWidth}`,
          borderTopColor: color && `${color}`,
          height: `${size && size}`,
          width: `${size && size}`,
        }}
      ></div>
    );
  }

  // ALTERNATIVE SPINNER
  if (loaderType === "alternative-spinner") {
    return (
      <div
        className={
          reverse ? `${loaderType} ${loaderType}--reverse` : loaderType
        }
        style={{
          animationDuration: `${animationDuration && animationDuration}`,
          borderWidth: `${borderWidth && borderWidth}`,
          borderColor: color && `rgba(0,0,0,0) ${color} ${color} ${color}`,
          height: `${size && size}`,
          width: `${size && size}`,
        }}
      ></div>
    );
  }

  // AUDIO WAVE
  if (loaderType === "audio-wave") {
    const barDiv = [];
    const numberOfBar = Math.max(numberOfItems, 5) || 5;

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

  // ELLIPSIS-FALL
  if (loaderType === "ellipsis-fall") {
    const dots = [];
    const numberOfDots = Math.max(numberOfItems, 4) || 4;

    for (let i = 0; i < numberOfDots; i++) {
      dots.push(
        <div
          className="dot"
          style={{
            animationDuration: `${animationDuration && animationDuration}`,
            backgroundColor: `${color && color}`,
            height: `${size && size}`,
            width: `${size && size}`,
          }}
        ></div>
      );
    }
    return (
      <div className={loaderType}>
        <div style={{ color: `${color && color}` }}>{text}</div>
        <div>{dots}</div>
      </div>
    );
  }

  // ELLIPSIS-RUN-OFF
  if (loaderType === "ellipsis-run-off") {
    const dots = [];
    const numberOfDots = Math.max(numberOfItems, 4) || 4;

    for (let i = 0; i < numberOfDots; i++) {
      dots.push(
        <div
          className="dot"
          style={{
            animationDuration: `${animationDuration && animationDuration}`,
            backgroundColor: `${color && color}`,
            height: `${size && size}`,
            width: `${size && size}`,
          }}
        ></div>
      );
    }
    return (
      <div className={loaderType}>
        <div style={{ color: `${color && color}` }}>{text}</div>
        <div>{dots}</div>
      </div>
    );
  }

  return <></>;
};

export default Loader;

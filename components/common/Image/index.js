import "./styles/imageStyles.module.scss";
import ProgressiveImage from "react-progressive-graceful-image";
const Image = ({ imgsrc, alt, className = "" }) => {
  const placeholder = <div className={`${className} linearBackground`} />;
  return (
    <ProgressiveImage src={imgsrc} placeholder="">
      {(src, loading) => {
        return loading ? (
          placeholder
        ) : (
          <img src={src} alt={alt} className={className} />
        );
      }}
    </ProgressiveImage>
  );
};

export default Image;

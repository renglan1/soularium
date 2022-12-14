/*ES7 snippet 'rafcp' will generate this component scheme*/
/*dark vectors: https://convertio.co/*/
import React from "react";
import PropTypes from "prop-types";
import SpacedText from "./SpacedText";
import Tint from "./Tint";
import ContrastImage from "./ContrastImage";
import "components/styles/fable-card.scss";

type FableCardProps = {
  fableName: string;
  fableTitle: string;
  fableBlurb: string;
};

const FableCard = ({
  fableName,
  fableTitle,
  fableBlurb,
}: FableCardProps) => {
  const [isActive, setIsActive] = React.useState(false);

  function hasImg() {
    try {
      require(`../assets/images/fables/${fableName.toLowerCase()}.svg`);
    } catch (e) {
      return false;
    }

    return true;
  }

  function updateActive(): void{
    setIsActive(!isActive);
    console.log(isActive);
  }

  return (
    <div 
      className={`fable-card ${isActive ? "active" : ""}`}
      onClick={updateActive}
    >
      <Tint color="black" opacity={0.75} borderRadius={10} />
      <ContrastImage
        src={`fables/${(hasImg() ? fableName.toLowerCase() : 'placeholder')}.svg`}
        alt={fableName}
        shape="portrait"
        hoverEffect
      />
      <div className="caption">
        <h2>
          <Tint color="#FBECD6" opacity={0.35} />
          <SpacedText text={fableName} contrast />
        </h2>
        <p className="title">{fableTitle}</p>
      </div> 
      <div className="embark">
        <div className="blurb-container">
            <Tint color="#FBECD6" opacity={0.35} blur={15}/>
            <p className="blurb">{fableBlurb}</p>
        </div>
        <button>EMBARK</button>
      </div>
    </div>
  );
};

FableCard.propTypes = {
  fableName: PropTypes.string.isRequired,
  fableTitle: PropTypes.string.isRequired,
  fableLink: PropTypes.string,
};

export default FableCard;

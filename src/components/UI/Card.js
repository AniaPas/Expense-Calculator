import "./Card.css";
const Card = (props) => {
  const classes = "card " + props.className; //!whitespacein the card!!!!!
  return <div className={classes}>{props.children}</div>;
};

export default Card;

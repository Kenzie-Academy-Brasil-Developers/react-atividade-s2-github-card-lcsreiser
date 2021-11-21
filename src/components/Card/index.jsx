import "./style.css";

const Card = ({ cardResult: { owner, full_name, description, html_url } }) => {
  return (
    <div className="card">
      {owner === undefined ? (
        <p className="card-error">O respositório não existe</p>
      ) : (
        <div className="card-container">
          <div className="card-container__img">
            <img src={owner.avatar_url} alt={full_name} />
          </div>
          <div className="card-container__info">
            <h3>{full_name}</h3>
            <p className="card-info__description">{description}</p>
            <a href={html_url} rel="noreferrer" target="_blank">
              Go to repository
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default Card;

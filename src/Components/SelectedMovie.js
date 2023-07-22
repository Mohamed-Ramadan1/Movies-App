const SelectedMovie = ({ selectedId, onCloseMovei }) => {
  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovei}>
        &larr;
      </button>
      {selectedId}
    </div>
  );
};

export default SelectedMovie;

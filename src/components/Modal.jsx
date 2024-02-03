const Modal = ({ src, alt, href, modalWidth, closeAllModals }) => {
  return (
    <div className='modal' style={{ width: `${modalWidth}%` }}>
      <img className='modal-img' src={src} alt={alt} />
      {modalWidth !== 0 ? (
        <div className='modal-actions'>
          <div className='action-wrapper' onClick={closeAllModals}>
            <h1 className='smaller-h1'>close</h1>
            <span className='smaller-h1 icon material-symbols-outlined'>
              close
            </span>
          </div>
          <a href={href} target='_blank' rel='noreferrer'>
            <div className='action-wrapper'>
              <h1 className='smaller-h1'>open</h1>
              <span className='smaller-h1 icon material-symbols-outlined'>
                arrow_outward
              </span>
            </div>
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;

import RevHorFade from '../functions/RevHorFade';
import useModal from '../functions/ModalUtils';

const NumWrapper = ({ handleOpenModal, modalNum1, modalNum2, num1, num2 }) => {
  return (
    <RevHorFade>
      <div className='num-wrapper'>
        <h1
          className='smaller-h1 num-link'
          onClick={() => handleOpenModal(modalNum1)}
        >
          {num1}
        </h1>
        {num2 ? (
          <h1
            className='smaller-h1 num-link'
            onClick={() => handleOpenModal(modalNum2)}
          >
            {num2}
          </h1>
        ) : null}
      </div>
    </RevHorFade>
  );
};

export default NumWrapper;

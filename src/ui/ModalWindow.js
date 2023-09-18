import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  z-index: 999;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-200);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const XMarkIcon = styled(HiXMark)`
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 1.6rem;
  cursor: pointer;
  stroke-width: 0.5px;
  border-radius: 5px;
  padding: 3px;

  &:hover {
    background-color: var(--color-grey-300);
  }
`;

function ModalWindow({ close, children }) {
  return (
    <Overlay>
      <StyledModal>
        <XMarkIcon onClick={() => close?.()} />
        {children}
      </StyledModal>
    </Overlay>
  );
}

export default ModalWindow;

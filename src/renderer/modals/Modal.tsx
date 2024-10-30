import { ReactNode } from 'react';
import './Modal.css';

/**
 * Generic modal component.
 * @param props - props
 * @param props.onClose - handler called when the modal is closed by any means
 * @param props.isActive - whether to display the modal
 * @param props.modalTitle - displayed title of the modal
 * @param props.className - additional className given to the modal content wrapper
 */
export default function Modal({
  onClose,
  isActive,
  modalTitle,
  children,
  className = '',
}: {
  onClose: () => void;
  isActive: boolean;
  modalTitle: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`Modal${isActive ? ' Modal-active' : ''}`}>
      <div className="Modal-title-bar">
        <span className="Modal-title">{modalTitle}</span>
        <button className="Modal-close-button" onClick={onClose} type="button">
          &times;
        </button>
      </div>
      <div className={`Modal-content ${className}`}>{children}</div>
    </div>
  );
}
/**
 * Default props for Modal.
 */
Modal.defaultProps = {
  /**
   * Doesn't give the modal content wrapper any additional classNames.
   */
  className: '',
};

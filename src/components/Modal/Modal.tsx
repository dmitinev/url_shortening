import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button';
import './Modal.scss';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const overlayVariants = {
  opened: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};
const modalVariants = {
  opened: {
    opacity: 1,
    transform: 'translate(-50%, 0%)',
  },
  closed: {
    opacity: 0,
    transform: 'translate(-50%, 20%)',
  },
};

export const Modal = ({ title, children, open, onClose }: ModalProps) => {
  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="overlay"
            onClick={onClose}
            initial="closed"
            animate="opened"
            exit="closed"
            variants={overlayVariants}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="modal"
            initial="closed"
            animate="opened"
            exit="closed"
            variants={modalVariants}
            transition={{ duration: 0.2 }}
          >
            {title && (
              <header>
                <h2 className="modal__heading">{title}</h2>
              </header>
            )}
            <div className="modalContent">{children}</div>
            <div className="modalAction">
              <Button
                size="small"
                onClick={onClose}
                style={{ backgroundColor: '#f46262' }}
              >
                Close
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};

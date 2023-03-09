import { toast, Flip } from 'react-toastify';

export enum MessageType {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
}

export const useToast = () => {
  const showToast = (type: MessageType, message: string) => {
    toast[type](message, {
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      transition: Flip,
      position: 'bottom-center',
    });
  };

  return showToast;
};

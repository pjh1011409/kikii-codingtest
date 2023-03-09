import { useSelector } from 'react-redux';
import { DispatchDataState } from '../redux/reducer/dispatchSlice';

const useCustomSelector = () => {
  const dispatchState = useSelector((state: { dispatchData: DispatchDataState }) => state.dispatchData);

  return { dispatchState };
};

export default useCustomSelector;

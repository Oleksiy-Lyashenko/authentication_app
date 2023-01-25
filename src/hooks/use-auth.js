import { useSelector } from 'react-redux';

export function useAut(state) {
  const {email, token, id} = useSelector(state => state);

  return {
    isAuth: !!email,
    email,
    token,
    id
  }
}
import { atom } from 'recoil';

export const filterQueryState = atom({
  key: 'filterQuery',
  default: '',
});

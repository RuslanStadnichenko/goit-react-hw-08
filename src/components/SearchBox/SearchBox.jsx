import { useDispatch, useSelector } from 'react-redux';

import s from './SearchBox.module.css';

import { selectFilter } from '../../redux/filter/selector';
import { setFilter } from '../../redux/filter/slice';

export const SearchBox = () => {
  const { filter } = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value.trim().toLowerCase()));
  };
  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        Find contacts by name / tel number:
        <input
          onChange={handleChange}
          type="text"
          className={s.input}
          value={filter}
        />
      </label>
    </div>
  );
};
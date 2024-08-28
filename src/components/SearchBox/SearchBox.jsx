import css from './SearchBox.module.css'

import { useDispatch } from "react-redux";
import { changeFilter } from '../../redux/filters/slice';


export default function SearchBox () {
   const dispatch = useDispatch();
   const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };
   return (
    <div className={css.div}>
        <p >Find contact by name </p>
        <input type="text" onChange={handleSearch} className={css.input}/>
    </div>
   )
}
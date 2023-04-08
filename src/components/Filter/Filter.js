import { useDispatch } from "react-redux";
import { addFilter } from "redux/filterSlice";

export const Filter = () => {
    const dispatch = useDispatch();
    

    return(
        <input type="text" onChange={(evn)=> dispatch(addFilter(evn.target.value))}/>
    )
}
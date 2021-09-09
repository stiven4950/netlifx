import {useState} from 'react';

export const useForm = (initialState={}) => {
    const [value, setValue] = useState(initialState);

    const handleInputChange = (e)=>{
        const {target} = e;
        setValue({
            ...value,
            [target.name]:target.value
        });
    }

    return [value, handleInputChange];
}

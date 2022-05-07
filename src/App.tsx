import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from './textField';

interface IvalidationForm {
    id: string;
}

const App = (): JSX.Element => {

    const schema = yup.object().shape({
        id: yup.string().required('아이디를 입력해주세요.'), // required 설정
    })

    const { register, handleSubmit, formState: { errors } } = useForm<IvalidationForm>({
        resolver: yupResolver(schema),
    })

    const wrapperRef = React.useRef<HTMLDivElement>(null);

    return (
        <div>
            <TextField type='text' color='olive' ref={wrapperRef} register={register('id')} />
            {errors.id && <h3>{errors.id.message}</h3> }

            <button onClick={handleSubmit(data => console.log(data, wrapperRef))}>Click</button>
        </div>
    )
}

export default App;
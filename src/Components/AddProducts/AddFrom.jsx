import React from 'react';
import { useForm } from "react-hook-form";
import './AddFrom.css';

const AddFrom = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div className='addProduct-from'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="procuct-name">
                    <label htmlFor="fasf">Product Nmae</label><br/>
                    {errors.name && <span style={{color:"red",fontSize:'13px'}}>Plasse enter Product name</span>}
                <input name="name" {...register("name", { required: true })} />
                
                </div>
                <div className="procuct-price">
                    <label htmlFor="">Price</label><br/>
                    {errors.price && <span style={{color:"red",fontSize:'13px'}}>Enter Product Price</span>}
                <input price="price"{...register("price", { required: true })} />
                
                </div>
                

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddFrom;
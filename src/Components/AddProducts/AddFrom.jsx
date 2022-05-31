import React from 'react';
import { useForm } from "react-hook-form";
import './AddFrom.css';

const AddFrom = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div className='addProduct-from w-90'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <div className="procuct-name d-flex justify-content-between">
                        <label>Product Nmae {errors.name && <span style={{ color: "red", fontSize: '13px' }}>*</span>}</label>

                        <input type="text" name="name" {...register("name", { required: true })} className="addInputfrom" />

                    </div>
                    <div className="procuct-price d-flex justify-content-between">
                        <div className="">
                            <label >Price  {errors.price && <span style={{ color: "red", fontSize: '13px' }}>*</span>}</label>
                        </div>
                        <div className="">
                            <input type="number" price="price"{...register("price", { required: true })} className="addInputfrom" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="">
                            <label>Brand Name
                                {errors.brandName && <span style={{ color: "red", fontSize: '13px' }}>*</span>}
                            </label>
                        </div>
                        <div className="">

                            <input type="text" brandName="brandName"{...register("brandName", { required: true })} className="addInputfrom" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="">
                            <label >Image of Product
                                {errors.productImage && <span style={{ color: "red", fontSize: '13px' }}>*</span>}
                            </label>
                        </div>
                        <div className="">
                            <input type="file" className="product-image addInputfrom" productImage="productImage"{...register("productImage", { required: true })} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="">
                            <label className="">Additional Description
                                {errors.productDetails && <span style={{ color: "red", fontSize: '13px' }}>*</span>}
                            </label>
                        </div>
                        <div className="">
                            <textarea className="addInputfrom addDetailsfrom" placeholder="product Details" type="text" productDetails="productDetails" {...register("productDetails", { required: true })} /><br />
                            <input type="submit" className="submit" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddFrom;
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddFrom.css';
import { useEffect } from 'react';
import axios from 'axios';


const AddFrom = () => {
    const [users, setUsers] = useState([]);
    const [imgURL, setImgURL] = useState(null);
    console.log(imgURL)
    const [imgUploadedNotification, setImgUploadedNotification] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const hendelImageUploaded = (e) => {
        const imageData = new FormData();
        imageData.set("key", "4850594385c2168e5de04af7b936cba0");
        imageData.append("image", e.target.files[0]);
        console.log(e.target.files[0]);
        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then((response) => {
                setImgURL(response.data.data.display_url);

                setImgUploadedNotification(true);
            })
            .catch((error) => {
                console.log("img error", error);
            });
    };
    const onSubmit = (data) => {
        const servicesInfo = {
            id: data.id,
            name: data.name,
            price: data.price,
            brandName: data.brandName,
            description: data.productDetails,
            img: imgURL,
        };

        fetch('https://fathomless-castle-26895.herokuapp.com/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(servicesInfo),
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data, "fsys")
                if (data.insertedId) {

                    // const addUser=servicesInfo;

                    // const data=[...users, addUser];
                    // setUsers(data);
                    alert("User add seccssfully")
                    data.target.rest();
                }
            })
            .catch((err) => {
                console.log(err);
            });

        data.preventDefault();
    }



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
                                {imgUploadedNotification && <span style={{ color: "red", fontSize: '13px' }}>image successfully uploaded</span>}
                            </label>
                        </div>
                        <div className="">

                            <input onChange={hendelImageUploaded} type="file" id='file' className="product-image addInputfrom" name='image' accept="image/*" />
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
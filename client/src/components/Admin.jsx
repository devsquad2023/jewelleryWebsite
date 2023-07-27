import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Admin = () => {

    const [uploadedImage, setUploadedImage] = useState(null);
    const [jsonData, setJsonData] = useState('');
    const [itemData, setItemData] = useState({
        id: "",
        type: "",
        name: "",
        // imageURL: "",
        description: "",
        price: "",
        weight: "",
        brand: "",
        dimensions: "",
        material: ""
    });

    const handleDataChange = (event) => {
        const {name, value} = event.target;

        setItemData({...itemData, [name]: value});
        console.log(name + ":" + value);
    }

    const handleImageChange = (event) => {
        setUploadedImage(event.target.files[0]);
    }

    const handleUpload = () => {

        const formData = new FormData();
        formData.append('imageData', uploadedImage);
        formData.append('JSON', jsonData);

        axios.post('http://localhost:8080/upload', formData)
        .then(res => console.log(res.data.message))
        .catch(err => console.log(err));
    }

    const preview = useCallback(() => {
        const frame = document.getElementById('frame');
        frame.src = uploadedImage !== null && URL.createObjectURL(uploadedImage);
    }, [uploadedImage]);

    useEffect(() => {
        preview();
    }, [uploadedImage, preview]);

    return (
        <div className="container col-md-6">

            <div className="mt-5 mb-3 row">
            
                <label htmlFor="id" className="col-sm-2 col-form-label">Id</label>
                <div className="col-sm-10 mb-2">
                    <input type="number" className="form-control" name='id'
                    id="id" onChange={handleDataChange} />
                </div>
            
                <label htmlFor="type" className="col-sm-2 col-form-label">Type</label>
                <div className="col-sm-10 mb-2">
                    <input type="text" className="form-control" name='type'
                    id="type" onChange={handleDataChange} />
                </div>
            
                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10 mb-2">
                    <input type="text" className="form-control" name='name'
                    id="name" onChange={handleDataChange} />
                </div>
            
                <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10 mb-2">
                    <input type="text" className="form-control" name='description'
                    id="description" onChange={handleDataChange} />
                </div>
            
                <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                <div className="col-sm-10 mb-2">
                    <input type="number" className="form-control" name='price'
                    id="price" onChange={handleDataChange} />
                </div>
            
                <label htmlFor="weight" className="col-sm-2 col-form-label">Weight</label>
                <div className="col-sm-10 mb-2">
                    <input type="text" className="form-control" name='weight'
                    id="weight" onChange={handleDataChange} />
                </div>
            
                <label htmlFor="brand" className="col-sm-2 col-form-label">Brand</label>
                <div className="col-sm-10 mb-2">
                    <input type="text" className="form-control" name='brand'
                    id="brand" onChange={handleDataChange} />
                </div>
            
                <label htmlFor="dimensions" className="col-sm-2 col-form-label">Dimensions</label>
                <div className="col-sm-10 mb-2">
                    <input type="text" className="form-control" name='dimensions'
                    id="dimensions" onChange={handleDataChange} />
                </div>
            
                <label htmlFor="material" className="col-sm-2 col-form-label">Material</label>
                <div className="col-sm-10 mb-2">
                    <input type="text" className="form-control" name='material'
                    id="material" onChange={handleDataChange} />
                </div>

                <label htmlFor="formFile" className="col-sm-2 col-form-label">Upload Image</label>
                <div className="col-sm-10 mb-2">
                    <input className="form-control" type="file" id="formFile" onChange={handleImageChange} />
                </div>

                <label htmlFor="imageLink" className="col-sm-2 col-form-label">Upload Button</label>
                <div className="col-sm-10">
                    <button className='btn btn-primary mb-2' onClick={handleUpload}>Upload</button>
                </div>
            
                <label htmlFor="jsonData" className="col-sm-2 col-form-label">JSON Object</label>
                <div className="col-sm-10 mb-2 mt-2">
                    <textarea rows={10} type="text" className="form-control" name='jsonData'
                    id="jsonData" onChange={(event) => setJsonData(event.target.value)} />
                </div>
            </div>
                <img id="frame" src="" alt="item" style={{fontSize: '0'}} className="img-fluid" width='300' height='300' />
        </div>
    )
}

export default Admin;
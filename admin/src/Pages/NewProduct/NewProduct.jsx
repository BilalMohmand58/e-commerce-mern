import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./NewProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../Redux/apiCalls";

const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCategories = (e) => {
    setCategories(e.target.value.split(","));
  };

  const handleSizes = (e) => {
    setSizes(e.target.value.split(","));
  };
  const handleColors = (e) => {
    setColors(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            image: downloadURL,
            categories: categories,
            size: sizes,
            color: colors,
          };
          addProduct(product, dispatch);
        });
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputs({});
    setFile(null);
    setCategories();
    setSizes("");
    setColors("");
  };
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form onSubmit={handleSubmit} className="newProductForm">
        <div className="newProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Jean Jacket"
            onChange={handleChange}
          />
        </div>

        <div className="newProductItem">
          <label>Description</label>
          <input
            name="description"
            type="text"
            placeholder="Jean Jacket"
            onChange={handleChange}
          />
        </div>

        <div className="newProductItem">
          <label>Image</label>
          <input
            name="image"
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="newProductItem">
          <label>Catergories</label>
          <input
            name="categories"
            type="text"
            placeholder="Jean Jacket"
            onChange={handleCategories}
          />
        </div>
        <div className="newProductItem">
          <label>Size</label>
          <input
            name="size"
            type="text"
            placeholder="Jean Jacket"
            onChange={handleSizes}
          />
        </div>
        <div className="newProductItem">
          <label>Color</label>
          <input
            name="color"
            type="text"
            placeholder="Jean Jacket"
            onChange={handleColors}
          />
        </div>

        <div className="newProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="0"
            onChange={handleChange}
          />
        </div>

        <div className="newProductItem ">
          <label>Stock</label>
          <select
            name="inStock"
            className="newProductSelect"
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <button
          type="submit"
          onClick={handleClick}
          className="newProductButton"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postProductCollection } from '../../../../app/actions/productsCollection/postProductsCollections'
import Swal from 'sweetalert2';
import { getProductsCollection } from '../../../../app/actions/productsCollection/getProductsCollection';

const AddNewCollection = ({newCollection, setNewCollection}) => {

    const dispatch = useDispatch()
    const [input, setInput] = useState({
        productCollection: ""
    })

    function handlerChange(e) {
        setInput({
            [e.target.name]: e.target.value
        })
    }

    async function handleCollectionAddition() {
        await dispatch(postProductCollection(input))
        Swal.fire({
            position: 'bottom-end',
            icon: 'info',
            title: 'New collection saved',
            showConfirmButton: false,
            timer: 1200,
          });
          await dispatch(getProductsCollection());
            setInput({
                productCollection: ""
            })
            setNewCollection(false)
    }

    if(newCollection) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center">
                <div className="flex flex-col px-16 py-36 bg-gray-300 opacity-100 rounded-2xl">
                    <div className="text-black">
                        Please enter the new collection below
                    </div>
                    <div className="flex justify-center items-center">
                        <input
                            type="text"
                            onChange={handlerChange}
                            className="text-black text-center rounded-xl p-2"
                            name="productCollection"
                            value={input.productCollection}
                        />
                        <button
                            className="bg-green-600 p-2 rounded-xl text-white"
                            onClick={handleCollectionAddition}
                        >
                            OK
                        </button>
                    </div>
                    <button
                        className="bg-white text-black p-2 rounded-xl text-center mt-4"
                        onClick={() => setNewCollection(false)}
                    >
                        back
                    </button>
                </div>
            </div>
        )
    }



}

export default AddNewCollection
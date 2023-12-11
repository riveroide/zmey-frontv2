import React, { useEffect, useState } from "react";
import { Admin } from "../AdminSidebar";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import AddNewColor from "./Modals/AddNewColor";
import {
  getCategories,
  getColors,
} from "../../../app/actions/categories/getCategories";
import { deleteColor } from "../../../app/actions/colors/deleteColor";
import AddNewCategory from "./Modals/AddNewCategory";
import { deleteCategory } from "../../../app/actions/categories/deleteCategory";
import { GrAdd, GrClose } from "react-icons/gr";
import Loader from "../../Loader/Loader";
import { getProductsCollection } from "../../../app/actions/productsCollection/getProductsCollection";
import AddNewCollection from "./Modals/AddNewCollection";
import { deleteProductsCollection } from "../../../app/actions/productsCollection/deleteProductsCollection";


const ColorsCollections = ({setAdminDisplay}) => {
  const [newColor, setNewColor] = useState(false);
  const [newCategory, setNewCategory] = useState(false);
  const [newCollection, setNewCollection] = useState(false);
  const [loading, setLoading] = useState(false);
  const { colors } = useSelector((state) => state.categories);
  const { categories } = useSelector((state) => state.categories);
  const {allCollections} = useSelector((state) => state.productCollections);


  const dispatch = useDispatch();
  useEffect(() => {
    setAdminDisplay(true)
    const fetchData = async ()=>{
      setLoading(true)
      try {
        await dispatch(getColors());
        await dispatch(getCategories());
        await dispatch(getProductsCollection())

      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
      
    }
    
      fetchData()
  }, [dispatch]);

  if (loading) {
    return (
      <Admin title={"Loading..."}>
        <Loader />
      </Admin>
    );
  }
  return (
    <Admin title={"Colors, Collections and Categories"}>
      <div className="text-bold flex flex-col justify-start items-start h-screen p-4">
        <div className="flex w-full">

          {/* colors */}
          <div className="w-1/3 flex flex-col">
            <label className="ml-2 font-bold">Global Available Colors</label>
            <div className="flex p-2 flex-col">
              {colors?.map((e) => {
                return (
                  <div
                    className="flex justify-between p-1 border-2 items-center"
                    key={e.id}
                  >
                    {e.color}
                    <div
                      onClick={() => {
                        
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#d33",
                          cancelButtonColor: "#3085d6#d33",
                          confirmButtonText: "Yes, delete it!",
                        }).then(async (result) => {
                          if (result.isConfirmed) {
                            await dispatch(deleteColor(e.id));
                            Swal.fire("The category has been deleted.");
                            await dispatch(getColors());
                          }
                        });
                      }}
                    >
                      {" "}
                      <button className="border-2 rounded-xl p-2 bg-white text-black">
                        <GrClose />
                      </button>
                    </div>
                  </div>
                );
              })}
              <button
                className="flex p-2 border-2 bg-white text-black items-center justify-center"
                onClick={() => {
                  setNewColor(true);
                }}
              >
                <GrAdd size={24} />
              </button>
            </div>
            <AddNewColor newColor={newColor} setNewColor={setNewColor} />
          </div>

          {/* categories */}
          <div className="w-1/3 flex flex-col">
            <label className="ml-2 font-bold">
              Global Avaliable Categories
            </label>
            <div className="flex p-2 flex-col">
              {categories?.map((e) => {
                return (
                  <div
                    className="flex justify-between p-1 border-2 items-center"
                    key={e.id}
                  >
                    {e.name}
                    <div
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#d33",
                          cancelButtonColor: "#3085d6#d33",
                          confirmButtonText: "Yes, delete it!",
                        }).then(async (result) => {
                          if (result.isConfirmed) {
                            await dispatch(deleteCategory(e.id));
                            Swal.fire("The category has been deleted.");
                            await dispatch(getCategories());
                          }
                        });
                      }}
                    >
                      <button className="border-2 rounded-xl p-2 bg-white text-black">
                        <GrClose />
                      </button>
                    </div>
                  </div>
                );
              })}
              <div
                className="flex p-2 border-2 bg-white items-center justify-center "
                onClick={() => {
                  setNewCategory(true);
                }}
              >
                <GrAdd size={24} />
              </div>

              <AddNewCategory
                newCategory={newCategory}
                setNewCategory={setNewCategory}
              />
            </div>
          </div>

          {/* collections */}
          <div className="w-1/3 flex flex-col">
            <label className="ml-2 font-bold">Global Available Collections</label>
            <div className="flex p-2 flex-col">
              {allCollections?.map((e) => {
                return (
                  <div
                    className="flex justify-between p-1 border-2 items-center"
                    key={e.id}
                  >
                    {e.productCollection}
                    <div
                      onClick={() => {
                        
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#d33",
                          cancelButtonColor: "#3085d6#d33",
                          confirmButtonText: "Yes, delete it!",
                        }).then(async (result) => {
                          if (result.isConfirmed) {
                            await dispatch(deleteProductsCollection(e.id));
                            Swal.fire("The collection has been deleted.");
                            await dispatch(getProductsCollection());
                          }
                        });
                      }}
                    >
                      {" "}
                      <button className="border-2 rounded-xl p-2 bg-white text-black">
                        <GrClose />
                      </button>
                    </div>
                  </div>
                );
              })}
              <button
                className="flex p-2 border-2 bg-white text-black items-center justify-center"
                onClick={() => {
                  setNewCollection(true);
                }}
              >
                <GrAdd size={24} />
              </button>
            </div>
            <AddNewCollection newCollection={newCollection} setNewCollection={setNewCollection} />
          </div>

        </div>
      </div>
    </Admin>
  );
};

export default ColorsCollections;

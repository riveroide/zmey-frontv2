import React, { useEffect, useState } from 'react'
import { Admin } from "../components/AdminDashboard/AdminSidebar";
import LinesChart from "../components/AdminDashboard/LineChart";
import PieChart from "../components/AdminDashboard/PieChart";
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../app/actions/categories/getCategories';

import Loader from '../components/Loader/Loader';
import { getAdminOrders } from '../app/actions/orders/getOrders';
import { getProducts } from '../app/actions/products/getProducts';
import { getCodes } from '../app/actions/codes/getCodes';



function AdminHome({setAdminDisplay}){
  
  const {categories} =useSelector(state=>state.categories)
  const {allOrdersAdmin} = useSelector(state=>state.orders)
  const {products} = useSelector(state=>state.products)
  const {codes} = useSelector(state=>state.codes)
  console.log(codes,'codes')
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  //sum of all totals in orders and sales then divide by 100
  const totalSales = allOrdersAdmin?.reduce((acc,curr)=>acc+curr.total,0)/100
  console.log(totalSales,'totalsales')
  //counter of all orders
  const totalOrders = allOrdersAdmin?.length
  // total of all products
  const totalProducts = products?.docs?.length
//array with each name of the categories
const categoriesNames= categories?.map(e=>e.name)


  useEffect(() => {
   const fetchData = async()=>{
    setAdminDisplay(true)
    setLoading(true)
    try{
      await dispatch(getCategories())
      await dispatch(getAdminOrders())
      await dispatch(getProducts())
      await dispatch(getCodes())
    }catch(err){ 
      console.log(err)
    } finally{
      setLoading(false)
    }
    
    }
    fetchData()

  }, [dispatch])
  
  if(loading){
    return(
      <Admin>
        <Loader/>
      </Admin>
    )
  } 
  return (
    <div>
      <Admin title={"Dashboard"}>
        <div className="min-h-screen flex flex-col items-center mx-auto p-10 ">
          {/* SALED OUTPUTS */}
          <div className=" w-[100%] h-fit flex justify-around my-10 ">
            <div className="bg-gray-700 h-fit w-1/4 py-4 px-4 flex items-center justify-start gap-4 rounded-xl ">
              <div className="bg-[#CFE2FF] rounded-full p-2">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M10.25 10.03C10.25 10.57 10.4 10.65 10.74 10.77L11.25 10.95V9.25H10.95C10.57 9.25 10.25 9.6 10.25 10.03Z"
                      fill="#0D6EFD"
                    ></path>{" "}
                    <path
                      d="M12.75 14.7508H13.05C13.44 14.7508 13.75 14.4008 13.75 13.9708C13.75 13.4308 13.6 13.3508 13.26 13.2308L12.75 13.0508V14.7508Z"
                      fill="#0D6EFD"
                    ></path>{" "}
                    <path
                      d="M19.58 5.48L17.53 7.53C17.38 7.68 17.19 7.75 17 7.75C16.81 7.75 16.62 7.68 16.47 7.53C16.18 7.24 16.18 6.76 16.47 6.47L18.52 4.42C16.76 2.92 14.49 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 9.51 21.08 7.24 19.58 5.48ZM13.75 11.82C14.39 12.05 15.25 12.51 15.25 13.98C15.25 15.23 14.26 16.26 13.05 16.26H12.75V16.51C12.75 16.92 12.41 17.26 12 17.26C11.59 17.26 11.25 16.92 11.25 16.51V16.26H11.17C9.84 16.26 8.75 15.14 8.75 13.76C8.75 13.34 9.09 13 9.5 13C9.91 13 10.25 13.34 10.25 13.75C10.25 14.3 10.66 14.75 11.17 14.75H11.25V12.53L10.25 12.18C9.61 11.95 8.75 11.49 8.75 10.02C8.75 8.77 9.74 7.74 10.95 7.74H11.25V7.5C11.25 7.09 11.59 6.75 12 6.75C12.41 6.75 12.75 7.09 12.75 7.5V7.75H12.83C14.16 7.75 15.25 8.87 15.25 10.25C15.25 10.66 14.91 11 14.5 11C14.09 11 13.75 10.66 13.75 10.25C13.75 9.7 13.34 9.25 12.83 9.25H12.75V11.47L13.75 11.82Z"
                      fill="#0D6EFD"
                    ></path>{" "}
                    <path
                      d="M22.69 1.71C22.61 1.53 22.47 1.38 22.28 1.3C22.19 1.27 22.1 1.25 22 1.25H18C17.59 1.25 17.25 1.59 17.25 2C17.25 2.41 17.59 2.75 18 2.75H20.19L18.52 4.42C18.9 4.75 19.25 5.1 19.58 5.48L21.25 3.81V6C21.25 6.41 21.59 6.75 22 6.75C22.41 6.75 22.75 6.41 22.75 6V2C22.75 1.9 22.73 1.81 22.69 1.71Z"
                      fill="#0D6EFD"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-lg text-gray-300">Total Sales</p>
                <p>${totalSales}</p>
              </div>
            </div>
            <div className="bg-gray-700 h-fit w-1/4 py-4 px-4 flex items-center justify-start gap-4 rounded-xl">
              <div className="bg-[#D1E7DD] rounded-full p-2">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 48.00 48.00"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#198754"
                  stroke="#198754"
                  strokeWidth="0.00048000000000000007"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="0.384"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="Layer_2" data-name="Layer 2">
                      {" "}
                      <g id="invisible_box" data-name="invisible box">
                        {" "}
                        <rect width="48" height="48" fill="none"></rect>{" "}
                      </g>{" "}
                      <g id="Layer_7" data-name="Layer 7">
                        {" "}
                        <g>
                          {" "}
                          <path d="M37.7,11.1A3,3,0,0,0,35.4,10H34.2l.3-1.7A3.1,3.1,0,0,0,33.9,6a3.2,3.2,0,0,0-2.2-1H7.9A2.1,2.1,0,0,0,5.8,6.7,2,2,0,0,0,7.8,9h7.3A3,3,0,0,1,18,12.5L15.6,26.3a3,3,0,0,1-2.9,2.5H4.8a2,2,0,0,0-2,1.6L2,34.7A2.8,2.8,0,0,0,2.7,37a2.8,2.8,0,0,0,2.1,1H7.3a7,7,0,0,0,13.4,0h4.6a7,7,0,0,0,13.4,0h2a3.2,3.2,0,0,0,3.1-2.7L46,22.5ZM14,39a3,3,0,0,1-3-3,3,3,0,0,1,6,0A3,3,0,0,1,14,39Zm18,0a3,3,0,0,1-3-3,3,3,0,0,1,6,0A3,3,0,0,1,32,39Zm.1-17,1.4-8h1.3l5.9,8Z"></path>{" "}
                          <path d="M4,15H14a2,2,0,0,0,0-4H4a2,2,0,0,0,0,4Z"></path>{" "}
                          <path d="M15,19a2,2,0,0,0-2-2H5a2,2,0,0,0,0,4h8A2,2,0,0,0,15,19Z"></path>{" "}
                          <path d="M6,23a2,2,0,0,0,0,4h6a2,2,0,0,0,0-4Z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-lg text-gray-300">Total Orders</p>
                <p>{totalOrders}</p>
              </div>
            </div>
            <div className="bg-gray-700 h-fit w-1/4 py-4 px-4 flex items-center justify-start gap-4 rounded-xl">
              <div className="bg-[#FFF3CD] rounded-full p-3">
                <svg
                  width="35px"
                  height="35px"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFC107"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M0 0h48v48H0z" fill="none"></path>{" "}
                    <g id="Shopicon">
                      {" "}
                      <path d="M40,44c2.2,0,4-1.8,4-4V4H4v36c0,2.2,1.8,4,4,4H40z M24,22c2.206,0,4-1.794,4-4v-6h4v6c0,4.411-3.589,8-8,8s-8-3.589-8-8 v-6h4v6C20,20.206,21.794,22,24,22z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-lg text-gray-300">
                  Total Products
                </p>
                <p>{totalProducts}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 h-[400px] w-full justify-around pt-10">
            <div className="w-2/5 h-full flex flex-col justify-start items-center gap-6 ">
              <p className="font-bold text-gray-300 text-lg">Visit stadistics</p>
              <LinesChart />
            </div>
            <div className="w-2/6 h-full flex flex-col justify-start items-center gap-6 ">
              <p className="font-bold text-gray-300 text-lg">Categories Distribution</p>
              <PieChart categoriesNames={categoriesNames}/>
            </div>
          </div>
        </div>
      </Admin>
    </div>
  )
}

export default AdminHome
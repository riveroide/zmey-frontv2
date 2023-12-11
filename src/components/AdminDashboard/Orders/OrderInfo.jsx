import React, { useEffect, useState } from "react";
import { Admin } from "../AdminSidebar";
import Loader from "../../Loader/Loader";
import { VscAccount } from "react-icons/vsc";
import { GoLocation } from "react-icons/go";
import DeliveredInfo from "./modals/DeliveredInfo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByID } from "../../../app/actions/orders/getOrders";
import { modifyOrder } from "../../../app/actions/orders/putOrders";
import { resetOneOrderAdmin } from "../../../app/reducers/ordersSlice";

const OrderInfo = ({ id , setAdminDisplay}) => {
  
  const dispatch = useDispatch();
  const { oneOrderAdmin } = useSelector((state) => state.orders);

  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState({});
  const [code, setCode] = useState(false);
 

  useEffect(() => {
    const fetchData = async () => {
      setAdminDisplay(true)
      setLoading(true);
      try {
        await dispatch(getOrdersByID(id));
        
      } catch (error) {
        // Handle any errors that occur during the async operations
        console.error(error);
      } finally {
        // setInput(oneOrderAdmin);
        setLoading(false);
      }
    };
  
    fetchData();
  }, [dispatch, id]);
  
//   useEffect(() => {
//   setInput(oneOrderAdmin);
// }, [code]);


  if (loading) {
    return (
      <Admin title={"Loading..."}>
        <Loader />
      </Admin>
    );
  }
  return (
    <div>
      <Admin title={`Order id: ${oneOrderAdmin.id}`}>
        <div>
          <div>
            <Link to={"/admin/orders"}>
              <button
                onClick={() => {
                  dispatch(resetOneOrderAdmin());
                  setInput("");
                }}
              >
                back to orders
              </button>
            </Link>
          </div>

          {/* Customer info & deliver to info */}

          <div className="flex justify-around p-2 mt-4">
            <div className="border-2 w-[40%] flex  items-center p-2 rounded-xl">
              <div className="w-[20%] flex justify-center items-center">
                <VscAccount size={44} />
              </div>
              <div>
                <p className="text-xl font-bold capitalize">customer</p>
                <p> {oneOrderAdmin?.shipping?.name}</p>
                <p> {oneOrderAdmin?.shipping?.email}</p>
                <p> {oneOrderAdmin?.shipping?.phone}</p>
              </div>
            </div>

            <div className="border-2 w-[40%] flex items-center p-2 rounded-xl">
              <div className="w-[20%] flex justify-center items-center">
                <GoLocation size={44} />
              </div>
              <div>
                <p className="text-xl font-bold ">Deliver to</p>
                <p> {oneOrderAdmin?.shipping?.address?.line1}</p>
                <p> {oneOrderAdmin?.shipping?.address?.line2}</p>
                <div className="flex gap-4">
                  <p> {oneOrderAdmin?.shipping?.address?.city}</p>
                  <p> {oneOrderAdmin?.shipping?.address?.state}</p>
                </div>
                <p> {oneOrderAdmin?.shipping?.address?.postal_code}</p>
              </div>
            </div>
          </div>

          {/* Products info */}
          <div className="flex flex-col justify-center items-center mt-8">
            <div className="flex w-[90%] p-2 text-center font-extrabold border-b-4 uppercase">
              <div className="w-[30%] border-x-2">Product</div>
              <div className="w-[15%] border-x-2">Price</div>
              <div className="w-[15%] border-x-2">Quantity</div>
              <div className="w-[10%] border-x-2">Size</div>
              <div className="w-[15%] border-x-2">Color</div>
              <div className="w-[15%] border-x-2">Total</div>
            </div>

            <div className="flex flex-col w-[90%]">
              {oneOrderAdmin?.products?.map((e) => {
                const convertered = e.description?.split(" ");
                const onlyName = convertered?.slice(0, -2).join(" ");
                const color = convertered[convertered?.length - 2];
                const size = convertered[convertered?.length - 1];

                return (
                  <div className="flex p-2 text-center border-b-2">
                    <div className="w-[30%] ">{onlyName}</div>
                    <div className="w-[15%]">
                      USD {e.price.unit_amount / 100}
                    </div>
                    <div className="w-[15%]">{e.quantity}</div>
                    <div className="w-[10%]">{size}</div>
                    <div className="w-[15%]">{color}</div>
                    <div className="w-[15%]">USD {e.amount_total / 100}</div>
                  </div>
                );
              })}
            </div>

            {/* total */}
            <div className="flex w-[90%] justify-end">
              <div className="w-[30%] p-4 flex">
                <div className="w-1/2 flex justify-end items-center">
                  <p className="uppercase">Total:</p>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <p className="text-xl">USD {oneOrderAdmin.total / 100}</p>
                </div>
              </div>
            </div>
          </div>

          {/* button 'Mark as delivered' */}

          <div className="flex w-[90%] justify-center items-center">
            {oneOrderAdmin?.trackingCode?.length > 5 ? (
              <div> tracking code: {oneOrderAdmin?.trackingCode}</div>
            ) : (
              <button
                className="border-2 p-2 rounded-xl bg-white border-green-600 text-black font-bold hover:bg-green-600 hover:text-white hover:duration-300"
                onClick={() => {
                  setCode(true);
                }}
              >
                MARK AS DELIVERED
              </button>
            )}
          </div>

          <DeliveredInfo
            code={code}
            setCode={setCode}
            setInput={setInput}
            input={input}
            oneOrderAdmin={oneOrderAdmin}
            setLoading={setLoading}
          />
        </div>
      </Admin>
    </div>
  );
};

export default OrderInfo;

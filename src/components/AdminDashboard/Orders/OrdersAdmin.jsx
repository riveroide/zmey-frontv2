import React, { useEffect, useState } from "react";
import { Admin } from "../AdminSidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAdminOrders } from "../../../app/actions/orders/getOrders";
import { ImEnter } from "react-icons/im";
import Loader from '../../Loader/Loader'
import { Link } from "react-router-dom";

const OrdersAdmin = ({setAdminDisplay}) => {
  const { allOrdersAdmin } = useSelector((state) => state.orders);
  const dispatch = useDispatch("");
  const [loading, setLoading] = useState(true)
  const [allOrdersRender, setAllOrdersRender] = useState()
  const [searchQuery, setSearchQuery] = useState("");
  
  
  useEffect(() => {
    const fetchData = async () => {
      setAdminDisplay(true)
      setLoading(true);
      try {
        await dispatch(getAdminOrders());
        setAllOrdersRender(allOrdersAdmin);
      } catch (error) {
        // Handle any errors that occur during the async operation
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [dispatch]);
  

  function handleFilter(e){
    let newOrdersRender = [...allOrdersAdmin];
    if (e.target.value === 'All') {
      setAllOrdersRender(allOrdersAdmin);
    } else if (e.target.value === 'pending') {
      newOrdersRender = allOrdersAdmin.filter((order) => order.deliveryStatus === 'pending');
      setAllOrdersRender(newOrdersRender);
    } else if (e.target.value === 'delivered') {
      newOrdersRender = allOrdersAdmin.filter((order) => order.deliveryStatus === 'delivered');
      setAllOrdersRender(newOrdersRender);
    } else if (e.target.value === 'Higher Totals') {
      newOrdersRender.sort((a, b) => b.total - a.total);
      setAllOrdersRender(newOrdersRender);
    } else if (e.target.value === 'Minor Totals') {
      newOrdersRender.sort((a, b) => a.total - b.total);
      setAllOrdersRender(newOrdersRender);
    }
  }
  
  function handleSearch(e) {
    setSearchQuery(e.target.value);
    const filteredOrders = allOrdersAdmin.filter((order) =>
      order.shipping.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      order.shipping.email
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      (order.total / 100).toString()
        .includes(searchQuery.toLowerCase())
    );
    setAllOrdersRender(filteredOrders);
  }
  

  if(loading){
    return(
      <Admin title={'Loading Orders...'}>
        <Loader/>
      </Admin>
    )
  }
  return (
    <div>
      <Admin title={"Orders"}>
        <div>
          <div className="p-4 flex flex-row gap-4 w-[90%]">
            <div className="w-1/2">
              <input
                type="text"
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
                placeholder="Search by name, email, or total"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
  
            <div className="w-1/2">
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleFilter}
                defaultValue={"All"}
              >
                <option value={"All"}>All</option>
                <option value={"pending"}>Pendings</option>
                <option value={"delivered"}>Delivered</option>
                <option value={"Higher Totals"}>Higher Totals</option>
                <option value={"Minor Totals"}>Minor Totals</option>
              </select>
            </div>
          </div>
  
          <div className="flex w-[90%] justify-between font-bold p-2 text-center">
            <div className="w-[4%]"></div>
            <div className="w-[27%]">Name</div>
            <div className="w-[34%]">Email</div>
            <div className="w-[15%]">Total</div>
            <div className="w-[10%]">Date</div>
            <div className="w-[10%]">Status</div>
          </div>
        </div>
  
        <div className="p-2">
          {allOrdersRender?.map((e) => {
            let total = e.total / 100;
            let date = e.createdAt.split("T", 1);
            return (
              <div
                className={`border-b-2 flex justify-between w-[95%] p-2 text-center text-sm ${
                  e.deliveryStatus === "pending" ? "bg-red-700" : "bg-green-800"
                }`}
              >
                <div className="w-[4%] flex justify-between items-center">
                  <div>
                    <Link to={`/admin/orders/${e.id}`}>
                      <ImEnter />
                    </Link>
                  </div>
                </div>
                <div className="w-[27%]">
                  <div>{e.shipping.name}</div>
                </div>
                <div className="w-[34%]">{e.shipping.email}</div>
                <div className="w-[15%]">USD {total}</div>
                <div className="w-[10%]">{date}</div>
                <div className="w-[10%]">{e.deliveryStatus}</div>
              </div>
            );
          })}
        </div>
      </Admin>
    </div>
  );
};

export default OrdersAdmin;

import React from "react";
import EmptyOrders from "./EmptyOrders";
import Orders from "./Orders";

function OrdersContainer({
  orders,
  title,
  subtitle,
  idOrderT,
  itemsT,
  statusT,
  dateT,
  totalT,
}) {
  return orders?.length ? (
    <div className="flex justify-center items-center h-full">
      <div className="flex max-h-full mt-4 overflow-auto flex-col bg-white w-full rounded-md">
        <div className="flex gap-4 w-full text-center py-2">
          <div className="w-[25%] lg:text-base text-xs break-words">
            <p>{idOrderT}</p>
          </div>
          <div className="lg:w-[10%] w-[20%] lg:text-base text-xs break-words">
            <p>{itemsT}</p>
          </div>
          <div className="lg:w-[10%] w-[15%] lg:text-base text-xs ">
            <p>{statusT}</p>
          </div>
          <div className="w-[15%] lg:text-base text-xs ">
            <p>{dateT}</p>
          </div>
          <div className="lg:w-[10%] w-[15%] lg:text-base text-xs ">
            <p>{totalT}</p>
          </div>
        </div>
        {orders.map((order, index) => {
          return (
            <div
              className={`flex flex-col py-2  w-full ${
                index % 2 === 0 ? "bg-gray-300" : "bg-gray-100"
              }`}
              key={order.id}
            >
              <Orders
                key={order.id}
                id={order.id}
                status={order.deliveryStatus}
                paymentStatus={order.paymentStatus}
                total={order.total}
                products={order.products}
                shipping={order.shipping}
                date={order.createdAt}
              />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <EmptyOrders title={title} subtitle={subtitle} />
  );
}

export default OrdersContainer;

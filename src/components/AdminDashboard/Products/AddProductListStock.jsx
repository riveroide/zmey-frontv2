import React from "react";
import { CiTrash } from "react-icons/ci";

const AddProductListStock = ({ input, setInput }) => {
  return (
    <div>
      {input?.stock?.map((e) => {
        return (
          <div className="flex gap-4 flex-wrap border-t-2">
            
            <div className="flex w-[40%] ml-8 gap-2"key={e.id}><p className="font-bold">Color:</p> {e.color}</div>
          
            <div className="flex flex-col justify-end w-[50%]">
            {e.sizes?.map((r) => {
              return (
                
                  <div className="flex justify-between gap-4 py-2 border-t-2 mr-0">
                  <div key={r.id}>size: {r.size}</div>
                  <div key={r.id}>quantity: {r.quantity}</div>
                  <div>
                    <button
                      onClick={() => {
                        setInput({
                          ...input,
                          stock: input.stock.map((t) => {
                            if (t.color === e.color) {
                              if (t.sizes.length === 1) {
                                input.stock = input.stock.filter((c) => {
                                  return c.color !== t.color;
                                });
                              }
                              t.sizes = t.sizes.filter((y) => {
                                return y.size != r.size;
                              });
                            }
                            return t;
                          }),
                        });
                        setInput({
                          ...input,
                        });
                      }}
                    >
                      <CiTrash size={24}/>
                    </button>
                  </div>
                  </div>

                  
                
              );
            })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddProductListStock;

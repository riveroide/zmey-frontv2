import React from 'react'

const GalleryPhotosRender = ({input, setInput}) => {

    if(input?.gallery.length === 0){
        return null
    }else{
        return (
            <div className='flex justify-evenly p-2'>
                {input?.gallery?.map(e=>{
                    return (
                        <div  className='flex flex-col w-1/6 items-center gap-2 min-h-full'>
                            
                            <img src={e} alt="/" className='border-2 rounded-xl' key={e.id}/>
                            
                            <button
                            className="border-2 p-2 rounded-xl text-red-500 hover:bg-red-600 hover:text-white hover:duration-500 text-sm" onClick={()=>{
                                setInput({
                                    ...input,
                                    gallery:input.gallery.filter(p => p !== e)
                                })
                            }}>delete</button></div>
                        
                    )
                })}
            </div>
          )
    }
 
}

export default GalleryPhotosRender
import React from "react";
import { AiFillGift } from "react-icons/ai";

function NewsletterButton({ setNewsletterPopUp }) {
  return (
    <div className="fixed bottom-10 left-5 bg-white w-20 h-20 justify-center items-center rounded-full animate-jump-in animate-once">
      <div className="font-roboto absolute flex top-1 right-0 text-white bg-red-600 rounded-full w-5 h-5 justify-center items-center">
        1
      </div>
      <button
        className="flex w-full h-full justify-center items-center rounded-full"
        onClick={() => setNewsletterPopUp(true)}
      >
        <AiFillGift size={55} />
      </button>
    </div>
  );
}

export default NewsletterButton;

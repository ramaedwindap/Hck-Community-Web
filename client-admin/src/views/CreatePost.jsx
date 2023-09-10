import { NewspaperIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Title from "../components/Title";
import FormPost from "../components/FormPost";
import { useDispatch } from "react-redux";
import { storePost } from "../store/actionCreator";
import { toast } from "react-hot-toast";

export default function CreatePost() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    categoryId: "",
    imgUrl: "",
    tags: "",
    content: "",
  });

  //   console.log(form);

  async function handleSubmit(e) {
    e.preventDefault();

    // console.log("store", form);

    const res = await dispatch(storePost(form));

    if (res.success) {
      toast.success(res.data.message);
    } else {
      toast.error(res.error.message);
    }
  }

  return (
    <div className="w-full p-4 bg-white border shadow-lg rounded-2xl">
      <Title>
        <div className="flex gap-x-2 [&>svg]:w-[22px] [&>svg]:h-[22px] md:[&>svg]:w-[24px] md:[&>svg]:h-[24px] [&>svg]:stroke-[1.5]">
          <NewspaperIcon />
          Add New Post
        </div>
      </Title>
      <FormPost handleSubmit={handleSubmit} form={form} setForm={setForm} />
    </div>
  );
}

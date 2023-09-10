import { FolderOpenIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import FormCategory from "../components/FormCategory";
import Title from "../components/Title";
import { useDispatch } from "react-redux";
import { storeCategory } from "../store/actionCreator";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function CreateCategory() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log("submit", form);
    const res = await dispacth(storeCategory(form));

    if (res.success) {
      toast.success(res.data.message);
      navigate("/categories");
    } else {
      toast.error(res.error.message);
    }
  }

  return (
    <div className="w-full p-4 bg-white border shadow-lg rounded-2xl">
      <Title>
        <div className="flex gap-x-2 [&>svg]:w-[22px] [&>svg]:h-[22px] md:[&>svg]:w-[24px] md:[&>svg]:h-[24px] [&>svg]:stroke-[1.5]">
          <FolderOpenIcon />
          Add New Category
        </div>
      </Title>
      <FormCategory handleSubmit={handleSubmit} form={form} setForm={setForm} />
    </div>
  );
}

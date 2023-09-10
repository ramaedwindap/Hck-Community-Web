import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import FormCategory from "../components/FormCategory";
import { FolderOpenIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { showCategory, updateCategory } from "../store/actionCreator";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function EditCategory() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = useSelector((state) => state.categoryReducer);
  const [form, setForm] = useState({
    name: "",
  });

  async function getCategory() {
    await dispatch(showCategory(id));
  }

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    setForm({
      name: category.name || "",
    });
  }, [category]);

  //   console.log(category);

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log("update", form);
    const res = await dispatch(updateCategory(id, form));

    if (res.success) {
      toast.success(res.data.message);
      navigate("/categories");
    } else {
      toast.error(res.data.message);
    }
  }

  return (
    <div className="w-full p-4 bg-white border shadow-lg rounded-2xl">
      <Title>
        <div className="flex gap-x-2 [&>svg]:w-[22px] [&>svg]:h-[22px] md:[&>svg]:w-[24px] md:[&>svg]:h-[24px] [&>svg]:stroke-[1.5]">
          <FolderOpenIcon />
          Edit Category
        </div>
      </Title>
      <FormCategory handleSubmit={handleSubmit} form={form} setForm={setForm} />
    </div>
  );
}

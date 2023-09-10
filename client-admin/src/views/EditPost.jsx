import { NewspaperIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import FormPost from "../components/FormPost";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, updatePost } from "../store/actionCreator";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();
  const { post } = useSelector((state) => state.postReducer);
  //   console.log(post);

  const [form, setForm] = useState({
    title: "",
    categoryId: "",
    imgUrl: "",
    tags: "",
    content: "",
  });

  async function getPost() {
    await dispatch(fetchPost(slug));
  }

  useEffect(() => {
    // console.log("useEffect kosong");
    getPost();
  }, []);

  useEffect(() => {
    // console.log("useEffect post");
    setForm({
      title: post.title || "",
      categoryId: post.categoryId || "",
      imgUrl: post.imgUrl || "",
      tags: post.tags || "",
      content: post.content || "",
    });
  }, [post]);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("submit", form);
    const res = await dispatch(updatePost(slug, form));

    if (res.success) {
      toast.success(res.data.message);
      navigate("/");
    } else {
      toast.error(res.error.message);
    }
  }
  return (
    <div className="w-full p-4 bg-white border shadow-lg rounded-2xl">
      <Title>
        <div className="flex gap-x-2 [&>svg]:w-[22px] [&>svg]:h-[22px] md:[&>svg]:w-[24px] md:[&>svg]:h-[24px] [&>svg]:stroke-[1.5]">
          <NewspaperIcon />
          Edit Post
        </div>
      </Title>
      <FormPost handleSubmit={handleSubmit} form={form} setForm={setForm} />
    </div>
  );
}

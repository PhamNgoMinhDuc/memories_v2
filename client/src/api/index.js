import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
  }

  return req;
});

/* posts */
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);

export const fetchPost = (id) => API.get(`/posts/${id}`);

export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${searchQuery.tags}`);

export const createPosts = (newPost) => API.post(`/posts`, newPost);

export const updatePost = (id, updated) => API.patch(`/posts/${id}`, updated);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const comment = (id, commentPost) => API.post(`/posts/${id}/commentPost`, { commentPost });

/* user */
export const signIn = (formData) => API.post(`/user/signin`, formData);

export const signUp = (formData) => API.post(`/user/signup`, formData);

export const changeInfor = (id, formData) => API.patch(`/user/${id}/updateUser`, formData);

export const changePassword = (id, formData) => API.patch(`/user/${id}/changePassword`, formData);

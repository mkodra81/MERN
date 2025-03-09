import { create } from "zustand";
import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api/users`;

export const useUserStore = create((set) => ({
  users: [],
  user: (JSON.parse(localStorage.getItem("user"))) || null,
  comments: [],

  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },

  setUsers: (users) => set({ users }),

  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },

  createUser: async (user) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, user);
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },

  fetchUsers: async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      set({ users: response.data });
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },

  fetchComments: async (movieId) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/comments?movieId=${movieId}`
      );
      set({
        comments: response.data,
      });
    } catch (error) {
      console.error("Error fetching comments:", error);
      throw error;
    }
  },

  addComment: async (id, name, email, movieId, text) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/user/add-comment`, {
        id,
        name,
        email,
        movie_id: movieId,
        text,
        date: new Date(),
      });
      set((state) => ({
        comments: {
          ...state.comments,
          [movieId]: [...(state.comments[movieId] || []), response.data],
        },
      }));
    } catch (error) {
      console.error("Error adding comment:", error);
      throw error;
    }
  },
  deleteComment: async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/user/delete-comment/${id}`);

      set((state) => ({
        comments: state.comments.filter((comment) => comment._id !== id),
      }));
    } catch (error) {
      console.error("Error in deleting comment");
      throw error;
    }
  },
  updateComment: async (id, text) => {
    console.log(text);
    try {
      const res = await axios.patch(`${API_BASE_URL}/user/edit-comment/${id}`, {
        text,
      });
      console.log(res);

      set((state) => ({
        comments: state.comments.map((comment) =>
          comment._id === id ? { ...comment, ...res.data.data } : comment
        ),
      }));
    } catch (error) {
      console.error("Error in updating comment");
      throw error;
    }
  },
}));

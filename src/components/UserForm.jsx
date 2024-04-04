"use client";

import { setUp } from "../services/axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserForm = () => {
  const router = useRouter();

  const[user, setUser]= useState({
    username: "",
    password: ""
  })


  
  const onSubmit = (e) => {
     e.preventDefault();
      //  setUp().post("/users", user)
      // .then(res => {
      //   console.log(res.data);
      // }).catch(err => {
      //    console.error(err);
      // });
      void postUser();
    };


    const postUser = async () => {
      try {
        const res = await setUp()
        .post("/users", user);

         router.push("/")
      } catch (err) {
        console.error(err);
      }
    }


  return (
    <form onSubmit={onSubmit} className="max-w-xs mx-auto mt- bg-slate-100 p-8 rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Enter your username"
          onChange={(e)=> setUser({...user, username:e.target.value} )}
          value={user.username}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter your password"
          onChange={(e)=> setUser({...user, password:e.target.value} )}
          value={user.password}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default UserForm;

"use client";

import axios from "axios";
import UserTable from "../components/UserTable";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    void getUser();
  }, [])

  const getUser = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/users");
      setUsers(res.data)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>

      <UserTable users={users} />
      <Link
        className="bg-blue-500 mt-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        href={"/register"}
      >
        add user
      </Link>
    </div>
  );
}

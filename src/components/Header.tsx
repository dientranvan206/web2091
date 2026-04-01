import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Button } from "antd";

export default function Navbar() {
  const context = useContext(UserContext);
  if (!context) return null;
  const { user, setUser } = context;

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="#" className="text-xl font-semibold">
          <strong>WEB2091 App</strong>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="#" className="hover:text-gray-200">
            Trang chủ
          </Link>
          <Link to="/list" className="hover:text-gray-200">
            Danh sách
          </Link>
          <Link to="/add" className="hover:text-gray-200">
            Thêm mới
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
           <img
            src={user?.avatar || "https://i.pravatar.cc/40"}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <span>User: {user?.name || "Guest"}</span>
          <Button onClick={() => setUser({ name: "dien206",avatar:"https://up.yimg.com/ib/th/id/OIP.zucHf6V9DG9ybeYiEIFn1gHaEK?pid=Api&rs=1&c=1&qlt=95&w=211&h=118"})}>Login</Button>
          <Link to="#" className="hover:text-gray-200">
            Đăng nhập
          </Link>
          <Link to="#" className="hover:text-gray-200">
            Đăng ký
          </Link>
        </div>
      </div>
    </nav>
  );
}
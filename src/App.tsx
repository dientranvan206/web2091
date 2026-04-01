import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { Form, Input, Button, Layout } from "antd";
import Dashboard from "./pages/Lab1";
import StudentList from "./pages/lab2";
import Lab2 from "./pages/lab2";
import LoginForm from "./pages/Lab3";
import Lab4 from "./pages/Lab4";
import StoryList from "./pages/Lab5";
import { EditStory } from "./pages/Lab6";
import Navbar from "./components/Header";

const { Header, Content, Footer } = Layout;

function App() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>

        <Routes>
          <Route path="/edit/:id" element={<EditStory />} />
        </Routes>

        <Layout>
          <Content style={{ padding: 20 }}>
            {/* Ví dụ Form nếu muốn dùng thì bỏ comment */}
            {/* 
            <Form onFinish={onFinish}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Vui lòng nhập email" },
                  { type: "email", message: "Email không hợp lệ" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Password" name="password">
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            */}

            <StoryList />
          </Content>
        </Layout>
      </div>

      <Toaster />
    </>
  );
}

export default App;
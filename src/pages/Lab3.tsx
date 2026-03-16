import { useState } from "react";
import { Form, Input, Button,Select,Card} from "antd";

const LoginForm = () => {
     const [postData, setPostData] = useState<any>(null);
  const onFinish = (values: any) => {
    console.log("Form data:", values);
  };
  const onFinishBai4 = (values: any) => {
    console.log( values);
    setPostData(values);
  };

  return (
    <>
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
      <Form.Item label="Name" name="name"
      rules={[
        {required:true,message:"không được để trống"},
       
      ]}>
        <Input />
      </Form.Item>  
      <Form.Item label="Email" name="email" rules={[
        {required:true,message:"không được để trống"},
         {type:"email",message:"email không hợp lệ"},
      ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Phone" name="phone" rules={[
        {required:true,message:"không được để trống"}
      ]}>
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[
        {required:true,message:"không được để trống"},
        {
            type:"string",
            min:8,
            message:"tối thiểu 8 kí tự"
        }
      ]}>
        <Input.Password />
      </Form.Item>
      <Form.Item label="Confirm Password" name="confirmpassword" rules={[
        {required:true,message:"không được để trống"},
        
      ]}>
        <Input.Password  placeholder="xác nhận lại mật khẩu"/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
   <h2>Bài 3</h2>
     <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="Price" name="price">
        <Input />
      </Form.Item>
      <Form.Item label="Số lượng" name="soluong">
        <Input />
      </Form.Item>
      <Form.Item label="Mô tả" name="mota">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
    <h2>Bài 4</h2>
     <Form layout="vertical" onFinish={onFinishBai4} style={{ maxWidth: 400 }}>
      <Form.Item label="Title" name="title">
        <Input />
      </Form.Item>

      <Form.Item label="Slug" name="slug">
        <Input />
      </Form.Item>
      
      <Form.Item label="Category" name="category">
        <Select
            placeholder="Chọn category"
            options={[
              { value: "news", label: "News" },
              { value: "technology", label: "Technology" },
              { value: "sports", label: "Sports" },
              { value: "education", label: "Education" },
            ]}
          />
        
      </Form.Item>
      <Form.Item label="Content" name="content">
        <Input />
      </Form.Item>
      <Form.Item label="Image URL" name="imageUrl">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
    {postData && (
        <Card title="Dữ liệu bài 4" style={{ maxWidth: 400, marginTop: 20 }}>
          <p><b>Title:</b> {postData.title}</p>
          <p><b>Slug:</b> {postData.slug}</p>
          <p><b>Category:</b> {postData.category}</p>
          <p><b>Content:</b> {postData.content}</p>
          <p><b>Image URL:</b> {postData.imageUrl}</p>

          {postData.imageUrl && (
            <img
              src={postData.imageUrl}
              alt={postData.title}
              
            />
          )}
        </Card>
      )}
   </>

  );
};

export default LoginForm;

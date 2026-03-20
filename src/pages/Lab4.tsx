import { Button, Checkbox, Form, Input } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

interface CategoryFormData {
  title: string;
  description?: string;
  active: boolean;
}

interface Story {
  title: string;
  author?: string;
  image?: string;
  description?: string;
}

const Lab4 = () => {
  const [categoryForm] = Form.useForm<CategoryFormData>();
  const [storyForm] = Form.useForm<Story>();
  const qc = useQueryClient();

  const categoryMutation = useMutation({
    mutationFn: async (data: CategoryFormData) => {
      const res = await axios.post("http://localhost:3000/categories", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Them danh muc thanh cong");
      categoryForm.resetFields();
    },
    onError: () => {
      toast.error("Co loi xay ra");
    },
  });

  const storyMutation = useMutation({
    mutationFn: async (data: Story) => {
      const res = await axios.post("http://localhost:3000/stories", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Them truyen thanh cong");
      storyForm.resetFields();

      
      qc.invalidateQueries({ queryKey: ["getAllStories"] });
    },
    onError: () => {
      toast.error("Co loi xay ra");
    },
  });

  const onCategoryFinish = (values: CategoryFormData) => {
    categoryMutation.mutate(values);
  };

  const onStoryFinish = (values: Story) => {
    storyMutation.mutate(values);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold">Them danh muc truyen</h2>

          <Form
            form={categoryForm}
            layout="vertical"
            initialValues={{ active: false }}
            onFinish={onCategoryFinish}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Vui long nhap title" }]}
            >
              <Input placeholder="Nhap ten danh muc" />
            </Form.Item>

            <Form.Item label="Description" name="description">
              <Input.TextArea rows={4} placeholder="Nhap mo ta danh muc" />
            </Form.Item>

            <Form.Item name="active" valuePropName="checked">
              <Checkbox>Active</Checkbox>
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              loading={categoryMutation.isPending}
              block
            >
              {categoryMutation.isPending ? "Dang them..." : "Them danh muc"}
            </Button>
          </Form>
        </div>

        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold">Them truyen moi</h2>

          <Form form={storyForm} layout="vertical" onFinish={onStoryFinish}>
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Vui long nhap ten truyen" }]}
            >
              <Input placeholder="Nhap ten truyen" />
            </Form.Item>

            <Form.Item label="Author" name="author">
              <Input placeholder="Nhap ten tac gia" />
            </Form.Item>

            <Form.Item label="Image" name="image">
              <Input placeholder="Nhap URL hinh anh" />
            </Form.Item>

            <Form.Item label="Description" name="description">
              <Input.TextArea rows={4} placeholder="Nhap mo ta truyen" />
            </Form.Item>

            <Button type="primary" htmlType="submit" loading={storyMutation.isPending} block>
              {storyMutation.isPending ? "Dang them" : "Them truyen"}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Lab4;
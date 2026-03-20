import { useMutation, useQuery,useQueryClient} from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function EditStory (){
    const { id } = useParams();
    const queryClient = useQueryClient();
    const {data,isLoading} =  useQuery({
        queryFn: async ()=>{
            const res = await axios.get(`http://localhost:3000/stories/${id}`);
            return res.data;

        },
        queryKey:["story"]
    });
    const [form] = Form.useForm();
    useEffect(()=>{
        if(data){
            form.setFieldsValue(data);
        }
    },[data]);
    const onFinish = (values:any)=>{
        console.log(values);
        mutate(values);
    };
    const {mutate,isPending} = useMutation({
        mutationFn: async (values:any)=>{
            await axios.put(`http://localhost:3000/stories/${id}`,values);

        },
        onSuccess: () => {
     
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      message.success("Cập nhật thành công");

      
    },
    });
    return(
        <Form layout="vertical" form={form} onFinish={onFinish} disabled={isLoading}>
            <Form.Item label="Ten truyen"name="title" rules={[
                {required:true,message:"không để trống"}
            ]}>
            <Input/>
            </Form.Item>
            <Form.Item label="Tac gia"name="author" rules={[
                {required:true,message:"không để trống"}
            ]}>
            <Input/>
            </Form.Item>
            <Form.Item label="Anh"name="image">
            <Input/>
            </Form.Item>
            <Form.Item label="Mo ta "name="description">
            <Input.TextArea/>
            </Form.Item>
            <Button htmlType="submit" loading={isPending}>Submit</Button>
        </Form>
    );
}
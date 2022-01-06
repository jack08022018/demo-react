import { React, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { Card, Form, Input, Row, Col, Select, Button, InputNumber, Table } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { getAllDataAsync } from './Slice'

const { Option } = Select;

export default function AddProduct() {
  const { ownerArray, categoryArray, initializing, loading } = useAppSelector((rootState) => {
    let ownerArray = rootState.aboutPage.addProduct.ownerArray;
    let categoryArray = rootState.aboutPage.addProduct.categoryArray;
    let initializing = rootState.aboutPage.addProduct.initializing;
    let loading = false;
    return { ownerArray, categoryArray, initializing, loading };
  });
  const dispatch = useAppDispatch();

  // init
  useEffect(() => {
    dispatch(getAllDataAsync());
  }, [dispatch]);

  const [form] = Form.useForm();

  const handleSave = values => {
    console.log(values);
  };

  const requiredFieldRule = [{ required: true, message: 'Required Field' }];

  return (
    initializing ? <div>Loading...</div> :
    
    <Card title="Add Product" loading={false} bodyStyle={{ padding: "24px 24px 0px 24px"}}>
      <Form form={form} name="product-form" onFinish={handleSave} >
        <Row gutter={15}>
          <Col span={8}>
            <Form.Item label="Name" name="name" colon={false} rules={requiredFieldRule}>
              <Input placeholder="Name" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Description" name="description" colon={false}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Owner" name="owner" colon={false}>
              <Select>
                {ownerArray.map(item => (
                  <Option key={item.id} value={item.id}>
                    {item.value}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col span={8}>
            <Form.Item label="Category" name="category" colon={false}>
              <Select>
                {categoryArray.map(item => (
                  <Option key={item.id} value={item.id}>
                    {item.value}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            {/* <Form.Item style={{ marginBottom: '24px' }}> */}
            <Form.Item label="Quantity" name="qty" colon={false}>
              <InputNumber min={1} max={100} precision={0}/>
            </Form.Item>
          </Col>
          <Col span={8} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit" icon={<SaveOutlined />} disabled={loading}>Save</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

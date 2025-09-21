import React, { useState, memo } from 'react';
import { Modal, Input, Select, Button, Form, message } from 'antd';
import { useThemeStore } from '../../../../Store/themeStore';
import type { AddOrderModalProps } from './interface';
import {
  ORDER_STATUS_OPTIONS,
  MODAL_CONFIG,
  FORM_RULES,
  SUCCESS_MESSAGE,
} from './constants';
import type { Order } from '../../interface';

const { Option } = Select;

const AddOrderModal: React.FC<AddOrderModalProps> = ({
  visible,
  onCancel,
  onAdd,
}) => {
  const [form] = Form.useForm();
  const { theme } = useThemeStore();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();

      const newOrder: Omit<Order, 'id'> = {
        user: values.user,
        project: values.project,
        address: values.address,
        status: values.status,
        date: new Date(),
        userProfile: values.userProfile || '',
      };

      onAdd(newOrder);
      form.resetFields();
      message.success(SUCCESS_MESSAGE);
      onCancel();
    } catch (error) {
      console.error('Failed to add order:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title={MODAL_CONFIG.title}
      open={visible}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleSubmit}
          style={{
            backgroundColor: theme.primary,
            borderColor: theme.primary,
            color: theme.text,
          }}
        >
          Add Order
        </Button>,
      ]}
      style={{
        top: MODAL_CONFIG.top,
      }}
      bodyStyle={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
      width={MODAL_CONFIG.width}
    >
      <Form
        form={form}
        layout="vertical"
        style={{
          backgroundColor: theme.background,
          color: theme.text,
        }}
      >
        <Form.Item
          label={<span style={{ color: theme.text }}>User Name</span>}
          name="user"
          rules={FORM_RULES.user}
        >
          <Input
            placeholder="Enter user name"
            style={{
              backgroundColor: theme.background,
              borderColor: theme.border,
              color: theme.text,
            }}
          />
        </Form.Item>

        <Form.Item
          label={<span style={{ color: theme.text }}>Project</span>}
          name="project"
          rules={FORM_RULES.project}
        >
          <Input
            placeholder="Enter project name"
            style={{
              backgroundColor: theme.background,
              borderColor: theme.border,
              color: theme.text,
            }}
          />
        </Form.Item>

        <Form.Item
          label={<span style={{ color: theme.text }}>Address</span>}
          name="address"
          rules={FORM_RULES.address}
        >
          <Input.TextArea
            placeholder="Enter address"
            rows={3}
            style={{
              backgroundColor: theme.background,
              borderColor: theme.border,
              color: theme.text,
            }}
          />
        </Form.Item>

        <Form.Item
          label={<span style={{ color: theme.text }}>Status</span>}
          name="status"
          rules={FORM_RULES.status}
          initialValue="Pending"
        >
          <Select
            placeholder="Select status"
            style={{
              backgroundColor: theme.background,
              borderColor: theme.border,
              color: theme.text,
            }}
          >
            {ORDER_STATUS_OPTIONS.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label={
            <span style={{ color: theme.text }}>
              Profile Image URL (Optional)
            </span>
          }
          name="userProfile"
        >
          <Input
            placeholder="Enter profile image URL"
            style={{
              backgroundColor: theme.background,
              borderColor: theme.border,
              color: theme.text,
            }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default memo(AddOrderModal);

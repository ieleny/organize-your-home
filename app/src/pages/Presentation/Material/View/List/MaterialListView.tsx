import React from "react";
import { Typography, Table, Row, Col, Space } from "antd";
import type { ColumnsType } from "antd/es/table";

import MaterialListViewModel from "./MaterialListViewModel";
import { IMaterial } from "src/interface/materialInterface";

const { Title } = Typography;

const MaterialListView: React.FC = () => {

  const materialListViewModel = new MaterialListViewModel();

  const columns: ColumnsType<IMaterial> = [
    {
      title: "Nome material",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Quantidade comprada",
      dataIndex: "quantityBought",
      key: "quantityBought",
    },
    {
      title: "Preço da unidade",
      dataIndex: "priceUnd",
      key: "priceUnd",
    },
    {
      title: "Ações",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Editar</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Row justify="center">
        <Title>Lista dos seus gastos</Title>
      </Row>

      <Row justify="center">
        <Col span={14}>
          <Table
            dataSource={materialListViewModel.listMaterial()}
            columns={columns}
          />
        </Col>
      </Row>
    </>
  );
};

export default MaterialListView;

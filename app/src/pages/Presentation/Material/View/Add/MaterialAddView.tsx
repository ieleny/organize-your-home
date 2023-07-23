import React from "react";
import { Typography, Row, Input, Col, Button, InputNumber } from "antd";

import ListViewModel from './MaterialAddViewModel';

const { Title } = Typography;

const MaterialAddListView: React.FC = () => {

  const listViewModel = new ListViewModel();

  const saveMaterial = () => {
    // listViewModel.addMaterialList();
    console.warn("saveMaterial");
    console.warn(listViewModel.listMaterial());
  };

  return (
    <>
      <Row justify="center">
        <Title>Adicione seus gastos com a construção</Title>
      </Row>

      <Row justify="center" gutter={[16, 16]}>
        <Col span={14} style={{ padding: "40px 0" }}>
          <Title level={4}>Adicione o nome do produto:</Title>
          <Input size="large" />
        </Col>
      </Row>

      <Row justify="center" gutter={[24, 24]}>
        <Col span={7}>
          <Title level={4}>Quantidade comprada:</Title>
          <InputNumber
            size="large"
            min={1}
            max={10}
            defaultValue={1}
            style={{ width: "100%" }}
          />
        </Col>

        <Col span={7}>
          <Title level={4}>Valor do produto (UND): </Title>
          <InputNumber<string>
            size="large"
            defaultValue="1"
            min="0"
            max="10"
            step="0.00000000000001"
            stringMode
            style={{ width: "100%" }}
          />
        </Col>
      </Row>

      <Row justify="center" style={{ padding: "20px 0" }}>
        <Button type="primary" onClick={() => saveMaterial()}>
          Salvar
        </Button>
      </Row>
    </>
  );
};

export default MaterialAddListView;

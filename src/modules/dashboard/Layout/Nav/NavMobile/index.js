import { Avatar, Col, Row, Typography } from "antd";
import React from "react";
import Icons from "../../../../../common/Icons";
function NavMobile({ setopen }) {
  const onSearch = (value) => console.log(value);

  return (
    <Row className="navbar adminNav_mobile" gutter={[20, 20]} align={"middle"}>
      <Col span={10} style={{ height: "100%" }}>
        <Row style={{ width: "100%" }}>
          <Col xs={8}>
            <Icons
              icon={"hamburger"}
              onClick={() => setopen((e) => !e)}
            />
          </Col>
          <Col xs={6}>
            <Icons icon="search" />
          </Col>
        </Row>
      </Col>
      <Col span={14} style={{ height: "100%", paddingInline: 0 }}>
        <Row style={{ width: "100%" }} justify={"end"}>
          <Typography className="userName">
            <Typography.Title level={5} ellipsis={{ rows: 1 }}>
              Puma Official Store
            </Typography.Title>
          </Typography>
          <Avatar
            className="avatar"
            size="default"
            gap={"1rem"}
            src={undefined}
          >
            {"ADmin"}
          </Avatar>
        </Row>
      </Col>
    </Row>
  );
}

export default NavMobile;

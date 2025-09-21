import { memo } from 'react';
import { Row, Col } from 'antd';
import MicroCardsSection from './MicroCardsSection';
import BarChart from './BarChart';
import LineChart from './LineChart';
import LocationChart from './LocationChart';
import TopSellingProducts from './TopSellingProducts';
import TotalSalesChart from './TotalSalesChart';

const DashboardContainer = () => {
  return (
    <div className="w-full h-full flex flex-col gap-7">
      <Row gutter={[28, 28]} className="h-auto">
        <Col xs={24} lg={12}>
          <MicroCardsSection />
        </Col>
        <Col xs={24} lg={12}>
          <BarChart />
        </Col>
      </Row>
      <Row gutter={[28, 28]} className="h-auto lg:h-[318px]">
        <Col xs={24} md={18} lg={18}>
          <LineChart />
        </Col>
        <Col xs={24} md={6} lg={6}>
          <LocationChart />
        </Col>
      </Row>

      <Row gutter={[28, 28]} className="h-auto lg:h-[318px]">
        <Col xs={24} md={18} lg={18}>
          <TopSellingProducts />
        </Col>
        <Col xs={24} md={6} lg={6}>
          <TotalSalesChart />
        </Col>
      </Row>
    </div>
  );
};

export default memo(DashboardContainer);

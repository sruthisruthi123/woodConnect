import React from 'react';
import Card from './shared/card';

const Dashboard = () => {
	return (
		<div style={mainStyle}><Card
			image="https://icon-library.com/images/suppliers-icon/suppliers-icon-4.jpg"
			title="Customers"
			description="1200" /> <Card
				image="https://img.freepik.com/premium-vector/orange-round-pie-chart-vector-icon_302321-2461.jpg"
				title="Orders"
				description="1200"
			/>
			<Card
				image="https://cdn-icons-png.flaticon.com/512/10053/10053703.png"
				title="Delivery"
				description="1200"
			/>
		</div>

	);
}
const mainStyle = {

	display: 'flex'
}
export default Dashboard;
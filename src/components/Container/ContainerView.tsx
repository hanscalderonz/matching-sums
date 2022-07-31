import { FC }   from "react";
import {
	Button,
	Card,
	Col,
	Form,
	Input,
	Row,
	Typography,
} from "antd";

// Own imports
import { WithDelegations } from "../../types";
import { ListResponse }    from "../ListResponse";

export const ContainerView: FC<WithDelegations> = ({
	delegations : {
		calculate,
		listOfNumbers,
		handleChangeNumbers,
		target,
		handleChangeTarget,
		results,
	},
}) => {
	const { Title } = Typography;
	return (
		<Card style={{ width : 600 }}>
			<Form
				layout="vertical"
				name="productCreateOrEditForm"
				onFinish={calculate}
			>
				<Row>
					<Col span={12} push={6}>
						<Title level={1}>Matching Sums</Title>
					</Col>
				</Row>
				<Row>
					<Col span={11}>
						<Form.Item
							name="numbers"
							label="List of numbers"
						>
							<Input
								value={listOfNumbers}
								onChange={handleChangeNumbers}
							/>
						</Form.Item>
					</Col>
					<Col span={11} push={2}>
						<Form.Item
							name="target"
							label="Target integer"
						>
							<Input
								value={target}
								onChange={handleChangeTarget}
							/>
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={6}>
						<Card style={{ width : 254 }}>
							<Title level={4}>Results</Title>
							<ListResponse results={results} />
						</Card>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<Form.Item wrapperCol={{ span : 12 }} style={{ marginTop : "10px" }}>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</Card>
	);
};

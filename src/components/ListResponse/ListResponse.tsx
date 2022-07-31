import React, { FC } from "react";
import { List }      from "antd";

interface IProps {
	results?: string[];
}

export const ListResponse: FC<IProps> = ({
	 results = ["No match"],
}) => {
	return (
		<List
			itemLayout="vertical"
			dataSource={results}
			renderItem={item => <List.Item>{item}</List.Item>}
		/>
	);
};

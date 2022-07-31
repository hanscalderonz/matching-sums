import React, { ChangeEventHandler, FC, useState } from "react";

// Own imports
import { ContainerView } from "./ContainerView";

export const Container: FC = () => {
	const [listOfNumbers, setListOfNumbers] = useState<string>();
	const [target, setTarget] = useState<string>();
	const [results, setResults] = useState<string[]>();

	const handleChangeNumbers: ChangeEventHandler<HTMLInputElement> = event => {
		const newNumbers = event.target.value;
		setListOfNumbers(newNumbers);
	};
	const handleChangeTarget: ChangeEventHandler<HTMLInputElement> = event => {
		const newTarget = event.target.value;
		setTarget(newTarget);
	};

	const calculate = () => {
		let listOfNumbersArray = listOfNumbers?.split(",").map(n => parseInt(n, 10))?.sort((a, b) => (a - b));
		const convertedTarget = parseInt(target as string, 10);
		const pendingToRemove: number[] = [];
		const result: string[] = [];
		listOfNumbersArray = listOfNumbersArray?.filter(number => {
			if (pendingToRemove?.includes(number)) {
				return true;
			}
			const complement = convertedTarget - number;
			if (listOfNumbersArray?.includes(complement)) {
				pendingToRemove.push(complement);
				result.push(`+ ${number},${complement}`);
				return true;
			}
			return false;
		});
		setResults(result);
	};
	return (
		<ContainerView
			delegations={{
				calculate,
				listOfNumbers,
				handleChangeNumbers,
				target,
				handleChangeTarget,
				results,
			}}
		/>
	);
};

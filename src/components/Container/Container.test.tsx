import React                 from "react";
import { fireEvent, render } from "@testing-library/react";

// Own imports
import { act }       from "react-dom/test-utils";
import { Container } from "./Container";

Object.defineProperty(window, "matchMedia", {
	writable : true,
	value    : jest.fn().mockImplementation(query => ({
		matches             : false,
		media               : query,
		onchange            : null,
		addListener         : jest.fn(), // Deprecated
		removeListener      : jest.fn(), // Deprecated
		addEventListener    : jest.fn(),
		removeEventListener : jest.fn(),
		dispatchEvent       : jest.fn(),
	})),
});

describe("<Container />", () => {
	it("Should be rendered", () => {
		const ContainerComponent = render(
			<Container />
		);
		expect(ContainerComponent.baseElement).toBeInTheDocument();
	});
	it("Should print calculated results", async () => {
		const ContainerComponent = render(
			<Container />
		);
		const inputListOfNumbers = ContainerComponent.getByRole("textbox", { name : "List of numbers" });
		fireEvent.change(inputListOfNumbers, { target : { value : "13,1" } });
		const inputTargetNumber = ContainerComponent.getByRole("textbox", { name : "Target number" });
		fireEvent.change(inputTargetNumber, { target : { value : "14" } });
		const calculateButton = ContainerComponent.getByRole("button", { name : "Calculate" });
		fireEvent.submit(calculateButton);
		const matchResults = await ContainerComponent.findByText("+ 1,13");
		expect(matchResults).toBeVisible();
	});
	it("Should say No match on results when there is no matches sums for target number", async () => {
		const ContainerComponent = render(
			<Container />
		);
		await act(async () => {
			const inputListOfNumbers = ContainerComponent.getByRole("textbox", { name : "List of numbers" });
			fireEvent.change(inputListOfNumbers, { target : { value : "13,2" } });
			const inputTargetNumber = ContainerComponent.getByRole("textbox", { name : "Target number" });
			fireEvent.change(inputTargetNumber, { target : { value : "14" } });
			const calculateButton = ContainerComponent.getByRole("button", { name : "Calculate" });
			fireEvent.submit(calculateButton);
			const matchResults = await ContainerComponent.findByText("No match");
			expect(matchResults).toBeVisible();
		});
	});
});

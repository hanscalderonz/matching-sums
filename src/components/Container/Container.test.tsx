import React      from "react";
import { render } from "@testing-library/react";

// Own imports
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
		expect(ContainerComponent).toBeDefined();
	});
	it("Should calculate results", () => {
		const ContainerComponent = render(
			<Container />
		);
		expect(ContainerComponent).toBeDefined();
	});
	it("Should calculate results", () => {
		const ContainerComponent = render(
			<Container />
		);
		expect(ContainerComponent).toBeDefined();
	});
});

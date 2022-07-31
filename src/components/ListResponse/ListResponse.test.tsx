import React      from "react";
import { render } from "@testing-library/react";

// Own imports
import { ListResponse } from "./ListResponse";

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

describe("<ListResponse />", () => {
	it("Should be rendered", () => {
		const ListResponseComponent = render(
			<ListResponse />
		);
		expect(ListResponseComponent.baseElement).toBeInTheDocument();
	});
	it("Should response No match on empty results", () => {
		const ListResponseComponent = render(
			<ListResponse />
		);
		const noMatchText = ListResponseComponent.getByText("No match");
		expect(noMatchText).toBeVisible();
	});
	it("Should response with results when passed", () => {
		const ListResponseComponent = render(
			<ListResponse results={["13,1"]} />
		);
		const matchResults = ListResponseComponent.getByText("13,1");
		expect(matchResults).toBeVisible();
	});
});

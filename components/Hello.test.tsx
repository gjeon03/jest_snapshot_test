/** @jest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";
import Hello from "./Hello";
import "@testing-library/jest-dom";

const user = {
  name: "Mike",
  age: 30,
};

const user2 = {
  age: 20,
};

test("snapshot : name 있음", () => {
  const el = render(<Hello user={user} />);
  expect(el).toMatchSnapshot();
});

test("snapshot : name 없음", () => {
  const el = render(<Hello user={user2} />);
  expect(el).toMatchSnapshot();
});

test("Hello 라는 글자가 포함되는가?", () => {
  render(<Hello user={user} />);
  const helloEl = screen.getByText(/Hello/i);
  expect(helloEl).toBeInTheDocument();
});

[
  {
    id: 1,
    url: "/menu1",
    name: "상품관리",
    slug: "NA",
    parentSiteMapId: null,
    sort: 1,
    active: true,
    deleted: false,
    childrenSiteMaps: [
      {
        id: 5,
        url: "/menu1/child1",
        name: "상품조회",
        slug: "NA",
        parentSiteMapId: 1,
        sort: 1,
        active: true,
        deleted: false,
        childrenSiteMaps: [],
      },
    ],
  },
];

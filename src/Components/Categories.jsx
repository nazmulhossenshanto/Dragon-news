import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h1 className="font-bold">All Categories (6:25)</h1>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map((category) => (
          <NavLink to={`category/${category.id}`} className={"btn"} key={category.id}>
            <h1 className="text-primary">{category.name}</h1>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;

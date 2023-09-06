import React from "react";

export default function PostTable() {
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          <th scope="col" className="px-6 py-3">
            Title
          </th>
          <th scope="col" className="px-6 py-3">
            Image
          </th>
          <th scope="col" className="px-6 py-3">
            Content
          </th>
          <th scope="col" className="px-6 py-3 ">
            <div className="w-[200px] text-center">Category</div>
          </th>
          <th scope="col" className="px-6 py-3">
            <div className="w-[200px] text-center">Category</div>
          </th>
          <th className="px-6 py-3 sr-only">Created By</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b ">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
          >
            Apple MacBook Pro 17"
          </th>
          <td className="px-6 py-4">Silver</td>
          <td className="px-6 py-4">Laptop</td>
          <td className="px-6 py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            corporis harum ipsam eveniet quisquam doloremque quam eius
            perferendis, tempora dignissimos tenetur asperiores officiis.
            Placeat sit fugit maxime dolore rerum ab.
          </td>
          <td className="px-6 py-4">$2999</td>
          <td className="px-6 py-4">$2999</td>
        </tr>
      </tbody>
    </table>
  );
}

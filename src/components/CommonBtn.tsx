import React from "react";

export default function CommonBtn({ name }: { name: string }) {
  return (
    <button type="button" className="common_btn">
      {name}
    </button>
  );
}

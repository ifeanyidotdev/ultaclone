import { NextRouter, useRouter } from "next/router";
import React from "react";

function Product(): JSX.Element {
  const router: NextRouter = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h2>{id}</h2>
    </div>
  );
}

export default Product;

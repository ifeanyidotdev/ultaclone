import { NextRouter, useRouter } from "next/router";
import React from "react";

function Product(): JSX.Element {
  const router: NextRouter = useRouter();
  const { id } = router.query;

  return (
    <div>
      <div>
        <form action="" method="post"></form>
      </div>
      <div></div>
    </div>
  );
}

export default Product;

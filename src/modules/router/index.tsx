import { createHashRouter } from "react-router-dom";
import { ALGORITHMS } from "../algorithms";
import { HomePage } from "../pages";

export const router = createHashRouter([
    {
      path: '/',
      element: <HomePage/>
    },
    ...ALGORITHMS.map(({ id, page }) => ({
      path: id,
      element: page,
    }))
])

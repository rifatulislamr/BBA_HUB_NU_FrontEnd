import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useCourseCart = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: courseCart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user.email}`
      );
      return res.json();
    },
  });

  return [courseCart, refetch];
};

export default useCourseCart;

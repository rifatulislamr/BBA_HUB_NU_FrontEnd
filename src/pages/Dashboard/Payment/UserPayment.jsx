import { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCourseCart from "../../../hooks/useCourseCart";
import { AuthContext } from "../../../providers/AuthProvider";


const UserPayment = () => {

  const [courseCart, refetch] = useCourseCart();
  const {user} = useContext(AuthContext);
  console.log(courseCart);
    


    return (
        <div className="w-full px-10">
    <SectionTitle heading="User Payment" />

    </div>
);
};

export default UserPayment;
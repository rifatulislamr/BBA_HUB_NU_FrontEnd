import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const UserPayment = () => {
    // const { user } = useContext(AuthContext);
    // const { name, price } = item;
    const [amount, setAmount] = useState('');
  // Add other payment details state variables here

  const handlePayment = async () => {
    try {
      // Make an API request to BKash API with payment details
      const response = await axios.post('BKASH_API_URL', {
        amount,
        // Add other payment details here
      });

      // Handle the response from BKash
      console.log(response.data);
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };
  



    return (
        <div className="w-full px-10">
    <SectionTitle heading="User Payment" />

    <div className="flex items-center justify-center bg-white p-5 m-14 rounded-xl shadow-lg">
      <div className="bg-rose-500 p-6 rounded-3xl shadow-md w-auto h-auto">
        <h2 className="text-white text-lg mb-4">Make a Payment</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700">Amount:</label>
            <input
              type="text"
              id="amount"
              className="border border-gray-400 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          {/* Add other payment form fields here */}
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
            onClick={handlePayment}
          >
            Pay with bKash
          </button>
        </form>
      </div>

      <h1 className="text-3xl font-semibold mb-4">bKash Payment</h1>

      {/* Rest of the cart or page content goes here */}
    </div>
  </div>
);
};

export default UserPayment;
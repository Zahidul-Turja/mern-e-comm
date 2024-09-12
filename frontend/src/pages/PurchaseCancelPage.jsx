import { XCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PurchaseCancelPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-lg bg-gray-800 shadow-xl"
      >
        <div className="p-6 sm:p-8">
          <div className="flex justify-center">
            <XCircle className="mb-4 h-16 w-16 text-red-500" />
          </div>
          <h1 className="mb-2 text-center text-2xl font-bold text-red-500 sm:text-3xl">
            Purchase Cancelled
          </h1>
          <p className="mb-6 text-center text-gray-300">
            Your order has been cancelled. No charges have been made.
          </p>
          <div className="mb-6 rounded-lg bg-gray-700 p-4">
            <p className="text-center text-sm text-gray-400">
              If you encountered any issues during the checkout process, please
              don&apos;t hesitate to contact our support team.
            </p>
          </div>
          <div className="space-y-4">
            <Link
              to={"/"}
              className="flex w-full items-center justify-center rounded-lg bg-gray-700 px-4 py-2 font-bold text-gray-300 transition duration-300 hover:bg-gray-600"
            >
              <ArrowLeft className="mr-2" size={18} />
              Return to Shop
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PurchaseCancelPage;

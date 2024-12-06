import React from 'react';

const Payment = () => {
    return (
        <section id="payment" className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-[#55537b] mb-8 text-center">Payment Information</h2>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-[#57465c] mb-4">Registration Fees</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between">
                                    <span>Early Bird Registration</span>
                                    <span className="font-semibold">$50</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Regular Registration</span>
                                    <span className="font-semibold">$75</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Late Registration</span>
                                    <span className="font-semibold">$100</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#57465c] mb-4">Payment Methods</h3>
                            <p className="text-gray-600 mb-4">
                                We accept the following payment methods:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li>Credit/Debit Cards</li>
                                <li>Bank Transfer</li>
                                <li>PayPal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;
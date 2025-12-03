"use client"
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const AIRecommendationsPanel = ({ data, onClose }) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-xl max-w-lg w-full p-6 sm:p-8 md:p-10 my-5">
                {/* Summary */}
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                    Case Summary
                </h2>
                <p className="text-gray-700 text-base sm:text-lg mb-6 wrap-break-word">
                    {data.summary}
                </p>

                {/* Recommendations */}
                <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                        Recommendations
                    </h3>
                    <ul className="space-y-2">
                        {data.recommendations.map((rec, idx) => (
                            <li
                                key={idx}
                                className="flex flex-col sm:flex-row justify-between bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                            >
                                <span className="font-medium text-gray-800">{rec.title}:</span>
                                <span className="text-gray-700 sm:ml-4">{rec.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Flags */}
                <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                        Flags
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                        {data.flags.map((flag, idx) => (
                            <li
                                key={idx}
                                className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm sm:text-base font-medium"
                            >
                                <CheckCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
                                {flag}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Close Button */}
                <div className="text-center">
                    <button
                        onClick={onClose}
                        className=" w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors duration-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AIRecommendationsPanel;

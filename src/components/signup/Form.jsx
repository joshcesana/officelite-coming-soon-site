import React, { useState } from "react";
import ArrowDownIcon from "../../images/sign-up/icon-arrow-down.svg";
import CheckIcon from "../../images/sign-up/icon-check.svg";

import styles from "./Form.module.css";

const DropdownForm = () => {
    const plans = [
        { name: "Basic Pack", price: "Free" },
        { name: "Pro Pack", price: "$9.99" },
        { name: "Ultimate Pack", price: "$19.99" },
    ];

    const [selectedPlan, setSelectedPlan] = useState(plans[0]); // Default to the first plan
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    function selectPlan(plan) {
        setSelectedPlan(plan);
        setIsDropdownOpen(false);
    }

    return (
        <form
            className="relative bg-white rounded-xl shadow-lg p-6 sm:px-10 sm:pt-11 sm:pb-12 w-full mx-auto max-w-[445px] z-10"
            aria-labelledby="form-heading"
        >
            <div className="flex flex-col gap-6">
                {/* Name Field */}
                <label htmlFor="name" className="sr-only">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className={styles.formInput}
                    required
                />

                {/* Email Field */}
                <label htmlFor="email" className="sr-only">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className={styles.formInput}
                    required
                />

                {/* Plan Dropdown */}
                <label htmlFor="package" className="sr-only">
                    Package
                </label>
                <div className="relative w-full">
                    <button
                        type="button"
                        id="package"
                        className={`${styles.formInput} flex justify-between items-center cursor-pointer`}
                        onClick={toggleDropdown}
                        aria-haspopup="listbox"
                        aria-expanded={isDropdownOpen}
                        aria-labelledby="package-label"
                    >
                        <span className="flex items-center">
                            <span className="font-bold text-dark-blue">{selectedPlan.name}</span>
                            <span className="font-bold text-dark-blue opacity-40 ml-3">{selectedPlan.price}</span>
                        </span>
                        <img
                            src={ArrowDownIcon.src}
                            alt=""
                            className={`mr-6 w-[13px] h-[8px] transition duration-300 ${
                                isDropdownOpen ? "rotate-180" : ""
                            }`}
                        />
                    </button>

                    <ul
                        role="listbox"
                        className={`py-0 border border-blue-gray border-opacity-20 absolute w-full bg-white rounded-xl shadow-dropdown mt-2 opacity-0 pointer-events-none transition-opacity ${
                            isDropdownOpen ? "opacity-100 pointer-events-auto" : ""
                        }`}
                    >
                        {plans.map((plan, index) => (
                            <li
                                key={plan.name}
                                role="option"
                                aria-selected={selectedPlan.name === plan.name}
                                className={`px-7 cursor-pointer transition hover:bg-blue-100 ${
                                    index === 0 ? "rounded-t-xl" : ""
                                } ${
                                    index === plans.length - 1
                                        ? "rounded-b-xl"
                                        : "border-b border-blue-gray border-opacity-25"
                                }`}
                                onClick={() => selectPlan(plan)}
                                tabIndex={0}
                            >
                                <div className="flex py-6 justify-between items-center">
                                    <div className="flex items-center">
                                        <span className="text-dark-blue font-bold">{plan.name}</span>
                                        <span className="font-bold text-dark-blue opacity-40 ml-3">{plan.price}</span>
                                    </div>
                                    {selectedPlan.name === plan.name && (
                                        <img
                                            src={CheckIcon.src}
                                            alt="Selected"
                                            className="w-4 h-3 text-primary"
                                        />
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Phone Number Field */}
                <label htmlFor="phone" className="sr-only">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    className={styles.formInput}
                />

                {/* Company Field */}
                <label htmlFor="company" className="sr-only">
                    Company
                </label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company"
                    className={styles.formInput}
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-5 bg-primary text-white font-bold rounded-full px-4 py-4 w-full shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:bg-opacity-90"
                >
                    Get on the list
                </button>
            </div>
        </form>
    );
};

export default DropdownForm;

export const basicInfoValidationData = {

    // ==========================
    // POSITIVE SCENARIOS
    // ==========================

    positiveCases: [

        {
            testName: "Urban Individual Resident",
            payload: {
                request_type: "scheme_basic_information",
                scheme_description: "Urban Resident Scheme",
                in_operative_date: "2025-12-31",
                branch_type: "Urban",
                customer_type: "Individual",
                customer_sub_type: "Resident",
                from_age_group: 18,
                to_age_group: 60,
                gender: "All",
                membership_type: "Regular",
                customer_risk_rating: 1
            }
        },

        {
            testName: "Main Individual Women",
            payload: {
                request_type: "scheme_basic_information",
                scheme_description: "Women Savings Scheme",
                in_operative_date: "2025-12-31",
                branch_type: "Main",
                customer_type: "Individual",
                customer_sub_type: "Women",
                from_age_group: 18,
                to_age_group: 60,
                gender: "Female",
                membership_type: "Regular",
                customer_risk_rating: 2
            }
        },

        {
            testName: "Rural Individual Minor",
            payload: {
                request_type: "scheme_basic_information",
                scheme_description: "Minor Deposit Scheme",
                in_operative_date: "2025-12-31",
                branch_type: "Rural",
                customer_type: "Individual",
                customer_sub_type: "Minor",
                from_age_group: 1,
                to_age_group: 18,
                gender: "All",
                membership_type: "Regular",
                customer_risk_rating: 3
            }
        },

        {
            testName: "Corporate Trust",
            payload: {
                request_type: "scheme_basic_information",
                scheme_description: "Trust Corporate Scheme",
                in_operative_date: "2025-12-31",
                branch_type: "Urban",
                customer_type: "Corporate",
                customer_sub_type: "Trust",
                from_age_group: 18,
                to_age_group: 60,
                gender: "All",
                membership_type: "Regular",
                customer_risk_rating: 4
            }
        },

        {
            testName: "Corporate NGO",
            payload: {
                request_type: "scheme_basic_information",
                scheme_description: "NGO Corporate Scheme",
                in_operative_date: "2025-12-31",
                branch_type: "Clearing",
                customer_type: "Corporate",
                customer_sub_type: "NGO",
                from_age_group: 18,
                to_age_group: 60,
                gender: "All",
                membership_type: "Regular",
                customer_risk_rating: 5
            }
        }

    ],

    // ==========================
    // BOUNDARY SCENARIOS
    // ==========================

    boundaryCases: [

        {
            testName: "Minimum Risk Rating",
            payload: {
                request_type: "scheme_basic_information",
                scheme_description: "Min Risk Scheme",
                in_operative_date: "2025-12-31",
                branch_type: "Urban",
                customer_type: "Individual",
                customer_sub_type: "Resident",
                from_age_group: 18,
                to_age_group: 60,
                gender: "All",
                membership_type: "Regular",
                customer_risk_rating: 1
            }
        },

        {
            testName: "Maximum Risk Rating",
            payload: {
                request_type: "scheme_basic_information",
                scheme_description: "Max Risk Scheme",
                in_operative_date: "2025-12-31",
                branch_type: "Urban",
                customer_type: "Individual",
                customer_sub_type: "Resident",
                from_age_group: 18,
                to_age_group: 60,
                gender: "All",
                membership_type: "Regular",
                customer_risk_rating: 5
            }
        },

        {
            testName: "Age Boundary 18-18",
            payload: {
                request_type: "scheme_basic_information",
                scheme_description: "Age Boundary Scheme",
                in_operative_date: "2025-12-31",
                branch_type: "Urban",
                customer_type: "Individual",
                customer_sub_type: "Resident",
                from_age_group: 18,
                to_age_group: 18,
                gender: "All",
                membership_type: "Regular",
                customer_risk_rating: 2
            }
        },

        {
            testName: "Age Boundary 60-60",
            payload: {
                request_type: "scheme_basic_information",
                scheme_description: "Senior Scheme",
                in_operative_date: "2025-12-31",
                branch_type: "Urban",
                customer_type: "Individual",
                customer_sub_type: "Senior Citizen",
                from_age_group: 60,
                to_age_group: 60,
                gender: "All",
                membership_type: "Regular",
                customer_risk_rating: 2
            }
        }

    ],

    // ==========================
    // NEGATIVE SCENARIOS
    // ==========================

    negativeCases: [

        {
            testName: "Empty Scheme Description",
            payload: {
                request_type: "scheme_basic_information",
                scheme_description: "",
                in_operative_date: "2025-12-31",
                branch_type: "Urban",
                customer_type: "Individual",
                customer_sub_type: "Resident",
                from_age_group: 18,
                to_age_group: 60,
                gender: "All",
                membership_type: "Regular",
                customer_risk_rating: 2
            }
        },

        {
            testName: "Risk Rating Zero",
            payload: {
                request_type: "scheme_basic_information",
                scheme_description: "Invalid Risk",
                in_operative_date: "2025-12-31",
                branch_type: "Urban",
                customer_type: "Individual",
                customer_sub_type: "Resident",
                from_age_group: 18,
                to_age_group: 60,
                gender: "All",
                membership_type: "Regular",
                customer_risk_rating: 0
            }
        },

        {
            testName: "Risk Rating Greater Than 5",
            payload: {
                request_type: "scheme_basic_information",
                scheme_description: "Invalid Risk",
                in_operative_date: "2025-12-31",
                branch_type: "Urban",
                customer_type: "Individual",
                customer_sub_type: "Resident",
                from_age_group: 18,
                to_age_group: 60,
                gender: "All",
                membership_type: "Regular",
                customer_risk_rating: 6
            }
        },

        {
            testName: "Invalid Age Range",
            payload: {
                request_type: "scheme_basic_information",
                scheme_description: "Invalid Age",
                in_operative_date: "2025-12-31",
                branch_type: "Urban",
                customer_type: "Individual",
                customer_sub_type: "Resident",
                from_age_group: 60,
                to_age_group: 18,
                gender: "All",
                membership_type: "Regular",
                customer_risk_rating: 2
            }
        },

        {
            testName: "Invalid Branch Type",
            payload: {
                request_type: "scheme_basic_information",
                scheme_description: "Invalid Branch",
                in_operative_date: "2025-12-31",
                branch_type: "TEST_BRANCH",
                customer_type: "Individual",
                customer_sub_type: "Resident",
                from_age_group: 18,
                to_age_group: 60,
                gender: "All",
                membership_type: "Regular",
                customer_risk_rating: 2
            }
        }

    ]
};
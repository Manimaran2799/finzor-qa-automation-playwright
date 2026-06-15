export const schemeData = {

    baseURL: "https://stage.finzorcbs.com/auth/login",

    basicInfo: {
        request_type: "scheme_basic_information",
        scheme_description: "Savings Scheme for Adults",
        in_operative_date: "2025-12-31",
        branch_type: "Urban",
        customer_type: "Individual",
        customer_sub_type: "Resident",
        from_age_group: 18,
        to_age_group: 60,
        gender: "All",
        membership_type: "Regular",
        customer_risk_rating: 2
    },

    operationalStepOne: {
        request_type: "scheme_operational_instruction_step_one",
        schema_id :"",
        mode_of_operation: "Single",
        minimum_balance: 1000,
        maximum_balance: 50000,
        minimum_period: 6,
        minimum_duration: "Month",
        maximum_period: 15,
        maximum_duration: "Month",
        always_calculate_premature_on_days: 1,
        calculate_premature_on_days: true,
        period_in_multiples_of: 6,
        default_display: true,
        collateral_security_as_value: true
    },

    operationalStepTwo:{
          "request_type":"scheme_operational_instruction_step_two",
          "schema_id": "",
         "closure_min_period_consider": true,
         "max_account_to_be_opened": 2,
         "max_limit_to_be_given": 50000.00,
         "security_type": "Gold",
         "rebate_on_gold_loan_days": 15,
         "plr_link": true,
         "calculate_tds_after_maturity": true,
         "allow_receipt_without_funding": false
},
 facilitiesStepOne:{
        "request_type":"scheme_facilities_step_one",
        "schema_id": "",
        "nominee_facility": true,
        "chequebook": false,
        "max_period_to_consider": "12M",
        "max_flat_interest_rate": true,
        "slab_sequence_to_consider": "Descending",
        "member_required": true,
        "allow_advances_to_director": false,
        "allow_advances_to_relative_to_director": false,
        "saving_account_required": true,
        "secured": true,
        "third_party_security": false,
        "create_default_insurance": true,
        "margin_rate": 12.50
        },
facilitiesStepTwo: {
        "request_type":"scheme_facilities_step_two",
        "schema_id": "",
        "modified_maturity_disposal_instruction_fdr": true,
        "maturity_disposal_option": "Auto Renewal",
        "moratorium_period_excluded": false,
        "installment_amount_calculation_type": "Flat",
        "closure_additional_charges_editable": true,
        "link_own_receipt_to_advance": true,
        "link_third_party_receipt_to_advance": false,
        "link_other_deposit_account": true,
        "interest_to_include_in_lad": true,
        "salary_earner": false,
        "accept_thrift_account": true,
        "rd_principal_penal_calculation": false
    },
facilitiesStepThree: {
  "request_type":"scheme_facilities_step_three",
  "schema_id": "",
  "link_to_advance_facility": true,
  "apply_loan_interest_rate": false,
  "advances_rate_own": 8.00,
  "advance_rate_third_party": 9.50,
  "update_limit_on_fd_renew": true
},

freeTransactionLimit:   {
        "request_type" :"scheme_free_transaction_limit",
        "schema_id": "",
        "transaction_type": "bank Transaction",
        "number_of_transactions": 3,
        "duration": "Per Quarter"
  },

    
    
echannel_facilities:  {
        "request_type" : "scheme_echannel_facilities",
        "schema_id": "",
        "facility": "Cridit",
        "facility_enabled": true,
        "min_alert": 1000.00,
        "max_alert": 100000.00,
        "imps_limit": 50000.00,
        "pos_limit": 25000.00,
        "atm_limit": 20000.00,
        "ecom_limit": 30000.00,
        "atm_payment_limit": 15000.00,
        "bill_payment_limit": 20000.00

  },
linkProduct :  {
    "request_type" : "scheme_link_product",
    "schema_id": "",
    "product_id" : 1,
    "product_name": "Gold",
    "product_code": "PRO0001"
  },

linkCharges:  {
    "request_type" : "scheme_link_charges",
   "schema_id": "",
    "charge_type": "Revoke",
    "charge_enabled": true
  },
tb_and_bs_related:  {
    "request_type": "scheme_tb_and_bs_related",
    "schema_id": "",
    "scheme_display": true,

    "gl_code_1": "GL001",
    "gl_code_2": "GL002",
    "gl_code_3": "GL003",
    "gl_code_4": "GL004",

    "both_side": true,

    "contra_code_1": "CC001",
    "contra_code_2": "CC002",
    "contra_code_3": "CC003",
    "contra_code_4": "CC004"
  }





};
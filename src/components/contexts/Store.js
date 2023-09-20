import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
    user_data: {
        about_info: {
            specialization: "",
            first_name: "",
            last_name: "",
            phone: "",
            gender: "",
            age: "",
            email: "",
            location: "",
        },
        expert_details: {
            experience: "",
            area_of_expertise: [],
            languages: [],
            qualification: []
        },
        working_status: {
            status: "",
            name_of_employee: "",
            location_of_employer:""
        },
        your_bio: {
            biography:"",
            documents: {
                education: {},
                rci_registration:{},
                license:{},
                profesional_membership: {}
            }
        },
        is_verified: false,
        profile_status: false,
        access_token: "",
    },
    profile_updation: {
        about_you: false,
        expert_details: false,
        working_status: false,
        your_bio: false,
        is_completed: false,
    },
};

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export const Context = createContext(initialState);

export default Store;

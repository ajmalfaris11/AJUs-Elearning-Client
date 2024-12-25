import { apiSlice } from "../api/apiSlice";
import { userRegistration } from "./authSlice";

type RegistrationResponse = {
  message: string;
  activationToken: string;
};

type RegistrationData = {
  // name: string;
  // email: string;
  // password: string;
};


export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegistrationResponse, RegistrationData>({
      query: (data) => ({
        url: "registration",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userRegistration({
              token: result.data.activationToken,
            })
          );
        } catch (error: any) {
          if (error?.data) {
            console.error("Server error:", error.data);
          } else if (error?.status) {
            console.error(`HTTP Error (Status: ${error.status}):`, error);
          } else {
            console.error("Unhandled error format:", error);
          }
        }
      },
    }),
    activation: builder.mutation({  //
      query: ({ activation_token, activation_code }) => ({
        url: "activate-user",
        method: "POST",
        body: {
          activation_token,
          activation_code,
        },
      }),
    }),
  }),
});

export const { useRegisterMutation, useActivationMutation } = authApi;

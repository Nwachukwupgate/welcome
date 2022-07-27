import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


if(process.env.APP_env === 'development') {
    var api_origin = 'https://api.droomwork.io'
  } else {
    api_origin = 'http://api.droomwork.io'
    // api_origin = 'http://localhost:3000'
  }
  
    if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search)
    const TokenAuthless = urlParams.get('enter')
    if(TokenAuthless){localStorage.setItem('authless', JSON.stringify(TokenAuthless))}
    var Token = JSON.parse(localStorage.getItem("authless"))
    }

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.droomwork.io',
        _mode: "cors",
        get mode() {
          return this._mode;
        },
        set mode(value) {
          this._mode = value;
        },
        prepareHeaders: headers => {
          headers.set(
            'Authorization', `Bearer ${Token}`,
            'Access-Control-Allow-Origin', "*",
            // 'Accept', '*/*',
            // 'Access-Control-Allow-Header', "X-Requested-With",
            // 'mode', 'no-cors',
          );
          headers.set('Content-type', 'application/json');
          headers.set('Accept', 'application/json');
          headers.set('Cache-Control', 'no-cache');
          headers.set('Pragma', 'no-cache');
          headers.set('Expires', '0');
          // headers.set('mode', 'cors');
          return headers
        } 
    }),
    tagTypes: ['Custom', 'Register', 'Hire'],

    endpoints: builder => ({

        customContact: builder.mutation({
            query: initialName  => ({
                  url: 'api/v1/comp/customContact',
                  method: 'POST',
                  body : initialName,
                  headers: {
                    "Content-Type": "application/json; charset=utf-8"
                  },            
                  // Include the entire post object as the body of the request
                }),
              // transformResponse : (response, meta, arg ) => response.data,
              invalidatesTags: ['Custom'],
          }),

          registerUser: builder.mutation({
            query: newUser  => ({
                  url: 'api/v1/all/register',
                  method: 'POST',
                  body : newUser,
                  headers: {
                    "Content-Type": "application/json"
                  },            
                  // Include the entire post object as the body of the request
                }),
              // transformResponse : (response, meta, arg ) => response.data,
              invalidatesTags: ['Register'],
          }),

          quickHire: builder.mutation({
            query: hireName  => ({
                  url: 'api/v1/comp/quickHire',
                  method: 'POST',
                  body : hireName,
                  headers: {
                    "Content-Type": "application/json"
                  },           
                  // Include the entire post object as the body of the request
                }),
              // transformResponse : (response, meta, arg ) => response.data,
              invalidatesTags: ['Hire'],
          }),

    })
})

export const { useCustomContactMutation, useRegisterUserMutation, useQuickHireMutation } = apiSlice

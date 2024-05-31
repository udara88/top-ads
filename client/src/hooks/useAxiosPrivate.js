"use client";
import { useEffect } from "react";
import { customFetchPrivate } from "../lib/api/index";
import useRefreshToken from "./useRefreshToken";
import { useAppSelector } from "@/redux/store";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { accessToken } = useAppSelector((state) => state.user);
  useEffect(() => {
    const requestIntercept = customFetchPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken} `;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = customFetchPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return customFetchPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      customFetchPrivate.interceptors.request.eject(requestIntercept);
      customFetchPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [refresh]);

  return customFetchPrivate;
};

export default useAxiosPrivate;

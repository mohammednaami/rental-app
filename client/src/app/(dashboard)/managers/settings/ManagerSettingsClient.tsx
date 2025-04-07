"use client";

import Loading from "@/components/general/Loading";
import SettingsForm from "@/components/general/SettingsForm";
import {
  useGetAuthUserQuery,
  useUpdateManagerSettingsMutation,
} from "@/state/api";
import React from "react";

const ManagerSettingsClient = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const [updateManager] = useUpdateManagerSettingsMutation();

  if (isLoading) return <Loading />;

  const initialData = {
    name: authUser?.userInfo.name,
    email: authUser?.userInfo.email,
    phoneNumber: authUser?.userInfo.phoneNumber,
  };

  const handleSubmit = async (data: typeof initialData) => {
    await updateManager({
      cognitoId: authUser?.cognitoInfo?.userId,
      ...data,
    });
  };

  return (
    <SettingsForm
      initialData={initialData}
      onSubmit={handleSubmit}
      userType="manager"
    />
  );
};

export default ManagerSettingsClient;

import React from "react";

import "./app-services.css";
import { useTranslation } from "react-i18next";

const AppServices = () => {
  const { t } = useTranslation();
  return (
    <div className="container app-service">
      <h4>{t("Services.obj1h")}</h4>
      <p>{t("Services.obj1p")}</p>
      <p>{t("Services.obj2p")}</p>
      <p>{t("Services.obj3p")}</p>
      <p>{t("Services.obj4p")}</p>
    </div>
  );
};

export default AppServices;

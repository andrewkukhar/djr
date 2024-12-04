import React from "react";
import { keyframes } from "@mui/system";

export const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const formatDateToLocalAmericaPacific = (date) => {
  return new Date(date).toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const generateUniqueInvoiceNumber = (date) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "2-digit",
    month: "short",
    day: "2-digit",
  });
  return `CNT-INV-${formattedDate.toUpperCase().replace(/\./g, "")}`;
};
export const generateUniqueDepositNumber = (date) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "2-digit",
    month: "short",
    day: "2-digit",
  });
  return `BLL-${formattedDate.toUpperCase().replace(/\./g, "")}`;
};

export const generateUniqueFileName = (date, fileFormat) => {
  const sanitizedFileName = `Event at ${formatDateToLocalAmericaPacific(
    date
  )} ${fileFormat} ${formatDateToLocalAmericaPacific(new Date())}`.replace(
    /[.,?/\\|<>]/g,
    ""
  );
  return sanitizedFileName;
};

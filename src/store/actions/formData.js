import { FORM_DATA_UPDATE, FORM_DATA_RESET } from "../types/formData";

export const formDataUpdate = (payload) => ({
  type: FORM_DATA_UPDATE,
  payload,
});

export const formDataReset = () => {
  return {
    type: FORM_DATA_RESET,
  };
};

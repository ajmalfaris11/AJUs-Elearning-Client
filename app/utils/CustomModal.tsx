import React, { FC } from "react";
// React and FC (Functional Component) are used for defining and creating the functional component in TypeScript.

import { Modal, Box } from "@mui/material";
// `Modal` and `Box` are Material-UI components:
// - `Modal`: Provides a popup container for content.
// - `Box`: A flexible wrapper for layout and styling.

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: any;
  component: any;
  setRoute?: (route: string) => void;
}

const CustomModal: FC<Props> = ({
  open,
  setOpen,
  setRoute,
  component: Component,
}) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[90%] 800px:w-auto bg-white dark:bg-slate-900 rounded-[24px] shadow p-5 outline-none flex justify-center">
        <Component setOpen={setOpen} setRoute={setRoute} />
      </Box>
    </Modal>
  );
};

export default CustomModal;

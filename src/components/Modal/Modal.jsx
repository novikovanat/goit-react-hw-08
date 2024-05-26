// import * as React from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
// import ContactForm from "../contactForm/ContactForm";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };

// function ChildModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}
// >Open Child Modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style, width: 200 }}>
//           <h2 id="child-modal-title">Text in a child modal</h2>
//           {/* <ContactForm id="child-modal-description"/> */}
//           <Button onClick={handleClose}>Close Child Modal</Button>
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }

// export default function NestedModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button onClick={handleOpen} startIcon={<LoginOutlinedIcon />}>Change contact</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="parent-modal-title"
//         aria-describedby="parent-modal-description"
//       >
//         <Box sx={{ ...style, width: 800 }}>
//           <h2 id="parent-modal-title">Text in a modal</h2>
//           <p id="parent-modal-description">
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </p>
//           <ContactForm id="parent-modal-description" isButton={false}/>

//           <ChildModal />
//         </Box>
//       </Modal>
//     </div>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ContactForm from "../contactForm/ContactForm";
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} startIcon={<ChangeCircleOutlinedIcon/>}>Update contact</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          {/* <Typography  sx={{ mt: 2 }}> */}
            <ContactForm isUpdate={true} id="modal-modal-description"/>
          {/* </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
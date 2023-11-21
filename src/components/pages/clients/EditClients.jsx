import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
//import MenuItem from "@mui/material/MenuItem";
//import InputAdornment from "@mui/material/InputAdornment";
import { db } from "../../../firebase-config"; // importamos la conexion a firebase
import {
  collection,
  updateDoc,
  //addDoc,
  getDocs,
  doc,
} from "firebase/firestore"; // importamos los metodos de firebase para agregar, actualizar y eliminar documentos
import Swal from "sweetalert2";
import { useAppStore } from "../../../appStore"; // importamos el store de zustand

export default function EditProducts({ fid, closeEvent }) {
  const [codigo, setCodigo] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [nit, setNit] = useState("");
  const [telefono, setTelefono] = useState("");
  const setRows = useAppStore((state) => state.setRows); // traer los datos de firebase y guardarlos en rows
  const empCollectionRef = collection(db, "clients"); // referencia a la coleccion de firebase

  useEffect(() => {
    console.log("FID: ", fid.id);
    //destructuring
    setCodigo(fid.codigo);
    setNombres(fid.nombres);
    setApellidos(fid.apellidos);
    setNit(fid.nit);
    setTelefono(fid.telefono);
  }, []);

  const handleCodigoChange = (e) => {
    setCodigo(e.target.value);
  };
  const handleNombresChange = (e) => {
    setNombres(e.target.value);
  };
  const handleApellidosChange = (e) => {
    setApellidos(e.target.value);
  };
  const handleNitChange = (e) => {
    setNit(e.target.value);
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };

  const getUsers = async () => {
    // traer los datos de firebase y guardarlos en rows
    const data = await getDocs(empCollectionRef); // getDocs: lee todos los documentos de una colección  getDocs(collection(db, "users"));
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const udateClient = async () => {
    //actualizar
    const userDoc = doc(db, "clients", fid.id); // referencia al documento de firebase del usuario id: fid.id
    const newFields = {
      codigo: codigo,
      nombres: nombres,
      apellidos: apellidos,
      nit: nit,
      telefono: telefono,
    };
    await updateDoc(userDoc, newFields); // userDoc: referencia al documento de firebase del usuario id: fid.id
    getUsers();
    closeEvent();
    Swal.fire(
      "Actualizado ",
      "El Registro ha sido Actualizado con éxito ",
      "success"
    );
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Editar Clientes...
      </Typography>
      <IconButton
        style={{ position: "absolute", right: "0", top: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Codigo del Cliente"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            value={codigo}
            onChange={handleCodigoChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Nombre del Cliente"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            value={nombres}
            onChange={handleNombresChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Apellido del Cliente"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            value={apellidos}
            onChange={handleApellidosChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Nit"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            value={nit}
            onChange={handleNitChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Telefono"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            type="number"
            value={telefono}
            onChange={handleTelefonoChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button
              variant="contained"
              sx={{ minWidth: "100%" }}
              onClick={udateClient}
            >
              Save
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
}

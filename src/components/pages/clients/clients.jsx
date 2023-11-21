import NavBar from "../../nav/NavBar";
import SideNav from "../../nav/SideNav";
import Box from "@mui/material/Box";
import ClientList from "./ClientList";
//import ProductList from "./ProductList";
//<ProductList />
export default function Products() {
  return (
    <>
      <NavBar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
        <ClientList />
      </Box>
    </>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import CustomTable from "../components/CustomTable";

export default function Home() {
  return (
    <Box sx={{ height: "100vh" }}>
      <h1 className="text-4xl text-center pt-4 font-bold">
        POC on Nextjs and React
      </h1>
      <CustomTable />
    </Box>
  );
}

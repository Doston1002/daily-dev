
import { Content, Hero, Sidebar } from "@/components";
import Layout from "@/layout/Layout";
import { Box } from "@mui/material";



export default function Home() {
  return (
    <Layout
    >
      <Hero/>
     <Box sx={{display:'flex', gap:'20', padding:'28px'}}>
      <Sidebar />
      <Content/>
     </Box>
    </Layout>
  );
}

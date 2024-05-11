import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getJDList } from "./apiHelper/api";
import {
  Box,
  Button,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import "@fontsource/poppins";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

function App() {
  const [count, setCount] = useState(0);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJDList().then((data) => {
      setJobs(data.jdList);
      console.log(data.jdList);
    });
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
        
          sx={{
            fontFamily: "Poppins",
            display: "flex",
            flexWrap: "wrap",
            gap: "1%",
          }}
        >
          {jobs.map((job) => {
            return (
              <Box 
                key={job.id}
                xs={3}
                sx={{
                  fontFamily: "Poppins",
                  width: "350px",
                  margin: "10px 0",
                }}
              >
                <Card
                  elevation={2}
                  sx={{
                    borderRadius: "20px",
                  }}
                >
                  <CardContent>
                    <div>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <img
                          src={job.logoUrl}
                          style={{
                            borderRadius: "10%",
                            height: "40px",
                            width: "40px",
                          }}
                        />
                        <div
                          style={{
                            marginLeft: "10px",
                            display: " flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            variant=""
                            fontSize={12}
                            color="grey"
                            letterSpacing={1.5}
                            fontWeight={600}
                          >
                            {job.companyName}
                          </Typography>
                          <Typography fontSize={14}>{job.jobRole}</Typography>
                          <Typography fontSize={12} my={0.5}>
                            {job.location}
                          </Typography>
                        </div>
                      </div>
                      <Typography fontWeight={600}>About Company</Typography>
                      <Typography
                        fontSize={13}
                        color="gray"
                        maxHeight={200}
                        overflow="hidden"
                      >
                        {job.jobDetailsFromCompany}
                      </Typography>

                      <div
                        style={{
                          margin: "15px 0",
                        }}
                      >
                        <Typography
                          fontWeight={500}
                          fontSize={14}
                          color="gray"
                          letterSpacing={1}
                        >
                          Minimum Experience
                        </Typography>

                        <Typography fontWeight={500} fontSize={12}>
                          {job.minExp ?? "-"}
                        </Typography>
                      </div>
                    </div>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Button
                        sx={{
                          borderRadius: "10px",
                          textTransform: "none",
                          backgroundColor: "#32ffa9",
                          color: "black",
                          padding: "12px",
                        }}
                      >
                        ⚡️ Easy Apply
                      </Button>

                      <Button
                        sx={{
                          borderRadius: "10px",
                          padding: "12px",
                          textTransform: "none",
                          backgroundColor: "#2828c5",
                          color: "white",
                        }}
                      >
                        Unlock referral asks
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;

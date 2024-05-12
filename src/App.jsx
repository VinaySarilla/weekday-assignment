import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getJDList } from "./apiHelper/api";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import "@fontsource/poppins";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import JobCard from "./components/JobCard";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterWrapper from "./components/FilterWrapper";

import { store } from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { updateJobs } from "./store/jobSlice";
import { filterData } from "./utilityHelper";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

function App() {
  const [count, setCount] = useState(0);

  const [offset, setOffset] = useState(0);

  const jobs = useSelector((state) => state.jobs.value);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filter.value);
  // const filteredJobsData = useSelector((state) => dispatch(filteredJobs(filters)));

  useEffect(() => {
    if (jobs.length === 0) {
      fetchMoreJobs();
    }
  }, []);

  useEffect(() => {
    let data = filterData(jobs, filters);
    setFilteredJobs(data);
  }, [filters]);

  //when filter is

  const fetchMoreJobs = () => {
    getJDList(offset + 1).then((data) => {
      setOffset(offset + 1);
      // setJobs([...jobs, ...data.jdList]);

      if (jobs.length === 0) {
        setFilteredJobs(data.jdList);
      }
      dispatch(updateJobs(data.jdList));
    });
  };

  return (
    <div
      style={{
        maxHeight: "100vh",
        overflow: "auto",
      }}
      onScroll={(e) => {
        console.log("scrolling");

        //did it reach the bottom?
        if (
          e.target.scrollHeight - e.target.scrollTop ===
          e.target.clientHeight
        ) {
          fetchMoreJobs();
        }
      }}
    >
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <FilterWrapper
            onChange={() => {
              let data = filterData(jobs, filters);

              console.log("filteredJobs", data, jobs);
            }}
          />
          {/* Sticky filter div */}

          <Box sx={{ flexGrow: 1, paddingBottom: 5, paddingTop: 5 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {filteredJobs.map((job, index) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                  <JobCard job={job} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;

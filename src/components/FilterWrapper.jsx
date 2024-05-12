import {
  Autocomplete,
  Box,
  Chip,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter } from "../store/filterSlice";

const FilterWrapper = ({ onChange }) => {
  let filterList = [
    {
      title: "Roles",
      options: jobRoles,
      key: "jobRole",
      multiple: true,
    },
    // {
    //   title: "Company Size",
    //   options: companySize,
    // },
    {
      title: "Experience",
      options: experience,
      multiple: false,
      key: "minExp",
    },
    {
      title: "Remote",
      options: remote,
      key: "location",
      multiple: true,
    },
    // {
    //   title: "Tech Stack",
    //   options: techStack,
    // },
    {
      title: "Salary Range",
      options: SalarayRange,
      key: "minJdSalary",
      multiple: false,
    },
  ];

  const filters = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("filters", filters);
  }, [filters]);

  const handleFilterChange = (key, value) => {
    dispatch(updateFilter({ [key]: value }));

    onChange();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        alignItems: "center",
        zIndex: 100,
        padding: 2,
        backgroundColor: "white",
        position: "sticky",
        top: 0,
      }}
    >
      {filterList.map((filter, id) => (
        <FilterItem
          options={filter.options}
          title={filter.title}
          multiple={filter.multiple}
          onChange={(values) => {
            handleFilterChange(filter.key, values);
          }}
          key={id}
        />
      ))}
    </Box>
  );
};

export default FilterWrapper;

const FilterItem = ({
  options,
  title,
  handleFilterChange,
  onChange,
  multiple,
}) => {
  const [value, setValue] = React.useState(null);

  return (
    <div>
      <Typography
        sx={{
          visibility: value ? "visible" : "hidden",
        }}
        mb={0.5}
        fontSize="12px"
      >
        {title}
      </Typography>
      <Autocomplete
        multiple={multiple}
        id="tags-outlined"
        sx={{
          minWidth: 200,
          "& .MuiAutocomplete-popupIndicator": {
            borderLeft: "1px solid #ccc",
            borderRight: "0px",
            borderRadius: "0px",
          },

          "& .MuiAutocomplete-popupIndicatorOpen": {
            borderRight: "1px solid #ccc",
            borderLeft: "0px",
            borderRadius: "0px",
          },
        }}
        popupIcon={<KeyboardArrowDownIcon />}
        options={options}
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        renderTags={(value, getTagProps) => {
          return value.map((option, index) => (
            <Chip
              {...getTagProps({ index })}
              key={index}
              deleteIcon={<ClearIcon />}
              label={option.title}
              sx={{
                "& .MuiChip-deleteIcon": {
                  color: "black",
                  height: "15px",
                  width: "15px",
                },
                borderRadius: "3px",
                fontSize: "12px",
                maxHeight: "24px",
              }}
            />
          ));
        }}
        renderOption={(props, option, { selected }) => {
          return (
            <ListItem
              {...props}
              sx={{
                fontSize: "14px",
                padding: "5px",
                color: "darkgray",

                "&:hover": {
                  backgroundColor: "blue",
                },
              }}
            >
              {option.title}
            </ListItem>
          );
        }}
        onChange={(event, newValue) => {
          console.log("newValue", newValue);
          if (newValue?.length === 0) {
            newValue = null;
          }
          setValue(newValue);
          onChange(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            sx={{
              "& .MuiAutocomplete-input": {
                // fontSize: "12px",
                minHeight: "24px",
              },
            }}
            // label="filterSelectedOptions"
            placeholder={value ? "" : title}
          />
        )}
      />
    </div>
  );
};

let jobRoles = [
  { title: "Frontend", value: "frontend" },
  { title: "Backend", value: "backend" },
  { title: "Fullstack", value: "fullstack" },
  //ios
  { title: "iOS", value: "ios" },
  //android
  { title: "Android", value: "android" },
  //devops
  { title: "DevOps", value: "devops" },
  //flutter
  { title: "Flutter", value: "flutter" },
  //react native
  { title: "React Native", value: "reactnative" },
  //react
  { title: "React", value: "react" },
  //angular
  { title: "Angular", value: "angular" },

  //data science
  { title: "Data Science", value: "datascience" },
];

let companySize = [
  { title: "1-10", value: "1-10" },
  { title: "11-50", value: "11-50" },
  { title: "51-200", value: "51-200" },
  { title: "201-500", value: "201-500" },
  { title: "501-1000", value: "501-1000" },
  { title: "1001-5000", value: "1001-5000" },
  { title: "5001-10000", value: "5001-10000" },
  { title: "10001+", value: "10001+" },
];

let experience = [
  { title: "1", value: 1 },
  { title: "2", value: 2 },
  { title: "3", value: 3 },
  { title: "4", value: 4 },
  { title: "5", value: 5 },
  { title: "6", value: 6 },
  { title: "7", value: 7 },
  { title: "8", value: 8 },
  { title: "9", value: 9 },
  { title: "10", value: 10 },
];

let remote = [
  { title: "Remote", value: "remote" },
  { title: "Onsite", value: "onsite" },
  { title: "Hybrid", value: "hybrid" },
];

let techStack = [
  { title: "React", value: "react" },
  { title: "Node", value: "node" },
  { title: "Python", value: "python" },
  { title: "Java", value: "java" },
  { title: "C++", value: "c++" },
  { title: "C#", value: "c#" },
  { title: "Ruby", value: "ruby" },
  { title: "Go", value: "go" },
  { title: "Swift", value: "swift" },
  { title: "Kotlin", value: "kotlin" },
  { title: "PHP", value: "php" },
  { title: "Rust", value: "rust" },
  { title: "Scala", value: "scala" },
  { title: "Perl", value: "perl" },
  { title: "R", value: "r" },
  { title: "Haskell", value: "haskell" },
  { title: "Lua", value: "lua" },
  { title: "Matlab", value: "matlab" },
  { title: "Julia", value: "julia" },
  { title: "TypeScript", value: "typescript" },
  { title: "Javascript", value: "javascript" },
];

let SalarayRange = [
  { title: "0L", value: 0 },
  { title: "10k", value: 10 },
  { title: "20k", value: 20 },
  { title: "30k", value: 30 },
  { title: "40k", value: 40 },
  { title: "50k", value: 50 },
  { title: "60k", value: 60 },
  { title: "70k", value: 70 },
  { title: "80k", value: 80 },
];

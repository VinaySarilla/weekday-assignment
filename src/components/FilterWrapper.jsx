import {
  Autocomplete,
  Box,
  Chip,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FilterWrapper = () => {
  let filterList = [
    {
      title: "Roles",
      options: jobRoles,
    },
    {
      title: "Company Size",
      options: companySize,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        zIndex: 100,
        padding: 2,
        backgroundColor: "white",
        position: "sticky",
        top: 0,
      }}
    >
      {filterList.map((filter, id) => (
        <FilterItem options={filter.options} title={filter.title} key={id} />
      ))}
    </Box>
  );
};

export default FilterWrapper;

const FilterItem = ({ options, title }) => {
  const [value, setValue] = React.useState([]);

  return (
    <div>
      <Typography
        sx={{
          visibility: value.length > 0 ? "visible" : "hidden",
        }}
        mb={0.5}
        fontSize="12px"
      >
        {title}
      </Typography>
      <Autocomplete
        multiple
        id="tags-outlined"
        size="small"
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
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            sx={{
              "& .MuiAutocomplete-input": {
                fontSize: "12px",
              },
            }}
            // label="filterSelectedOptions"
            placeholder="Roles"
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

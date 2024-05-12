import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const JobCard = ({ job }) => {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: "20px",
        fontFamily: "Poppins",
      }}
    >
      <CardContent>
        <div style={{
            position: "relative",
        }}>
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

          <div>
            <SalarayRange
              currencyCode={job.salaryCurrencyCode}
              minSalary={job.minJdSalary}
              maxSalary={job.maxJdSalary}
            />
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
          <div className="bg-transparent" style={{
            position: "absolute",
            bottom: "45px",
            width: "100%",
            height: "100px",
            display: "flex",
            alignItems: "end",
          }}>
            <Button
              variant="text"            
              sx={{
                textTransform: "none",
                textAlign: "center",
                width: "100%",
              }}
            >
              View job
            </Button>
          </div>

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
  );
};

export default JobCard;

const getCurrencySymbol = (currencyCode) => {
  const currencySymbols = {
    USD: "$",
    INR: "₹",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
  };
  return currencySymbols[currencyCode];
};

const SalarayRange = ({ minSalary, maxSalary, currencyCode }) => {
  const getUnit = (currencyCode) => {
    const currencyUnits = {
      USD: "K",
      INR: "LPA",
      EUR: "K",
      GBP: "K",
      JPY: "K",
    };
    return currencyUnits[currencyCode];
  };

  return (
    <Stack
      direction="row"
      useFlexGap
      flexWrap="wrap"
      fontSize={13}
      fontWeight={600}
      sx={{
        color: "#525252",
        letterSpacing: 2,
        marginBottom: "10px",
      }}
    >
      Estimated Salary:
      <span
        style={{
          marginLeft: "5px",
        }}
      >
        {getCurrencySymbol(currencyCode)}
        {minSalary} - {maxSalary}
      </span>
      {getUnit(currencyCode)}
    </Stack>
  );
};

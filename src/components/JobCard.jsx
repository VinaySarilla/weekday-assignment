import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const JobCard = ({ job }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: "20px",
        fontFamily: "Poppins",
      }}
    >
      <CardContent>
        <div
          style={{
            position: "relative",
          }}
        >
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
              <Typography fontSize={14} textTransform={"capitalize"}>{job.jobRole}</Typography>
              <Typography fontSize={12} my={0.5} textTransform={"capitalize"}>
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
          <Typography fontWeight={700} fontSize={13}>About us</Typography>

          <Typography
            fontSize={13}
            color="gray"
            maxHeight={200}
            overflow="hidden"
          >
            {job.jobDetailsFromCompany}
          </Typography>
          <div
            className="bg-transparent"
            style={{
              position: "absolute",
              bottom: "45px",
              width: "100%",
              height: "100px",
              display: "flex",
              alignItems: "end",
            }}
          >
            <Button
              onClick={handleClickOpen}
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
              {job.minExp ?? "-"} years
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
            <Avatars /> Unlock referral asks
          </Button>
        </Box>
      </CardContent>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent
          sx={{
            fontFamily: "Poppins",
          }}
        >
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
              <Typography fontSize={14} textTransform={"capitalize"}>{job.jobRole}</Typography>
              <Typography fontSize={12} my={0.5} textTransform={"capitalize"}>
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
          <Typography fontWeight={600} fontSize={10}>About us</Typography>
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
              {job.minExp ?? "-"} years
            </Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Button
              sx={{
                borderRadius: "10px",
                textTransform: "none",
                backgroundColor: "#32ffa9",
                color: "black",
                padding: "0 20px",
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
              <Avatars /> Unlock referral asks
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
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

const Avatars = () => (
  <div
    style={{
      display: "flex",
      gap: "10px",
      marginRight: "10px",
    }}
  >
    <Avatar
      sx={{
        height: "30px",
        width: "30px",
        filter: "blur(1.5px)",
      }}
      alt="Remy Sharp"
      src="https://i.pravatar.cc/200"
    />
    <Avatar
      sx={{
        height: "30px",
        width: "30px",
        filter: "blur(1px)",
      }}
      alt="Travis Howard"
      src="https://i.pravatar.cc/300"
    />
  </div>
);

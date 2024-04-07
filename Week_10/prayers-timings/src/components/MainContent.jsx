// import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Prayer from "./Prayer";
// import * as React from 'react';
// import Box from '@mui/material/Box';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { useState } from "react";

export default async function MainContent() {
  const [timings, setTimings] = useState();

  const data = await axios.get(
    "https://api.aladhan.com/v1/timingsByCity?city=KSA&country=Riyadh"
  );

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      {/* TOP RAW   */}
      <Grid container>
        <Grid xs={6}>
          <div>
            <h2>سبتمبر 9 2023 | 4:20</h2>
            <h1>مكة المكرمة</h1>
          </div>
        </Grid>

        <Grid xs={6}>
          <div>
            <h2>متبقي حتى صلاة العصر</h2>
            <h1>00:10:00</h1>
          </div>
        </Grid>
      </Grid>
      {/* END TOP RAW   */}

      <Divider style={{ borderColor: "white", opacity: "0.3" }} />

      {/* PRAYERS CARDS */}
      <Stack
        direction="row"
        justifyContent="space-around"
        style={{ marginTop: "50px" }}
      >
        <Prayer
          name={"الفجر"}
          time={"04:10"}
          image={
            "https://wepik.com/api/image/ai/9a07baa7-b49b-4f6b-99fb-2d2b908800c2"
          }
        />
        <Prayer
          name={"الضهر"}
          time={"05:10"}
          image={
            "https://wepik.com/api/image/ai/9a07bb45-6a42-4145-b6aa-2470408a2921"
          }
        />
        <Prayer
          name={"العصر"}
          time={"06:10"}
          image={
            "https://wepik.com/api/image/ai/9a07bb90-1edc-410f-a29a-d260a7751acf"
          }
        />
        <Prayer
          name={"المغرب"}
          time={"07:10"}
          image={
            "https://wepik.com/api/image/ai/9a07bbe3-4dd1-43b4-942e-1b2597d4e1b5"
          }
        />
        <Prayer
          name={"العشاء"}
          time={"08:10"}
          image={
            "https://wepik.com/api/image/ai/9a07bc25-1200-4873-8743-1c370e9eff4d"
          }
        />
      </Stack>
      {/* END PRAYERS CARDS */}

      {/* SELECT CITY */}
      <Stack
        direction="row"
        justifyContent="center"
        style={{ marginTop: "20px" }}
      >
        <FormControl style={{ width: "20%" }}>
          <InputLabel id="demo-simple-select-label">
            <span style={{ color: "white" }}>المدينة</span>
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      {/* END SELECT CITY */}
    </>
  );
}

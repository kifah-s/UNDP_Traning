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
import moment from "moment";
import "moment/dist/locale/ar-dz";
moment.locale("ar");
import { useState, useEffect } from "react";

export default function MainContent() {
  //* STATES ..
  const [timings, setTimings] = useState({
    Fajr: "04:21",
    Dhuhr: "11:55",
    Asr: "15:23",
    Sunset: "18:12",
    Isha: "19:42",
  });

  const [selectedCity, setSelectedCity] = useState({
    displayName: "مكة المكرمة",
    apiName: "Makkah al Mukarramah",
  });

  const [today, setToday] = useState("");

  const [timer, setTimer] = useState(10);
  //* END STATES ..

  const avilableCities = [
    { displayName: "مكة المكرمة", apiName: "Makkah al Mukarramah" },
    { displayName: "الرياض", apiName: "Riyadh" },
    { displayName: "الدمام", apiName: "Dammam" },
  ];

  const getTimings = async () => {
    console.log("Colling the API");
    const response = await axios.get(
      //* API ..
      `https://api.aladhan.com/v1/timingsByCity?city=KSA&country=${selectedCity.apiName}`
    );
    setTimings(response.data.data.timings);
  };

  //* EFFECT ..
  useEffect(() => {
    getTimings();
  }, [selectedCity]);

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("calling timer");
      setupCountdownTimer();
    }, 1000);

    const t = moment();
    setToday(t.format("MMM Do YYYY | h:mm"));

    return () => {
      clearInterval(interval);
    };
  }, []);
  //* END EFFECT ..

  const setupCountdownTimer = () => {
    const momentNow = moment();

    let nextPrayer = null;

    if (
      momentNow.isAfter(moment(timings["Fajr"], "hh:mm")) &&
      momentNow.isAfter(moment(timings["Dhuhr"], "hh:mm"))
    ) {
      console.log("next prayer is Dhuhr");
    } else if (
      momentNow.isAfter(moment(timings["Dhuhr"], "hh:mm")) &&
      momentNow.isAfter(moment(timings["Asr"], "hh:mm"))
    ) {
      console.log("next prayer is Asr");
    } else if (
      momentNow.isAfter(moment(timings["Asr"], "hh:mm")) &&
      momentNow.isAfter(moment(timings["Sunset"], "hh:mm"))
    ) {
      console.log("next prayer is Maghrib");
    } else if (
      momentNow.isAfter(moment(timings["Sunset"], "hh:mm")) &&
      momentNow.isAfter(moment(timings["Isha"], "hh:mm"))
    ) {
      console.log("next prayer is Isha");
    } else if (
      momentNow.isAfter(moment(timings["Isha"], "hh:mm")) &&
      momentNow.isAfter(moment(timings["Fajr"], "hh:mm"))
    ) {
      console.log("next prayer is Fajr");
    }

    console.log(momentNow.isAfter(moment(timings["Isha"], "hh:mm")));
  };

  const handleCityChange = (event) => {
    const cityObject = avilableCities.find((city) => {
      return city.apiName == event.target.value;
    });
    console.log("the new value is: ", event.target.value);
    setSelectedCity(cityObject);
  };

  return (
    <>
      {/* TOP RAW   */}
      <Grid container>
        <Grid xs={6}>
          <div>
            <h2>{today}</h2>
            <h1>{selectedCity.displayName}</h1>

            <h2>{timer}</h2>
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

      {/* DIVIDER */}
      <Divider style={{ borderColor: "white", opacity: "0.3" }} />
      {/* END DIVIDER */}

      {/* PRAYERS CARDS */}
      <Stack
        direction="row"
        justifyContent="space-around"
        style={{ marginTop: "50px" }}
      >
        <Prayer
          name="الفجر"
          time={timings.Fajr}
          image={
            "https://wepik.com/api/image/ai/9a07baa7-b49b-4f6b-99fb-2d2b908800c2"
          }
        />
        <Prayer
          name={"الضهر"}
          time={timings.Dhuhr}
          image={
            "https://wepik.com/api/image/ai/9a07bb45-6a42-4145-b6aa-2470408a2921"
          }
        />
        <Prayer
          name={"العصر"}
          time={timings.Asr}
          image={
            "https://wepik.com/api/image/ai/9a07bb90-1edc-410f-a29a-d260a7751acf"
          }
        />
        <Prayer
          name={"المغرب"}
          time={timings.Sunset}
          image={
            "https://wepik.com/api/image/ai/9a07bbe3-4dd1-43b4-942e-1b2597d4e1b5"
          }
        />
        <Prayer
          name={"العشاء"}
          time={timings.Isha}
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
            style={{ color: "white" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            onChange={handleCityChange}
          >
            {avilableCities.map((city) => {
              return (
                <MenuItem value={city.apiName} key={city.apiName}>
                  {city.displayName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Stack>
      {/* END SELECT CITY */}
    </>
  );
}

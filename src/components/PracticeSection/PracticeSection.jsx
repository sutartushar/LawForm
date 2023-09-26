import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import BusinessLaw1 from "../../assets/BusinessLaw1.svg";
import BusinessLaw2 from "../../assets/BusinessLaw2.svg";
import RealEstate from "../../assets/RealEstate.svg";
import Partnership from "../../assets/Partnership.svg";
import LandLord from "../../assets/LandLord.svg";
import ElderAbuse from "../../assets/ElderAbuse.svg";
import styles from "./PracticeSection.module.css";

const PracticeSection = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.TitleText}>
        <h1>Area of Practices</h1>
      </div>

      <div className={styles.CardWrapper}>
        <div className={styles.CardSection}>
          <Card sx={{ minWidth: 275 }}>
            <CardMedia
              className={styles.BigImage}
              sx={{
                height: 342,
                width: 752,
                borderRadius: "14px",
                background:
                  "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 0.05%, rgba(0, 0, 0, 0.60) 65.00%, rgba(0, 0, 0, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat"
              }}
              image={BusinessLaw1}
              alt="BusinessLaw"
            />
          </Card>

          <Card sx={{ minWidth: 275 }}>
            <CardMedia
              className={styles.SmallImage}
              sx={{
                height: 342,
                width: 358,
                borderRadius: "14px",
                background:
                  "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 0.05%, rgba(0, 0, 0, 0.60) 65.00%, rgba(0, 0, 0, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat"
              }}
              image={Partnership}
              alt="Partnership img"
            />
          </Card>
        </div>

        <div className={styles.CardSection}>
          <Card sx={{ minWidth: 275 }}>
            <CardMedia
              className={styles.SmallImage}
              sx={{
                height: 342,
                width: 358,
                borderRadius: "14px",
                background:
                  "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 0.05%, rgba(0, 0, 0, 0.60) 65.00%, rgba(0, 0, 0, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat"
              }}
              image={RealEstate}
              alt="RealEstate"
            />
          </Card>

          <Card sx={{ minWidth: 275 }}>
            <CardMedia
              className={styles.BigImage}
              sx={{
                height: 342,
                width: 752,
                borderRadius: "14px",
                background:
                  "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 0.05%, rgba(0, 0, 0, 0.60) 65.00%, rgba(0, 0, 0, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat"
              }}
              image={BusinessLaw2}
              alt="BusinessLaw2 img"
            />
          </Card>
        </div>

        <div className={styles.CardSection}>
          <Card sx={{ minWidth: 275 }}>
            <CardMedia
              className={styles.BigImage}
              sx={{
                height: 342,
                width: 752,
                borderRadius: "14px",
                background:
                  "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 0.05%, rgba(0, 0, 0, 0.60) 65.00%, rgba(0, 0, 0, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat"
              }}
              image={LandLord}
              alt="LandLord"
            />
          </Card>

          <Card sx={{ minWidth: 275 }}>
            <CardMedia
              className={styles.SmallImage}
              sx={{
                height: 342,
                width: 358,
                borderRadius: "14px",
                background:
                  "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 0.05%, rgba(0, 0, 0, 0.60) 65.00%, rgba(0, 0, 0, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat"
              }}
              image={ElderAbuse}
              alt="ElderAbuse img"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PracticeSection;

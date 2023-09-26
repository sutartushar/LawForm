// import React from 'react'
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import styles from "./ChooseSection.module.css";
import GiftImage from "../../assets/GiftLogo.svg";

const ChooseSection = () => {
  return (
    <div className={styles.SectionWrap}>
      <div className={styles.HeadTitle}>
        <p>Why Choose us?</p>
      </div>
      <div className={styles.CardWrapper}>
        <div className={styles.ContentWrap}>
          <Card sx={{ minWidth: 75 }} className={styles.Cards}>
            <CardContent>
              <img src={GiftImage} alt="Giftimg" className={styles.GiftLogo} />
              <Typography
                variant="h5"
                component="div"
                className={styles.HeadText}
              >
                98% Success Rate
              </Typography>
              <Typography component="div" className={styles.pText}>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequatduis enim velit mollit Exer.
                </p>
              </Typography>
            </CardContent>
            <Chip label="Read More" className={styles.pill} />
          </Card>
        </div>

        <div className={styles.ContentWrap}>
          <Card sx={{ minWidth: 75 }} className={styles.middleCard}>
            <CardContent>
              <img src={GiftImage} alt="Giftimg" className={styles.GiftLogo} />
              <Typography
                variant="h5"
                component="div"
                className={styles.HeadText}
              >
                100% Success Rate
              </Typography>
              <Typography component="div" className={styles.pText}>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequatduis enim velit mollit Exer.
                </p>
              </Typography>
            </CardContent>
            <Chip label="Read More" className={styles.pill} />
          </Card>
        </div>

        <div className={styles.ContentWrap}>
          <Card sx={{ minWidth: 75 }} className={styles.Cards}>
            <CardContent>
              <img src={GiftImage} alt="Giftimg" className={styles.GiftLogo} />
              <Typography
                variant="h5"
                component="div"
                className={styles.HeadText}
              >
                100% Success Rate
              </Typography>
              <Typography component="div" className={styles.pText}>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequatduis enim velit mollit Exer.
                </p>
              </Typography>
            </CardContent>
            <Chip label="Read More" className={styles.pill} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChooseSection;

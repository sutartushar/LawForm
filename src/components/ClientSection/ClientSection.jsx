import React from "react";
import styles from "./ClientSection.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Arrows from "../../assets/Arrows.svg";
import Janeimg from "../../assets/Jane.svg";
import Devonimg from "../../assets/Devon.svg";
import Robertimg from "../../assets/Robert.svg";
import Typography from "@mui/material/Typography";

const ClientSection = () => {
  return (
    <div className={styles.SectionWrapper}>
      <div className={styles.SectionHead}>
        <p className={styles.Ptext}>What says our happy Clients</p>
        <img className={styles.Arrows} src={Arrows} alt="Arrows" />
      </div>

      <div className={styles.ClientCards}>
        <Card sx={{ minWidth: 75 }} className={styles.Cards1}>
          <CardContent className={styles.ClientContent}>
            <img src={Janeimg} alt="Janeimg" className={styles.Clientimg} />
            <Typography
              variant="h5"
              component="div"
              className={styles.HeadText}
            >
              Jane Cooper
            </Typography>
            <Typography component="p" className={styles.ClientRole}>
              <p>CEO of Hunt</p>
            </Typography>
            <Typography component="p" className={styles.ClientInfo}>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 75 }} className={styles.Cards2}>
          <CardContent className={styles.ClientContent}>
            <img src={Devonimg} alt="Devonimg" className={styles.Clientimg} />
            <Typography
              variant="h5"
              component="div"
              className={styles.HeadText}
            >
              Devon Lane
            </Typography>
            <Typography component="p" className={styles.ClientRole}>
              <p>CEO of Hunt</p>
            </Typography>
            <Typography component="p" className={styles.ClientInfo}>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 75 }} className={styles.Cards1}>
          <CardContent className={styles.ClientContent}>
            <img src={Robertimg} alt="Robertimg" className={styles.Clientimg} />
            <Typography
              variant="h5"
              component="div"
              className={styles.HeadText}
            >
              Robert Fox
            </Typography>
            <Typography component="p" className={styles.ClientRole}>
              <p>CEO of Hunt</p>
            </Typography>
            <Typography component="p" className={styles.ClientInfo}>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClientSection;

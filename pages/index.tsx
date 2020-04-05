import React from "react";
import { PageLayout } from "../components/PageLayout";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import { TambolaBoard } from "../styles/tambola.styles";
import { ResponsiveDialog } from "../components/ResponsiveDialog";

const BORAD_NUMBERS = 90;

const Home = () => {
  const [checked, setChecked] = React.useState([]);
  const [currentNumber, setCurrentNumber] = React.useState(0);

  const [isModalOpen, setOpenModal] = React.useState(false);

  const isFinished = () => {
    return checked.length === 90;
  };

  const isChecked = (n: number) => {
    return checked.includes(n);
  };

  const pickNumber = () => {
    while (1) {
      const number = Math.ceil(Math.random() * BORAD_NUMBERS);
      if (!isChecked(number)) {
        console.log(number);
        const newChecked = [...checked];
        newChecked.push(number);
        setChecked(newChecked);
        setCurrentNumber(number);
        break;
      }

      if (isFinished()) {
        break;
      }
    }
  };

  return (
    <PageLayout pageTitle="Home">
      <section
        style={{
          paddingBottom: "40px",
          padding: "5% 6%",
          overflow: "hidden",
          width: "100%",
          paddingTop: "0",
        }}
      >
        <Grid container spacing={3}>
          <Grid item container md={8} xs={12}>
            <Grid item xs={12}>
              <TambolaBoard>
                {Array(BORAD_NUMBERS)
                  .fill(0)
                  .map((num, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Chip
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "100%",
                          fontSize: "12px",
                          margin: "2px",
                          background: isChecked(index + 1) ? "#f1c40f" : "",
                          fontWeight: 900,
                        }}
                        size="medium"
                        label={index + 1}
                        color="secondary"
                      />
                    </div>
                  ))}
              </TambolaBoard>
            </Grid>

            <Grid
              item
              container
              xs={12}
              alignItems="center"
              justify="space-between"
              style={{ paddingTop: "20px" }}
            >
              <Grid item>
                <Button
                  style={{
                    color: "#880D1E",
                    margin: "5px 0",
                    border: "2px solid #880D1E",
                    borderRadius: "16px",
                  }}
                  variant="outlined"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  START/RESET
                </Button>
              </Grid>
              {currentNumber > 0 && !isFinished() && (
                <Grid item>
                  <Typography
                    variant="h1"
                    align="center"
                    style={{
                      fontSize: "44px",
                      fontWeight: 300,
                    }}
                  >
                    {currentNumber}
                  </Typography>
                </Grid>
              )}
              {isFinished() && (
                <Grid item>
                  <Typography
                    variant="h1"
                    align="center"
                    style={{
                      fontSize: "44px",
                      fontWeight: 300,
                    }}
                  >
                    GAME OVER !
                  </Typography>
                </Grid>
              )}
              <Grid item>
                <Button
                  style={{
                    color: "#880D1E",
                    margin: "5px 0",
                    border: "2px solid #880D1E",
                    borderRadius: "16px",
                  }}
                  variant="outlined"
                  onClick={() => pickNumber()}
                >
                  PICK NUMBER
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography
              variant="h1"
              align="center"
              style={{
                fontSize: "44px",
                fontWeight: 300,
              }}
            >
              HISTORY
            </Typography>
            <div
              style={{
                maxHeight: "60vh",
                overflowY: "scroll",
                paddingTop: "20px",
              }}
            >
              {checked.map((num) => (
                <Chip
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "100%",
                    margin: "2px",
                    fontWeight: 900,
                  }}
                  key={num}
                  size="medium"
                  label={num}
                  clickable
                  color="primary"
                />
              ))}
            </div>
          </Grid>
        </Grid>
      </section>
      <ResponsiveDialog
        title="START/RESET GAME ?"
        open={isModalOpen}
        handleClose={() => setOpenModal(false)}
        renderActions={() => (
          <>
            <Button
              onClick={() => {
                setChecked([]);
                setCurrentNumber(0);
                setOpenModal(false);
              }}
              variant="contained"
            >
              YES
            </Button>
            <Button variant="contained" onClick={() => setOpenModal(false)}>
              NO
            </Button>
          </>
        )}
      >
        <Typography>ARE YOU SURE YOU WANT TO START/RESET THE GAME</Typography>
      </ResponsiveDialog>
    </PageLayout>
  );
};

export default Home;

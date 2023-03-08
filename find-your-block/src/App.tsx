import {
  Button,
  Typography,
  useTheme,
  Box,
  Grid,
  CardActions,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Header } from "./components/Header/Header";

import { CARDS } from "./data/cards";

import { MapPin } from "phosphor-react";

export default function App(): JSX.Element {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Box
        sx={{
          padding: "6.25rem",
          [theme.breakpoints.down("md")]: {
            padding: "6.25rem 3.25rem",
          },
          [theme.breakpoints.down("sm")]: {
            padding: "6.25rem 2.25rem",
          },
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="2.5rem"
        >
          <Typography
            variant="h3"
            sx={{
              [theme.breakpoints.down("lg")]: {
                fontSize: "1.5rem",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.25rem",
              },
            }}
          >
            Blocos recomendados
          </Typography>
          <Box
            sx={{
              border: "1px solid #EAEAEA",
              padding: "0.5rem",
              borderRadius: "0.375rem",

              [theme.breakpoints.down("sm")]: {
                display: "flex",
                flexDirection: "column",
              },
            }}
          >
            <Button variant="contained">Lista</Button>
            <Button variant="text">Mapa</Button>
          </Box>
        </Box>

        <Grid
          container
          spacing={4}
          sx={{
            [theme.breakpoints.down("md")]: {},
          }}
        >
          {CARDS.map((CARD) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="max-content"
                    image={CARD.imgSrc}
                    alt={CARD.imgAlt}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {CARD.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {CARD.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  sx={{
                    padding: "0.75rem 1rem",
                  }}
                >
                  <Box display="flex" alignItems="center" gap="0.5rem">
                    <MapPin size={24} color="#E45858" weight="light" />
                    <Typography variant="caption">{CARD.city}</Typography>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

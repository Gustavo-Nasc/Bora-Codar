import { HeaderForm, HeaderUI } from "./Header.styled";
import { TextField } from "../TextField/TextField";
import * as Icon from "phosphor-react";
import {
  Autocomplete as Combobox,
  Button,
  TextField as Input,
  Typography,
  useTheme,
} from "@mui/material";
import Box from "@mui/system/Box";
import ilustra01 from "../../assets/ilustra-01.png";
import ilustra02 from "../../assets/ilustra-02.png";

import { STATES } from "../../data/states";

export function Header(): JSX.Element {
  const theme = useTheme();

  return (
    <HeaderUI>
      <img
        src={ilustra01}
        style={{
          left: 0,
          top: 0,
        }}
      />
      <img
        src={ilustra02}
        style={{
          right: 0,
          bottom: 0,
        }}
      />

      <div>
        <Typography variant="h1">Find Your Block</Typography>
        <Typography
          variant="h2"
          sx={{
            [theme.breakpoints.down("md")]: {
              fontSize: "2.5rem",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.5rem",
            },
          }}
        >
          Encontre os <b>melhores blocos</b>
          <br />
          de carnaval de 2023
        </Typography>

        <HeaderForm>
          <TextField>
            <Icon.MagnifyingGlass size={24} color="#E45858" />
            <Input
              label="Pesquise por nome"
              size="small"
              variant="outlined"
              sx={{ width: "15rem" }}
            />
          </TextField>

          <TextField>
            <Icon.MapPin size={24} color="#E45858" weight="light" />
            <Combobox
              id="country-select-demo"
              sx={{ width: "15rem" }}
              options={STATES}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://raw.githubusercontent.com/iconolatry/brazilian-states-flags/da53c2f1fe28ed67d2049b624f21536c337fd118/svg/${option.name}.svg`}
                    srcSet={`https://raw.githubusercontent.com/iconolatry/brazilian-states-flags/da53c2f1fe28ed67d2049b624f21536c337fd118/svg/${option.name}.svg`}
                    alt=""
                  />
                  {option.label} ({option.code})
                </Box>
              )}
              renderInput={(params) => (
                <Input {...params} label="Pesquise por Estado" size="small" />
              )}
            />
          </TextField>

          <Button
            variant="contained"
            sx={{
              height: "3.75rem",
            }}
          >
            Buscar Agora
          </Button>
        </HeaderForm>
      </div>
    </HeaderUI>
  );
}

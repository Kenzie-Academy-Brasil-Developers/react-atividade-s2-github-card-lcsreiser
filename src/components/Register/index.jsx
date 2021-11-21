import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import "./style.css";

const Register = ({ cardResult, setCardResult }) => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    fetch(`https://api.github.com/repos/${data.name}`)
      .then((response) => response.json())
      .then((response) => {
        setCardResult(response);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            placeholder="Digite um repositório"
            size="small"
            variant="outlined"
            {...register("name")}
          />
          <p className="input-error">{errors.name?.message}</p>
        </div>

        <Button variant="contained" type="submit">
          Pesquisar
        </Button>
      </form>
    </div>
  );
};

export default Register;

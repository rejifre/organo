import Button from "../Button";
import DropdownList from "../DropdownList";
import TextField from "../TextField";
import "./Form.css";

const Form = () => {
  const teams = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const onSave = (event) => {
    event.preventDefault();
    console.log("Form foi submetido");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField mandatory={true} label="Nome" placeholder="Digite o seu nome" />
        <TextField mandatory={true} label="Cargo" placeholder="Digite o seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
        <DropdownList mandatory={true}label="Time" items={teams} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;

import { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import GridColor from "./Gridcolor";

const ColorForm = () => {
  // leer del localStorage al inicio
  const colorsLS = JSON.parse(localStorage.getItem("colorkey")) || [];

  const [colors, setColors] = useState(colorsLS);
  const [color, setColor] = useState("#000000");

  // cada vez que cambia colors, lo guardo
  useEffect(() => {
    localStorage.setItem("colorkey", JSON.stringify(colors));
  }, [colors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (colors.includes(color)) return; // opcional: evitar duplicados
    setColors([...colors, color]);
  };

  const deleteColor = (colorABorrar) => {
    const newColors = colors.filter((item) => item !== colorABorrar);
    setColors(newColors);
  };

  return (
    <div>
      <Card border="info">
        <Card.Header className="fw-bold">Paleta de colores 🎨</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex align-items-center">
              <Form.Label className="mb-0 me-2">Selecciona un color:</Form.Label>
              <Form.Control
                type="color"
                className="me-2"
                onChange={(e) => setColor(e.target.value)}
                defaultValue="#000000"
              />
              <Button variant="primary" type="submit">
                <PlusCircle className="me-1" />
                Agregar
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>

      {/* abajo pinto las cards */}
      <GridColor colors={colors} deleteColor={deleteColor} />
    </div>
  );
};

export default ColorForm;

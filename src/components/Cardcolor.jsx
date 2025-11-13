import { Card, Button, Col } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";

const CardColor = ({ color, deleteColor }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
      <Card className="h-100 shadow-sm">
        <div className="boxColor w-100" style={{ background: color }}></div>
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Card.Title className="mb-0">{color}</Card.Title>
          <Button variant="outline-danger" onClick={() => deleteColor(color)}>
            <XCircle className="me-1" />
            Borrar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardColor;

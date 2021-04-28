import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Card, Button, ListGroup } from 'react-bootstrap';
import NavbarTads from '../../components/NavbarTads';
import logoTads from '../../assets/nometadsbg.png';
import logoufrn from '../../assets/ufrn-logo.png';

import './styles.css';

function Contacts() {
  return (
    <>
      <NavbarTads />
      <main>
        <Container>
          <h3 className="mt-5">Contatos disponíveis</h3>
          <hr />
          <Row>
            <Col className="d-flex justify-content-center">
              <Card className="shadow mt-5" style={{ width: '18rem' }}>
                <Card.Img className="pt-2" variant="top" src={logoTads} />
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Email:</strong> tads@eaj.ufrn.br
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Telefone:</strong> (84) 3342-2297
                    </ListGroup.Item>
                  </ListGroup>
                  <a
                    className="btn btn-primary"
                    href="https://sigaa.ufrn.br/sigaa/public/curso/portal.jsf?id=94598200&lc=pt_BR"
                  >
                    Acessar
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center">
              <Card className="shadow mt-5" style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={logoufrn}
                  className="p-3"
                  style={{ height: '144px' }}
                />
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Email:</strong> Contato pelo site
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Telefone:</strong> (84) 992296501
                    </ListGroup.Item>
                  </ListGroup>
                  <a className="btn btn-primary" href="https://www.ufrn.br/">
                    Acessar
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Contacts;

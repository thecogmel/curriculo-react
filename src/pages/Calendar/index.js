import React from 'react';
import { Container, Tab, Nav, Col, Row } from 'react-bootstrap';
import NavbarTads from '../../components/NavbarTads';

import './styles.css';

function Calendar() {
  return (
    <>
      <NavbarTads />
      <main>
        <Container>
          <h3 className="my-3">Calendários disponíveis</h3>
          <div className="shadow p-3 mb-5 bg-body rounded">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="green" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">2020.1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2020.2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <p>
                        04/01/2021 à 11/01/2021 → Matrícula para o período
                        2020.1.
                      </p>
                      <p>
                        18/01/2021 à 19/01/2021 → Re-matrícula para o período
                        2020.1.{' '}
                      </p>
                      <p>18/01/2021 → Início do período letivo 2020.1.</p>
                      <p>
                        25/01/2021 → Início do período trancamento de turma
                        2020.1.
                      </p>
                      <p>
                        19/02/2021 → Término do período trancamento de turma
                        2020.1.
                      </p>
                      <p>30/04/2021 → Término do período letivo 2020.1.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>
                        04/01/2021 à 11/01/2021 → Matrícula para o período
                        2020.2.
                      </p>
                      <p>
                        18/01/2021 à 19/01/2021 → Re-matrícula para o período
                        2020.2
                      </p>
                      <p>18/01/2021 → Início do período letivo 2020.2.</p>
                      <p>
                        25/01/2021 → Início do período trancamento de turma
                        2020.2.
                      </p>
                      <p>
                        19/02/2021 → Término do período trancamento de turma
                        2020.2.
                      </p>
                      <p>30/04/2021 → Término do período letivo 2020.2.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Container>
      </main>
    </>
  );
}

export default Calendar;

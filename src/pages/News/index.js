import React from 'react';
import { Table, Container, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import NavbarTads from '../../components/NavbarTads';

import './styles.css';

function News() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('E-mail inválido').required('Campo necessário'),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <NavbarTads />
      <Container className="bg-white pt-3">
        <h3 className="mb-3">Notícias</h3>
        <Table className="shadow p-3 mb-5 bg-body rounded" striped hover>
          <thead>
            <tr>
              <th>Data</th>
              <th>Título</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10/02/2021 10:11</td>
              <td>
                <p>
                  Semana de defesa de Trabalhos de Conclus&#227;o de Curso -
                  Ano/Semestre 2020.2
                </p>
              </td>
            </tr>

            <tr>
              <td>10/02/2021 10:10</td>
              <td>
                <p>
                  Calend&#225;rio para projeto de Trabalho de Conclus&#227;o de
                  Curso Ano/Semestre 2021.1
                </p>
              </td>
            </tr>

            <tr>
              <td>10/02/2021 10:08</td>
              <td>
                <p>Plano de curso das turmas de 2020.2</p>
              </td>
            </tr>

            <tr>
              <td>17/08/2020 09:34</td>
              <td>
                <p>
                  Calend&#225;rio para projeto de Trabalho de Conclus&#227;o de
                  Curso Ano/Semestre 2020.2
                </p>
              </td>
            </tr>

            <tr>
              <td>17/08/2020 09:32</td>
              <td>
                <p>
                  Semana de defesa de Trabalhos de Conclus&#227;o de Curso -
                  Ano/Semestre 2020.1
                </p>
              </td>
            </tr>

            <tr>
              <td>12/08/2020 19:54</td>
              <td>
                <p>Plano de curso das turmas de 2020.1 - Retomada</p>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="shadow p-3 mb-5 bg-body rounded">
          <h3 className="my-3">Cadastre seu email para receber notícias!</h3>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={formik.handleChange}
                value={formik.values.email}
                isInvalid={!!formik.errors.email}
                isValid={formik.touched.email && !formik.errors.email}
              />
              <Form.Text className="text-muted">
                Nós nunca compartilharemos seu e-mail com ninguém.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Cadastrar
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default News;

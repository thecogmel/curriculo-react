import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import NavbarTads from '../../components/NavbarTads';
import EajAqui from '../../assets/eaj-aqui.jpg';
import EajFrente from '../../assets/eaj-frente.png';

import './styles.css';

function Home() {
  return (
    <>
      <NavbarTads />
      <main>
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 cover"
                src={EajFrente}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 cover"
                src={EajAqui}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="my-3">
            <p className="text-justify">
              O Curso Superior de Tecnologia em Análise e Desenvolvimento de
              Sistemas (TADS) tem como objetivo a formação de profissionais
              capazes de compreender o processo de construção e reconstrução do
              conhecimento no domínio da análise e desenvolvimento de sistemas
              e, dessa forma, realizar atividades de concepção, especificação,
              projeto, implementação, avaliação, suporte e manutenção de
              sistemas computacionais, orientando sua ação na sociedade em geral
              e no mundo do trabalho em particular para a busca de soluções para
              o setor produtivo (notadamente o setor primário da economia) e
              para a melhoria da qualidade de vida das populações. Os
              profissionais formados atuarão na área de análise e
              desenvolvimento de sistemas, podendo exercer atividades no campo
              da análise de sistemas, engenharia de software, gerência de
              projetos e administração de bancos de dados.
            </p>
            <p className="text-justify">
              Além da formação geral em Tecnologia em Análise e Desenvolvimento
              de Sistemas, o curso tem objetivo de promover a integração entre
              as ciências agrárias e a denominada Tecnologia da Informação (TI)
              com suas diversas subáreas, obtendo-se assim uma gama de
              benefícios e ampliação do espectro de formação profissional em
              nível superior, considerando que um curso desta natureza permitirá
              ao egresso propor soluções tecnológicas em software e/ou hardware
              para as ciências agrárias ou, usando uma nomenclatura mais
              específica e mercadológica, para a cadeia do agronegócio e da
              agricultura familiar, sendo, nesse sentido estratégico para o
              desenvolvimento regional e nacional. Tais objetivos baseiam-se na
              formação de Tecnólogos com capacidade técnico-científica e visão
              integral, ética e humanística, comprometidos com o bem estar da
              sociedade envolvida e com o desenvolvimento sustentável, exercendo
              todas as competências relacionadas à profissão.
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}

export default Home;

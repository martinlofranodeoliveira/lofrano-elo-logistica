import React from "react";
import {
  ArrowUpRight,
  Package,
  ArrowRight,
  Truck,
  MapPin,
  Check,
} from "./Icons.jsx";
import image_elo from "../assets/elo.webp";

const SectorImage = ({ name: e, alt: t }) => (
  <img src={image_elo} alt={t} width={1400} height={1e3} />
);
const DemoData1 = {
  "ELO-DEMO-01": {
    origin: `São Paulo`,
    destination: `Campinas`,
    status: 2,
    steps: [
      `Pedido recebido`,
      `Coleta ilustrativa`,
      `Em transferência`,
      `Entrega prevista`,
    ],
    desc: `Em transferência para a unidade de destino.`,
  },
  "ELO-DEMO-02": {
    origin: `Curitiba`,
    destination: `Joinville`,
    status: 3,
    steps: [
      `Pedido recebido`,
      `Coleta ilustrativa`,
      `Em transferência`,
      `Entrega concluída`,
    ],
    desc: `Ciclo demonstrativo concluído. Não corresponde a uma entrega real.`,
  },
};
function EloDemo() {
  let [trackingInput, setTrackingInput] = React.useState(`ELO-DEMO-01`),
    [trackingCode, setTrackingCode] = React.useState(`ELO-DEMO-01`),
    [trackingVisible, setTrackingVisible] = React.useState(!1),
    [routeStage, setRouteStage] = React.useState(`Distribuição`),
    d = trackingCode ? DemoData1[trackingCode] : null;
  return (
    <div className={`el-root`} id={`demo-top`}>
      <nav className={`el-nav`} aria-label={`Navegação Elo`}>
        <a href={`#demo-top`} className={`el-logo`}>
          elo
          <span>
            <ArrowUpRight size={34} aria-hidden={`true`} />
          </span>
        </a>
        <a href={`#el-solutions`}>Soluções</a>
        <a href={`#el-track`}>
          {`Acompanhar `}
          <Package size={17} />
        </a>
      </nav>
      <section className={`el-hero`}>
        <div className={`el-hero-copy`}>
          <p className={`el-kicker`}>CONECTANDO CADA ETAPA.</p>
          <h1>
            Entre a origem
            <br />e o destino,
            <br />
            <span>conte com elo.</span>
          </h1>
          <p>
            Uma visão simples para uma operação em movimento.
            <br />
            Informação no caminho, do início ao próximo passo.
          </p>
          <a href={`#el-track`}>
            {`Explore o rastreamento `}
            <ArrowRight size={19} />
          </a>
        </div>
        <div className={`el-hero-photo`}>
          <SectorImage
            name={`elo`}
            alt={`Centro logístico contemporâneo, conceito Elo`}
          />
          <div className={`el-photo-label`}>
            <Truck size={22} />
            <span>
              O movimento não para.<small>CENÁRIO LOGÍSTICO CONCEITUAL</small>
            </span>
          </div>
        </div>
      </section>
      <section className={`el-track`} id={`el-track`}>
        <div className={`el-track-intro`}>
          <p className={`el-kicker`}>01 / VISIBILIDADE NO CAMINHO</p>
          <h2>
            Cada etapa,
            <br />
            mais perto.
          </h2>
          <p>
            Experimente com os códigos fictícios
            <br />
            <strong>ELO-DEMO-01</strong>
            {` ou `}
            <strong>ELO-DEMO-02</strong>.
          </p>
          <form
            onSubmit={(t) => {
              t.preventDefault();
              let n = trackingInput.trim().toUpperCase();
              n in DemoData1
                ? (setTrackingCode(n), setTrackingVisible(!1))
                : (setTrackingCode(null), setTrackingVisible(!0));
            }}
          >
            <label htmlFor={`el-code`}>Código de demonstração</label>
            <div>
              <input
                id={`el-code`}
                value={trackingInput}
                onChange={(e) => setTrackingInput(e.target.value)}
                autoComplete={`off`}
                placeholder={`ELO-DEMO-01`}
              />
              <button type={`submit`} aria-label={`Consultar código fictício`}>
                <ArrowRight size={20} />
              </button>
            </div>
          </form>
        </div>
        <div className={`el-tracking-result`} aria-live={`polite`}>
          {trackingVisible ? (
            <div className={`el-empty`}>
              <Package size={36} />
              <h3>Código não encontrado</h3>
              <p>
                Esta interface só reconhece ELO-DEMO-01 e ELO-DEMO-02. Nenhuma
                consulta externa foi realizada.
              </p>
            </div>
          ) : (
            d && (
              <React.Fragment>
                <div className={`el-route-header`}>
                  <span>REMESSA DEMONSTRATIVA</span>
                  <span>{trackingCode}</span>
                </div>
                <div className={`el-route`}>
                  <div>
                    <MapPin size={20} />
                    <strong>{d.origin}</strong>
                    <small>ORIGEM</small>
                  </div>
                  <span className={`el-route-line`}>
                    <Truck size={24} />
                  </span>
                  <div>
                    <MapPin size={20} />
                    <strong>{d.destination}</strong>
                    <small>DESTINO</small>
                  </div>
                </div>
                <ol className={`el-steps`}>
                  {d.steps.map((e, t) => (
                    <li key={e} className={t <= d.status ? `el-complete` : ``}>
                      <span>{t < d.status ? <Check size={13} /> : t + 1}</span>
                      <p>
                        {e}
                        <small>
                          {t === d.status
                            ? `ETAPA ATUAL`
                            : t < d.status
                              ? `ETAPA DEMONSTRADA`
                              : `PRÓXIMA ETAPA`}
                        </small>
                      </p>
                    </li>
                  ))}
                </ol>
                <p className={`el-result-note`}>{d.desc}</p>
              </React.Fragment>
            )
          )}
        </div>
      </section>
      <section className={`el-solutions`} id={`el-solutions`}>
        <div>
          <p className={`el-kicker`}>02 / UMA OPERAÇÃO, MUITAS CONEXÕES</p>
          <h2>
            O jeito de mover
            <br />
            cada negócio.
          </h2>
        </div>
        <div
          className={`el-solution-tabs`}
          role={`group`}
          aria-label={`Tipo de operação logística`}
        >
          {[`Distribuição`, `E-commerce`, `Carga dedicada`].map((e, t) => (
            <button
              key={e}
              aria-pressed={routeStage === e}
              onClick={() => setRouteStage(e)}
            >
              <span>0{t + 1}</span>
              {e}
              <ArrowUpRight size={20} />
            </button>
          ))}
        </div>
        <div className={`el-solution-copy`} aria-live={`polite`}>
          <Package size={32} />
          <h3>{routeStage}</h3>
          <p>
            {routeStage === `Distribuição`
              ? `Uma jornada visual para organizar saídas, pontos de passagem e destinos. Da visão geral ao detalhe de cada etapa.`
              : routeStage === `E-commerce`
                ? `Do pedido à apresentação da entrega: um conceito de experiência para aproximar lojas e seus clientes.`
                : `Um fluxo de apresentação para operações com necessidades específicas, reunindo origem, destino e contexto.`}
          </p>
        </div>
        <p className={`el-disclaimer`}>
          Marca, códigos, rotas e eventos fictícios. Sem rastreamento real,
          contratação de frete ou transmissão de dados.
        </p>
      </section>
    </div>
  );
}

export default EloDemo;

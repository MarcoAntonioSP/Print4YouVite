import styles from "./prod.module.css";
function ProdQuadroanimes() {
  return (
    <>
      <div className={styles.produto}>
        <div className={styles.proddescripition}>
          <div className={styles.imagesmodels}>
            <img className={styles.itemimgmodels} src="#" alt="img01" />
            <img className={styles.itemimgmodels} src="#" alt="img01" />
            <img className={styles.itemimgmodels} src="#" alt="img01" />
            <img className={styles.itemimgmodels} src="#" alt="img01" />
          </div>
          <div className={styles.imagefull}>
            <img
              className={styles.imgprod}
              src="https://i.ibb.co/DzmNJgT/bulma.jpg"
              alt="bulma"
            />
          </div>
        </div>

        <div className={styles.prodpay}>
          <h1>hdaskd</h1>
        </div>
      </div>
      <div>
        <div className={styles.box2}>
          <div className={styles.proddescripition2}>
            <header>
              <h1>
                Apresentamos a Maior Novidade do Ano em Decoração e
                Personalizados:
              </h1>
              <h2>
                Quadros Metalizados Pôster High Gloss com Brilho Permanente
              </h2>
            </header>

            <section>
              <h3>Impressões em Metal</h3>
              <p>
                As Impressões em metal representam um novo meio de arte para
                preservar fotos, infundindo cores diretamente nas folhas de
                alumínio especialmente revestidas. Suas imagens terão uma
                luminescência mágica com efeito duradouro. Você nunca verá uma
                impressão mais brilhante e impressionante que essa, as cores são
                vibrantes e a luminescência é de tirar o fôlego!
              </p>
            </section>

            <section>
              <h3>Personalização de Imagens</h3>
              <p>
                Personalize qualquer imagem ou foto que desejar. Trabalhamos com
                foco na personalização da sua foto ou imagem da internet,
                respeitando o tamanho mínimo de 1024 x 750 px.
              </p>
              <p>
                <strong>Caso desejar personalizar:</strong> basta subir a imagem
                no anúncio, ou fazer seu pedido e nos enviar por E-mail /
                Whatsapp a sua imagem escolhida, é bem simples.
              </p>
            </section>

            <section>
              <h3>Detalhes do Produto</h3>
              <ul>
                <li>
                  <strong>Material:</strong> Placa de Alumínio
                </li>
                <li>
                  <strong>Impressão:</strong> Feita com Tinta de Alta Qualidade
                  para Efeito Reflexivo e duradouro, as placas Metal Prints são
                  à prova d'água, resistentes aos raios UV e Umidade.
                </li>
                <li>
                  <strong>Acabamento:</strong> Utilizamos Verniz para proteger e
                  deixar o Brilho perfeito e com máximo de efeito realista no
                  quadro.
                </li>
                <li>
                  <strong>Instalação:</strong> Enviamos os quadros com Fitas
                  Dupla Face ou Apoios de Madeira Tratada na parte de trás para
                  fixação.
                </li>
              </ul>
            </section>

            <section>
              <h3>Prazo de Envio / Produção</h3>
              <p>
                Enviamos o produto em média de 3-4 dias úteis após a confirmação
                do pagamento, devido à personalização dos pedidos e ao
                tratamento das placas para manter o brilho e acabamento do
                produto.
              </p>
            </section>

            <section>
              <h3>Tamanhos Disponíveis</h3>
              <p>Trabalhamos com 2 tamanhos específicos de placas:</p>
              <ul>
                <li>
                  <strong>PADRÃO A3:</strong> 30 x 40 cm
                </li>
                <li>
                  <strong>PADRÃO A2:</strong> 42 x 60 cm
                </li>
              </ul>
              <p>
                Todas as placas têm 1,0 mm de espessura e bordas arredondadas.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProdQuadroanimes;

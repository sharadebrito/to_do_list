import { useState } from "react";
import styles from "./BoxProduct.module.css";
import { RiShoppingCart2Line } from "react-icons/ri";

function BoxProduct() {
  const [list, setList] = useState([]);
  const [produtos, setProdutos] = useState("");
  const [mensagem, setMensagem] = useState("");

  function addProdutos(event) {
    setProdutos(event.target.value);
  }

  function add() {
    if (list.includes(produtos)) {
      setMensagem("Já existe esse produto");
    } else {
      setList((prevList) => [...prevList, produtos]);
      setProdutos("");
      setMensagem("Adicionado com sucesso");
    }
  }

  return (
    <div className={styles.container}>
      <h1>Minha lista de compras</h1>
      <div className={styles.boxInput}>
        <input
          onChange={addProdutos}
          type="text"
          placeholder="Digite o nome do item"
          value={produtos}
        />
        <button onClick={add}>Adicionar</button>
      </div>

      <div>
        {list.map((produto) => (
          <p>
            <RiShoppingCart2Line />
            {produto}
          </p>
        ))}
      </div>

      {mensagem}
    </div>
  );
}
export default BoxProduct;

//Vou receber um valor de texto; add esse valor a uma variável; add essa variável no array de produtos;//
//Criar a variável produto no useState e alterar o valor dela quando a pessoa add o produto;//
//Verificar se já existe esse produto no array, se não, add no array;//

import React, { useState } from "react";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import Header from "./Header";
import PieChart from "./PieChart";
import Footer from "./Footer";
import { v4 } from "uuid";
import { SAMPLE_DATA } from "../constants/SampleData";
import styles from "../Main.module.css";

export default function Home() {
  const initialTransactions: Transaction[] = SAMPLE_DATA;
  const [transactionList, setTransactionList] = useState(initialTransactions);

  const addTransaction: AddTransaction = (
    income: boolean,
    amount: number,
    category: string
  ) => {
    const newTransactions: Transaction[] = [
      ...transactionList,
      { id: v4(), income: income, amount: amount, category: category },
    ];
    setTransactionList(newTransactions);
  };

  const deleteTransaction: DeleteTransaction = (id: string) => {
    const newTransactions: Transaction[] = transactionList.filter(
      (transactionItem) => id !== transactionItem.id
    );
    setTransactionList(newTransactions);
  };

  return (
    <body>
      <div>
        <Header />
      </div>
      <div className={styles.container}>
        <PieChart transactionList={transactionList} />
        <AddTransaction addTransaction={addTransaction} />
        <TransactionList
          transactionList={transactionList}
          deleteTransaction={deleteTransaction}
        />
        <Footer />
      </div>
    </body>
  );
}

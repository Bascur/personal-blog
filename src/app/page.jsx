import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/menu";


export default function Home() {
  return <div className={styles.container}>
    <Featured />
    <CategoryList />
    <div className={styles.content}>
      <CardList />
      <Menu />
    </div>
  </div>;

}

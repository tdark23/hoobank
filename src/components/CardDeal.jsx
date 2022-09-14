import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        A credit card offers a flexible way of spreading payments and paying
        debt. Your bank, building society or other credit provider will lend you
        the money to buy items online and in store. That means the amount you
        spend using your card is a debt. You can spread the cost of expensive
        items, earn rewards on your spending and even use credit cards to reduce
        your debts.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]"  />
    </div>
  </section>
);

export default CardDeal;

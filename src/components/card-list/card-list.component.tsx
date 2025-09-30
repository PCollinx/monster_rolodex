import Card from "../card/card.component";
import { Monster } from "../../App";

import "./card-list.style.css";

const CardList = ({ monsters }: { monsters: Monster[] }) => {
  return (
    <div className="card-list-container">
      {/* destructuring monster.name & monster.email */}
      {monsters.map(({ name, email, id }, idx) => {
        return (
          <Card key={`${name}-${idx}`} name={name} email={email} id={id}></Card>
        );
      })}
    </div>
  );
};

export default CardList;

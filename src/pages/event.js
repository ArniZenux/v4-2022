import { useParams } from "react-router-dom";
import { Event } from "../components/event/Event";

export function NewEvent(){
  let { id } = useParams();

  return (
    <Event id={id} />
  );
}

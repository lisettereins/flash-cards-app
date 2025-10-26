import NewCardForm from "@/components/new-card-form";



export default async function CreateCardPage() {
  
  return (
      <NewCardForm card={{id:"", question: "", answer: ""}}/>
  );
}
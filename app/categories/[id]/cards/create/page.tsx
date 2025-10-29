import NewCardForm from "@/components/new-card-form";



export default async function CreateCardPage({ params }: { params: { id: string } }) {
  const resolvedParams = await params;
  
  return (
      <NewCardForm card={{id:"", question: "", answer: ""}}
      categoryId = {resolvedParams.id}/>
  );
}
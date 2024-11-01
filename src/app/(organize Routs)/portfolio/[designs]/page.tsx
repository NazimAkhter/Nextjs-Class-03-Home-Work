
function Design({params}:{params:{designs:string}}) {

  
  return (
    <>
      <h1>My Creative Design</h1>
      <p className="text-5xl">{params.designs}</p>
    </>
  );
}
export default Design;

export default function Section({children} : {children : any})
{
  return (
    <section className="h-screen w-screen flex items-center justify-evenly">
      {children}
    </section>
  );
}

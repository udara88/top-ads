import Link from "next/link";



export default function Home() {

  return (
    <section className="relative " >
      
     <h1>Home page</h1>
      <Link href={"/profile"}>Profile</Link>

    </section>
  );
}

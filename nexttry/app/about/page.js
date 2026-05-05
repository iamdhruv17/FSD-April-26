import Link from "next/link";

export default function About(){
  return(
    <div>
            <h3>This is about page</h3>
            <p>This is some information about the company.</p>
            <Link href="/">Go back to home page</Link>

    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/home">Home</Link>
      <Link href="/protected">Protected</Link>
    </div>
  );
}

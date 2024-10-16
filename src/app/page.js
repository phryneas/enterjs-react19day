export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div>
      <Child
        dataPromise={
          new Promise((resolve) => setTimeout(resolve, 2500, { data: "Hello" }))
        }
      />
      <Child
        dataPromise={
          new Promise((resolve) => setTimeout(resolve, 1500, { data: "World" }))
        }
      />
    </div>
  );
}

async function Child({ dataPromise }) {
  const { data } = await dataPromise;
  return <div>{data}</div>;
}

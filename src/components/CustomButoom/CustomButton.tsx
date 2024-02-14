export default function CustomButton({
  increment,
  count,
}: {
  increment: any;
  count: any;
}) {
  return (
    <>
      <div className="card">
        <button onClick={() => increment()}>count is {count}</button>
      </div>
    </>
  );
}

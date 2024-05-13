export default function Home() {
  return (
    <div className={'m-2 p-4 bg-red-50 rounded flex flex-col space-y-2'}>
      <span className="text-3xl" data-testid={'page-title'}>
        Home
      </span>
      <span className={'text-md'}>Hello from Next!</span>
      <span className={'text-sm'}>
        Using some <span className={'text-red-800'}>TailwindCSS</span> classes
      </span>
    </div>
  );
}

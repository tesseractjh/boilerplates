interface AppProps {
  title: string;
}

function App(props: AppProps) {
  const { title } = props;
  return (
    <>
      <div>제목: {title}</div>
      <div>내용</div>
    </>
  );
}

export default App;

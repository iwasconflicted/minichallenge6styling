import Button from "./components/Button/Button";
import Like from "./components/Like/Like";


function App() {
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <>
      <Like></Like>
      <Button children="Primary" onClickFunction={handleButtonClick}color="primary"/>
    </>
  );
}

export default App;
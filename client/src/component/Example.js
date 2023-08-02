// rfce
// adding events component
export default function Example() {
  const shoot =(a) => {
    alert(a);
  };
    return (
    <button onClick={() => shoot("Goaa;!")}>Take the shot !</button>
    );

}

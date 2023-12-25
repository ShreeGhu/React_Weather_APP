// getYear() {
//     return new Date().getFullYear();
// }
const today = new Date();

function Footer() {
  return (
    <div>
      <div className="flex items-center justify-center text-white text-sm py-3 mt-6 font-light capitalize">
        <p>
          Copyright &copy;{" "}
          {today.getFullYear()} shreekant gumanju.
          All Rights Reserved
        </p>
      </div>
    </div>
  );
}
export default Footer
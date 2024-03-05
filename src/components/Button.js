const Button = ({ name }) => {
  return (
    <button className="w-20 border rounded-lg h-8 px-3 mx-3 mt-7 bg-gray-200 text-black text-wrap hover:bg-black hover:text-white font-medium text-sm shadow-sm">
      {name}
    </button>
  );
};

export default Button;

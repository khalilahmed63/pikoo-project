const Btn = (props: any) => {
    return (
     <>
     <button {...props} className={` text-dark bg-[#c5f177] shadow-lg hover:shadow focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-16 py-2  text-center`}>{props.innertext}</button>
     </>
    );
  };
  export default Btn;
  
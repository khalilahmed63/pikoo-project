
const PrimaryBtn = (props: any) => {
    return (
     <>
     <button type="submit" {...props} className="flex items-center text-dark bg-[#c5f177] shadow-lg hover:shadow font-medium rounded-md text-xs px-4 py-2  text-center">{props.children}</button>
     </>
    );
  };
  export default PrimaryBtn;
  
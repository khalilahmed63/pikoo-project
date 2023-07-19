const Checkbox = (props: any) => {
    return (
     <>
     <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input {...props} className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 " />
                </div>
                <label htmlFor="remember" className="ml-2 text-xs font-medium text-gray-900 ">{props.text}</label>
            </div>
     </>
    );
  };
  export default Checkbox;
  
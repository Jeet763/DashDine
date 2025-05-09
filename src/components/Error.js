import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Ooooops!! Something is Wrong !! </h1>
            {/* <h3>{err.status}:{err.statusText}</h3> */}
            <h3>
        {err.status && err.statusText
          ? `${err.status}: ${err.statusText}`
          : err.message || "Unknown Error"}
      </h3>

        </div>
    );
};

export default Error ; 
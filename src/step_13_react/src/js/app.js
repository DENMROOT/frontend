import React from "react";
import { render } from "react-dom";
import Pet from "./pet";
import SearchParams from "./searchParams";

const App = () => {

    return (
        <div>
            <h1 id="something-important">Adopt me!</h1>
            <Pet name="Luna" animal="Dog" breed="Havanese" />
            <SearchParams/>
        </div>

    );
};

render(<App/>, document.getElementById("root"));
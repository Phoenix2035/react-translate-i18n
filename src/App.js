import React from "react";
import { useTranslation } from "react-i18next";
import GoogleTranslate from "./GoogleTranslate";

function App() {
    // const { t, i18n } = useTranslation();

    // const handleClick = (lang) => {
    //     i18n.changeLanguage(lang);
    // };

    return (
        //     <>
        //         <div
        //             style={{
        //                 width: "100%",
        //                 height: "10rem",
        //                 backgroundColor: "#ddd",
        //                 textAlign: "center",
        //             }}
        //         >
        //             <div style={{ paddingTop: "2rem" }}>
        //                 <button
        //                     style={{ marginRight: "1rem", cursor: "pointer" }}
        //                     onClick={() => handleClick("en")}
        //                 >
        //                     English
        //                 </button>
        //                 <button
        //                     style={{ marginLeft: "1rem", cursor: "pointer" }}
        //                     onClick={() => handleClick("fa")}
        //                 >
        //                     Persian
        //                 </button>
        //             </div>
        //         </div>

        //         <div
        //             style={{
        //                 width: "100%",
        //                 height: "10rem",
        //                 backgroundColor: "#222",
        //                 color: "#fff",
        //                 fontSize: "2rem",
        //                 textAlign: "center",
        //                 paddingTop: "2rem",
        //             }}
        //         >
        //             <p>{t("welcome.1")}</p>
        //             <p>{t("toReact.1")}</p>
        //         </div>
        //     </>
        <GoogleTranslate />
    );
}
export default App;

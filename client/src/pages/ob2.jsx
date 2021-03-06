import React from "react";

import obCoin from "assets/obCoin.png";
import slider2 from "assets/Slider2.svg";
import { Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 42px",
        paddingTop: "60px",
    },
    heading: {
        fontSize: "32px",
        lineHeight: "38px",
        letterSpacing: "0.02em",
        margin: "0 0 40px 0",
    },
    content: {
        fontSize: "14px",
        lineHeight: "140%",

        letterSpacing: "0.01em",
    },
});

const OB2 = () => {
    const c = useStyles();

    const history = useHistory();

    return (
        <div className={c.root}>
            <img src={obCoin} alt="" />
            <div>
                <div className={c.heading}>Certified token</div>
                <div className={c.content}>
                    UN-backed Green Chain plans to increase renewable energy use
                    in manufacturing.
                </div>
            </div>
            <img
                style={{
                    alignSelf: "baseline",
                    marginTop: "50px",
                    position: "absolute",
                    bottom: "180px",
                }}
                src={slider2}
                alt=""
            />
            <div
                style={{
                    alignSelf: "flex-end",
                    marginTop: "50px",
                    position: "absolute",
                    bottom: "100px",
                }}
            >
                <Button
                    onClick={() => {
                        // do something to remove onboarding
                        history.push("/");
                        localStorage.setItem("firstTime", "abc");
                    }}
                    style={{ color: "#fbfbfb" }}
                    variant="text"
                >
                    Skip
                </Button>
                <Button
                    onClick={() => {
                        history.push("/ob3");
                    }}
                    variant="contained"
                    color="primary"
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default OB2;

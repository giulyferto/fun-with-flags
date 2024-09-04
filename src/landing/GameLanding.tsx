import { useState } from "react";
import { Button, Image, Typography } from "antd";
import GuessFlag from "../game-on/GuessFlag";
import RandomFlag from "./RandomFlag";
import "./GameLanding.scss";

const GameLanding = () => {
  const [gameMode, setGameMode] = useState(false);

  const { Title } = Typography;
  return (
    <div>
      {!gameMode ? (
        <>
          <div
            style={{
              backgroundColor: "#ECCA9C",
              borderRadius: "10px",
              width: "800px",
              justifyContent: "center",
              marginBottom: "1em",
              display: "flex",
              boxShadow: "0 15px 30px rgba(128,128,128,0.08)",
            }}
          >
            <div className="flag">
              <RandomFlag />
            </div>
            <div style={{ padding: "0.5em" }}>
              <Title>Welcome to...</Title>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "0.5em",
                }}
              >
                <Title
                  style={{
                    color: "#d11515",
                    marginRight: "10px",
                    alignContent: "center",
                  }}
                >
                  FUN
                </Title>
                <Title>WITH FLAGS</Title>
              </div>
            </div>
            <div className="flag">
              <RandomFlag />
            </div>
          </div>
          <Image
            style={{ borderRadius: "10px" }}
            width={800}
            src="/funwithfalgs.jpg"
            preview={false}
          />
          <div>
            <Button
              style={{ width: "100%", marginTop: "1em" }}
              onClick={() => setGameMode(true)}
            >
              Start
            </Button>
          </div>
        </>
      ) : (
        <GuessFlag />
      )}
    </div>
  );
};

export default GameLanding;

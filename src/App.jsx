import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Modal } from "react-bootstrap";

function App() {
  const [gradientMode, setGradientMode] = useState("SOLID");
  const [showModal, setShowModal] = useState(false);
  const [gradientColors, setGradientColors] = useState({
    gradientColor1: "#2b5876",
    gradientColor2: "#4e4376 ",
    gradientColor3: "",
  });

  const [gradientOrientation, setGradientOrientation] = useState("to left");

  const [backgroundColor, setBackgroundColor] = useState("#000");

  const [gradient, setGradient] = useState(
    `linear-gradient(${gradientOrientation}, ${gradientColors.gradientColor1}, ${gradientColors.gradientColor2})`
  );
  useEffect(() => {
    if (gradientMode === "GRADIENT") {
      setShowModal(true);
    }
  }, [gradientMode]);

  useEffect(() => {
    const { gradientColor1, gradientColor2, gradientColor3 } = gradientColors;
    const newGradient = gradientColor3
      ? `linear-gradient(${gradientOrientation}, ${gradientColor1}, ${gradientColor2}, ${gradientColor3})`
      : `linear-gradient(${gradientOrientation}, ${gradientColor1}, ${gradientColor2})`;
    setGradient(newGradient);
  }, [gradientColors, gradientOrientation]);

  return (
    <div className="gradient-settings-parent">
      <div className="controlsContainer">
        <div
          className="preview-gradient-div"
          style={{
            background: gradientMode === "SOLID" ? backgroundColor : gradient,
            marginBottom: "20px",
          }}
        >
          Preview Gradient
        </div>
      </div>

      <div className="controlsContainer">
        <div className="controlItem">
          <label>Set Gradient Mode</label>
          <select
            className="form-control"
            value={gradientMode}
            onChange={(e) => setGradientMode(e.target.value)}
          >
            <option value="">Set Gradient Mode</option>
            <option value="SOLID">SOLID</option>
            <option value="GRADIENT">GRADIENT</option>
          </select>
        </div>
        <div
          className="controlItem"
          style={{ display: gradientMode === "SOLID" ? "block" : "none" }}
        >
          <div className="color-div">
            <label>Set Background Color</label>
            <input
              type="color"
              required
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>Pick Gradient Color</Modal.Header>
        <Modal.Body className="controlModalContainer">
          <div className="controlItem">
            <div className="color-div">
              <label>Gradient Color 1</label>
              <input
                type="color"
                required
                value={gradientColors.gradientColor1}
                onChange={(e) =>
                  setGradientColors({
                    ...gradientColors,
                    gradientColor1: e.target.value,
                  })
                }
              />
            </div>
            <div className="color-div">
              <label>Gradient Color 2</label>
              <input
                required
                type="color"
                value={gradientColors.gradientColor2}
                onChange={(e) =>
                  setGradientColors({
                    ...gradientColors,
                    gradientColor2: e.target.value,
                  })
                }
              />
            </div>
            <div className="color-div">
              <label>Gradient Color 3</label>
              <input
                type="color"
                value={gradientColors.gradientColor3}
                onChange={(e) =>
                  setGradientColors({
                    ...gradientColors,
                    gradientColor3: e.target.value,
                  })
                }
              />
            </div>
            <div className="color-div" style={{ marginTop: "12px" }}>
              <label>Set Orientation</label>

              <button
                className="orientationButtons"
                onClick={() => setGradientOrientation("to top")}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkojBFWdf-tWLhz2DA72a8fWsZFVb078g00Q&s"
                  width="30px"
                  height="24px"
                />
              </button>
              <button
                className="orientationButtons"
                onClick={() => setGradientOrientation("to bottom")}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDT99gVG-Y3sArRI1HLXNlVrUvDNQNBkTe_w&s"
                  width="30px"
                  height="24px"
                />
              </button>
              <button
                className="orientationButtons"
                onClick={() => setGradientOrientation("to left")}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7RtbNgX3dPfqcqXLE4NjLuhGrPN_WkPkzA&s"
                  width="30px"
                  height="24px"
                />
              </button>
              <button
                className="orientationButtons"
                onClick={() => setGradientOrientation("to right")}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP-7KUpVHaMCkNvGOOMiauSnsVDdJiuZ8cbQ&s"
                  width="30px"
                  height="24px"
                />
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Gradient Mode</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="dark" onClick={() => setShowModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export default App;

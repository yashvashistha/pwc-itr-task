import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useParams } from "react-router-dom";

function EditPage() {
  const { id } = useParams();
  const fileinputref = useRef(null);
  const [file, setFile] = useState(null);
  const [tempfile, setTempFile] = useState(null);
  const [block, setBlock] = useState(false);
  const [pblock, setPBlock] = useState(false);
  const pref = useRef(null);
  const uploadicon = "Icons/uploadicon.png";

  const handleDragEnter = (e) => {
    e.preventDefault();
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    uploadhandler(e.dataTransfer.files[0]);
  };
  const openinputhandler = () => {
    fileinputref.current.click();
  };
  const uploadhandler = (file) => {
    setTempFile(file);
    setPBlock("none");
    pref.current.innerText = file.name;
  };
  const hiddenuploadhandler = async (e) => {
    uploadhandler(e.target.files[0]);
  };
  const uploadbtnhandle = () => {
    if (tempfile === null) {
      alert("Upload a File");
      return;
    }
    if (tempfile.type !== "application/pdf") {
      alert("Only PDF Files are allowed");
      return;
    }
    pref.current.innerText = "";
    setBlock(!block);
    setFile(tempfile);
    setPBlock(!pblock);
  };
  return (
    <div className="Chatpage">
      <div className="Section1">
        <button
          onClick={() => {
            setBlock(!block);
          }}
        >
          Add New File
        </button>
        {/* Hidden file input from here */}
        <div
          className="popup-container"
          style={{
            display: block ? "flex" : "none",
            flexDirection: "column",
            zIndex: "2",
          }}
        >
          <div
            style={{
              height: "max(40px, 20%)",
              width: "100%",
              backgroundColor: "rgba(217, 57, 84, 1)",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "white",
                fontSize: "16px",
                fontWeight: "700",
                fontFamily: "Helvetica",
                paddingLeft: "5px",
              }}
            >
              Chat PDF
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              className="DragDrop"
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              style={{ width: "60%" }}
            >
              <p ref={pref}></p>
              <p style={{ width: "100%", display: pblock }}>
                <img
                  src={uploadicon}
                  style={{ position: "relative", top: "4px" }}
                />{" "}
                Drag & Drop files in this or{" "}
                <span
                  onClick={openinputhandler}
                  style={{
                    color: "rgba(217, 57, 84, 1)",
                    cursor: "pointer",
                  }}
                >
                  Browse File
                </span>
              </p>
            </div>
            <div className="Upload-btn" onClick={uploadbtnhandle}>
              <p style={{ margin: "0px" }}>Upload</p>
            </div>
          </div>
        </div>
        <input
          type="file"
          ref={fileinputref}
          style={{ display: "none" }}
          onChange={hiddenuploadhandler}
        />
        {/* Hidden file input to here  */}
      </div>
      <Section2 pdf={file} id={id} />
      <button
        className="Upload-btn"
        style={{ borderStyle: "none", marginTop: "1%" }}
      >
        Save JSON
      </button>
    </div>
  );
}

function Section2({ pdf, id }) {
  const [pdfFile, setPdfFile] = useState(null);
  const [jsonFile, setJsonFile] = useState(null);
  const [filename, setFileName] = useState(null);
  const [numPages, setNumPages] = useState();
  const containerRef = useRef(null);
  const filedownloadapi =
    "https://pyrtqap426.execute-api.ap-south-1.amazonaws.com/navigate-pdf-parser/download_data?";
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log(numPages);
    setNumPages(numPages);
  };

  const downloadhandler = async (data) => {
    const downloadlink =
      filedownloadapi + "uniqueid=" + data.id + "&type=" + data.type;
    try {
      const response = await axios.get(downloadlink, {
        headers: {
          "x-api-key": "doVk3aPq1i8Y5UPpnw3OO4a610LK2yFrahOpYEo0",
          "Content-Type": "application/" + data.type,
        },
      });

      let resultfile;
      if (data.type === "pdf") {
        const decodestring = atob(response.data.body);
        const utf8decoder = new TextDecoder("utf-8");
        resultfile = utf8decoder.decode(
          new Uint8Array(
            decodestring.split("").map((char) => char.charCodeAt(0))
          )
        );
        const blob = new Blob([resultfile], {
          type: "application/" + data.type,
        });
        const pdfurl = URL.createObjectURL(blob);
        setPdfFile(pdfurl);
      } else if (data.type === "json") {
        resultfile = JSON.stringify(response, null, 2);
        setJsonFile(resultfile);
      }
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const jsonchangehandle = (e) => {
    // console.log(e.target.innerText);
    console.log("Change");
  };

  useEffect(() => {
    if (id) {
      downloadhandler({ id: id, type: "pdf" });
      downloadhandler({ id: id, type: "json" });
    }
  }, [id]);
  return (
    <div
      style={{
        width: "min(1290px, 90%)",
        height: "min(737px, 75%)",
        border: "1px solid lightgrey",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          flex: 1,
          border: "1px solid lightgrey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          // overflow: "scroll",
        }}
      >
        <p
          style={{
            fontFamily: "arial",
            fontWeight: "500",
            height: "20px",
          }}
        >
          {filename ? (
            <p>File Name: {filename.slice(0, -4)}</p>
          ) : (
            <p>No File Uploaded</p>
          )}
        </p>
        <div
          ref={containerRef}
          style={{
            overflowY: "scroll",
            overflowX: "auto",
            height: "95%",
            width: "100%",
          }}
        >
          {pdfFile && (
            <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from({ length: numPages }, (_, index) => (
                <Page key={index + 1} pageNumber={index + 1} />
              ))}
            </Document>
          )}
        </div>
      </div>
      <div
        style={{
          flex: 1,
          border: "1px solid lightgrey",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ alignSelf: "flex-start" }}>JSON</p>
        <div
          contentEditable={true}
          onInput={jsonchangehandle}
          onBlur={jsonchangehandle}
          style={{
            height: "100%",
            width: "100%",
            // overflowX: "scroll",
            overflowY: "scroll",
          }}
        >
          {jsonFile && (
            <pre style={{ maxWidth: "100%", overflowX: "scroll" }}>
              {jsonFile}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
export default EditPage;

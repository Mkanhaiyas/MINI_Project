import React, { useState, useEffect } from "react";
import download from "downloadjs";
import axios from "axios";
import Sidebar from "./Sidebar/Sidebar";
const API_URL = process.env.REACT_APP_LINK;

const FilesList = () => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/getAllFiles`);
        setErrorMsg("");
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`${API_URL}/download/${id}`, {
        responseType: "blob",
      });
      const split = path.split("/");
      const filename = split[split.length - 1];
      console.log(filename);
      setErrorMsg("");
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Error while downloading file. Try again later");
      }
    }
  };

  // const downloadFile = async (id) => {
  //   try {
  //     const res = await axios.get(
  //       `http://localhost:5000/download/${id}`,
  //       { responseType: "blob" }
  //     );
  //     const blob = new Blob([res.data], { type: res.data.type });
  //     const link = document.createElement("a");
  //     link.href = window.URL.createObjectURL(blob);
  //     link.download = "file.pdf";
  //     // link.download = res.headers["content-disposition"].split("filename=")[1];
  //     link.click();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="Dash">
      <div className="DashGlass">
        <Sidebar
          dashboard="/TDashboard"
          student="/TStudent"
          changeSHead="Students"
          assignment="/TAssignment"
          chat="/TChat"
          analytics="/TAnalytics"
        />
        <div className="Stud-Mainbody">
          <div className="Mainbody-head">
            <h1>Files List</h1>
            <div className="files-container">
              {errorMsg && <p className="errorMsg">{errorMsg}</p>}
              <table className="files-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Download File</th>
                  </tr>
                </thead>
                <tbody>
                  {filesList.length > 0 ? (
                    filesList.map(
                      ({
                        _id,
                        title,
                        description,
                        file_path,
                        file_mimetype,
                      }) => (
                        <tr key={_id}>
                          <td className="file-title">{title}</td>
                          <td className="file-description">{description}</td>
                          <td>
                            <a
                              href="#/"
                              onClick={() =>
                                downloadFile(_id, file_path, file_mimetype)
                              }
                            >
                              Download
                            </a>
                          </td>
                        </tr>
                      )
                    )
                  ) : (
                    <tr>
                      <td colSpan={3} style={{ fontWeight: "300" }}>
                        No files found. Please add some.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FilesList;

// import swal from "sweetalert";
const api = ({ method = "GET", uri, body, headers, token }) =>
  new Promise(async (resolve, reject) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      token && myHeaders.append("Authorization", `Bearer ${token}`);
      const response = await fetch(uri, {
        method,
        headers: headers || myHeaders,
        body,
      });
      if (!response.ok) {
        throw response;
      }
      let data = await response.json();
      // console.log(`[API Data at ${new Date().toLocaleString()}]:`, data);
      resolve(data);
    } catch (err) {
      if (err.status) {
        const error = await err.json();
        // swal({
        // title: "ERROR !",
        // text: error.message,
        // icon: "error",
        // button: "Close",
        // });
        // console.log('[API Error]:', error);
        reject(error);
      } else {
        // alert('Network Connection Problem!');
        // console.log('[API Error]:', err);
        reject(err);
      }
    }
  });

export default api;

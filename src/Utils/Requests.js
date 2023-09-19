import Routes from "./Routes";
import Api from "./Api";
const Request = {
  /* logout: async (id) => {
    let res = await Api({
      method: "GET",
      uri: Routes.baseUrl + Routes.logout+id,
    });
    return res;
  }, */
  login: async (data) => {
    let res = await Api({
      method: "POST",
      uri: Routes.baseUrl + Routes.login,
      body: data,
    });
    return res;
  },
  AuthUser: async (token) => {
    let res = await Api({
      method: "POST",
      uri: Routes.baseUrl + Routes.authUser,
      token: token,
    });
    return res;
  },
  Notifications: async (token) => {
    let res = await Api({
      uri: Routes.baseUrl + Routes.Notifications,
      token: token,
    });
    return res;
  },
  getAllUsers: async (token) => {
    let res = await Api({
      uri: Routes.baseUrl + Routes.allUsers,
      token: token,
    });
    return res;
  },
  CreateAgent: async (data, token) => {
    let res = await Api({
      method: "POST",
      uri: Routes.baseUrl + Routes.addAgent,
      body: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  },
  CreateUser: async (data, token) => {
    let res = await Api({
      method: "POST",
      uri: Routes.baseUrl + Routes.user,
      headers: {
        Authorization: `Bearer ${token}`,
      },

      body: data,
    });
    return res;
  },
  getAllAgents: async (token) => {
    let res = await Api({
      uri: Routes.baseUrl + Routes.allAgents,
      token: token,
    });
    return res;
  },
  DeleteUser: async (token, id) => {
    let res = await Api({
      method: "DELETE",
      uri: Routes.baseUrl + Routes.deleteUser + id,
      token: token,
    });
    return res;
  },
  DeleteAgent: async (token, id) => {
    let res = await Api({
      method: "DELETE",
      uri: Routes.baseUrl + Routes.deleteAgent + id,
      token: token,
    });
    return res;
  },
  ActivateUser: async (token, id) => {
    let res = await Api({
      method: "PUT",
      uri: Routes.baseUrl + Routes.activateUser + id,
      token: token,
    });
    return res;
  },
  DisableUser: async (token, id) => {
    let res = await Api({
      method: "PUT",
      uri: Routes.baseUrl + Routes.deActivateUser + id,
      token: token,
    });
    return res;
  },
  ActivateAgent: async (token, id) => {
    let res = await Api({
      method: "PUT",
      uri: Routes.baseUrl + Routes.activateAgent + id,
      token: token,
    });
    return res;
  },
  DisableAgent: async (token, id) => {
    let res = await Api({
      method: "PUT",
      uri: Routes.baseUrl + Routes.deActivateAgent + id,
      token: token,
    });
    return res;
  },
  GetOneUser: async (token, id) => {
    let res = await Api({
      uri: Routes.baseUrl + Routes.getUser + id,
      token: token,
    });
    return res;
  },
  EditOneUser: async (data, token, id) => {
    let res = await Api({
      method: "PUT",
      uri: Routes.baseUrl + Routes.updateUser + id,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });
    return res;
  },
  CreateTicket: async (data, token) => {
    let res = await Api({
      method: "POST",
      uri: Routes.baseUrl + Routes.ticket + Routes.createTicket,
      body: data,
      token: token,
    });
    return res;
  },
  UpdateTicket: async (id, data, token) => {
    let res = await Api({
      method: "PATCH",
      uri: Routes.baseUrl + Routes.ticket + Routes.updateTicket + id ,
      body: data,
      token: token,
    });
    return res;
  },
  AllTicket: async (token) => {
    let res = await Api({
      uri: Routes.baseUrl + Routes.ticket + Routes.allTicket,
      token: token,
    });
    return res;
  },
  MyTicket: async (token) => {
    let res = await Api({
      uri: Routes.baseUrl + Routes.ticket + Routes.myTickets,
      token: token,
    });
    return res;
  },
  DeltedTicket: async (id, token) => {
    let res = await Api({
      method: "DELETE",
      uri: Routes.baseUrl + Routes.ticket + Routes.deltedTicket + id,
      token: token,
    });
    return res;
  },
  TicketById: async (id, token) => {
    let res = await Api({
      uri: Routes.baseUrl + Routes.ticket + Routes.TicketByID + id,
      token: token,
    });
    return res;
  },
  ApproveTicket: async (id, token) => {
    let res = await Api({
      method: "PUT",
      uri: Routes.baseUrl + Routes.ticket + Routes.approveTicket + id,
      token: token,
    });
    return res;
  },
  RejectTicket: async (id, token) => {
    let res = await Api({
      method: "PUT",
      uri: Routes.baseUrl + Routes.ticket + Routes.rejectTicket + id,
      token: token,
    });
    return res;
  },
  TotalTicket: async (token) => {
    let res = await Api({
      uri: Routes.baseUrl + Routes.ticket + Routes.totalTicket,
      token: token,
    });
    return res;
  },
  UploadRequiredNames: async (data, token) => {
    let res = await Api({
      method: "POST",
      uri: Routes.baseUrl + Routes.uploadRequiredNames,
      token: token,
      body: data,
    });
    return res;
  },
  AllRequiredNames: async (token) => {
    let res = await Api({
      uri: Routes.baseUrl + Routes.AllRequiredNames,
      token: token,
    });
    return res;
  },
  AllMyRequiredNames: async (token) => {
    let res = await Api({
      uri: Routes.baseUrl + Routes.AllMyRequiredNames,
      token: token,
    });
    return res;
  },
  DeleteName: async (id, token) => {
    let res = await Api({
      method: "DELETE",
      uri: Routes.baseUrl + Routes.DeleteName + id,
      token: token,
    });
    return res;
  },
  GetOneName: async (id, token) => {
    let res = await Api({
      uri: Routes.baseUrl + Routes.GetOneName + id,
      token: token,
    });
    return res;
  },
  CreateGroup: async (data, token) => {
    let res = await Api({
      method: "POST",
      uri: Routes.baseUrl + Routes.createGroup,
      body: data,
      token: token,
    });
    return res;
  },
  UpdateGroup: async (id, data, token) => {
    let res = await Api({
      method: "PATCH",
      uri: Routes.baseUrl + Routes.updateGroup + id,
      body: data,
      token: token,
    });
    return res;
  },
  AllGroups: async (token) => {
    let res = await Api({
      uri: Routes.baseUrl + Routes.allGroups,
      token: token,
    });
    return res;
  },
  MyGroups: async (token) => {
    let res = await Api({
      uri: Routes.baseUrl + Routes.myGroups,
      token: token,
    });
    return res;
  },
  DeletedGroup: async (id, token) => {
    let res = await Api({
      method: "DELETE",
      uri: Routes.baseUrl + Routes.deltedGroup + id,
      token: token,
    });
    return res;
  },
  AdminDeletedGroup: async (id, token) => {
    let res = await Api({
      method: "DELETE",
      uri: Routes.baseUrl + Routes.adminDeltedGroup + id,
      token: token,
    });
    return res;
  },
  GroupById: async (id, token) => {
    let res = await Api({
      uri: Routes.baseUrl + Routes.GroupByID + id,
      token: token,
    });
    return res;
  },
  ApproveGroup: async (id, token) => {
    let res = await Api({
      method: "PUT",
      uri: Routes.baseUrl + Routes.approveGroup + id,
      token: token,
    });
    return res;
  },
  RejectGroup: async (id, token) => {
    let res = await Api({
      method: "PUT",
      uri: Routes.baseUrl + Routes.rejectGroup + id,
      token: token,
    });
    return res;
  },
  TotalGroups: async (token) => {
    let res = await Api({
      uri: Routes.baseUrl + Routes.totalGroups,
      token: token,
    });
    return res;
  },
  getStatistics: async (token) => {
    let res = await Api({
      uri: Routes.baseUrl + Routes.statistics,
      token: token,
    });
    return res;
  },
  UpdatePNR: async (token, data) => {
    let res = await Api({
      method: "POST",
      uri: Routes.baseUrl + Routes.updatePNR,
      body: data,
      token: token,
    });
    return res;
  },
};
export default Request;

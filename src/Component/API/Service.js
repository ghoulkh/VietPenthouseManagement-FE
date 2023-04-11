import method from './Method';
import config from './Config';

let dataService = {
    login: params => {
        let url = "api/auth/login";
        return method.post(params, url);
    },
    register: params => {
        let url = "user/register";
        return method.post(params, url);
    },
    loginWithGoogle: () => {
        let url = "oauth2/authorization/google";
        window.location.href = config.HOST + '/' + url;
    },
    loginWithFacebook: () => {
        let url = "oauth2/authorization/facebook";
        window.location.href = config.HOST + '/' + url;
    },
    logoutApi: params => {
        let url = "user/logout";
        return method.post(params, url);
    },
    currentUser: () => {
        let url = "api/user";
        return method.get(url);
    },
    listExam: () => {
        let url = "exam?page=1&size=100";
        return method.get(url);
    },
    listMiniTest: () => {
        let url = "minitest";
        return method.get(url);
    },
    listPart: params => {
        let url = "part?part="+ params + "&page=1&size=100";
        return method.get(url);
    },
    getExamDetail: params => {
        let url = "exam/" + params;
        return method.get(url);
    },
    getMiniExamDetail: params => {
        let url = "minitest/" + params;
        return method.get(url);
    },
    getPartDetail: params => {
        let url = "part/" + params;
        return method.get(url);
    },
    getTips: param => {
        let url = "api/posts/type/" + param;
        return method.get(url);
    },
    getTip: param => {
        let url = "api/post/" + param;
        return method.get(url);
    },
    getRecent: () => {
        let url = "api/recent-post"
        return method.get(url);
    },
    postContent: params => {
        let url = "api/post";
        return method.post(params, url);
    },
    deleteContent: params => {
        let url = "api/post/" + params;
        return method.delete(url);
    },
    putContent: params => {
        let url = "api/post";
        return method.put(params, url);
    },
    getInfoHome: () => {
        let url = "api/home/introduction";
        return method.get(url);
    },
    getSearch: params => {
        let url = "api/posts/search?keyword=" + params;
        return method.get(url);
    },
};

export default dataService;

const COMMON_PUBLI_ENDPOINT = import.meta.env.VITE_PUBLICACIONES_COMUNES
const USUARIOS_PUBLI_ENDPOINT = import.meta.env.VITE_PUBLICACIONES_USUARIOS
const VITE_GET_ONE_PUBLI = import.meta.env.VITE_GET_ONE_PUBLI

const usePublicaciones = () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch(COMMON_PUBLI_ENDPOINT, requestOptions)
        .then(response => response.json())

}

const usePublicacionesUser = (bearer) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + bearer);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    return fetch(USUARIOS_PUBLI_ENDPOINT, requestOptions)
        .then(response => response.json())

}

const useGetOnePubli = (token, idPubli) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(VITE_GET_ONE_PUBLI + idPubli, requestOptions)
        .then(response => response.json())
}

export { usePublicaciones, usePublicacionesUser, useGetOnePubli }